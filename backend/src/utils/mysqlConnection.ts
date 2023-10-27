import mysql from 'mysql2'


const dbConfig = {
	host: 'localhost',
	port: 3306,
	user: 'admin',
	password: 'admim',
	database: 'tableboss'
}


const mysqlConnection = mysql.createConnection(dbConfig)

mysqlConnection.connect(err => {
	if (err) {
		console.error(err)
		return
	}

	console.log('DB is connected')
})

export interface QueryDatabaseProps {
    sql: string;
    args?: any;
}

export interface SelectQueryDataBaseProps<T> extends QueryDatabaseProps {
    mapper?: (row: mysql.RowDataPacket) => T;
}

export const selectFromDatabase = <T>({
	sql,
	args,
	mapper
}: SelectQueryDataBaseProps<T>): Promise<T[] | mysql.RowDataPacket[]> => {
	return new Promise((resolve, reject) => {
		mysqlConnection.query(sql, args, (error, results: unknown) => {
			if (error) {
				return reject(error)
			}
			if (!Array.isArray(results)) {
				console.error(`Expected array of results from database: ${JSON.stringify(results)}`)
				const error = new Error('Expected array of results from database')
				return reject(error)
			}

			const rows = results as mysql.RowDataPacket[]
			const result = mapper ? rows.map(mapper) : rows
			return resolve(result)
		})
	})
}

export const someFromDatabase = ({ sql, args }: QueryDatabaseProps): Promise<boolean> => {
	return new Promise((resolve, reject) => {
		mysqlConnection.query(sql, args, (error, results: unknown) => {
			if (error) {
				return reject(error)
			}
			const exists = Array.isArray(results) && results.length > 0

			return resolve(exists)
		})
	})
}

export const insertIntoDatabase = ({ sql, args }: QueryDatabaseProps): Promise<number> => {
	return new Promise((resolve, reject) => {
		mysqlConnection.query(sql, args, (error, results) => {
			if (error) {
				return reject(error)
			}
			const result = results as mysql.ResultSetHeader
			return resolve(result.insertId)
		})
	})
}

export const updateDatabase = ({ sql, args }: { sql: string; args: (string | number | Date)[] }): Promise<void> => {
	return new Promise((resolve, reject) => {
		mysqlConnection.query(sql, args, (error) => {
			if (error) {
				return reject(error)
			}
			resolve()
		})
	})
}

export const deleteFromDatabase = ({ sql, args }: { sql: string; args: (string | number)[] }): Promise<void> => {
	return new Promise((resolve, reject) => {
		mysqlConnection.query(sql, args, (error) => {
			if (error) {
				return reject(error)
			}
			resolve()
		})
	})
}

const Connection = {
	selectFromDatabase,
	someFromDatabase,
	insertIntoDatabase,
	updateDatabase,
	deleteFromDatabase,
	connection: mysqlConnection
}

export default Connection

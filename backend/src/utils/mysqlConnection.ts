import mysql from 'mysql2';


const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'admin',
    password: 'admim',
    database: 'tableboss'
};


const mysqlConnection = mysql.createConnection(dbConfig);

mysqlConnection.connect(err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('DB is connected');
})


export interface queryDataBaseProps<T> {
    sql: string;
    args?: string[] | number[];
    mapper?: (row: mysql.RowDataPacket) => T;
}

export function selectFromDatabase<T>({sql, args, mapper}: queryDataBaseProps<T>) : Promise<T[] | mysql.RowDataPacket[]> {
    return new Promise((resolve, reject) => {
        mysqlConnection.query(sql, args, (error, results: unknown) => {
            if (error) {
                return reject(error);
            }
            if (!Array.isArray(results)) {
                console.error(`Expected array of results from database: ${JSON.stringify(results)}`);
                const error = new Error('Expected array of results from database');
                return reject(error);
            }

            const rows = results as mysql.RowDataPacket[];
            const result = mapper ? rows.map(mapper) : rows;
            return resolve(result);
        });
    });
}

export function someFromDatabase<T>({sql, args, mapper}: queryDataBaseProps<T>): Promise<boolean> {
    return new Promise((resolve, reject) => {
        mysqlConnection.query(sql, args, (error, results: unknown) => {
            if (error) {
                return reject(error);
            }
            const exists = Array.isArray(results) && results.length > 0;

            return resolve(exists);
        });
    });
}

export default mysqlConnection;

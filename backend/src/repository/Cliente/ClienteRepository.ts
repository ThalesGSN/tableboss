import { deleteFromDatabase, insertIntoDatabase, selectFromDatabase, updateDatabase } from '../../utils/mysqlConnection'
import { type Cliente } from '@tableboss/types'
import sqlToCliente from './utils/mappers/sqlToCliente'
import clienteToRaw from './utils/mappers/clienteToRaw'

const ClienteRepository = {
	async getClienteById(id: number) {
		const sql = 'SELECT * FROM Cliente where ID_cliente = ?'
		const [cliente] = await selectFromDatabase<Cliente>({
			sql,
			mapper: sqlToCliente,
			args: [id],
		})
		return cliente as Cliente
	},
	async getTopNClientes(N = 15) {
		const sql = 'SELECT * FROM Cliente LIMIT ?'
		const cliente = await selectFromDatabase<Cliente>({
			sql,
			mapper: sqlToCliente,
			args: [N],
		})
		return cliente as Cliente[]
	},
	async getClientesByIds(ids: number[]) {
		const sql = 'SELECT * FROM Cliente where ID_cliente IN (?)'
		const [cliente] = await selectFromDatabase<Cliente>({
			sql,
			mapper: sqlToCliente,
			args: [ids],
		})
		return cliente as Cliente
	},
	async searchClientesByText(text: string): Promise<Cliente[]> {
		const sql = 'SELECT * FROM Cliente where Nome LIKE ? OR Contato LIKE ? LIMIT 15'
		const args = [`%${text}%`, `%${text}%`]

		const clientes = await selectFromDatabase<Cliente>({
			sql,
			mapper: sqlToCliente,
			args,
		})

		return clientes as Cliente[]
	},
	async createCliente(cliente: Omit<Cliente, 'idCliente'>): Promise<Cliente> {
		const sql = 'INSERT INTO Cliente SET ?'
		const rawCliente = clienteToRaw(cliente as Cliente)
		const insertedId = await insertIntoDatabase({ sql, args: rawCliente })

		return {
			...cliente,
			idCliente: insertedId,
		} as Cliente
	},
	async deleteCliente(idCliente: number): Promise<void> {
		const sql = 'DELETE FROM Cliente WHERE ID_cliente = ?'
		await deleteFromDatabase({ sql, args: [idCliente] })
	},
	async updateCliente(idCliente: number, clienteData: Partial<Cliente>): Promise<void> {
		const fields = Object.keys(clienteData)
		const values = Object.values(clienteData)

		if (fields.length === 0) {
			throw new Error('No fields provided to update')
		}

		const sqlSet = fields.map(field => `${field} = ?`).join(', ')
		const sql = `UPDATE Cliente
                     SET ${sqlSet}
                     WHERE ID_cliente = ?`

		await updateDatabase({ sql, args: [...values, idCliente] })
	},

}

export default ClienteRepository

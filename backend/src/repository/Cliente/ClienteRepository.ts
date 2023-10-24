import {insertIntoDatabase, selectFromDatabase} from "../../utils/mysqlConnection";
import Cliente from "tableboss-shared/dist/Cliente";
import {mapToRawCliente, sqlToCliente} from "./mappers/sqlToCliente";

const ClienteRepository = {
    getClienteById: async (id: number) => {
        const sql = 'SELECT * FROM Cliente where ID_cliente = ?'
        const [cliente] = await selectFromDatabase<Cliente>({
            sql,
            mapper: sqlToCliente,
            args: [id]
        })
        return cliente as Cliente
    },
    getTopNClientes: async (N = 15) => {
        const sql = 'SELECT * FROM Cliente LIMIT ?'
        const cliente = await selectFromDatabase<Cliente>({
            sql,
            mapper: sqlToCliente,
            args: [N]
        })
        return cliente as Cliente[]
    },
    getClientesByIds: async (ids: number[]) => {
        const sql = 'SELECT * FROM Cliente where ID_cliente IN (?)'
        const [cliente] = await selectFromDatabase<Cliente>({
            sql,
            mapper: sqlToCliente,
            args: [ids]
        })
        return cliente as Cliente
    },
    searchClientesByText: async (text: string): Promise<Cliente[]> => {
        const sql = 'SELECT * FROM Cliente where Nome LIKE ? OR Contato LIKE ? LIMIT 15'
        const args = [`%${text}%`, `%${text}%`]

        const clientes = await selectFromDatabase<Cliente>({
            sql,
            mapper: sqlToCliente,
            args
        })

        return clientes as Cliente[]
    },
    createCliente: async (cliente: Omit<Cliente, 'idCliente'>): Promise<Cliente> => {
        const sql = 'INSERT INTO Cliente SET ?'
        const rawCliente = mapToRawCliente(cliente as Cliente)
        const insertedId = await insertIntoDatabase({sql, args: rawCliente})

        return {
            ...cliente,
            idCliente: insertedId
        } as Cliente
    }
}

export default ClienteRepository

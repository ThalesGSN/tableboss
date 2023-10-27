import {deleteFromDatabase, insertIntoDatabase, selectFromDatabase, updateDatabase} from "../../utils/mysqlConnection";
import Cliente from '@tableboss/types/Cliente';
import sqlToCliente from "./utils/mappers/sqlToCliente";
import clienteToRaw from "./utils/mappers/clienteToRaw";

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
        const rawCliente = clienteToRaw(cliente as Cliente)
        const insertedId = await insertIntoDatabase({sql, args: rawCliente})

        return {
            ...cliente,
            idCliente: insertedId
        } as Cliente
    },
    deleteCliente: async (idCliente: number): Promise<void> => {
        const sql = 'DELETE FROM Cliente WHERE ID_cliente = ?'
        await deleteFromDatabase({sql, args: [idCliente]});
    },
    updateCliente: async (idCliente: number, clienteData: Partial<Cliente>): Promise<void> => {
        const fields = Object.keys(clienteData);
        const values = Object.values(clienteData);

        if (fields.length === 0) {
            throw new Error('No fields provided to update');
        }

        const sqlSet = fields.map(field => `${field} = ?`).join(', ');
        const sql = `UPDATE Cliente
                     SET ${sqlSet}
                     WHERE ID_cliente = ?`;

        await updateDatabase({sql, args: [...values, idCliente]});
    },

}

export default ClienteRepository

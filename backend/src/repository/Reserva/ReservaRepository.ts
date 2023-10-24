import {insertIntoDatabase, selectFromDatabase} from "../../utils/mysqlConnection";
import Reserva from "tableboss-shared/dist/Reserva";
import sqlToReserva from "./utils/mappers/sqlToReserva";
import mapToRawReserva from "./utils/mappers/mapToRawReserva";
import Cliente from "tableboss-shared/dist/Cliente";
import Mesa from "tableboss-shared/dist/Mesa";
import sqlToCliente from "../Cliente/utils/mappers/sqlToCliente";
import {formatISO, startOfDay} from 'date-fns'
import {sqlToMesa} from "../Mesa/MesaRepository";

const ReservaRepository = {
    // Create a new reserva in the database
    createReserva: async (reserva: Omit<Reserva, 'idReserva'>): Promise<Reserva> => {
        const sql = 'INSERT INTO Reserva SET ?';
        const rawReserva = mapToRawReserva(reserva as Reserva);
        const insertedId = await insertIntoDatabase({sql, args: rawReserva});

        return {
            ...reserva,
            idReserva: insertedId
        } as Reserva;
    },

    // Get all reservas for a specific day
    getReservasByDate: async (date: string): Promise<Reserva[]> => {
        const formattedDate = formatISO(startOfDay(new Date(date)));

        const sql = `
            SELECT Reserva.*, Cliente.*, Mesa.*
            FROM Reserva
                     INNER JOIN Cliente ON Reserva.ID_cliente = Cliente.ID_cliente
                     INNER JOIN Mesa ON Reserva.ID_mesa = Mesa.ID_mesa
            WHERE Reserva.Data = ?
        `;
        const args = [formattedDate];

        const results = await selectFromDatabase<{ reserva: Reserva, cliente: Cliente, mesa: Mesa }>({
            sql,
            mapper: row => ({
                reserva: sqlToReserva(row),
                cliente: sqlToCliente(row),
                mesa: sqlToMesa(row)  // Assuming you have a mapper function for Mesa as well.
            }),
            args
        });

        return results.map((result: any) => ({
            ...result.reserva,
            cliente: result.cliente,
            mesa: result.mesa
        })) as Reserva[];
    }

}

export default ReservaRepository;

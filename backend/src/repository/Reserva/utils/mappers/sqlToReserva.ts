import { Reserva } from '@tableboss/types'
import ReservaMesaRow from '../types'
import mysql from 'mysql2'

const sqlToReserva = (row: ReservaMesaRow | mysql.RowDataPacket): Reserva => {
	return {
		idReserva: row.ID_reserva,
		idMesa: row.ID_mesa,
		idCliente: row.ID_cliente,
		data: row.Data,
		numeroDePessoas: row.Numero_de_Pessoas,
		observacoes: row.Observacoes,
		mesa: {
			idMesa: row.ID_mesa,
			numeroDeLugares: row.Numero_de_Lugares
		}
	}
}
export default sqlToReserva

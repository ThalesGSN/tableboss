// MesaRepository.ts
import { selectFromDatabase } from '../../utils/mysqlConnection'
import { Mesa } from '@tableboss/types'
import mysql from 'mysql2'

export interface MesaRow {
    ID_mesa: number;
    Numero_de_Lugares: number;
}

export const sqlToMesa = (row: MesaRow | mysql.RowDataPacket): Mesa => {
	return {
		idMesa: row.ID_mesa,
		numeroDeLugares: row.Numero_de_Lugares
	}
}

const MesaRepository = {
	getAllMesas: async (): Promise<Mesa[]> => {
		const sql = 'SELECT * FROM Mesa'
		const mesas = await selectFromDatabase<Mesa>({
			sql,
			mapper: sqlToMesa,
		})
		return mesas as Mesa[]
	}
}

export default MesaRepository

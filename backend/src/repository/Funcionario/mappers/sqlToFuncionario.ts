import Funcionario from '@tableboss/types/Funcionario'
import mysql from 'mysql2'

export default function sqlToFuncionario(dbObject: mysql.RowDataPacket): Funcionario {
	return {
		idFuncionario: dbObject.ID_funcionario,
		nome: dbObject.Nome,
		funcao: dbObject.Funcao,
		userName: dbObject.UserName,
		senha: dbObject.Senha,
		dataDeContratacao: new Date(dbObject.Data_de_Contratacao),
		salario: dbObject.Salario
		// cliente: mapDbToCliente(dbObject.cliente_data),
		// mesa: mapDbToMesa(dbObject.mesa_data)
	}
}

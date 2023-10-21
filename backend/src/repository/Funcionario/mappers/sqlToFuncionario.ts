import Funcionario from "tableboss-shared/dist/Funcionario";
import mysql from "mysql2";

export default function sqlToFuncionario(dbObject: mysql.RowDataPacket): Funcionario {
    return {
        idFuncionario: dbObject.ID_funcionario,
        nome: dbObject.Nome,
        funcao: dbObject.Funcao,
        userName: dbObject.UserName,
        senha: dbObject.Senha,
        dataDeContratacao: new Date(dbObject.Data_de_Contratacao),
        salario: dbObject.Salario
        // Se você tiver relações com Cliente e Mesa, mapeie aqui
        // cliente: mapDbToCliente(dbObject.cliente_data),  // exemplo
        // mesa: mapDbToMesa(dbObject.mesa_data)  // exemplo
    };
}

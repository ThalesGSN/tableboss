import Cliente from "tableboss-shared/dist/Cliente";
import mysql from "mysql2";


export interface RawCliente extends mysql.RowDataPacket {
    ID_cliente: number;
    Nome: string;
    Contato?: string;
    Endereco?: string;
    Data_de_Nascimento?: string; // Assuming it's returned as a string, if it's a Date object adjust accordingly.
}

export const sqlToCliente = (raw: RawCliente): Cliente => ({
    idCliente: raw.ID_cliente,
    nome: raw.Nome,
    contato: raw.Contato,
    endereco: raw.Endereco,
    dataDeNascimento: raw.Data_de_Nascimento ? new Date(raw.Data_de_Nascimento) : undefined
});

export const mapToRawCliente = (cliente: Cliente): RawCliente => ({
    ID_cliente: cliente.idCliente,
    Nome: cliente.nome,
    Contato: cliente.contato,
    Endereco: cliente.endereco,
    Data_de_Nascimento: cliente.dataDeNascimento?.toISOString()
} as RawCliente)

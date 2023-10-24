import mysql from "mysql2/index";


export interface RawCliente extends mysql.RowDataPacket {
    ID_cliente: number;
    Nome: string;
    Contato?: string;
    Endereco?: string;
    Data_de_Nascimento?: string; // Assuming it's returned as a string, if it's a Date object adjust accordingly.
}

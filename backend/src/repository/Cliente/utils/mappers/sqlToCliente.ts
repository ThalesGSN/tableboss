import {Cliente} from "@tableboss/types";
import {RawCliente} from "../types";
import mysql from "mysql2";

const sqlToCliente = (raw: RawCliente | mysql.RowDataPacket): Cliente => ({
    idCliente: raw.ID_cliente,
    nome: raw.Nome,
    contato: raw.Contato,
    endereco: raw.Endereco,
    dataDeNascimento: raw.Data_de_Nascimento ? new Date(raw.Data_de_Nascimento) : undefined
});

export default sqlToCliente

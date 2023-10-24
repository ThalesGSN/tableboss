import Cliente from "../../../../../../shared/src/types/Cliente";
import {RawCliente} from "../types";

export const clienteToRaw = (cliente: Cliente): RawCliente => ({
    ID_cliente: cliente.idCliente,
    Nome: cliente.nome,
    Contato: cliente.contato,
    Endereco: cliente.endereco,
    Data_de_Nascimento: cliente.dataDeNascimento?.toISOString()
} as RawCliente)

export default clienteToRaw

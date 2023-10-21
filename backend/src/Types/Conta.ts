import Pedido from "./Pedido";
import Cliente from "./Cliente";

export interface Conta {
    idConta: number;
    idCliente?: number;
    dataDoPagamento: Date;
    valorTotal: number;
    cliente?: Cliente;
    pedidos?: Pedido[];
}


export default Conta;

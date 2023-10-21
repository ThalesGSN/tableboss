import Cliente from "./Cliente";
import Mesa from "./Mesa";
import Funcionario from "./Funcionario";
import StatusPedido from "./StatusPedido";
import Conta from "./Conta";


export interface Pedido {
    idPedido: number;
    idConta: number;
    idCliente?: number;
    idMesa?: number;
    idFuncionario?: number;
    idStatusPedido: number;
    dataDoPedido: Date;
    conta?: Conta;
    cliente?: Cliente;
    mesa?: Mesa;
    funcionario?: Funcionario;
    statusPedido?: StatusPedido;
}

export default Pedido;

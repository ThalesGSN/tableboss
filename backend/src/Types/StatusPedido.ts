export interface StatusPedido {
    idStatus: number;
    status: StatusPedidoEnum;
}

export enum StatusPedidoEnum {
    PENDENTE = "Pendente",
    EM_PREPARO = "Em Preparo",
    PRONTO = "Pronto",
    ENTREGUE = "Entregue"
}

export default StatusPedido;

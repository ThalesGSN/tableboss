
export enum MetodoDePagamentoEnum {
    DINHEIRO = "Dinheiro",
    CARTAO_CREDITO = "Cartão de Crédito",
    CARTAO_DEBITO = "Cartão de Débito",
    VALE_REFEICAO = "Vale Refeição",
    PIX = "PIX"
}

interface MetodoDePagamento {
    idMetodo: number;
    metodo: MetodoDePagamentoEnum;
}

export default MetodoDePagamento;

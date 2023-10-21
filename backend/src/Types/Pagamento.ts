import MetodoDePagamento from "./MetodoPagamento";
import Conta from "./Conta";

interface Pagamento {
    idPagamento: number;
    idConta: number;
    idMetodo: number;
    vlrPago: number;
    conta?: Conta;
    metodoDePagamento?: MetodoDePagamento;
}

export default Pagamento;

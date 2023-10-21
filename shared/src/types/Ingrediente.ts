import Fornecedor from "./Fornecedor";

interface Ingrediente {
    idIngrediente: number;
    idFornecedor: number;
    nome: string;
    qtdEstoque: number;
    fornecedor?: Fornecedor; // Referência opcional
}

export default Ingrediente;

import Categoria from "./Categoria";

interface ItemDoMenu {
    idItem: number;
    idCategoria: number;
    nome: string;
    descricao?: string;
    preco: number;
    categoria?: Categoria; // Referência opcional
}

export default ItemDoMenu;

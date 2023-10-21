import Pedido from "./Pedido";
import ItemDoMenu from "./ItemDoMenu";

interface ItemDoPedido {
    idPedido: number;
    idItem: number;
    quantidade: number;
    precoUnitario: number;
    pedido?: Pedido; // Referência opcional
    itemDoMenu?: ItemDoMenu; // Referência opcional
}

export default ItemDoPedido;

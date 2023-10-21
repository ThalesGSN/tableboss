import Ingrediente from "./Ingrediente";
import ItemDoMenu from "./ItemDoMenu";

interface IngredienteItemMenu {
    idIngrediente: number;
    idItem: number;
    quantidade: number;
    ingrediente?: Ingrediente; // Referência opcional
    itemDoMenu?: ItemDoMenu;   // Referência opcional
}

export default IngredienteItemMenu;

import Mesa from "./Mesa";
import Cliente from "./Cliente";

interface Reserva {
    idReserva: number;
    idMesa: number;
    idCliente: number;
    data: Date;
    numeroDePessoas: number;
    observacoes?: string;
    mesa?: Mesa;       // Referência opcional
    cliente?: Cliente; // Referência opcional
}

export default Reserva;

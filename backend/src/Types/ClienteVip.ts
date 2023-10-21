import Cliente from "./Cliente";
import StatusVIP from "./StatusVip";

interface ClienteVIP {
    idCliente: number;
    idStatusVip: number;
    historicoDeVisitas?: string;
    desconto: number;
    cliente?: Cliente; // Referência opcional
    statusVip?: StatusVIP; // Referência opcional
}

export default ClienteVIP;

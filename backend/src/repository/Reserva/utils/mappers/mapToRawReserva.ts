import Reserva from "tableboss-shared/dist/Reserva";

const mapToRawReserva = (reserva: Reserva) => {
    return {
        ID_reserva: reserva.idReserva,
        ID_mesa: reserva.idMesa,
        ID_cliente: reserva.idCliente,
        Data: reserva.data?.toISOString(),
        Numero_de_Pessoas: reserva.numeroDePessoas,
        Observacoes: reserva.observacoes
    };
}

export default mapToRawReserva

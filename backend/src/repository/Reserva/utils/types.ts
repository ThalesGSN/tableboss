interface ReservaMesaRow {
    ID_reserva: number;
    ID_mesa: number;
    ID_cliente: number;
    Data: string;  // or Date, depending on your database setup
    Numero_de_Pessoas: number;
    Observacoes: string | null; // nullable if your database allows for null values in this column
    Numero_de_Lugares: number;
}

export default ReservaMesaRow

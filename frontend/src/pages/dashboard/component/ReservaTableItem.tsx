import { TableCell, TableRow } from '@mui/material';
import { format } from 'date-fns';
import Reserva from '@tableboss/types/Reserva';

export interface ReservaTableItemProps {
    reservation: Reserva;
}

const ReservaTableItem = (props: ReservaTableItemProps) => {
    const { reservation } = props;
    return (
        <TableRow>
            <TableCell>{reservation.idReserva}</TableCell>
            <TableCell>{reservation.cliente?.nome}</TableCell>
            <TableCell>{reservation.mesa?.numeroDeLugares}</TableCell>
            <TableCell>{format(new Date(reservation.data), 'HH:mm')}</TableCell>
            <TableCell>{reservation.numeroDePessoas}</TableCell>
        </TableRow>
    )
}

export default ReservaTableItem;

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import useReservations from '../../../utils/queries/useReservations';
import ReservaTableItem from './ReservaTableItem.tsx';

const ReservaTable = () => {
    const { reservations, isLoading, emptyReservations } = useReservations();

    if (isLoading) {
        return <Typography>Loading...</Typography>;
    }

    if (emptyReservations) {
        return <Typography>No reservations found for today.</Typography>;
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Client</TableCell>
                        <TableCell>Table</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Number of People</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reservations.map((reservation) => (
                        <ReservaTableItem key={reservation.idReserva} reservation={reservation}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ReservaTable;

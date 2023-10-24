import {useEffect, useState} from 'react';
import axios from 'axios';
import {format} from 'date-fns';
import {
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';

const Dashboard = () => {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const today = format(new Date(), 'yyyy-MM-dd');
                const response = await axios.get(`/api/reservations?date=${today}`);
                setReservations(response.data.data);
            } catch (error) {
                console.error("Error fetching reservations", error);
            }
            setLoading(false);
        };

        fetchReservations();
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Today's Reservations
            </Typography>
            {loading ? (
                <Typography>Loading...</Typography>
            ) : reservations.length > 0 ? (
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
                                <TableRow key={reservation.idReserva}>
                                    <TableCell>{reservation.idReserva}</TableCell>
                                    <TableCell>{reservation.cliente.nome}</TableCell>
                                    <TableCell>{reservation.mesa.numeroDeLugares}</TableCell>
                                    <TableCell>{format(new Date(reservation.data), 'HH:mm')}</TableCell>
                                    <TableCell>{reservation.numeroDePessoas}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Typography>No reservations found for today.</Typography>
            )}
        </Container>
    );
};

export default Dashboard;

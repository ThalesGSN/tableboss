import { Container, Typography } from '@mui/material';
import ReservaTable from './component/ReservaTable.tsx';

const Dashboard = () => (
    <Container>
        <Typography variant="h4" gutterBottom>
            Today's Reservations
        </Typography>
        <ReservaTable/>
    </Container>
);

export default Dashboard;

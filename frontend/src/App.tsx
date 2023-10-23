import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/home';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Home/>
        </QueryClientProvider>
    );
}

export default App;

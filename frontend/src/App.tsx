import AppRouter from "./AppRouter.tsx";
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AppRouter/>
        </QueryClientProvider>
    );
}

export default App;

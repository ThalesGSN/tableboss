import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Dashboard from '../../pages/dashboard';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard/>,
    },
]);

const AppRouter = () => (
    <RouterProvider router={router}/>
)

export default AppRouter;

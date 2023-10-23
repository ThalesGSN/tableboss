import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
]);

const AppRouter = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default AppRouter;

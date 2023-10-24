import useLogin from '../../utils/queries/useLogin.ts';
import Login from '../login/Login.tsx';
import AppRouter from '../../utils/components/AppRouter.tsx';
import SideBar from "../dashboard/component/SideBar.tsx";

const Home = () => {
    const {loggedUser} = useLogin()

    if (!loggedUser) {
        return <Login/>
    }

    return (
        <div style={{display: 'flex'}}>
            <SideBar/>
            <AppRouter/>
        </div>
    )
}

export default Home

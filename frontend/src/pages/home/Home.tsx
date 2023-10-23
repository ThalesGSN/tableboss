import useLogin from '../../utils/queries/useLogin.ts';
import Login from '../login/Login.tsx';
import AppRouter from '../../AppRouter.tsx';

const Home = () => {
    const { loggedUser } = useLogin()

    if (!loggedUser) {
        return <Login/>
    }

    return <AppRouter/>
}

export default Home

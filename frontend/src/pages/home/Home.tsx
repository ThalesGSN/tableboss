import useLogin from "../../utils/queries/useLogin.ts";
import Login from "../login/Login.tsx";

const Home = () => {
    const {loggedUser} = useLogin()

    if (!loggedUser) {
        return <Login/>
    }

    return <div>Logged in</div>
}

export default Home

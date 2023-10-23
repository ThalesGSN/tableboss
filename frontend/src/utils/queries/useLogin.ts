import {useMutation, useQuery, useQueryClient} from "react-query";
import Funcionario from "tableboss-shared/dist/Funcionario";
import LoginFormData from "../types/LoginFormData.ts";
import api from "../api.ts";

const useLogin = () => {
    const queryClient = useQueryClient();
    const {data: loggedUser, ...queryProps} = useQuery('userData', {
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        retry: false,
        initialData: () => {
            const userData = localStorage.getItem('userData');
            return userData ? JSON.parse(userData) : undefined;
        }
    });

    const {isLoading, error, mutate} = useMutation(callLogin, {
        onSuccess: (data: Funcionario) => {
            // Store user data after successful callLogin
            queryClient.setQueryData('userData', data);
            localStorage.setItem('userData', JSON.stringify(data));
        },
    });

    async function callLogin(credentials: LoginFormData) {
        const response = await api.post('/login', credentials);
        return response.data;
    }

    const handleLogin = (username: string, password: string) => {
        mutate({username, password});
    };

    const logout = () => {
        queryClient.setQueryData('userData', undefined);
        localStorage.removeItem('userData');
    }

    return {...queryProps, loggedUser, error, isLoading, handleLogin, logout};
}

export default useLogin;

import React, {useState} from "react";
import useLogin from "../../../utils/queries/useLogin.ts";
import LoginFormData from "../../../utils/types/LoginFormData.ts";

type LoginKeys = keyof LoginFormData;

const useLoginForm = () => {
    const {handleLogin, isLoading, error} = useLogin();
    const [formData, setFormData] = useState<Record<LoginKeys, string>>({username: '', password: ''});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const submit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {username, password} = formData;
        handleLogin(username, password);
    }

    return {formData, handleInputChange, setFormData, isLoading, error, submit};
}

export default useLoginForm;

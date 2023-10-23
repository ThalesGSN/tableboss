import {Alert, Button, Container, Snackbar, TextField, Typography} from '@mui/material';
import useLoginForm from "./utils/useLoginForm.ts";
import {AxiosError} from "axios";
import ApiResponse from "../../utils/types/ApiResponse.ts";
import Funcionario from "tableboss-shared/dist/Funcionario";
import {useState} from "react";

const Login = () => {
    const {submit, formData, isLoading, handleInputChange, error} = useLoginForm();
    const {username, password} = formData;

    const [showError, setShowError] = useState(false);

    const axiosError = error as AxiosError<ApiResponse<Funcionario>>;

    const onCloseError = () => setShowError(false);

    return (
        <Container component="main" maxWidth="xs">
            <Typography variant="h5">Login</Typography>
            <form onSubmit={submit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    value={username}
                    onChange={handleInputChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handleInputChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={isLoading}
                >
                    {isLoading ? 'Logging in...' : 'Login'}
                </Button>
            </form>
            {showError && (
                <Snackbar open={Boolean(error)} onClose={onCloseError} autoHideDuration={6000}>
                    <Alert severity="error" onClose={onCloseError} sx={{width: '100%'}}>
                        {axiosError.response?.data?.error || axiosError.message}
                    </Alert>
                </Snackbar>
            )}

        </Container>
    );
}

export default Login;

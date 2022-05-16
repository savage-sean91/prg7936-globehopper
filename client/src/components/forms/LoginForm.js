import React, { useState, useEffect } from "react";
import {
    Alert,
    Box,
    Button,
    Snackbar,
    TextField,
    Typography
} from '@mui/material';

function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailChanged = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChanged = (event) => {
        setPassword(event.target.value);
    }

    const onLoginClick = () => {
        props.onLogin(email, password);
    }

    return (
        <Box my={3}>
            <Box>
                <TextField
                    type="email"
                    label="Email"
                    sx={{
                        mr: 2
                    }}
                    onChange={onEmailChanged}
                />
                <TextField
                    type="password"
                    label="Password"
                    onChange={onPasswordChanged}
                />
            </Box>
            <Box mt={2}>
                <Button variant="contained" onClick={onLoginClick}>
                    Login
                </Button>
            </Box>
            <Box mt={2}>
                <Typography color="error">
                    {props.error}
                </Typography>
            </Box>
        </Box>
    );
}

export default LoginForm;

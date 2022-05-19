import React, { useState, useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

function RegisterForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onEmailChanged = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChanged = (event) => {
    setPassword(event.target.value);
  };

  const onNameChanged = (event) => {
    setName(event.target.value);
  };

  const onRegisterClick = () => {
    props.onRegister(name, email, password);
  };

  return (
    <Box my={3}>
      <Box>
        <TextField
          label="Name"
          sx={{
            mr: 2,
          }}
          onChange={onNameChanged}
        />
        <TextField
          type="email"
          label="Email"
          sx={{
            mr: 2,
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
        <Button variant="contained" onClick={onRegisterClick}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}

export default RegisterForm;

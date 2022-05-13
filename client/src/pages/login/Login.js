import React, { useState, useEffect } from "react";
import {
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Typography
} from '@mui/material';
import LoginForm from '../../components/forms/LoginForm';
import actions from '../../app/actions';

function LoginPage() {
  const [loginError, setLoginError] = useState(null);
  const dispatch = useDispatch();

  const onLogin = async (email, password) => {
    setLoginError(null);
    fetch("/v1/auth/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.user) {
          dispatch({ type: actions.SIGN_IN, payload: data.user });
        } else if (data && data.message) {
          setLoginError(data.message);
        }
      });
  }

  return (
    <Box>
        <Typography variant="h4">
          Login to get started
        </Typography>
        <LoginForm onLogin={onLogin} error={loginError} />
        <hr />
        <Typography>
          <Link to="register">Don't have an account?</Link>
        </Typography>
    </Box>
  );
}

export default LoginPage;

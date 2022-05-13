import React, { useState, useEffect } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Typography
} from '@mui/material';
import actions from '../../app/actions';
import RegisterForm from '../../components/forms/RegisterForm';

function Register() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onRegister = async (name, email, password) => {
    fetch("/v1/auth/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email, password: password })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: actions.SIGN_IN, payload: data.user });
        navigate("/");
      });
  }

  return (
    <Box>
        <Typography variant="h4">Register for an account</Typography>
        <RegisterForm onRegister={onRegister} />
        <hr />
        <Typography>
          <Link to="/">Already have an account?</Link>
        </Typography>
    </Box>
  );
}

export default Register;

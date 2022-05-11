import React, { useState, useEffect } from "react";
import {
    Alert,
    Box,
    Button,
    Snackbar,
    TextField,
    Typography
} from '@mui/material';

function LoginForm() {

  return (
    <Box>
        <Typography>
            Login
        </Typography>
        <Box>
            <TextField
                type="email"
                label="Email"
            />
            <TextField
                type="password"
                label="Password"
            />
        </Box>
        <Box>
            <Button type="submit" variant="contained">
                Login
            </Button>
        </Box>
    </Box>
  );
}

export default LoginForm;

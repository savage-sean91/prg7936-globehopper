import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet
} from "react-router-dom";
import {
    Box,
    Paper,
    Typography
} from '@mui/material';

function Unauthenticated() {
    return (
        <Paper sx={{ padding: 4 }}>
            <Box>
                <Outlet />
            </Box>
        </Paper>
    );
}

export default Unauthenticated;
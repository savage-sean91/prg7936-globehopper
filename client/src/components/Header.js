import React from 'react';
import {
    useLocation,
    useNavigate
} from "react-router-dom";
import {
    useDispatch,
    useSelector
} from 'react-redux';
import actions from '../app/actions';
import './Header.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = (props) => {
    const user = useSelector((state) => state ? state.user : null);
    const dispatch = useDispatch();
    let location = useLocation();
    let navigate = useNavigate();

    const onAreaButtonClick = () => {
        if (location.pathname === "/admin") {
            navigate("/");
        } else {
            navigate("/admin");
        }
    }

    const onLogout = () => {
        dispatch({ type: actions.SIGN_OUT });
        navigate("/");
    }
    
    return (
        <header className="site-header">
            <AppBar position="static" className="header-bar">
                <Toolbar>
                    <Box width={"100%"} sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <Typography variant="h5" component="h1" style={{color: 'darkslategray'}}>
                            {props.title}
                        </Typography>
                        {user ? (
                            <Box display="flex" alignItems="center">
                                <Typography sx={{ mr: 2 }}>
                                    Welcome, {user.name}!
                                </Typography>
                                {user.role === "admin" ? (
                                    <>
                                        {location.pathname === "/admin" ? (
                                            <Button
                                                color="secondary"
                                                variant="contained"
                                                onClick={onAreaButtonClick}
                                            >
                                                Go to Dashboard
                                            </Button>
                                        ) : (
                                            <Button
                                                color="secondary"
                                                variant="contained"
                                                onClick={onAreaButtonClick}
                                            >
                                                Go to Admin Page
                                            </Button>
                                        )}
                                    </>
                                ) : null}
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    onClick={onLogout}
                                    sx={{ ml: 2 }}
                                >
                                    Logout
                                </Button>
                            </Box>
                        ) : null}
                    </Box>
                </Toolbar>
            </AppBar>
            <h1>Your passport for world travel</h1>
        </header>
    );
}

export default Header;
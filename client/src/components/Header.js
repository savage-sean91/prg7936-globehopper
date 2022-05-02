import React from 'react';
import './Header.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import MenuIcon from '@mui/icons-material/Menu';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="site-header">
                <AppBar position="static" className="header-bar">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={this.props.openDrawer}
                        >
                            <MenuIcon style={{color: 'darkslategray'}} />
                        </IconButton>
                        <Typography variant="h5" component="h1" style={{color: 'darkslategray'}}>
                            {this.props.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <h1>Your passport for world travel</h1>
            </header>
        );
    }
}

export default Header;
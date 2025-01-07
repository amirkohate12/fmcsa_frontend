// src/components/AppBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const CustomAppBar = ({ onMenuClick }) => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    color="#3f51b5"
                    edge="start"
                    onClick={onMenuClick}
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                    <img src="/logo.jpg" alt="FMCSA Logo" style={{ width: 50, marginRight: '8px' }} />
                    FMCSA Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default CustomAppBar;
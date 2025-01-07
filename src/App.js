import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomAppBar from './components/appBar';
import SideMenu from './components/sidemenu';
import RoutesComponent from './routes';
import { Box, CssBaseline, Typography } from '@mui/material';

const App = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Use useCallback to memoize this function and prevent unnecessary rerenders
    const handleDrawerToggle = useCallback(() => setDrawerOpen(prev => !prev), []);

    // Only close the drawer if it is currently open
    const handleMenuClick = useCallback(() => setDrawerOpen(false), []);

    return (
        <Router>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <CustomAppBar onMenuClick={handleDrawerToggle} />
                <SideMenu open={drawerOpen} onClose={handleDrawerToggle} onOptionSelect={handleMenuClick} />

                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, marginLeft: 30 }}
                >
                    <Typography variant="h4" gutterBottom>
                        Select a view from the side menu
                    </Typography>

                    <RoutesComponent /> {/* Render routes here */}
                </Box>
            </Box>
        </Router>
    );
};

export default App;
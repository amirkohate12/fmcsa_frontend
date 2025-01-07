import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const SideMenu = ({ open, onClose }) => {
    return (
        <Drawer
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                },
            }}
            variant="temporary"
            open={open}
            onClose={onClose}
        >
            <List>
                <ListItem button component={Link} to="/table" onClick={onClose}>
                    <ListItemText primary="Table" />
                </ListItem>
                <ListItem button component={Link} to="/pivot" onClick={onClose}>
                    <ListItemText primary="Pivot Table/Chart" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideMenu;
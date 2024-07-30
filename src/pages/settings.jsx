import React, { useState } from "react";
import BottomNav from "../components/bottom_nav";
import SearchAppBar from "../components/app_bar";
import { Card, List, ListItem, ListItemIcon, ListItemText, Switch, Divider } from "@mui/material";
import { DarkMode, LightMode, WhatsApp } from "@mui/icons-material";

function Settings() {
    const [darkMode, setDarkMode] = useState(false);

    const handleModeChange = (event) => {
      setDarkMode(event.target.checked);
      // You can add additional logic here to handle the mode change
    };

    return (
        <div>
            <SearchAppBar/>

            <List>
                <Card sx={{ margin: 2, elevation: 3 }}>
                    <ListItem button component="a" href="https://wa.me/+2347035370651" target="_blank">
                        <ListItemIcon>
                            <WhatsApp sx={{ color: 'green' }} /> {/* Set icon color to green */}
                        </ListItemIcon>
                        <ListItemText primary="Chat with a Nutritionist" />
                    </ListItem>
                </Card>
                <Divider />
                <Card sx={{ margin: 2, elevation: 3 }}>
                    <ListItem>
                        <ListItemIcon>
                            {darkMode ? <DarkMode /> : <LightMode />}
                        </ListItemIcon>
                        <ListItemText primary="Toggle Dark/Light Mode" />
                        <Switch
                            checked={darkMode}
                            onChange={handleModeChange}
                            name="darkModeToggle"
                            inputProps={{ 'aria-label': 'dark mode toggle' }}
                        />
                    </ListItem>
                </Card>
            </List>

            <BottomNav/>
        </div>
    )
}

export default Settings;

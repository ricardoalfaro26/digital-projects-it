import React, { useEffect, useState } from "react";
import {
    Grid,
    Menu,
    MenuItem,
    IconButton,
    Avatar,
    Typography,
} from "@mui/material";
// import NotificationsIcon from "@mui/icons-material/Notifications";

import logo from "../assets/Logo.png";
import type { User } from "../types";

export const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    // const [notifAnchorEl, setNotifAnchorEl] = useState<null | HTMLElement>(null);
    const [fullName, setFullName] = useState("");
    const [initials, setInitials] = useState("");

    const open = Boolean(anchorEl);
    // const notifOpen = Boolean(notifAnchorEl);

   useEffect(() => {
  const token = localStorage.getItem("token") ?? "";

  try {
    const startBodyIndex = token.indexOf(".");
    const lastBodyIndex = token.lastIndexOf(".");

    if (startBodyIndex === -1 || lastBodyIndex === -1 || startBodyIndex === lastBodyIndex) {
      throw new Error("Token inválido");
    }
     
    //Const validation
    const tokenDecode = token.substring(startBodyIndex + 1, lastBodyIndex);
    const user: User = JSON.parse(atob(tokenDecode));

    setFullName(`${user.firstName} ${user.lastName}`);
    setInitials(`${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`);
  } catch (err) {
    // Token quemado o mal formado: usar valores por defecto
    setFullName("Usuario Demo");
    setInitials("UD");
  }
}, []);



    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => setAnchorEl(null);

    const handleLogout = () => {
        localStorage.removeItem("token");
        handleMenuClose();
        window.location.replace("/login");
    };

    // const handleNotifOpen = (event: React.MouseEvent<HTMLElement>) => {
    //     setNotifAnchorEl(event.currentTarget);
    // };

    // const handleNotifClose = () => setNotifAnchorEl(null);
    return (
        <div style={{ backgroundColor: "#004a87", padding: "0px 24px" }}>
            <Grid container alignItems="center" justifyContent="space-between">
                {/* Izquierda: logo */}
                <Grid>
                    <Grid container alignItems="center">
                        <Grid>
                            <img src={logo} alt="Logo" style={{ height: 80, marginRight: 12 }} />
                        </Grid>
                    </Grid>
                </Grid>
                {/* Derecha: notificaciones + usuario */}
                <Grid>
                    <Grid container spacing={2} alignItems="center">
                        {/* <Grid>
                            <IconButton onClick={handleNotifOpen} sx={{ color: "white" }}>
                                <NotificationsIcon />
                            </IconButton>
                            <Menu
                                anchorEl={notifAnchorEl}
                                open={notifOpen}
                                onClose={handleNotifClose}
                                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                transformOrigin={{ vertical: "top", horizontal: "right" }}
                            >
                                <MenuItem>Notificación 1</MenuItem>
                                <MenuItem>Notificación 2</MenuItem>
                                <MenuItem>Notificación 3</MenuItem>
                            </Menu>
                        </Grid> */}
                        <Grid>
                            <Typography sx={{ color: "white", fontWeight: 500 }}>
                                {fullName}
                            </Typography>
                        </Grid>
                        <Grid>
                            <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
                                <Avatar
                                    sx={{
                                        bgcolor: "#fff",
                                        color: "#004a87",
                                        width: 32,
                                        height: 32,
                                        padding: 2.5,
                                    }}
                                >
                                    {initials}
                                </Avatar>
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleMenuClose}
                                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                transformOrigin={{ vertical: "top", horizontal: "right" }}
                            >
                                <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

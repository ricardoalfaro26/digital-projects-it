import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

// --- CONFIGURACIÓN DE DISEÑO ---
export const LEFT_MENU_WIDTH = 260;
const NAVBAR_HEIGHT = 80; // Ajustado a tu NavBar

const MENU_BG = "#FFFFFF";
const MENU_SELECTED = "#F58025";
const OPEN_BG = "rgba(0,0,0,0.04)";

type MenuItem = { label: string; path: string; };

const FORM_MENU_ITEMS: MenuItem[] = [
  { label: "INICIO", path: "/" },
];

export const LeftFormsMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        width: LEFT_MENU_WIDTH,
        bgcolor: MENU_BG,
        // Ocupa el alto restante de la pantalla
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        position: "sticky",
        top: NAVBAR_HEIGHT,
        overflowY: "auto",
        borderRight: "1px solid #E5E7EB",
        p: 2,
        boxSizing: "border-box",
        // Scrollbar estético
        "&::-webkit-scrollbar": { width: "4px" },
        "&::-webkit-scrollbar-thumb": { bgcolor: "#e0e0e0", borderRadius: "10px" },
      }}
    >
      <List sx={{ p: 0 }}>
        {FORM_MENU_ITEMS.map((item) => {
          const selected = location.pathname === item.path;

          return (
            <ListItemButton
              key={item.path}
              selected={selected}
              onClick={() => navigate(item.path)}
              sx={{
                mb: 0.5,
                borderRadius: 1,
                // Estilo cuando está seleccionado
                "&.Mui-selected": {
                  bgcolor: "transparent",
                  "& .MuiTypography-root": {
                    color: MENU_SELECTED,
                    fontWeight: 700
                  },
                },
                // Hover general
                "&:hover": {
                  bgcolor: OPEN_BG,
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 700,
                  fontSize: 12,
                  color: selected ? MENU_SELECTED : "rgba(0,0,0,0.7)",
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};
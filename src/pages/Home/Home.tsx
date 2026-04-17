// src/pages/Home/Home.tsx
import { useState } from "react"; // ✅ Eliminado "React" (no se usaba)
import { Box } from "@mui/material";
import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// ✅ Asegúrate de que el archivo ProspeccionDashboard.tsx esté guardado en la misma carpeta
import { ProspeccionDashboard } from "./ProspeccionDashboard"; 
import { DetalleSolicitud } from "./Detalle/DetalleSolicitud";
import type { HomeRow } from "./TableHome";

export const Home = () => {
    // --- ESTADOS DE NAVEGACIÓN ---
    const [selectedClient, setSelectedClient] = useState<HomeRow | null>(null);
    const [activeTab, setActiveTab] = useState<"seguimiento" | "flujo" | "docs">("seguimiento");

    const handleAction = (client: HomeRow, tab: "seguimiento" | "flujo" | "docs") => {
        setSelectedClient(client);
        setActiveTab(tab);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
            <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
                {/* --- ELEMENTOS ESTÁTICOS --- */}
                <NavBar />
                
                <Box sx={{ display: "flex", flexGrow: 1, overflow: "hidden", bgcolor: "#F8F9FA" }}>
                    <LeftFormsMenu />
                    
                    {/* --- CONTENIDO DINÁMICO --- */}
                    <Box component="main" sx={{ flexGrow: 1, overflowY: "auto", position: 'relative' }}>
                        {!selectedClient ? (
                            <ProspeccionDashboard onAction={handleAction} />
                        ) : (
                            <DetalleSolicitud 
                                client={selectedClient} 
                                initialTab={activeTab} 
                                onBack={() => setSelectedClient(null)} 
                            />
                        )}
                    </Box>
                </Box>
            </Box>
        </LocalizationProvider>
    );
};
import React, { useState } from "react"; // ✅ useMemo eliminado (estaba sin usar)
import { Box, Paper, Typography, Button, Popover, Card, Stack, Divider } from "@mui/material";
import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/es";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { TableHome } from "./TableHome";
import type { HomeRow } from "./TableHome";

dayjs.locale("es");

export const Home = () => {
    // --- CONFIGURACIÓN VISUAL ---
    const INPUT_HEIGHT = 40;

    // --- ESTADOS ---
    const [selectedClient, setSelectedClient] = useState<HomeRow | null>(null);
    const [activeTab, setActiveTab] = useState<"seguimiento" | "flujo" | "docs">("seguimiento");

    const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
    const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
    const [clienteBusqueda, setClienteBusqueda] = useState("");
    
    const [anchorStart, setAnchorStart] = useState<HTMLDivElement | null>(null);
    const [anchorEnd, setAnchorEnd] = useState<HTMLDivElement | null>(null);

    const handleActionClick = (client: HomeRow, tab: "seguimiento" | "flujo" | "docs") => {
        setSelectedClient(client);
        setActiveTab(tab);
    };

    if (selectedClient) {
        return (
            <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
                <Typography p={4}>
                    Vista de Detalle para: <b>{selectedClient.cliente}</b> en pestaña <b>{activeTab}</b>
                    <Button variant="contained" onClick={() => setSelectedClient(null)} sx={{ ml: 2, textTransform: 'none' }}>Volver</Button>
                </Typography>
            </Box>
        );
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
            <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
                <NavBar />
                
                <Box sx={{ display: "flex", flexGrow: 1, overflow: "hidden", bgcolor: "#F8F9FA" }}>
                    <LeftFormsMenu />
                    
                    <Box component="main" sx={{ flexGrow: 1, overflowY: "auto", p: 3, boxSizing: "border-box" }}>
                        <Box sx={{ maxWidth: "1600px", mx: "auto", width: "100%" }}>
                            
                            <Typography variant="h5" fontWeight={700} mb={3}>Prospección de clientes</Typography>

                            {/* --- FILA DE FILTROS Y MÉTRICAS --- */}
                            <Box sx={{ display: "flex", gap: 3, mb: 3, alignItems: "stretch" }}>
                                
                                {/* FILTROS */}
                                <Paper elevation={0} sx={{ flex: 1, p: 2.5, borderRadius: 3, border: "1px solid #E5E7EB" }}>
                                    <Typography variant="caption" fontWeight={800} mb={2} sx={{ display: 'block', color: 'text.secondary', letterSpacing: 0.5 }}>
                                        FILTROS DE BÚSQUEDA
                                    </Typography>
                                    
                                    <Box sx={{ display: "flex", gap: 2, alignItems: "flex-end" }}>
                                        <Box sx={{ flex: 1 }}>
                                            <FormInput 
                                                identifier="desde" label="Fecha Desde" 
                                                value={startDate ? startDate.format("DD/MM/YYYY") : ""} 
                                                onValueChange={() => {}}
                                                textFieldProps={{ 
                                                    size: "small", fullWidth: true,
                                                    onClick: (e: React.MouseEvent<HTMLDivElement>) => {
                                                        e.preventDefault(); e.stopPropagation(); setAnchorStart(e.currentTarget);
                                                    },
                                                    sx: { height: INPUT_HEIGHT } 
                                                }} 
                                            />
                                        </Box>

                                        <Box sx={{ flex: 1 }}>
                                            <FormInput 
                                                identifier="hasta" label="Fecha Hasta" 
                                                value={endDate ? endDate.format("DD/MM/YYYY") : ""} 
                                                onValueChange={() => {}}
                                                textFieldProps={{ 
                                                    size: "small", fullWidth: true,
                                                    onClick: (e: React.MouseEvent<HTMLDivElement>) => {
                                                        e.preventDefault(); e.stopPropagation(); setAnchorEnd(e.currentTarget);
                                                    },
                                                    sx: { height: INPUT_HEIGHT } 
                                                }} 
                                            />
                                        </Box>

                                        <Box sx={{ flex: 2 }}>
                                            <FormInput 
                                                identifier="cliente" label="Cliente" 
                                                value={clienteBusqueda} 
                                                onValueChange={(_, val) => setClienteBusqueda(val)}
                                                // ✅ CORRECCIÓN: placeholder movido fuera de textFieldProps
                                                placeholder="Nombre o ID del cliente"
                                                textFieldProps={{ 
                                                    size: "small", fullWidth: true,
                                                    sx: { height: INPUT_HEIGHT } 
                                                }} 
                                            />
                                        </Box>

                                        <Button variant="contained" type="button" sx={{ height: INPUT_HEIGHT, px: 4, borderRadius: 2, bgcolor: "#1A73E8", textTransform: "none", fontWeight: 700, boxShadow: "none" }}>
                                            Buscar
                                        </Button>
                                    </Box>
                                </Paper>

                                {/* MÉTRICAS */}
                                <Box sx={{ width: "350px" }}>
                                    <Paper elevation={0} sx={{ p: 2, height: "100%", borderRadius: 3, border: "1px solid #E5E7EB", boxSizing: 'border-box' }}>
                                        <Typography variant="caption" fontWeight={800} mb={2} sx={{ display: 'block', color: 'text.secondary', letterSpacing: 0.5 }}>
                                            RESUMEN HOY
                                        </Typography>
                                        <Stack spacing={1.2}>
                                            {[
                                                { label: "Solicitudes", val: 124, color: "#1A73E8" },
                                                { label: "Aprobadas", val: 80, color: "#2E7D32" },
                                                { label: "Pendientes", val: 44, color: "#ED6C02" }
                                            ].map((item, i) => (
                                                <Box key={item.label}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Typography variant="body2" fontWeight={600} fontSize={13}>{item.label}</Typography>
                                                        <Typography variant="h6" fontWeight={800} sx={{ color: item.color }} fontSize={18}>{item.val}</Typography>
                                                    </Box>
                                                    {i < 2 && <Divider sx={{ mt: 0.5, opacity: 0.4 }} />}
                                                </Box>
                                            ))}
                                        </Stack>
                                    </Paper>
                                </Box>
                            </Box>

                            {/* TABLA */}
                            <Card sx={{ borderRadius: 3, border: "1px solid #E5E7EB", boxShadow: 'none' }}>
                                <TableHome onAction={handleActionClick} />
                            </Card>
                        </Box>
                    </Box>
                </Box>

                {/* --- POPOVERS --- */}
                <Popover 
                    open={Boolean(anchorStart)} anchorEl={anchorStart} onClose={() => setAnchorStart(null)} 
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                >
                    <Box sx={{ p: 1 }}>
                        <DateCalendar value={startDate || dayjs()} onChange={(d) => { setStartDate(d); setAnchorStart(null); }} />
                    </Box>
                </Popover>

                <Popover 
                    open={Boolean(anchorEnd)} anchorEl={anchorEnd} onClose={() => setAnchorEnd(null)} 
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                >
                    <Box sx={{ p: 1 }}>
                        <DateCalendar value={endDate || dayjs()} onChange={(d) => { setEndDate(d); setAnchorEnd(null); }} />
                    </Box>
                </Popover>
            </Box>
        </LocalizationProvider>
    );
};
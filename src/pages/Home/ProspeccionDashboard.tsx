// src/pages/Home/ProspeccionDashboard.tsx
import React, { useState } from "react";
import { Box, Paper, Typography, Button, Card, Stack, Divider, Popover } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { FormInput } from "../../components";
import dayjs, { Dayjs } from "dayjs";
import { TableHome } from "./TableHome";
import type { HomeRow } from "./TableHome";

interface Props {
    onAction: (client: HomeRow, tab: "seguimiento" | "flujo" | "docs") => void;
}

export const ProspeccionDashboard: React.FC<Props> = ({ onAction }) => {
    const INPUT_HEIGHT = 40;
    
    // --- ESTADOS DE FILTROS ---
    const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
    const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
    const [cliente, setCliente] = useState("");

    // --- ESTADOS PARA CALENDARIOS ---
    const [anchorStart, setAnchorStart] = useState<HTMLDivElement | null>(null);
    const [anchorEnd, setAnchorEnd] = useState<HTMLDivElement | null>(null);

    return (
        <Box sx={{ p: 3, maxWidth: "1600px", mx: "auto", width: "100%" }}>
            <Typography variant="h5" fontWeight={700} mb={3}>Prospección de clientes</Typography>

            <Box sx={{ display: "flex", gap: 3, mb: 3, alignItems: "stretch" }}>
                {/* FILTROS */}
                <Paper elevation={0} sx={{ flex: 1, p: 2.5, borderRadius: 3, border: "1px solid #E5E7EB" }}>
                    <Typography variant="caption" fontWeight={800} mb={2} sx={{ display: 'block', color: 'text.secondary' }}>FILTROS DE BÚSQUEDA</Typography>
                    <Box sx={{ display: "flex", gap: 2, alignItems: "flex-end" }}>
                        
                        {/* Fecha Desde */}
                        <Box sx={{ flex: 1 }}>
                            <FormInput 
                                identifier="desde" 
                                label="Fecha Desde" 
                                value={startDate ? startDate.format("DD/MM/YYYY") : ""} 
                                onValueChange={() => {}} 
                                textFieldProps={{ 
                                    size: "small", 
                                    fullWidth: true,
                                    onClick: (e: React.MouseEvent<HTMLDivElement>) => setAnchorStart(e.currentTarget),
                                    sx: { height: INPUT_HEIGHT } 
                                }} 
                            />
                        </Box>

                        {/* Fecha Hasta */}
                        <Box sx={{ flex: 1 }}>
                            <FormInput 
                                identifier="hasta" 
                                label="Fecha Hasta" 
                                value={endDate ? endDate.format("DD/MM/YYYY") : ""} 
                                onValueChange={() => {}} 
                                textFieldProps={{ 
                                    size: "small", 
                                    fullWidth: true,
                                    onClick: (e: React.MouseEvent<HTMLDivElement>) => setAnchorEnd(e.currentTarget),
                                    sx: { height: INPUT_HEIGHT } 
                                }} 
                            />
                        </Box>

                        {/* Cliente */}
                        <Box sx={{ flex: 2 }}>
                            <FormInput 
                                identifier="c" 
                                label="Cliente" 
                                value={cliente} 
                                onValueChange={(_, v) => setCliente(v)} 
                                placeholder="Nombre o ID" // placeholder fuera de textFieldProps
                                textFieldProps={{ 
                                    size: "small", 
                                    fullWidth: true,
                                    sx: { height: INPUT_HEIGHT } 
                                }} 
                            />
                        </Box>

                        <Button 
                            variant="contained" 
                            type="button" 
                            sx={{ height: INPUT_HEIGHT, px: 4, borderRadius: 2, bgcolor: "#1A73E8", textTransform: "none", fontWeight: 700, boxShadow: "none" }}
                        >
                            Buscar
                        </Button>
                    </Box>
                </Paper>

                {/* RESUMEN */}
                <Box sx={{ width: "350px" }}>
                    <Paper elevation={0} sx={{ p: 2, height: "100%", borderRadius: 3, border: "1px solid #E5E7EB", boxSizing: 'border-box' }}>
                        <Typography variant="caption" fontWeight={800} mb={2} sx={{ display: 'block', color: 'text.secondary' }}>RESUMEN HOY</Typography>
                        <Stack spacing={1.2}>
                            {[
                                { label: "Solicitudes", val: 124, color: "#1A73E8" }, 
                                { label: "Aprobadas", val: 80, color: "#2E7D32" }, 
                                { label: "Pendientes", val: 44, color: "#ED6C02" }
                            ].map((item, i) => (
                                <Box key={item.label}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="body2" fontWeight={600}>{item.label}</Typography>
                                        <Typography variant="h6" fontWeight={800} sx={{ color: item.color }}>{item.val}</Typography>
                                    </Box>
                                    {i < 2 && <Divider sx={{ mt: 0.5, opacity: 0.4 }} />}
                                </Box>
                            ))}
                        </Stack>
                    </Paper>
                </Box>
            </Box>

            <Card sx={{ borderRadius: 3, border: "1px solid #E5E7EB", boxShadow: 'none' }}>
                <TableHome onAction={onAction} />
            </Card>

            {/* --- POPOVERS DE CALENDARIO --- */}
            <Popover 
                open={Boolean(anchorStart)} 
                anchorEl={anchorStart} 
                onClose={() => setAnchorStart(null)} 
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <Box sx={{ p: 1 }}>
                    <DateCalendar 
                        value={startDate || dayjs()} 
                        onChange={(newValue) => { setStartDate(newValue); setAnchorStart(null); }} 
                    />
                </Box>
            </Popover>

            <Popover 
                open={Boolean(anchorEnd)} 
                anchorEl={anchorEnd} 
                onClose={() => setAnchorEnd(null)} 
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <Box sx={{ p: 1 }}>
                    <DateCalendar 
                        value={endDate || dayjs()} 
                        onChange={(newValue) => { setEndDate(newValue); setAnchorEnd(null); }} 
                    />
                </Box>
            </Popover>
        </Box>
    );
};
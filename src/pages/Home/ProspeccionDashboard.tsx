// src/pages/Home/ProspeccionDashboard.tsx
import dayjs, { Dayjs } from "dayjs";
import { TableHome } from "./TableHome";
import type { HomeRow } from "./TableHome";
import { FormInput } from "../../components";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import type { DashboardSummary } from "../../types/Dashboard/dashboard";
import { getActivities, getSummary } from "../../services/dashboard.service";
import { Box, Paper, Typography, Card, Stack, Divider, Popover, Tooltip, IconButton } from "@mui/material";

interface Props {
    onAction: (client: HomeRow, tab: "seguimiento" | "flujo" | "docs") => void;
}

export const ProspeccionDashboard: React.FC<Props> = ({ onAction }) => {
    const INPUT_HEIGHT = 40;
    
    // --- ESTADOS DE FILTROS ---
    const [startDate, setStartDate] = useState<Dayjs | null>(null);
    const [endDate, setEndDate] = useState<Dayjs | null>(null);
    const [cliente, setCliente] = useState("");

    // --- ESTADOS PARA CALENDARIOS ---
    const [anchorStart, setAnchorStart] = useState<HTMLDivElement | null>(null);
    const [anchorEnd, setAnchorEnd] = useState<HTMLDivElement | null>(null);

    // --- ESTADO PARA RESUMEN ---
    const [summary, setSummary] = useState<DashboardSummary | null>(null);
    const [rows, setRows] = useState<HomeRow[]>([]);

    const fetchRows = async (filters?: {
        startDate?: Dayjs | null;
        endDate?: Dayjs | null;
        cliente?: string;
    }) => {
        try {
            const data = await getActivities({
                startDate: filters?.startDate
                    ? filters.startDate.format("YYYY-MM-DD")
                    : undefined,
                endDate: filters?.endDate
                    ? filters.endDate.format("YYYY-MM-DD")
                    : undefined,
                client: filters?.cliente || undefined,
            });

            const mapped: HomeRow[] = data.map(item => ({
                id: item.id,
                fecha: item.date,
                hora: item.time,
                numero: item.number,
                cliente: item.client,
                etapa: item.stage,
                grupo: item.group,
                tipoSolicitud: item.type,
                monto: item.amount ?? 0,
                gestor: item.manager,
            }));

            setRows(mapped);
        } catch (error) {
            console.error("Error cargando actividad", error);
        }
    };

    const handleSearch = () => {
        fetchRows({
            startDate,
            endDate,
            cliente
        });
    };

    const handleReset = () => {
        setStartDate(null);
        setEndDate(null);
        setCliente("");

        fetchRows({});
    };

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                const data = await getSummary();
                setSummary(data);
            } catch (error) {
                console.error("Error cargando resumen", error);
            }
        };

        fetchSummary();
    }, []);

    useEffect(() => {
        fetchRows({});
    }, []);

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
                                label="Buscar por: " 
                                value={cliente} 
                                onValueChange={(_, v) => setCliente(v)} 
                                placeholder="Solicitud, Documento" // placeholder fuera de textFieldProps
                                textFieldProps={{ 
                                    size: "small", 
                                    fullWidth: true,
                                    sx: { height: INPUT_HEIGHT } 
                                }} 
                            />
                        </Box>

                        <Tooltip title="Buscar">
                            <IconButton
                                onClick={handleSearch}
                                sx={{
                                    height: INPUT_HEIGHT,
                                    width: INPUT_HEIGHT,
                                    bgcolor: "#1A73E8",
                                    color: "#fff",
                                    "&:hover": { bgcolor: "#1669c1" }
                                }}
                            >
                                <SearchIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Limpiar filtros">
                            <IconButton
                                onClick={handleReset}
                                sx={{
                                    height: INPUT_HEIGHT,
                                    width: INPUT_HEIGHT,
                                    border: "1px solid #ddd"
                                }}
                            >
                                <RestartAltIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Paper>

                {/* RESUMEN */}
                <Box sx={{ width: "350px" }}>
                    <Paper elevation={0} sx={{ p: 2, height: "100%", borderRadius: 3, border: "1px solid #E5E7EB", boxSizing: 'border-box' }}>
                        <Typography variant="caption" fontWeight={800} mb={2} sx={{ display: 'block', color: 'text.secondary' }}>
                            RESUMEN HOY
                        </Typography>

                        <Stack spacing={1.2}>
                            {[
                                // ✅ CAMBIO: valores ahora vienen del backend
                                { label: "Solicitudes", val: summary?.totalApplications ?? 0, color: "#1A73E8" },
                            ].map((item, i) => (
                                <Box key={item.label}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="body2" fontWeight={600}>
                                            {item.label}
                                        </Typography>

                                        {/* ❌ DISEÑO NO TOCADO */}
                                        <Typography variant="h6" fontWeight={800} sx={{ color: item.color }}>
                                            {item.val}
                                        </Typography>
                                    </Box>

                                    {i < 2 && <Divider sx={{ mt: 0.5, opacity: 0.4 }} />}
                                </Box>
                            ))}
                        </Stack>
                    </Paper>
                </Box>
            </Box>

            <Card sx={{ borderRadius: 3, border: "1px solid #E5E7EB", boxShadow: 'none' }}>
                <TableHome 
                    onAction={onAction}
                    rows={rows}
                />
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
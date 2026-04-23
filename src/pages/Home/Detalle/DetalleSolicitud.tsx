import React, { useEffect, useState } from "react";
import { 
    Box, Typography, IconButton, Paper, Grid, 
    Stack, List, ListItemButton, ListItemText, Divider, Button 
} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// Importación de Tipos
// import type { HomeRow } from "../TableHome";
import type { Detalle } from "../../../types/Detalle/detalle";

import { getActivityById } from "../../../services/detalle.service";

// Importación de Secciones (Formularios)
import { PrecalificacionSection } from "./sections/PrecalificacionSection";
import { SolicitudSection } from "./sections/SolicitudSection";
import { FlujoSection } from "./sections/FlujoSection";

type TabType = "seguimiento" | "flujo" | "docs";

interface Props {
    clientId: number;
    initialTab: TabType;
    onBack: () => void;
}

const STEPS = [
    { id: 'precalificacion', label: 'PRECALIFICACIÓN' },
    { id: 'solicitud', label: 'SOLICITUD' },
    { id: 'evaluacion', label: 'EVALUACIÓN' },
    { id: 'demograficos', label: 'DATOS DEMOGRÁFICOS' },
    { id: 'referencias', label: 'REFERENCIAS' },
    { id: 'garantes', label: 'GARANTES' },
];

export const DetalleSolicitud: React.FC<Props> = ({ clientId, initialTab, onBack }) => {
    const [detalle, setDetalle] = useState<Detalle | null>(null);
    const [loading, setLoading] = useState(true);

    const [activeTab, setActiveTab] = useState<TabType>(initialTab);
    const [activeStep, setActiveStep] = useState('precalificacion');

    const ORANGE_PRIMARY = "#F58025";

    // Solución para el ID (#) sin usar 'any'
    const requestId = Number(clientId);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await getActivityById(requestId);
                setDetalle(data);
            } catch (error) {
                console.error("Error cargando detalle:", error);
            } finally {
                setLoading(false);
            }
        };

        if (requestId && !isNaN(requestId)) {
            load();
        } else {
            console.error("❌ ID inválido:", requestId);
        }
    }, [requestId]);

    // useEffect(() => {
    //     console.log("🔥 DETALLE SOLICITUD RENDERIZADO");
    //     console.log("clientId:", clientId);
    //     console.log("requestId:", requestId);
    // }, []);

    const renderMainContent = () => {
        if (activeTab === 'flujo') return <FlujoSection />;
        
        if (activeTab === 'docs') {
            return (
                <Box sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h6" color="text.secondary">📄 Expediente Digital</Typography>
                    <Typography variant="caption">Lista de documentos PDF adjuntos a la solicitud.</Typography>
                </Box>
            );
        }

        switch (activeStep) {
            case 'precalificacion': return <PrecalificacionSection id={requestId} />;
            case 'solicitud': return <SolicitudSection />;
            default: return <Typography sx={{ p: 2 }}>Módulo en desarrollo...</Typography>;
        }
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", bgcolor: "#F4F6F8" }}>
            
            <Box sx={{ bgcolor: "#fff", borderBottom: "1px solid #E5E7EB", p: 1.5, display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton onClick={onBack} size="small" sx={{ bgcolor: '#f0f0f0' }}>
                    <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
                </IconButton>
                <Typography variant="body2" fontWeight={600} color="text.secondary">
                    {activeTab === 'seguimiento' ? 'Seguimiento de solicitud' : 
                     activeTab === 'flujo' ? 'Gráfica de flujo' : 'Documentación'}
                </Typography>
            </Box>

            <Box sx={{ p: 3, flexGrow: 1, overflowY: 'auto' }}>
                
                <Paper elevation={0} sx={{ p: 2, mb: 3, borderRadius: 2, border: "1px solid #E5E7EB" }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Box>
                            <Typography variant="subtitle1" fontWeight={800}>
                                {/* 🔥 CAMBIO: antes client.cliente → ahora backend */}
                                Cliente: {loading ? "Cargando..." : detalle?.name}
                            </Typography>

                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                                {/* ❌ SE MANTIENE IGUAL */}
                                {/* A cargo de <b>{clientId.gestor}</b> • {client.tipoSolicitud} •  */}
                                A Cargo de <b>Gestor Asignado</b> • Tipo de solicitud: {detalle?.type} •
                                <span style={{color: ORANGE_PRIMARY}}> Numero de Solicitud: {detalle?.number}</span>
                            </Typography>

                            {/* 🔥 CAMBIO OPCIONAL: mostrar nombre formateado */}
                            {/* <Typography variant="caption" color="text.secondary">
                                {detalle?.name}
                            </Typography> */}
                        </Box>
                        
                        <Stack direction="row" spacing={1}>
                             {(['seguimiento', 'flujo', 'docs'] as TabType[]).map((t) => (
                                <Button 
                                    key={t}
                                    variant={activeTab === t ? "contained" : "outlined"}
                                    size="small"
                                    onClick={() => setActiveTab(t)}
                                    sx={{ 
                                        fontSize: 10, borderRadius: 2, px: 2,
                                        bgcolor: activeTab === t ? ORANGE_PRIMARY : 'transparent',
                                        color: activeTab === t ? '#fff' : ORANGE_PRIMARY,
                                        borderColor: ORANGE_PRIMARY,
                                        '&:hover': { bgcolor: activeTab === t ? ORANGE_PRIMARY : '#FFF4E5', borderColor: ORANGE_PRIMARY }
                                    }}
                                >
                                    {t === 'docs' ? 'Documentos' : t.charAt(0).toUpperCase() + t.slice(1)}
                                </Button>
                             ))}
                        </Stack>
                    </Stack>
                </Paper>

                <Grid container spacing={3}>
                    
                    {/* ✅ CORRECCIÓN: Se usa 'size' en lugar de 'item xs md' */}
                    {activeTab === 'seguimiento' && (
                        <Grid size={{ xs: 12, md: 2.5 }}>
                            <Paper elevation={0} sx={{ borderRadius: 2, border: "1px solid #E5E7EB", overflow: 'hidden' }}>
                                <List sx={{ p: 0 }}>
                                    {STEPS.map((step) => (
                                        <ListItemButton 
                                            key={step.id} 
                                            onClick={() => setActiveStep(step.id)}
                                            sx={{
                                                py: 2,
                                                borderLeft: activeStep === step.id ? `4px solid ${ORANGE_PRIMARY}` : '4px solid transparent',
                                                bgcolor: activeStep === step.id ? '#FFF4E5' : 'transparent',
                                            }}
                                        >
                                            <ListItemText 
                                                primary={step.label} 
                                                primaryTypographyProps={{ fontSize: 11, fontWeight: 800, color: activeStep === step.id ? ORANGE_PRIMARY : 'text.primary' }} 
                                            />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>
                    )}

                    {/* ✅ CORRECCIÓN: Se usa 'size' dinámico */}
                    <Grid size={{ xs: 12, md: activeTab === 'seguimiento' ? 6.5 : 9.5 }}>
                        <Paper elevation={0} sx={{ borderRadius: 2, border: "1px solid #E5E7EB", minHeight: '650px' }}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="subtitle2" fontWeight={700} sx={{ textTransform: 'uppercase', color: '#6B7280' }}>
                                    {activeTab === 'seguimiento' ? activeStep.replace('-', ' ') : activeTab}
                                </Typography>
                            </Box>
                            <Divider />
                            <Box sx={{ p: 3 }}>
                                {renderMainContent()}
                            </Box>
                        </Paper>
                    </Grid>

                    {/* ✅ CORRECCIÓN: Se usa 'size' en el panel derecho */}
                    <Grid size={{ xs: 12, md: activeTab === 'seguimiento' ? 3 : 2.5 }}>
                        <Stack spacing={3}>
                            <Paper elevation={0} sx={{ p: 2, border: "1px solid #E5E7EB", textAlign: 'center', borderRadius: 2 }}>
                                <Typography variant="h5" color="error" fontWeight={900}>{detalle?.days} días</Typography>
                                <Typography variant="caption" fontWeight={700} color="text.secondary">TIEMPO EN ETAPA ACTUAL</Typography>
                            </Paper>
                            <Paper elevation={0} sx={{ p: 2, border: "1px solid #E5E7EB", borderRadius: 2, bgcolor: '#F9FAFB' }}>
                                <Typography variant="caption" fontWeight={800} color="text.secondary" display="block" sx={{ mb: 1 }}>NOTAS</Typography>
                                <Typography variant="caption" sx={{ color: '#4B5563', fontStyle: 'italic' }}>Información ingresada el {detalle?.entryDate}.</Typography>
                            </Paper>
                        </Stack>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
};
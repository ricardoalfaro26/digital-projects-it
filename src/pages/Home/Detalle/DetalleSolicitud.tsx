// src/pages/Home/Detalle/DetalleSolicitud.tsx
import React, { useState } from "react";
import { 
    Box, Typography, Button, IconButton, Paper, Grid, 
    Stack, List, ListItemButton, ListItemText, Divider 
} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EditIcon from '@mui/icons-material/Edit';

// Importación de tipos
import type { HomeRow } from "../TableHome";

type TabType = "seguimiento" | "flujo" | "docs";

interface Props {
    client: HomeRow;
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

export const DetalleSolicitud: React.FC<Props> = ({ client, initialTab, onBack }) => {
    const [activeTab, setActiveTab] = useState<TabType>(initialTab);
    const [activeStep, setActiveStep] = useState('precalificacion');
    const ORANGE_PRIMARY = "#F58025";

    const renderContent = () => {
        if (activeTab === 'flujo') return <Typography variant="body2" color="text.secondary">Vista de Gráfica de Flujo</Typography>;
        if (activeTab === 'docs') return <Typography variant="body2" color="text.secondary">Vista de Documentos PDF</Typography>;

        switch (activeStep) {
            case 'precalificacion': return <Typography>Formulario de Precalificación...</Typography>;
            case 'solicitud': return <Typography>Formulario de Solicitud...</Typography>;
            case 'evaluacion': return <Typography>Árbol de Evaluación Económica...</Typography>;
            default: return <Typography>Seleccione un paso</Typography>;
        }
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%", bgcolor: "#F4F6F8" }}>
            <Box sx={{ bgcolor: "#fff", borderBottom: "1px solid #E5E7EB", p: 1.5, display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton onClick={onBack} size="small" sx={{ bgcolor: '#f0f0f0' }}>
                    <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
                </IconButton>
                <Typography variant="body2" fontWeight={600} color="text.secondary">Seguimiento de solicitud</Typography>
            </Box>

            <Box sx={{ p: 3 }}>
                <Paper elevation={0} sx={{ p: 2, mb: 3, borderRadius: 2, border: "1px solid #E5E7EB" }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Box>
                            <Typography variant="subtitle1" fontWeight={800}>Cliente: {client.cliente}</Typography>
                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                                A cargo de <b>{client.gestor}</b> • {client.tipoSolicitud}
                            </Typography>
                        </Box>
                        <IconButton size="small" sx={{ border: '1px solid #eee' }}><EditIcon fontSize="small" /></IconButton>
                    </Stack>
                </Paper>

                {/* ✅ SOLUCIÓN: Usamos 'size' en lugar de 'item xs md' */}
                <Grid container spacing={3}>
                    
                    {/* MENÚ PASOS */}
                    <Grid size={{ xs: 12, md: 2.5 }}>
                        <Paper elevation={0} sx={{ borderRadius: 2, border: "1px solid #E5E7EB", overflow: 'hidden' }}>
                            <List sx={{ p: 0 }}>
                                {STEPS.map((step) => (
                                    <ListItemButton 
                                        key={step.id} 
                                        onClick={() => { setActiveStep(step.id); setActiveTab('seguimiento'); }}
                                        sx={{
                                            py: 2,
                                            borderLeft: activeStep === step.id ? `4px solid ${ORANGE_PRIMARY}` : '4px solid transparent',
                                            bgcolor: activeStep === step.id ? '#FFF4E5' : 'transparent',
                                            '&:hover': { bgcolor: activeStep === step.id ? '#FFF4E5' : '#f9f9f9' }
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

                    {/* CONTENIDO CENTRAL */}
                    <Grid size={{ xs: 12, md: 6.5 }}>
                        <Paper elevation={0} sx={{ p: 3, borderRadius: 2, border: "1px solid #E5E7EB", minHeight: '600px' }}>
                            <Typography variant="h6" fontWeight={700} mb={2} sx={{ textTransform: 'uppercase', fontSize: 16 }}>
                                {activeStep.replace('-', ' ')}
                            </Typography>
                            <Divider sx={{ mb: 3 }} />
                            {renderContent()}
                        </Paper>
                    </Grid>

                    {/* PANEL DERECHO */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Stack spacing={3}>
                            <Paper elevation={0} sx={{ p: 0.5, bgcolor: '#F0F2F5', borderRadius: 2, display: 'flex', gap: 0.5 }}>
                                {(['seguimiento', 'flujo', 'docs'] as TabType[]).map((t) => (
                                    <Button 
                                        key={t} fullWidth size="small" onClick={() => setActiveTab(t)}
                                        sx={{ 
                                            fontSize: 10, fontWeight: 700, textTransform: 'none',
                                            bgcolor: activeTab === t ? '#fff' : 'transparent',
                                            color: activeTab === t ? ORANGE_PRIMARY : 'text.secondary',
                                            boxShadow: activeTab === t ? '0px 2px 4px rgba(0,0,0,0.05)' : 'none'
                                        }}
                                    >
                                        {t === 'docs' ? 'Docs' : t.charAt(0).toUpperCase() + t.slice(1)}
                                    </Button>
                                ))}
                            </Paper>
                            <Paper elevation={0} sx={{ p: 2, border: "1px solid #E5E7EB", textAlign: 'center', borderRadius: 2 }}>
                                <Typography variant="h5" color="error" fontWeight={900}>6 días</Typography>
                                <Typography variant="caption" fontWeight={700} color="text.secondary">Recopilación</Typography>
                            </Paper>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
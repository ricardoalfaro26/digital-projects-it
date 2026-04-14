import { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { NavBar } from "../components/NavBar";
import { LeftFormsMenu } from "../components/LeftFormsMenu";
import { PrecalificationFormContent } from "./precalificationForm"; 
import { SolicitudeFormContent } from "./solicitudeForm";

export const MainTratamientoPage = () => {
    const [view, setView] = useState<'inicio' | 'preca' | 'soli'>('inicio');

    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
            <NavBar />
            <Box sx={{ display: "flex", flexGrow: 1, overflow: "hidden", bgcolor: "#F8F9FA" }}>
                <LeftFormsMenu />
                <Box component="main" sx={{ flexGrow: 1, overflowY: "auto", p: 4 }}>
                    <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
                        
                        {view === 'inicio' ? (
                            <Box sx={{ textAlign: 'center', mt: 10 }}>
                                <Typography variant="h4" fontWeight={800} gutterBottom>
                                    ¿Qué trámite deseas realizar hoy?
                                </Typography>
                                <Typography variant="body1" color="text.secondary" mb={5}>
                                    Selecciona una opción para visualizar el formulario.
                                </Typography>

                                <Stack direction="row" spacing={3} justifyContent="center">
                                    <Button 
                                        variant="contained" 
                                        onClick={() => setView('preca')}
                                        sx={{ p: 4, width: 280, borderRadius: 4, bgcolor: '#1A73E8', textTransform: 'none' }}
                                    >
                                        <Stack spacing={1}>
                                            <Typography variant="h6" fontWeight={700}>Precalificación</Typography>
                                            <Typography variant="caption">Datos del solicitante</Typography>
                                        </Stack>
                                    </Button>

                                    <Button 
                                        variant="contained" 
                                        onClick={() => setView('soli')}
                                        sx={{ p: 4, width: 280, borderRadius: 4, bgcolor: '#F58025', textTransform: 'none' }}
                                    >
                                        <Stack spacing={1}>
                                            <Typography variant="h6" fontWeight={700}>Solicitud</Typography>
                                            <Typography variant="caption">Detalles de crédito</Typography>
                                        </Stack>
                                    </Button>
                                </Stack>
                            </Box>
                        ) : (
                            <Box>
                                <Button 
                                    onClick={() => setView('inicio')}
                                    sx={{ mb: 2, textTransform: 'none', fontWeight: 600, color: '#666' }}
                                >
                                    ← Volver a selección
                                </Button>
                                
                                {view === 'preca' ? <PrecalificationFormContent /> : <SolicitudeFormContent />}
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
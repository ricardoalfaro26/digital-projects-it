import { Grid, Paper, Typography, Box } from "@mui/material";
import { InfoField } from "../components/InfoField";

export const PrecalificacionSection = () => {
    // Datos de ejemplo
    const data = {
        nombre: "JOSE MARIO MARQUEN LON",
        dui: "04364919-4",
        nit: "0602-081090-101-5",
        score: "745 pts",
        calificacion: "P7",
        telefono: "7815-2020",
        correo: "jose.mario@gmail.com"
    };

    return (
        <Box sx={{ p: 1 }}>
            <Grid container spacing={3}>
                {/* Bloque: Identidad */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                        IDENTIDAD DEL PROSPECTO
                    </Typography>
                    <Paper variant="outlined" sx={{ p: 2, bgcolor: '#F9FAFB', borderRadius: 2 }}>
                        <InfoField label="Nombre Completo" value={data.nombre} />
                        <Grid container>
                            <Grid size={{ xs: 6 }}>
                                <InfoField label="DUI" value={data.dui} />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <InfoField label="NIT" value={data.nit} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                {/* Bloque: Riesgo */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                        ANÁLISIS DE RIESGO
                    </Typography>
                    <Paper variant="outlined" sx={{ p: 2, bgcolor: '#F9FAFB', borderRadius: 2 }}>
                        <Grid container spacing={1}>
                            <Grid size={{ xs: 6 }}>
                                <Box sx={{ p: 1, bgcolor: '#ECFDF5', borderRadius: 1, border: '1px solid #10B981', mr: 1 }}>
                                    <InfoField label="Equifax Score" value={data.score} highlight />
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <Box sx={{ p: 1, bgcolor: '#EFF6FF', borderRadius: 1, border: '1px solid #3B82F6' }}>
                                    <InfoField label="Calif. Interna" value={data.calificacion} highlight />
                                </Box>
                            </Grid>
                        </Grid>
                        <Box sx={{ mt: 2 }}>
                            <InfoField label="Estado SSF" value="Sin observaciones pendientes" />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};
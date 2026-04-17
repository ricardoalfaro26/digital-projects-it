import { Grid, Paper, Typography, Box } from "@mui/material";
import { InfoField } from "../components/InfoField";

export const SolicitudSection = () => {
    return (
        <Box sx={{ p: 1 }}>
            <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                DETALLES DEL CRÉDITO
            </Typography>
            <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
                {/* Primera fila: Datos principales */}
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <InfoField label="Monto Solicitado" value="$5,000.00" highlight />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <InfoField label="Plazo" value="48 Meses" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <InfoField label="Cuota Estimada" value="$150.25" highlight />
                    </Grid>
                </Grid>
                
                {/* Separador visual */}
                <Box sx={{ my: 2, height: '1px', bgcolor: '#eee' }} />

                {/* Segunda fila: Condiciones y negocio */}
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <InfoField label="Giro del Negocio" value="ELABORACION DE VINOS" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <InfoField label="Tipo de Crédito" value="Vivienda Individual" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <InfoField label="Frecuencia de Pago" value="Mensual" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <InfoField label="Tasa de Interés" value="32%" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <InfoField label="Día de Pago" value="23 de cada mes" />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};
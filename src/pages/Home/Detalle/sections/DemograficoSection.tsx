//src/pages/Home/Detalle/sections/DemograficoSection.tsx

import { Grid, Paper, Typography, Box } from "@mui/material";
import { InfoField } from "../components/InfoField";
import { useEffect, useState } from "react";

import { getDemograficoByNumeroPreSolicitud } from "../../../../services/detalle.service";
import type { Demografico } from "../../../../types/Detalle/Demografico/Demografico";

export const DemograficoSection = ({ numeroPreSolicitud }: { numeroPreSolicitud: string }) => {
    const [data, setData] = useState<Demografico | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await getDemograficoByNumeroPreSolicitud(numeroPreSolicitud);
                setData(response);
            } catch (error) {
                console.error("Error cargando demográfico", error);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        if (numeroPreSolicitud) {
            fetchData();
        }
    }, [numeroPreSolicitud]);

    if (loading) {
        return <div style={{ textAlign: "center", padding: 20 }}>Cargando...</div>;
    }

    if (!data || !data.TieneInformacion) {
        return (
            <div style={{ textAlign: "center", padding: 20 }}>
                {data?.Mensaje || "Sin información demográfica"}
            </div>
        );
    }

    // 🔥 Limpieza y fallback
    const profesion = data.profesionNombre?.trim() || "—";
    const estadoCivil = data.estadoCivilNombre?.trim() ?? "—";

    const tieneNrc = data.tieneNRC || "—";
    const nrc = data.nrcNumber?.trim() || "—";
    const exento = data.excentoImpuestos ?? "—";

    return (
        <Box sx={{ p: 1, maxWidth: 650, mx: "auto" }}>
            <Grid container spacing={3}>

                {/* ===================== INFORMACIÓN GENERAL ===================== */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                        INFORMACIÓN GENERAL
                    </Typography>

                    <Paper variant="outlined" sx={{ p: 2, bgcolor: '#F9FAFB', borderRadius: 2 }}>
                        <InfoField label="Número Pre-Solicitud" value={data.numeroPreSolicitud} />

                        <Grid container>
                            <Grid size={{ xs: 6 }}>
                                <InfoField label="Profesión" value={profesion} highlight />
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid size={{ xs: 6 }}>
                                <InfoField label="Estado Civil" value={estadoCivil} highlight />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                {/* ===================== INFORMACIÓN FISCAL ===================== */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                        INFORMACIÓN FISCAL
                    </Typography>

                    <Paper variant="outlined" sx={{ p: 2, bgcolor: '#F9FAFB', borderRadius: 2 }}>
                        <Grid container>
                            <Box sx={{ xs: 6 }}>
                                <InfoField label="Tiene NRC" value={tieneNrc} highlight />
                            </Box>
                        </Grid>
                        <Grid container>
                            <Box sx={{ xs: 6 }}>
                                <InfoField label="Número de NRC" value={nrc} />
                            </Box>
                        </Grid>
                        <Grid container>
                            <Box sx={{ xs: 6 }}>
                                <InfoField label="Exento de Impuestos" value={exento} highlight />
                            </Box>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
        </Box>
    );
};
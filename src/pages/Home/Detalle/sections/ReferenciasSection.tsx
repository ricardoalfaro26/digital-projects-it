// src/pages/Home/Detalle/sections/ReferenciasSection.tsx

import { Grid, Paper, Typography, Box } from "@mui/material";
import { InfoField } from "../components/InfoField";

// 🔥 Cuando conectes backend, descomenta esto
// interface Props {
//     data: Referencias;
// }

export const ReferenciasSection = () => {

    // 🔥 MOCK TEMPORAL (estructura visual)
    const mock = {
        tipoRef1: "—",
        nombreRef1: "—",
        telefonoRef1: "—",
        vinculoRef1: "—",
        direccionRef1: "—",

        tipoRef2: "—",
        nombreRef2: "—",
        telefonoRef2: "—",
        vinculoRef2: "—",
        direccionRef2: "—",
    };

    return (
        <Box sx={{ p: 1, maxWidth: 800, mx: "auto" }}>
            <Grid container spacing={3}>

                {/* ===================== REFERENCIA 1 ===================== */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                        REFERENCIA 1
                    </Typography>

                    <Paper variant="outlined" sx={{ p: 2, bgcolor: '#F9FAFB', borderRadius: 2 }}>
                        <InfoField label="Tipo" value={mock.tipoRef1} />
                        <InfoField label="Nombre" value={mock.nombreRef1} />
                        <InfoField label="Teléfono" value={mock.telefonoRef1} />
                        <InfoField label="Vínculo" value={mock.vinculoRef1} />
                        <InfoField label="Dirección" value={mock.direccionRef1} />
                    </Paper>
                </Grid>

                {/* ===================== REFERENCIA 2 ===================== */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                        REFERENCIA 2
                    </Typography>

                    <Paper variant="outlined" sx={{ p: 2, bgcolor: '#F9FAFB', borderRadius: 2 }}>
                        <InfoField label="Tipo" value={mock.tipoRef2} />
                        <InfoField label="Nombre" value={mock.nombreRef2} />
                        <InfoField label="Teléfono" value={mock.telefonoRef2} />
                        <InfoField label="Vínculo" value={mock.vinculoRef2} />
                        <InfoField label="Dirección" value={mock.direccionRef2} />
                    </Paper>
                </Grid>

            </Grid>
        </Box>
    );
};
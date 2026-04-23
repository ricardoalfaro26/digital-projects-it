// import { Grid, Paper, Typography, Box } from "@mui/material";
// import { InfoField } from "../components/InfoField";
// import { useEffect, useState } from "react";

// import { getPrequalificationById } from "../../../../services/detalle.service";

// import type { PrequalificationResponse } from "../../../../types/Detalle/Prequalification/prequalification";

// export const PrecalificacionSection = ({ id }: { id: number }) => {
//     const [data, setData] = useState<PrequalificationResponse | null>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await getPrequalificationById(id);
//                 setData(response);
//             } catch (error) {
//                 console.error("Error cargando prequalification", error);
//             }
//         };

//         fetchData();
//     }, [id]);

//     if (!data) return <div>Cargando...</div>;

//     const cliente = data.client;

//     const nombre = cliente?.nombre ?? "—";

//     const dui = data.documentNumber?.toString() ?? "—";
//     const nit = "—";

//     const score = data.buro?.data?.[0]
//         ? `${data.buro.data[0].saleDue} pts`
//         : "—";

//     const calificacion = data.buro?.data?.[0]?.riskCategory ?? "—";

//     const telefono = cliente?.telefono?.trim() ?? "—";
//     const correo = cliente?.correo ?? "—";

//     return (
//         <Box sx={{ p: 1 }}>
//             <Grid container spacing={3}>
//                 {/* Bloque: Identidad */}
//                 <Grid size={{ xs: 12, md: 6 }}>
//                     <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
//                         IDENTIDAD DEL PROSPECTO
//                     </Typography>
//                     <Paper variant="outlined" sx={{ p: 2, bgcolor: '#F9FAFB', borderRadius: 2 }}>
//                         <InfoField label="Nombre Completo" value={nombre} />
//                         <Grid container>
//                             <Grid size={{ xs: 6 }}>
//                                 <InfoField label="DUI" value={dui} />
//                             </Grid>
//                             <Grid size={{ xs: 6 }}>
//                                 <InfoField label="NIT" value={nit} />
//                             </Grid>
//                         </Grid>
//                     </Paper>
//                 </Grid>

//                 {/* Bloque: Riesgo */}
//                 <Grid size={{ xs: 12, md: 6 }}>
//                     <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
//                         ANÁLISIS DE RIESGO
//                     </Typography>
//                     <Paper variant="outlined" sx={{ p: 2, bgcolor: '#F9FAFB', borderRadius: 2 }}>
//                         <Grid container spacing={1}>
//                             <Grid size={{ xs: 6 }}>
//                                 <Box sx={{ p: 1, bgcolor: '#ECFDF5', borderRadius: 1, border: '1px solid #10B981', mr: 1 }}>
//                                     <InfoField label="Equifax Score" value={score} highlight />
//                                 </Box>
//                             </Grid>
//                             <Grid size={{ xs: 6 }}>
//                                 <Box sx={{ p: 1, bgcolor: '#EFF6FF', borderRadius: 1, border: '1px solid #3B82F6' }}>
//                                     <InfoField label="Calif. Interna" value={calificacion} highlight />
//                                 </Box>
//                             </Grid>
//                         </Grid>
//                         <Box sx={{ mt: 2 }}>
//                             <InfoField label="Estado SSF" value={data.prevention?.data?.resultado ?? "Sin información"} />
//                         </Box>
//                     </Paper>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };


import { Grid, Paper, Typography, Box } from "@mui/material";
import { InfoField } from "../components/InfoField";
import { useEffect, useState } from "react";

import { getPrequalificationById } from "../../../../services/detalle.service";

import type { PrequalificationResponse } from "../../../../types/Detalle/Prequalification/prequalification";

export const PrecalificacionSection = ({ id }: { id: number }) => {
    const [data, setData] = useState<PrequalificationResponse | null>(null);

    // ===================== 🔥 NUEVO: LLAMADA AL BACKEND =====================
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPrequalificationById(id);
                setData(response);
            } catch (error) {
                console.error("Error cargando prequalification", error);
            }
        };

        fetchData();
    }, [id]);

    if (!data) return <div>Cargando...</div>;

    // ===================== 🔥 DATA DEL BACKEND =====================
    const cliente = data.client;

    const nombre = cliente?.nombre ?? "—";
    const dui = data.documentNumber?.toString() ?? "—";
    const nit = "—"; // ❌ no viene aún del backend

    const score = data.buro?.data?.[0]
        ? `${data.buro.data[0].saleDue} pts`
        : "—";

    const calificacion = data.buro?.data?.[0]?.riskCategory ?? "—";

    const telefono = cliente?.telefono?.trim() ?? "—";
    const correo = cliente?.correo ?? "—";

    const messages = data.prevention?.messages ?? [];

    const preventionMessageMap: Record<string, string> = {
        CONTINUE_IN_AGENCY: "Continuar en agencia",
        REJECTED: "Rechazado",
        APPROVED: "Aprobado",
    };

    return (
        <Box sx={{ p: 1 }}>
            <Grid container spacing={3}>

                {/* ===================== IDENTIDAD ===================== */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                        IDENTIDAD DEL PROSPECTO
                    </Typography>

                    <Paper variant="outlined" sx={{ p: 2, bgcolor: '#F9FAFB', borderRadius: 2 }}>
                        <InfoField label="Nombre Completo" value={nombre} />

                        <Grid container>
                            <Grid size={{ xs: 6 }}>
                                <InfoField label="DUI" value={dui} />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <InfoField label="NIT" value={nit} />
                            </Grid>
                        </Grid>

                        {/* 🔥 NUEVO: INFO ADICIONAL DEL CLIENTE */}
                        <Grid container>
                            <Grid size={{ xs: 6 }}>
                                <InfoField label="Teléfono" value={telefono} />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <InfoField label="Correo" value={correo} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                {/* ===================== RIESGO ===================== */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                        ANÁLISIS DE RIESGO
                    </Typography>

                    <Paper variant="outlined" sx={{ p: 2, bgcolor: '#F9FAFB', borderRadius: 2 }}>
                        <Grid container spacing={1}>
                            <Grid size={{ xs: 6 }}>
                                <Box sx={{ p: 1, bgcolor: '#ECFDF5', borderRadius: 1, border: '1px solid #10B981', mr: 1 }}>
                                    <InfoField label="Equifax Score" value={score} highlight />
                                </Box>
                            </Grid>

                            <Grid size={{ xs: 6 }}>
                                <Box sx={{ p: 1, bgcolor: '#EFF6FF', borderRadius: 1, border: '1px solid #3B82F6' }}>
                                    <InfoField label="Calif. Interna" value={calificacion} highlight />
                                </Box>
                            </Grid>
                        </Grid>

                        <Box sx={{ mt: 2 }}>
                            <InfoField
                                label="Estado SSF"
                                value={data.prevention?.data?.resultado ?? "Sin información"}
                            />
                        </Box>
                    </Paper>
                </Grid>

                {/* ===================== 🔥 NUEVO: HISTORIAL CREDITICIO ===================== */}
                <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                        HISTORIAL CREDITICIO
                    </Typography>

                    <Paper variant="outlined" sx={{ p: 2, bgcolor: '#F9FAFB', borderRadius: 2 }}>
                        {data.buro?.data?.length ? (
                            data.buro.data.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        mb: 2,
                                        pb: 2,
                                        borderBottom: '1px solid #E5E7EB'
                                    }}
                                >
                                    <Grid container spacing={1}>
                                        <Grid size={{ xs: 6 }}>
                                            <InfoField label="Institución" value={item.institution} />
                                        </Grid>

                                        <Grid size={{ xs: 6 }}>
                                            <InfoField label="Estado" value={item.state} />
                                        </Grid>

                                        <Grid size={{ xs: 6 }}>
                                            <InfoField label="Tipo Deuda" value={item.typeOfDebt} />
                                        </Grid>

                                        <Grid size={{ xs: 6 }}>
                                            <InfoField label="Categoría Riesgo" value={item.riskCategory} />
                                        </Grid>

                                        <Grid size={{ xs: 6 }}>
                                            <InfoField label="Monto" value={`$${item.amountGranted}`} />
                                        </Grid>

                                        <Grid size={{ xs: 6 }}>
                                            <InfoField label="Días Mora / Score" value={item.saleDue} />
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))
                        ) : (
                            <Typography variant="caption">
                                Sin historial crediticio
                            </Typography>
                        )}
                    </Paper>
                </Grid>

                {/* ===================== 🔥 NUEVO: VALIDACIONES ===================== */}
                <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                        VALIDACIONES
                    </Typography>

                    <Paper variant="outlined" sx={{ p: 2, bgcolor: '#F9FAFB', borderRadius: 2 }}>
                        <Grid container spacing={1}>
                            <Grid size={{ xs: 6 }}>
                                <InfoField label="Resultado" value={data.prevention?.data?.resultado ?? "—"} />
                            </Grid>

                            <Grid size={{ xs: 6 }}>
                                <InfoField label="Código Búsqueda" value={data.prevention?.data?.codigoBusqueda ?? "—"} />
                            </Grid>

                            <Grid size={{ xs: 6 }}>
                                <InfoField label="Lista Interna" value={data.prevention?.data?.listasInterna?.estado ?? "—"} />
                            </Grid>

                            <Grid size={{ xs: 6 }}>
                                <InfoField label="Lista Internacional" value={data.prevention?.data?.listaInternacional?.estado ?? "—"} />
                            </Grid>
                        </Grid>

                        {/* 🔥 MENSAJES */}
                        {messages.length > 0 && (
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="caption" fontWeight={700}>
                                    Observaciones:
                                </Typography>

                                {data.prevention?.messages?.map((msg, i) => (
                                    <Typography key={i} variant="caption" display="block">
                                        • {msg}
                                    </Typography>
                                ))}
                            </Box>
                        )}
                    </Paper>
                </Grid>

                {/* ===================== 🔥 NUEVO: DECISIÓN ===================== */}
                <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                        DECISIÓN
                    </Typography>

                    <Paper variant="outlined" sx={{ p: 2, bgcolor: '#F9FAFB', borderRadius: 2 }}>
                        <Grid container spacing={1}>
                            <Grid size={{ xs: 4 }}>
                                <InfoField label="Decisión" value={data.decision?.decision ?? "—"} />
                            </Grid>

                            <Grid size={{ xs: 4 }}>
                                <InfoField 
                                    label="Mensaje" 
                                    value={
                                        preventionMessageMap[data.decision?.messageKey ?? ""] 
                                        ?? data.decision?.messageKey 
                                        ?? "—"
                                    } 
                                />
                            </Grid>

                            <Grid size={{ xs: 4 }}>
                                <InfoField label="Motivo Rechazo" value={data.decision?.rejectionReason ?? "—"} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
        </Box>
    );
};
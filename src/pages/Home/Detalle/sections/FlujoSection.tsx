import { Box, Typography, Paper, Tooltip, Stack, Divider } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

// Tipado para los estados del flujo
interface EstadoFlujo {
    etapa: string;
    dias: number;
    fechaInicio: string;
    fechaFin: string | null;
    estado: 'completado' | 'actual' | 'pendiente';
    resumen: string;
    usuario: string;
}

const PASOS: EstadoFlujo[] = [
    { 
        etapa: "Precalificación", dias: 1, fechaInicio: "10/04/2026", fechaFin: "11/04/2026", 
        estado: 'completado', usuario: "Sistemas", resumen: "Score de 745 validado automáticamente." 
    },
    { 
        etapa: "Carga de Documentos", dias: 3, fechaInicio: "11/04/2026", fechaFin: "14/04/2026", 
        estado: 'completado', usuario: "Enrique Alfaro", resumen: "DUI y NIT cargados y legibles." 
    },
    { 
        etapa: "Evaluación Económica", dias: 2, fechaInicio: "14/04/2026", fechaFin: null, 
        estado: 'actual', usuario: "Gestor Senior", resumen: "Revisando capacidad de pago actual." 
    },
    { 
        etapa: "Comité de Crédito", dias: 0, fechaInicio: "--", fechaFin: null, 
        estado: 'pendiente', usuario: "--", resumen: "Pendiente de resolución." 
    },
];

export const FlujoSection = () => {
    const ORANGE_PRIMARY = "#F58025";

    return (
        <Box sx={{ py: 4, px: 2 }}>
            <Typography variant="subtitle2" color="text.secondary" fontWeight={800} sx={{ mb: 4, textAlign: 'center' }}>
                LÍNEA DE TIEMPO DE LA SOLICITUD
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: '100%' }}>
                {/* Línea de fondo */}
                <Box sx={{ position: 'absolute', top: '24px', left: '10%', right: '10%', height: '2px', bgcolor: '#E5E7EB', zIndex: 0 }} />

                {/* ✅ Corregido: Eliminamos 'index' ya que no se utiliza */}
                {PASOS.map((paso) => {
                    const isCompleted = paso.estado === 'completado';
                    const isActual = paso.estado === 'actual';

                    return (
                        <Box key={paso.etapa} sx={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            
                            {/* Tooltip con el resumen (Popup al superponer mouse) */}
                            <Tooltip 
                                arrow 
                                title={
                                    <Box sx={{ p: 1 }}>
                                        <Typography variant="caption" fontWeight={700} display="block" borderBottom="1px solid rgba(255,255,255,0.3)" mb={0.5}>
                                            DETALLE: {paso.etapa.toUpperCase()}
                                        </Typography>
                                        <Typography variant="caption" display="block"><b>Inicio:</b> {paso.fechaInicio}</Typography>
                                        <Typography variant="caption" display="block"><b>Días en etapa:</b> {paso.dias} días</Typography>
                                        <Typography variant="caption" display="block"><b>Gestor:</b> {paso.usuario}</Typography>
                                        <Divider sx={{ my: 0.5, bgcolor: 'rgba(255,255,255,0.2)' }} />
                                        <Typography variant="caption" sx={{ fontStyle: 'italic' }}>"{paso.resumen}"</Typography>
                                    </Box>
                                }
                            >
                                {/* Círculo del Nodo */}
                                <Box sx={{ 
                                    width: 48, height: 48, borderRadius: '50%', bgcolor: '#fff', border: `2px solid`,
                                    borderColor: isCompleted || isActual ? ORANGE_PRIMARY : '#E5E7EB',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer', transition: '0.3s',
                                    '&:hover': { transform: 'scale(1.1)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }
                                }}>
                                    {isCompleted && <CheckCircleIcon sx={{ color: ORANGE_PRIMARY }} />}
                                    {isActual && <AccessTimeFilledIcon sx={{ color: ORANGE_PRIMARY }} className="animate-pulse" />}
                                    {!isCompleted && !isActual && <RadioButtonUncheckedIcon sx={{ color: '#E5E7EB' }} />}
                                </Box>
                            </Tooltip>

                            {/* Etiquetas debajo */}
                            <Box sx={{ mt: 2, textAlign: 'center' }}>
                                <Typography variant="caption" fontWeight={700} display="block" sx={{ color: isActual ? ORANGE_PRIMARY : 'text.primary' }}>
                                    {paso.etapa}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {isCompleted ? `${paso.dias} d` : isActual ? 'En curso' : '--'}
                                </Typography>
                            </Box>
                        </Box>
                    );
                })}
            </Box>

            {/* Resumen de Tiempos */}
            <Paper variant="outlined" sx={{ mt: 6, p: 2, bgcolor: '#F9FAFB', borderRadius: 2 }}>
                <Stack direction="row" justifyContent="space-around">
                    <Box textAlign="center">
                        <Typography variant="h6" fontWeight={800} color="primary">6 días</Typography>
                        <Typography variant="caption" fontWeight={700} color="text.secondary">TIEMPO TOTAL</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box textAlign="center">
                        <Typography variant="h6" fontWeight={800} color="success.main">2.3 días</Typography>
                        <Typography variant="caption" fontWeight={700} color="text.secondary">PROMEDIO POR ETAPA</Typography>
                    </Box>
                </Stack>
            </Paper>
        </Box>
    );
};
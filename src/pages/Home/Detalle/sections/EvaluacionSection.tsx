// // src/pages/Home/Detalle/sections/EvaluacionSection.tsx

// import { useState } from "react";
// import { Grid, Paper, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Stack, } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { InfoField } from "../components/InfoField";

// export const EvaluacionSection = () => {

//     const [expanded, setExpanded] = useState<string | false>(false);

//     const handleChange =
//         (panel: string) =>
//         (_event: React.SyntheticEvent, isExpanded: boolean) => {
//             setExpanded(isExpanded ? panel : false);
//         };

//     const accordionSx = {
//         backgroundColor: "transparent",
//         boxShadow: "none",
//         border: "none",
//         "&:before": { display: "none" },
//     };

//     const mock = {
//         // =========================
//         // INGRESOS POR VENTAS (NUEVO BLOQUE AGREGADO)
//         // =========================
//         validarPoliticas: "—",
//         tipoActividad: "—",
//         lunes: "—",
//         martes: "—",
//         miercoles: "—",
//         jueves: "—",
//         viernes: "—",
//         sabado: "—",
//         domingo: "—",
//         ingresosPorVenta: "—",
//         tipoIngreso: "—",
//         consultarEvaluacion: "—",
//         ventasDiarias: "—",

//         // =========================
//         // Ingresos rubro adicional
//         // =========================
//         aplicaIngresosRubroAdicional: "—",

//         // Margen de ganancia
//         costoTotalGlobal: "—",
//         utilidadBrutaGlobal: "—",
//         margenCostoGlobal: "—",
//         ventaTotalGlobal: "—",
//         margenGananciaGlobal: "—",

//         // Otras fuentes
//         salarioNeto: "—",
//         remesas: "—",
//         otros: "—",
//         totalOtrasFuentes: "—",
//         pensiones: "—",
//         alquileres: "—",
//         especifique: "—",

//         // Pasivos corrientes
//         totalCuotasNegocio: "—",
//         totalCuotasFamilia: "—",
//         saldosFamilia: "—",
//         saldosNegocio: "—",
//         proveedores: "—",

//         // Totales evaluación
//         ingresoMensual: "—",
//         utilidadNeta: "—",
//         excedenteMensual: "—",
//         activoCorriente: "—",
//         activoNegocio: "—",
//         patrimonio: "—",
//         pasivoCorriente: "—",
//         pasivoFamiliar: "—",
//         costoVentas: "—",
//         ventaMensual: "—",
//         ingresosFamiliares: "—",

//         // INDICADORES FINANCIEROS
//         liquidez: "—",
//         rotacionCxc: "—",
//         rotacionCuentasPorPagar: "—",
//         rentabilidadBrutaNegocio: "—",
//         roa: "—",
//         capitalTrabajoNeto: "—",
//         rotacionInventarios: "—",
//         endeudamientoTotal: "—",
//         rentabilidadNetaNegocio: "—",
//         roe: "—",

//         // ===================== ESTADO DE RESULTADOS =====================
//         totalIngresosAg: "—",
//         totalEgresosAg: "—",

//         ingresosTotales: "—",
//         egresosPorCompraEr: "—",

//         utilidadBruta: "—",
//         gastosOperativosEr: "—",

//         utilidadOperativa: "—",
//         gastosFinancieros: "—",

//         utilidadNetaDelNegocio: "—",
//         otrosIngresos: "—",

//         egresosUnidadFamiliar: "—",
//         excedenteFamiempresa: "—",

//         // ===================== EGRESOS UNIDAD FAMILIAR =====================
//         aplicaEgresosUnidadFamiliar: "—",

//         educacion: "—",
//         transporte: "—",
//         combustibles: "—",
//         otrosEgresosUnidadFamiliar: "—",

//         alimentacion: "—",
//         salud: "—",
//         serviciosBasicos: "—",
//         alquiler: "—",

//         egresosTotalesUnidadFamiliar: "—",

//         // ===================== EGRESOS OPERATIVOS =====================
//         aplicaGastosOperativos: "—",

//         impuesto: "—",
//         alquilerLocal: "—",
//         energiaElectrica: "—",
//         bodegas: "—",
//         mttoVehiculosOtrosActivos: "—",

//         gastosPersonal: "—",
//         transporteFletes: "—",
//         agua: "—",
//         otrosServiciosBasicos: "—",
//         combustible: "—",
//         otrosGastos: "—",

//         totalEgresosOperativos: "—",

//         // ===================== DETALLE PERSONAL =====================
//         numeroEmpleados: "—",

//         // ===================== BALANCE GENERAL DEL NEGOCIO =====================
//         disponibleBg: "—",
//         cuentasPorCobrarBg: "—",

//         inventariosBg: "—",
//         activosCorrientesBg: "—",

//         mobiliarioMaquinariaEquipoBg: "—",
//         activoNoCorrienteBg: "—",

//         totalActivosBg: "—",
//         proveedoresBg: "—",

//         pasivosCorrientesBg: "—",
//         totalPasivosCorrientesBg: "—",

//         totalPasivosNoCorrientesBg: "—",
//         totalPasivosBg: "—",

//         patrimonioBGN: "—",

//         // ===================== BALANCE FAMI-EMPRESA =====================
//         activoFamiliar: "—",
//         patrimonioFamiliar: "—",
//         totalPasivoFamiliar: "—",
//         patrimonioNetoFamiEmpresa: "—",

//         // ===================== ACTIVOS CORRIENTES =====================
//         aplicaActivoCorriente: "—",
//         bancosAc: "—",
//         cuentasPorCobrarAc: "—",
//         productosEnProcesoAc: "—",
//         inventariosAc: "—",

//         efectivoAc: "—",
//         disponibleAc: "—",
//         materiaPrimaAc: "—",
//         productoTerminadoAc: "—",


//         cantidadNg: "—",
//         descripcionNg: "—",
//         valorNg: "—",

//         cantidadFam: "—",
//         descripcionFam: "—",
//         valorFam: "—",

//         totalFamiliares: "—",
//         totalNegocio: "—",
//     };

//     return (
//     <Box sx={{ p: 1, maxWidth: 1000, mx: "auto" }}>
//         <Grid container spacing={3}>

//             {/* helper estilo reutilizable */}
//             {const accordionSx = {
//                 backgroundColor: "transparent",
//                 boxShadow: "none",
//                 "&:before": { display: "none" },
//                 border: "none",
//             }}

//             {/* ===================== INGRESOS POR VENTAS ===================== */}
//             <Grid size={{ xs: 12 }}>
//                 <Accordion sx={accordionSx} elevation={0} disableGutters>
//                     <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                         <Typography variant="subtitle2" color="primary" fontWeight={800}>
//                             INGRESOS POR VENTAS
//                         </Typography>
//                     </AccordionSummary>

//                     <AccordionDetails sx={{ px: 0 }}>
//                         <Grid container spacing={2}>
//                             <Grid size={{ xs: 12, md: 6 }}>
//                                 <InfoField label="Validar políticas" value={mock.validarPoliticas} />
//                                 <InfoField label="Tipo de actividad" value={mock.tipoActividad} />
//                                 <InfoField label="Lunes" value={mock.lunes} />
//                                 <InfoField label="Miércoles" value={mock.miercoles} />
//                                 <InfoField label="Viernes" value={mock.viernes} />
//                                 <InfoField label="Domingo" value={mock.domingo} />
//                                 <InfoField label="Ingresos por venta" value={mock.ingresosPorVenta} />
//                             </Grid>

//                             <Grid size={{ xs: 12, md: 6 }}>
//                                 <InfoField label="Consultar evaluación" value={mock.consultarEvaluacion} />
//                                 <InfoField label="Tipo de ingreso" value={mock.tipoIngreso} />
//                                 <InfoField label="Martes" value={mock.martes} />
//                                 <InfoField label="Jueves" value={mock.jueves} />
//                                 <InfoField label="Sábado" value={mock.sabado} />
//                                 <InfoField label="Ventas diarias" value={mock.ventasDiarias} />
//                             </Grid>
//                         </Grid>
//                     </AccordionDetails>
//                 </Accordion>
//             </Grid>

//             {/* ===================== INGRESOS RUBRO ADICIONAL ===================== */}
//             <Grid size={{ xs: 12 }}>
//                 <Accordion sx={accordionSx} elevation={0} disableGutters>
//                     <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                         <Typography variant="subtitle2" color="primary" fontWeight={800}>
//                             INGRESOS POR RUBRO ADICIONAL
//                         </Typography>
//                     </AccordionSummary>

//                     <AccordionDetails sx={{ px: 0 }}>
//                         <InfoField
//                             label="Aplica ingresos por rubro adicional"
//                             value={mock.aplicaIngresosRubroAdicional}
//                         />
//                     </AccordionDetails>
//                 </Accordion>
//             </Grid>

//             {/* ===================== MARGEN DE GANANCIA ===================== */}
//             <Grid size={{ xs: 12 }}>
//                 <Accordion sx={accordionSx} elevation={0} disableGutters>
//                     <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                         <Typography variant="subtitle2" color="primary" fontWeight={800}>
//                             MARGEN DE GANANCIA
//                         </Typography>
//                     </AccordionSummary>

//                     <AccordionDetails sx={{ px: 0 }}>
//                         <Grid container spacing={2}>
//                             <Grid size={{ xs: 12, md: 6 }}>
//                                 <InfoField label="Costo total global" value={mock.costoTotalGlobal} />
//                                 <InfoField label="Utilidad bruta global" value={mock.utilidadBrutaGlobal} />
//                                 <InfoField label="Margen costo global" value={mock.margenCostoGlobal} />
//                             </Grid>

//                             <Grid size={{ xs: 12, md: 6 }}>
//                                 <InfoField label="Venta total global" value={mock.ventaTotalGlobal} />
//                                 <InfoField label="Margen ganancia global" value={mock.margenGananciaGlobal} />
//                             </Grid>
//                         </Grid>
//                     </AccordionDetails>
//                 </Accordion>
//             </Grid>

//             {/* ===================== OTRAS FUENTES ===================== */}
//             <Grid size={{ xs: 12 }}>
//                 <Accordion sx={accordionSx} elevation={0} disableGutters>
//                     <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                         <Typography variant="subtitle2" color="primary" fontWeight={800}>
//                             OTRAS FUENTES DE INGRESOS
//                         </Typography>
//                     </AccordionSummary>

//                     <AccordionDetails sx={{ px: 0 }}>
//                         <Grid container spacing={2}>
//                             <Grid size={{ xs: 12, md: 6 }}>
//                                 <InfoField label="Salario neto" value={mock.salarioNeto} />
//                                 <InfoField label="Remesas" value={mock.remesas} />
//                                 <InfoField label="Otros" value={mock.otros} />
//                                 <InfoField label="Total otras fuentes" value={mock.totalOtrasFuentes} />
//                             </Grid>

//                             <Grid size={{ xs: 12, md: 6 }}>
//                                 <InfoField label="Pensiones" value={mock.pensiones} />
//                                 <InfoField label="Alquileres" value={mock.alquileres} />
//                                 <InfoField label="Especifique" value={mock.especifique} />
//                             </Grid>
//                         </Grid>
//                     </AccordionDetails>
//                 </Accordion>
//             </Grid>

//             {/* ===================== PASIVOS CORRIENTES ===================== */}
//             <Grid size={{ xs: 12 }}>
//                 <Accordion sx={accordionSx} elevation={0} disableGutters>
//                     <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                         <Typography variant="subtitle2" color="primary" fontWeight={800}>
//                             PASIVOS CORRIENTES
//                         </Typography>
//                     </AccordionSummary>

//                     <AccordionDetails sx={{ px: 0 }}>
//                         <Grid container spacing={2}>
//                             <Grid size={{ xs: 12, md: 6 }}>
//                                 <InfoField label="Total cuotas negocio" value={mock.totalCuotasNegocio} />
//                                 <InfoField label="Total cuotas familia" value={mock.totalCuotasFamilia} />
//                                 <InfoField label="Saldos familia" value={mock.saldosFamilia} />
//                             </Grid>

//                             <Grid size={{ xs: 12, md: 6 }}>
//                                 <InfoField label="Saldos negocio" value={mock.saldosNegocio} />
//                                 <InfoField label="Proveedores" value={mock.proveedores} />
//                             </Grid>
//                         </Grid>
//                     </AccordionDetails>
//                 </Accordion>
//             </Grid>

//             {/* ===================== TOTALES ===================== */}
//             <Grid size={{ xs: 12 }}>
//                 <Accordion sx={accordionSx} elevation={0} disableGutters>
//                     <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                         <Typography variant="subtitle2" color="primary" fontWeight={800}>
//                             TOTALES DE EVALUACIÓN
//                         </Typography>
//                     </AccordionSummary>

//                     <AccordionDetails sx={{ px: 0 }}>
//                         <Grid container spacing={2}>
//                             <Grid size={{ xs: 12, md: 6 }}>
//                                 <InfoField label="Ingreso mensual" value={mock.ingresoMensual} />
//                                 <InfoField label="Utilidad neta" value={mock.utilidadNeta} />
//                                 <InfoField label="Excedente mensual" value={mock.excedenteMensual} />
//                                 <InfoField label="Activo corriente" value={mock.activoCorriente} />
//                                 <InfoField label="Activo negocio" value={mock.activoNegocio} />
//                                 <InfoField label="Patrimonio" value={mock.patrimonio} />
//                             </Grid>

//                             <Grid size={{ xs: 12, md: 6 }}>
//                                 <InfoField label="Pasivo corriente" value={mock.pasivoCorriente} />
//                                 <InfoField label="Pasivo familiar" value={mock.pasivoFamiliar} />
//                                 <InfoField label="Costo ventas" value={mock.costoVentas} />
//                                 <InfoField label="Venta mensual" value={mock.ventaMensual} />
//                                 <InfoField label="Ingresos familiares" value={mock.ingresosFamiliares} />
//                                 <InfoField label="Validar políticas" value={mock.validarPoliticas} />
//                             </Grid>
//                         </Grid>
//                     </AccordionDetails>
//                 </Accordion>
//             </Grid>

//         </Grid>
//     </Box>
// );
// };


// src/pages/Home/Detalle/sections/EvaluacionSection.tsx

import { useState } from "react";
import { 
    Grid, 
    Typography, 
    Box, 
    Accordion, 
    AccordionSummary, 
    AccordionDetails 
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { InfoField } from "../components/InfoField";

export const EvaluacionSection = () => {
    // Estado para controlar qué panel está abierto (opcional, si quieres manejo manual)
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) =>
        (_event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    // Estilo para hacer el acordeón totalmente invisible/transparente
    const accordionSx = {
        backgroundColor: "transparent",
        boxShadow: "none",
        border: "none",
        "&:before": { 
            display: "none" 
        },
        "&.Mui-expanded": {
            margin: 0, // Evita el salto de margen cuando se expande
        },
    };

    const mock = {
        validarPoliticas: "—",
        tipoActividad: "—",
        lunes: "—",
        martes: "—",
        miercoles: "—",
        jueves: "—",
        viernes: "—",
        sabado: "—",
        domingo: "—",
        ingresosPorVenta: "—",
        tipoIngreso: "—",
        consultarEvaluacion: "—",
        ventasDiarias: "—",
        aplicaIngresosRubroAdicional: "—",
        costoTotalGlobal: "—",
        utilidadBrutaGlobal: "—",
        margenCostoGlobal: "—",
        ventaTotalGlobal: "—",
        margenGananciaGlobal: "—",
        salarioNeto: "—",
        remesas: "—",
        otros: "—",
        totalOtrasFuentes: "—",
        pensiones: "—",
        alquileres: "—",
        especifique: "—",
        totalCuotasNegocio: "—",
        totalCuotasFamilia: "—",
        saldosFamilia: "—",
        saldosNegocio: "—",
        proveedores: "—",
        ingresoMensual: "—",
        utilidadNeta: "—",
        excedenteMensual: "—",
        activoCorriente: "—",
        activoNegocio: "—",
        patrimonio: "—",
        pasivoCorriente: "—",
        pasivoFamiliar: "—",
        costoVentas: "—",
        ventaMensual: "—",
        ingresosFamiliares: "—",
    };

    return (
        <Box sx={{ p: 1, maxWidth: 1000, mx: "auto" }}>
            <Grid container spacing={1}>
                
                {/* ===================== INGRESOS POR VENTAS ===================== */}
                <Grid item xs={12}>
                    <Accordion sx={accordionSx} elevation={0} disableGutters>
                        <AccordionSummary 
                            expandIcon={<ExpandMoreIcon />} 
                            sx={{ px: 0 }} // Alinea el título al borde izquierdo
                        >
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                INGRESOS POR VENTAS
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ px: 0, pb: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <InfoField label="Validar políticas" value={mock.validarPoliticas} />
                                    <InfoField label="Tipo de actividad" value={mock.tipoActividad} />
                                    <InfoField label="Lunes" value={mock.lunes} />
                                    <InfoField label="Miércoles" value={mock.miercoles} />
                                    <InfoField label="Viernes" value={mock.viernes} />
                                    <InfoField label="Domingo" value={mock.domingo} />
                                    <InfoField label="Ingresos por venta" value={mock.ingresosPorVenta} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InfoField label="Consultar evaluación" value={mock.consultarEvaluacion} />
                                    <InfoField label="Tipo de ingreso" value={mock.tipoIngreso} />
                                    <InfoField label="Martes" value={mock.martes} />
                                    <InfoField label="Jueves" value={mock.jueves} />
                                    <InfoField label="Sábado" value={mock.sabado} />
                                    <InfoField label="Ventas diarias" value={mock.ventasDiarias} />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                {/* ===================== INGRESOS RUBRO ADICIONAL ===================== */}
                <Grid item xs={12}>
                    <Accordion sx={accordionSx} elevation={0} disableGutters>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 0 }}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                INGRESOS POR RUBRO ADICIONAL
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ px: 0, pb: 2 }}>
                            <InfoField
                                label="Aplica ingresos por rubro adicional"
                                value={mock.aplicaIngresosRubroAdicional}
                            />
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                {/* ===================== MARGEN DE GANANCIA ===================== */}
                <Grid item xs={12}>
                    <Accordion sx={accordionSx} elevation={0} disableGutters>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 0 }}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                MARGEN DE GANANCIA
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ px: 0, pb: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <InfoField label="Costo total global" value={mock.costoTotalGlobal} />
                                    <InfoField label="Utilidad bruta global" value={mock.utilidadBrutaGlobal} />
                                    <InfoField label="Margen costo global" value={mock.margenCostoGlobal} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InfoField label="Venta total global" value={mock.ventaTotalGlobal} />
                                    <InfoField label="Margen ganancia global" value={mock.margenGananciaGlobal} />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                {/* ===================== OTRAS FUENTES ===================== */}
                <Grid item xs={12}>
                    <Accordion sx={accordionSx} elevation={0} disableGutters>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 0 }}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                OTRAS FUENTES DE INGRESOS
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ px: 0, pb: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <InfoField label="Salario neto" value={mock.salarioNeto} />
                                    <InfoField label="Remesas" value={mock.remesas} />
                                    <InfoField label="Otros" value={mock.otros} />
                                    <InfoField label="Total otras fuentes" value={mock.totalOtrasFuentes} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InfoField label="Pensiones" value={mock.pensiones} />
                                    <InfoField label="Alquileres" value={mock.alquileres} />
                                    <InfoField label="Especifique" value={mock.especifique} />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                {/* ===================== PASIVOS CORRIENTES ===================== */}
                <Grid item xs={12}>
                    <Accordion sx={accordionSx} elevation={0} disableGutters>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 0 }}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                PASIVOS CORRIENTES
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ px: 0, pb: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <InfoField label="Total cuotas negocio" value={mock.totalCuotasNegocio} />
                                    <InfoField label="Total cuotas familia" value={mock.totalCuotasFamilia} />
                                    <InfoField label="Saldos familia" value={mock.saldosFamilia} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InfoField label="Saldos negocio" value={mock.saldosNegocio} />
                                    <InfoField label="Proveedores" value={mock.proveedores} />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                {/* ===================== TOTALES ===================== */}
                <Grid item xs={12}>
                    <Accordion sx={accordionSx} elevation={0} disableGutters>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 0 }}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                TOTALES DE EVALUACIÓN
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ px: 0, pb: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <InfoField label="Ingreso mensual" value={mock.ingresoMensual} />
                                    <InfoField label="Utilidad neta" value={mock.utilidadNeta} />
                                    <InfoField label="Excedente mensual" value={mock.excedenteMensual} />
                                    <InfoField label="Activo corriente" value={mock.activoCorriente} />
                                    <InfoField label="Activo negocio" value={mock.activoNegocio} />
                                    <InfoField label="Patrimonio" value={mock.patrimonio} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InfoField label="Pasivo corriente" value={mock.pasivoCorriente} />
                                    <InfoField label="Pasivo familiar" value={mock.pasivoFamiliar} />
                                    <InfoField label="Costo ventas" value={mock.costoVentas} />
                                    <InfoField label="Venta mensual" value={mock.ventaMensual} />
                                    <InfoField label="Ingresos familiares" value={mock.ingresosFamiliares} />
                                    <InfoField label="Validar políticas" value={mock.validarPoliticas} />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

            </Grid>
        </Box>
    );
};
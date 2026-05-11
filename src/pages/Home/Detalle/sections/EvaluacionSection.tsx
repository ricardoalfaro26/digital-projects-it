// src/pages/Home/Detalle/sections/EvaluacionSection.tsx

import { useEffect, useState } from "react";
import {
    Grid,
    Paper,
    Typography,
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { InfoField } from "../components/InfoField";

import { getEvaluacionByNumeroPreSolicitud } from "../../../../services/detalle.service";
import type { Evaluacion } from "../../../../types/Detalle/Evaluacion/Evaluacion";

type Props = {
    numeroPreSolicitud: string;
};

export const EvaluacionSection = ({ numeroPreSolicitud }: Props) => {

    const [data, setData] = useState<Evaluacion | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getEvaluacionByNumeroPreSolicitud(numeroPreSolicitud);
                setData(res);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [numeroPreSolicitud]);

    // 💰 Dinero
    const formatCurrency = (value?: number | null) => {
        if (value === null || value === undefined) return "—";

        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(value);
    };

    // 🔢 Número normal
    const formatNumber = (value?: number | null) => {
        if (value === null || value === undefined) return "—";
        return value.toString();
    };

    // 📝 Texto
    const formatText = (value?: string | null) => {
        if (!value) return "—";
        return value;
    };

    const d = data as Evaluacion | null;

    const values = {
        /* ===================== INGRESOS ===================== */

        ingresosPorVenta: formatCurrency(d?.comerciante_IngresoPorCiclo),
        salarioNeto: formatCurrency(d?.asalariado_SalarioMensual),
        ingresosRemesas: formatCurrency(d?.remesas_Ingreso),
        ingresosPensiones: formatCurrency(d?.jubilado_MontoPension),

        /* ===================== OTROS INGRESOS ===================== */

        ingresosAlquileres: formatCurrency(d?.rentista_Ingresos),
        otrosIngresos: formatCurrency(d?.otros_Ingresos),

        /* ===================== UTILIDAD ===================== */

        utilidadBrutaGlobal: formatCurrency(d?.comerciante_Ganancia), // 👈 no existe exacto "bruta", esto es lo más cercano
        utilidadNeta: formatCurrency(d?.comerciante_Ganancia),

        /* ===================== RECURSOS ===================== */

        patrimonio: formatCurrency(d?.comerciante_Patrimonio),
        numeroEmpleados: formatNumber(d?.comerciante_CantidadEmpleados),

        /* ===================== PROVEEDORES ===================== */

        proveedorPrincipal1: formatText(d?.comerciante_ProveedorPrincipal1),
        proveedorPrincipal2: formatText(d?.comerciante_ProveedorPrincipal2),

        /* ===================== ACTIVIDAD ===================== */

        actividadEconomicaPrincipal: formatText(d?.comerciante_ActividadEconomicaNombre),

        /* ===================== TOTALES ===================== */

        ingresoTotalMensual: formatCurrency(d?.evaluacion_IngresoTotal),
        patrimonioTotal: formatCurrency(d?.evaluacion_PatrimonioTotal),
    };

    //hola

    return (
        <Box sx={{ p: 1, maxWidth: 1000, mx: "auto" }}>
            <Grid container spacing={3}>

                {/* ===================== INGRESOS POR VENTAS ===================== */}
                <Grid size={{ xs: 12 }}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                INGRESOS POR VENTAS (COMERCIANTE)
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                                <Grid container spacing={2}>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField
                                            label="Actividad económica código"
                                            value={formatNumber(d?.comerciante_ActividadEconomicaCodigo)}
                                        />

                                        {/* ⚠️ NO VIENE DEL BACKEND */}
                                        {/* <InfoField label="Actividad económica nombre" value={values.actividadEconomicaPrincipal} /> */}

                                        <InfoField
                                            label="Ingreso por ciclo"
                                            value={values.ingresosPorVenta}
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField
                                            label="Ganancia"
                                            value={values.utilidadNeta}
                                        />

                                        <InfoField
                                            label="Patrimonio"
                                            value={values.patrimonio}
                                        />

                                        <InfoField
                                            label="Comerciante cliente"
                                            value={formatText(d?.comerciante_ClientePrincipal1)}
                                        />
                                    </Grid>

                                </Grid>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                {/* ===================== OTRAS FUENTES ===================== */}
                <Grid size={{ xs: 12 }}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                OTRAS FUENTES DE INGRESOS
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                                <Grid container spacing={2}>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField
                                            label="Salario neto (Asalariado)"
                                            value={values.salarioNeto}
                                        />

                                        <InfoField
                                            label="Remesas"
                                            value={values.ingresosRemesas}
                                        />

                                        <InfoField
                                            label="Pensiones"
                                            value={values.ingresosPensiones}
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField
                                            label="Alquileres (Rentista)"
                                            value={values.ingresosAlquileres}
                                        />

                                        <InfoField
                                            label="Otros ingresos"
                                            value={values.otrosIngresos}
                                        />

                                        {/* ⚠️ NO VIENE DEL BACKEND */}
                                        {/* <InfoField label="Especifique" value={values.especifique} /> */}
                                    </Grid>

                                </Grid>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </Grid>


                {/* ===================== DETALLE DE PERSONAL ===================== */}
                <Grid size={{ xs: 12 }}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                DETALLE DE PERSONAL
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                                <Grid container spacing={2}>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField
                                            label="Número de empleados"
                                            value={values.numeroEmpleados}
                                        />
                                    </Grid>

                                </Grid>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                {/* ===================== TOTALES ===================== */}
                <Grid size={{ xs: 12 }}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                TOTALES DE EVALUACIÓN
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                                <Grid container spacing={2}>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField
                                            label="Ingreso total mensual"
                                            value={values.ingresoTotalMensual}
                                        />

                                        <InfoField
                                            label="Patrimonio total"
                                            value={values.patrimonioTotal}
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField
                                            label="Utilidad neta"
                                            value={values.utilidadNeta}
                                        />
                                    </Grid>

                                </Grid>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                
                {/* ===================== INGRESOS RUBRO ADICIONAL ===================== */}
                {/* <Grid size={{ xs: 12 }}>
                    <Accordion >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                INGRESOS POR RUBRO ADICIONAL
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                                <InfoField
                                    label="Aplica ingresos por rubro adicional"
                                    value={mock.aplicaIngresosRubroAdicional}
                                />
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </Grid> */}

                {/* ===================== MARGEN DE GANANCIA ===================== */}
                {/* <Grid size={{ xs: 12 }}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                MARGEN DE GANANCIA
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Costo total global" value={mock.costoTotalGlobal} />
                                        <InfoField label="Utilidad bruta global" value={formatCurrency(d?.utilidadBrutaGlobal)} />
                                        <InfoField label="Margen costo global" value={mock.margenCostoGlobal} />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Venta total global" value={mock.ventaTotalGlobal} />
                                        <InfoField label="Margen ganancia global" value={mock.margenGananciaGlobal} />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </Grid> */}

                {/* ===================== PASIVOS CORRIENTES ===================== */}
                {/* <Grid size={{ xs: 12 }}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                PASIVOS CORRIENTES
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Total cuotas negocio" value={mock.totalCuotasNegocio} />
                                        <InfoField label="Total cuotas familia" value={mock.totalCuotasFamilia} />
                                        <InfoField label="Saldos familia" value={mock.saldosFamilia} />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Saldos negocio" value={mock.saldosNegocio} />
                                        <InfoField label="Proveedores" value={mock.proveedores} />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </Grid> */}

                {/* ===================== INDICADORES FINANCIEROS ===================== */}
                {/* <Grid size={{ xs: 12 }}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                INDICADORES FINANCIEROS
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Liquidez" value={mock.liquidez} />
                                        <InfoField label="Rotación CxC" value={mock.rotacionCxc} />
                                        <InfoField label="Rotación cuentas por pagar" value={mock.rotacionCuentasPorPagar} />
                                        <InfoField label="Rentabilidad bruta negocio" value={mock.rentabilidadBrutaNegocio} />
                                        <InfoField label="ROA" value={mock.roa} />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Capital trabajo neto" value={mock.capitalTrabajoNeto} />
                                        <InfoField label="Rotación inventarios" value={mock.rotacionInventarios} />
                                        <InfoField label="Endeudamiento total" value={mock.endeudamientoTotal} />
                                        <InfoField label="Rentabilidad neta negocio" value={mock.rentabilidadNetaNegocio} />
                                        <InfoField label="ROE" value={mock.roe} />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </Grid> */}

                {/* ===================== ESTADO DE RESULTADOS ===================== */}
                {/* <Grid size={{ xs: 12 }}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                ESTADO DE RESULTADOS
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Total ingresos AG" value={mock.totalIngresosAg} />
                                        <InfoField label="Ingresos totales" value={mock.ingresosTotales} />
                                        <InfoField label="Utilidad bruta" value={mock.utilidadBruta} />
                                        <InfoField label="Utilidad operativa" value={mock.utilidadOperativa} />
                                        <InfoField label="Utilidad neta del negocio" value={mock.utilidadNetaDelNegocio} />
                                        <InfoField label="Egresos unidad familiar" value={mock.egresosUnidadFamiliar} />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Total egresos AG" value={mock.totalEgresosAg} />
                                        <InfoField label="Egresos por compra ER" value={mock.egresosPorCompraEr} />
                                        <InfoField label="Gastos operativos ER" value={mock.gastosOperativosEr} />
                                        <InfoField label="Gastos financieros" value={mock.gastosFinancieros} />
                                        <InfoField label="Otros ingresos" value={mock.otrosIngresos} />
                                        <InfoField label="Excedente famiempresa" value={mock.excedenteFamiempresa} />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </Grid> */}

                {/* ===================== EGRESOS UNIDAD FAMILIAR ===================== */}
                {/* <Grid size={{ xs: 12 }}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                EGRESOS DE LA UNIDAD FAMILIAR
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Aplica egresos unidad familiar" value={mock.aplicaEgresosUnidadFamiliar} />
                                        <InfoField label="Educación" value={mock.educacion} />
                                        <InfoField label="Transporte" value={mock.transporte} />
                                        <InfoField label="Combustibles" value={mock.combustibles} />
                                        <InfoField label="Otros" value={mock.otrosEgresosUnidadFamiliar} />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Alimentación" value={mock.alimentacion} />
                                        <InfoField label="Salud" value={mock.salud} />
                                        <InfoField label="Servicios básicos" value={mock.serviciosBasicos} />
                                        <InfoField label="Alquiler" value={mock.alquiler} />
                                        <InfoField label="Egresos totales unidad familiar" value={mock.egresosTotalesUnidadFamiliar} />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </Grid> */}

                {/* ===================== EGRESOS OPERATIVOS ===================== */}
                {/* <Grid size={{ xs: 12 }}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                EGRESOS OPERATIVOS
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Aplica gastos operativos" value={mock.aplicaGastosOperativos} />
                                        <InfoField label="Impuesto" value={mock.impuesto} />
                                        <InfoField label="Alquiler del local" value={mock.alquilerLocal} />
                                        <InfoField label="Energía eléctrica" value={mock.energiaElectrica} />
                                        <InfoField label="Bodegas" value={mock.bodegas} />
                                        <InfoField label="Mantenimiento vehículos y otros activos" value={mock.mttoVehiculosOtrosActivos} />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Gastos del personal" value={mock.gastosPersonal} />
                                        <InfoField label="Transporte (Fletes)" value={mock.transporteFletes} />
                                        <InfoField label="Agua" value={mock.agua} />
                                        <InfoField label="Otros servicios básicos" value={mock.otrosServiciosBasicos} />
                                        <InfoField label="Combustible" value={mock.combustible} />
                                        <InfoField label="Otros gastos" value={mock.otrosGastos} />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Total egresos operativos" value={mock.totalEgresosOperativos} />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </Grid> */}


                {/* ===================== BALANCE GENERAL ===================== */}
                {/* <Grid size={{ xs: 12 }}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                BALANCE GENERAL DEL NEGOCIO
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Disponible BG" value={mock.disponibleBg} />
                                        <InfoField label="Inventarios BG" value={mock.inventariosBg} />
                                        <InfoField label="Mobiliario, maquinaria y equipo BG" value={mock.mobiliarioMaquinariaEquipoBg} />
                                        <InfoField label="Total de activos BG" value={mock.totalActivosBg} />
                                        <InfoField label="Pasivos corrientes BG" value={mock.pasivosCorrientesBg} />
                                        <InfoField label="Total pasivos no corrientes" value={mock.totalPasivosNoCorrientesBg} />
                                        <InfoField label="Patrimonio" value={mock.patrimonioBGN} />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Cuentas por cobrar BG" value={mock.cuentasPorCobrarBg} />
                                        <InfoField label="Activos corrientes BG" value={mock.activosCorrientesBg} />
                                        <InfoField label="Activo no corriente BG" value={mock.activoNoCorrienteBg} />
                                        <InfoField label="Proveedores BG" value={mock.proveedoresBg} />
                                        <InfoField label="Total pasivos corrientes BG" value={mock.totalPasivosCorrientesBg} />
                                        <InfoField label="Total pasivos BG" value={mock.totalPasivosBg} />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </Grid> */}

                {/* ===================== BALANCE FAMI-EMPRESA ===================== */}
                {/* <Grid size={{ xs: 12 }}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                BALANCE FAMI-EMPRESA
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Activo familiar" value={mock.activoFamiliar} />
                                        <InfoField label="Patrimonio familiar" value={mock.patrimonioFamiliar} />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Total pasivo familiar" value={mock.totalPasivoFamiliar} />
                                        <InfoField label="Patrimonio neto fami-empresa" value={mock.patrimonioNetoFamiEmpresa} />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </Grid> */}

                {/* ===================== ACTIVOS CORRIENTES ===================== */}
                {/* <Grid size={{ xs: 12 }}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                ACTIVOS CORRIENTES
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Aplica Activo Corriente" value={mock.aplicaActivoCorriente} />
                                        <InfoField label="Bancos AC" value={mock.bancosAc} />
                                        <InfoField label="Cuentas por cobrar AC" value={mock.cuentasPorCobrarAc} />
                                        <InfoField label="Productos en proceso AC" value={mock.productosEnProcesoAc} />
                                        <InfoField label="Inventarios AC" value={mock.inventariosAc} />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Efectivo AC" value={mock.efectivoAc} />
                                        <InfoField label="Disponible AC" value={mock.disponibleAc} />
                                        <InfoField label="Materia prima AC" value={mock.materiaPrimaAc} />
                                        <InfoField label="Producto terminado AC" value={mock.productoTerminadoAc} />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </Grid> */}

                {/* ===================== ACTIVOS NO CORRIENTES ===================== */}
                {/* <Grid size={{ xs: 12 }}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="subtitle2" color="primary" fontWeight={800}>
                                ACTIVOS NO CORRIENTES
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField label="Cantidad NG" value={mock.cantidadNg} />
                                        <InfoField label="Descripción NG" value={mock.descripcionNg} />
                                        <InfoField label="Valor NG" value={mock.valorNg} />

                                        <InfoField label="Cantidad familiares" value={mock.cantidadFam} />
                                        <InfoField label="Descripción familiares" value={mock.descripcionFam} />
                                        <InfoField label="Valor familiares" value={mock.valorFam} />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <InfoField
                                            label="Total activos no corrientes familiares"
                                            value={mock.totalFamiliares}
                                        />

                                        <InfoField
                                            label="Total activos no corrientes negocio"
                                            value={mock.totalNegocio}
                                        />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </Grid> */}

            </Grid>
        </Box>
    );
};
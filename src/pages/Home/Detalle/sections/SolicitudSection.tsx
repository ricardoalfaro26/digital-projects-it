import { Grid, Paper, Typography, Box } from "@mui/material";
import { InfoField } from "../components/InfoField";
import { useEffect, useState } from "react";

import { getApplicationByNumeroSolicitud } from "../../../../services/detalle.service";
import type { CreditDetailResponse } from "../../../../types/Detalle/Solicitud/CreditDetailResponse";

export const SolicitudSection = ({ numeroSolicitud }: { numeroSolicitud: string }) => {
    const [data, setData] = useState<CreditDetailResponse | null>(null);

    // ===================== 🔥 LLAMADA BACKEND (SIN CAMBIO) =====================
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!numeroSolicitud) return;
                const response = await getApplicationByNumeroSolicitud(numeroSolicitud);
                setData(response);
            } catch (error) {
                console.error("Error cargando solicitud", error);
            }
        };

        fetchData();
    }, [numeroSolicitud]);

    if (!numeroSolicitud) {
        return (
            <div style={{ padding: 20 }}>
                Sin número de solicitud disponible
            </div>
        );
    }

    if (!data) return <div>Cargando...</div>;

    // ===================== HELPERS =====================
    const safe = (value: any) => value ?? "—";
    const money = (value: any) => (value ?? value === 0 ? `$${value}` : "—");

    // ===================== 🔥 MAPEO DATA =====================
    const solicitud = data.solicitud;
    const comerciante = data.comerciante;
    const asalariado = data.asalariado;
    const remesas = data.remesas;
    const rentista = data.rentista;
    const amaDeCasaEstudiante = data.amaDeCasaEstudiante;
    const jubilado = data.jubilado;
    const otros = data.otros;

    return (
        <Box sx={{ p: 1, maxWidth: 650, mx: "auto" }}>
            <Grid container spacing={3}>

                {/* =========================================================
                    DETALLES DEL CRÉDITO
                ========================================================= */}
                <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                        DETALLES DEL CRÉDITO
                    </Typography>

                    <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                        <Grid container spacing={1}>
                            <Grid size={{ xs: 6 }}>
                                <InfoField label="Número de Solicitud" value={solicitud?.numeroSolicitud ?? "—"} />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <InfoField label="Número Pre-Solicitud" value={solicitud?.numeroPreSolicitud ?? "—"} />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <InfoField label="Tipo de Crédito" value={solicitud?.tipoCredito ?? "—"} />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <InfoField label="Monto Solicitado" value={`$${solicitud?.montoSolicitado ?? "—"}`} highlight />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <InfoField label="Meses Plazo" value={`${solicitud?.mesesPlazo ?? "—"} meses`} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                {/* =========================================================
                    CONDICIONES DEL CRÉDITO
                ========================================================= */}
                <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                        CONDICIONES DEL CRÉDITO
                    </Typography>

                    <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                        <Grid container spacing={1}>
                            <Grid size={{ xs: 6 }}>
                                <InfoField label="Frecuencia de Pago" value={solicitud?.frecuenciaPago ?? "—"} />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <InfoField label="Fecha de Pago" value={solicitud?.fechaPago ?? "—"} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                {/* =========================================================
                    COMERCIANTE
                ========================================================= */}
                {comerciante && (
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                            COMERCIANTE
                        </Typography>

                        <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 6 }}><InfoField label="Codigo de Actividad Económica" value={safe(comerciante.codigoActividadEconomica)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Nombre Comercial" value={safe(comerciante.nombreComercial)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Nombre Legal" value={safe(comerciante.nombreLegal)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Fecha de Inicio de Negocio" value={safe(comerciante.fechaInicioNegocio)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Teléfono" value={safe(comerciante.telefono)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Dirección" value={safe(comerciante.direccion)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Ingreso por Ciclo" value={money(comerciante.ingresoPorCiclo)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Ganancia" value={money(comerciante.ganancia)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Patrimonio" value={money(comerciante.patrimonio)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Cantidad de Empleados" value={safe(comerciante.cantidadEmpleados)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Ciclo de Negocio" value={safe(comerciante.cicloNegocio)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Cliente Principal 1" value={safe(comerciante.clientePrincipal1)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Cliente Principal 2" value={safe(comerciante.clientePrincipal2)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Proveedor Principal 1" value={safe(comerciante.proveedorPrincipal1)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Proveedor Principal 2" value={safe(comerciante.proveedorPrincipal2)} /></Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                )}

                {/* ================= ASALARIADO ================= */}
                {asalariado && (
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                            ASALARIADO
                        </Typography>

                        <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 6 }}><InfoField label="Código de Actividad Económica" value={safe(asalariado.codigoActividadEconomica)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Tipo de Asalariado" value={safe(asalariado.tipoAsalariado)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Nombre de Empresa" value={safe(asalariado.nombreEmpresa)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Cargo" value={safe(asalariado.cargo)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Salario Mensual" value={money(asalariado.salarioMensual)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Recibe Bonos" value={safe(asalariado.recibeBonos ? "Sí" : "No")} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Ciclo de Bonos" value={safe(asalariado.cicloBonos)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Monto de Bonos" value={money(asalariado.montoBonos)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Fecha de Ingreso" value={safe(asalariado.fechaIngreso)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Teléfono" value={safe(asalariado.telefono)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Dirección" value={safe(asalariado.direccion)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Departamento" value={safe(asalariado.departamento)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Municipio" value={safe(asalariado.municipio)} /></Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                )}

                {/* ================= REMESAS ================= */}
                {remesas && (
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                            REMESAS
                        </Typography>

                        <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 6 }}><InfoField label="Fuente de Fondos" value={safe(remesas.fuenteFondos)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Destino de Remesas" value={safe(remesas.destinoRemesasId)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Ciclo de Ingresos" value={safe(remesas.cicloIngresos)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Cantidad Promedio" value={safe(remesas.cantidadPromedio)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Monto Promedio" value={money(remesas.montoPromedio)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Ingresos segun Precalificación" value={money(remesas.ingresoPrecalificacion)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="País Origen" value={safe(remesas.paisOrigen)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Nombre del Remitente" value={safe(remesas.nombreRemitente)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Tipo de Relación" value={safe(remesas.tipoRelacion)} /></Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                )}

                {/* ================= RENTISTA ================= */}
                {rentista && (
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                            RENTISTA
                        </Typography>

                        <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 6 }}><InfoField label="Codigo de Actividad Económica" value={safe(rentista.codigoActividadEconomica)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Fuente de Ingresos" value={safe(rentista.fuenteIngresos)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Ciclo de Alquiler" value={safe(rentista.cicloAlquiler)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Ingresos" value={money(rentista.ingresos)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Tipo de Alquiler" value={safe(rentista.tipoAlquiler)} /></Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                )}

                {/* ================= AMA DE CASA ================= */}
                {amaDeCasaEstudiante && (
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                            AMA DE CASA / ESTUDIANTE
                        </Typography>

                        <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 6 }}><InfoField label="Codigo de Actividad Económica" value={safe(amaDeCasaEstudiante.codigoActividadEconomica)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Fuente de Ingresos" value={safe(amaDeCasaEstudiante.fuenteIngresos)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Ciclo de Ingresos" value={safe(amaDeCasaEstudiante.cicloIngresos)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Ingresos" value={money(amaDeCasaEstudiante.ingresos)} /></Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                )}

                {/* ================= JUBILADO ================= */}
                {jubilado && (
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                            JUBILADO
                        </Typography>

                        <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 6 }}><InfoField label="Institución" value={safe(jubilado.institucion)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Tipo de Pensión" value={safe(jubilado.tipoPension)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Ciclo de Ingresos" value={safe(jubilado.cicloIngresos)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Monto de Pensión" value={money(jubilado.montoPension)} /></Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                )}

                {/* ================= OTROS ================= */}
                {otros && (
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="subtitle2" color="primary" fontWeight={800} sx={{ mb: 2 }}>
                            OTROS
                        </Typography>

                        <Paper variant="outlined" sx={{ p: 2, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 6 }}><InfoField label="Código de Actividad Económica" value={safe(otros.codigoActividadEconomica)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Fuente de Ingresos" value={safe(otros.fuenteIngresos)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Ciclo de Ingresos" value={safe(otros.cicloIngresos)} /></Grid>
                                <Grid size={{ xs: 6 }}><InfoField label="Ingresos" value={money(otros.ingresos)} /></Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                )}

            </Grid>
        </Box>
    );
};
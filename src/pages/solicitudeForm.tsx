import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import { NavBar } from "../components/NavBar";
import { LeftFormsMenu } from "../components/LeftFormsMenu";
import { FormInput } from "../components/FormInput";

type SolicitudFormState = {
    [key: string]: string;

    // =========================
    // ✅ COLUMNA IZQUIERDA
    // =========================
    consultar: string;
    giro: string;
    segmento: string;
    ventas: string;
    patrimonio: string;
    actualizarDatos: string;
    tipoCredito: string;
    frecuencia: string;
    tasaInteres: string;
    fechaPago: string;
    historialCrediticio: string;

    // =========================
    // ✅ COLUMNA DERECHA
    // =========================
    antiguedadNegocioLaboralMeses: string;
    actividadEconomica: string;
    segmentoClienteSubGrupo: string;
    utilidad: string;
    fechaNacimiento: string;
    segmentoClienteSubGrupo2: string;
    monto: string;
    plazoMeses: string;
    numeroCuotas: string;
    cuota: string;
    validarPoliticas: string;

    // ✅ (AGREGAR MÁS CAMPOS AQUÍ)
};

export const SolicitudeForm = () => {
    // ✅ Datos quemados (demo) - no editables
    const [form, setForm] = useState<SolicitudFormState>({
        // Izquierda
        consultar: "OK",
        giro: "ELABORACION DE VINOS",
        segmento: "Microempresario",
        ventas: "1760",
        patrimonio: "6518",
        actualizarDatos: "OK",
        tipoCredito: "Vivienda Individual",
        frecuencia: "Mensual",
        tasaInteres: "32",
        fechaPago: "2026-02-23",
        historialCrediticio: "",

        // Derecha
        antiguedadNegocioLaboralMeses: "168",
        actividadEconomica: "ELABORACION DE VINOS",
        segmentoClienteSubGrupo: "MC de Acumulación Simple",
        utilidad: "950",
        fechaNacimiento: "1990-10-08",
        segmentoClienteSubGrupo2: "MC de Acumulación Simple",
        monto: "5000",
        plazoMeses: "48",
        numeroCuotas: "48",
        cuota: "150",
        validarPoliticas: "",
    });

    // Se mantiene por compatibilidad (disabled no dispara cambios)
    const handleFieldChange = (identifier: string, value: string) => {
        setForm((prev) => ({
            ...prev,
            [identifier]: value,
        }));
    };

    return (
        <>
            <NavBar />

            <Box sx={{ display: "flex", gap: 2, p: 2, width: "100%" }}>
                <LeftFormsMenu />

                <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                    <Typography variant="h7" fontWeight={700} sx={{ mt: 1 }}>
                        Solicitud
                    </Typography>

                    <Paper elevation={3} sx={{ mt: 2, p: 2, borderRadius: 2, width: "100%" }}>
                        <Typography fontWeight={700} sx={{ mb: 2 }}>
                            Datos de la solicitud
                        </Typography>

                        {/* ✅ 2 columnas ocupando todo el ancho, campos hacia abajo */}
                        <Box sx={{ display: "flex", gap: 3, width: "100%", px: 1 }}>
                            {/* ===================== */}
                            {/* ✅ COLUMNA IZQUIERDA */}
                            {/* ===================== */}
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Stack spacing={2}>
                                    <FormInput
                                        identifier="consultar"
                                        label="Consultar"
                                        value={form.consultar}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="giro"
                                        label="Giro"
                                        value={form.giro}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="segmento"
                                        label="Segmento"
                                        value={form.segmento}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="ventas"
                                        label="Ventas"
                                        value={form.ventas}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="patrimonio"
                                        label="Patrimonio"
                                        value={form.patrimonio}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="actualizarDatos"
                                        label="Actualizar Datos"
                                        value={form.actualizarDatos}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="tipoCredito"
                                        label="Tipo de crédito"
                                        value={form.tipoCredito}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="frecuencia"
                                        label="Frecuencia"
                                        value={form.frecuencia}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="tasaInteres"
                                        label="Tasa de interés"
                                        value={form.tasaInteres}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="fechaPago"
                                        label="Fecha de pago"
                                        value={form.fechaPago}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="historialCrediticio"
                                        label="Historial crediticio"
                                        value={form.historialCrediticio}
                                        onValueChange={handleFieldChange}
                                        placeholder="—"
                                        disabled
                                    />

                                    {/* ✅ Agregar más campos aquí (izquierda) */}
                                </Stack>
                            </Box>

                            {/* ===================== */}
                            {/* ✅ COLUMNA DERECHA */}
                            {/* ===================== */}
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Stack spacing={2}>
                                    <FormInput
                                        identifier="antiguedadNegocioLaboralMeses"
                                        label="Antigüedad negocio/Laboral (Meses)"
                                        value={form.antiguedadNegocioLaboralMeses}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="actividadEconomica"
                                        label="Actividad Económica"
                                        value={form.actividadEconomica}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="segmentoClienteSubGrupo"
                                        label="Segmento del cliente - subGrupo"
                                        value={form.segmentoClienteSubGrupo}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="utilidad"
                                        label="Utilidad"
                                        value={form.utilidad}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="fechaNacimiento"
                                        label="Fecha de nacimiento"
                                        value={form.fechaNacimiento}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="segmentoClienteSubGrupo2"
                                        label="Segmento del cliente - subGrupo 2"
                                        value={form.segmentoClienteSubGrupo2}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="monto"
                                        label="Monto"
                                        value={form.monto}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="plazoMeses"
                                        label="Plazo en meses"
                                        value={form.plazoMeses}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="numeroCuotas"
                                        label="N° de cuotas"
                                        value={form.numeroCuotas}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="cuota"
                                        label="Cuota"
                                        value={form.cuota}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="validarPoliticas"
                                        label="Validar Políticas"
                                        value={form.validarPoliticas}
                                        onValueChange={handleFieldChange}
                                        placeholder="—"
                                        disabled
                                    />

                                    {/* ✅ Agregar más campos aquí (derecha) */}
                                </Stack>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </>
    );
};

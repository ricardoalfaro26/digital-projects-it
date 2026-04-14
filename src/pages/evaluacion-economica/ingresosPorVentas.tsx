import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type IngresosPorVentasFormState = {
    [key: string]: string;
    // =========================
    // ✅ COLUMNA IZQUIERDA
    // =========================
    validarPoliticas: string;
    tipoActividad: string;
    lunes: string;
    miercoles: string;
    viernes: string;
    domingo: string;
    ingresosPorVenta: string;
    // =========================
    // ✅ COLUMNA DERECHA
    // =========================
    consultarEvaluacion: string;
    tipoIngreso: string;
    martes: string;
    jueves: string;
    sabado: string;
    ventasDiarias: string;
    // ✅ (AGREGAR MÁS CAMPOS AQUÍ)
    // nuevoCampo: string;
};
export const IngresosPorVentas = () => {
    // ✅ Datos quemados (demo) según la imagen
    const [form] = useState<IngresosPorVentasFormState>({
        // Izquierda
        validarPoliticas: "OK",
        tipoActividad: "Comercio, producción y servicio",
        lunes: "70",
        miercoles: "75",
        viernes: "75",
        domingo: "0",
        ingresosPorVenta: "1760",
        // Derecha
        consultarEvaluacion: "No se encontró ninguna evaluación",
        tipoIngreso: "Diaria",
        martes: "70",
        jueves: "70",
        sabado: "80",
        ventasDiarias: "1760",
    });
    
    const handleFieldChange = (identifier: string, value: string) => {
        
        void identifier;
        void value;
        
    };
    return (
        <>
            <NavBar />
            <Box sx={{ display: "flex", gap: 2, p: 2, width: "100%" }}>
                <LeftFormsMenu />
                <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                    <Typography variant="h7" fontWeight={700} sx={{ mt: 1 }}>
                        Ingresos por ventas
                    </Typography>
                    <Paper
                        elevation={3}
                        sx={{
                            mt: 2,
                            p: 2,
                            borderRadius: 2,
                            width: "100%",
                        }}
                    >
                        <Typography fontWeight={700} sx={{ mb: 2 }}>
                            Datos de ingresos por ventas
                        </Typography>
                        {/* ✅ 2 columnas ocupando todo el ancho, campos hacia abajo */}
                        <Box sx={{ display: "flex", gap: 3, width: "100%" }}>
                            {/* ===================== */}
                            {/*  COLUMNA IZQUIERDA */}
                            {/* ===================== */}
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Stack spacing={2}>
                                    <FormInput
                                        identifier="validarPoliticas"
                                        label="Validar políticas"
                                        value={form.validarPoliticas}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />
                                    <FormInput
                                        identifier="tipoActividad"
                                        label="Tipo de actividad"
                                        value={form.tipoActividad}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />
                                    <FormInput
                                        identifier="lunes"
                                        label="Lunes"
                                        value={form.lunes}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />
                                    <FormInput
                                        identifier="miercoles"
                                        label="Miércoles"
                                        value={form.miercoles}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />
                                    <FormInput
                                        identifier="viernes"
                                        label="Viernes"
                                        value={form.viernes}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />
                                    <FormInput
                                        identifier="domingo"
                                        label="Domingo"
                                        value={form.domingo}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />
                                    <FormInput
                                        identifier="ingresosPorVenta"
                                        label="Ingresos por venta"
                                        value={form.ingresosPorVenta}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                </Stack>
                            </Box>
                            {/* ==================== */}
                            {/*  COLUMNA DERECHA */}
                            {/* ==================== */}
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Stack spacing={2}>
                                    <FormInput
                                        identifier="consultarEvaluacion"
                                        label="Consultar evaluación"
                                        value={form.consultarEvaluacion}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />
                                    <FormInput
                                        identifier="tipoIngreso"
                                        label="Tipo de ingreso"
                                        value={form.tipoIngreso}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />
                                    <FormInput
                                        identifier="martes"
                                        label="Martes"
                                        value={form.martes}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />
                                    <FormInput
                                        identifier="jueves"
                                        label="Jueves"
                                        value={form.jueves}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />
                                    <FormInput
                                        identifier="sabado"
                                        label="Sábado"
                                        value={form.sabado}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />
                                    <FormInput
                                        identifier="ventasDiarias"
                                        label="Ventas diarias"
                                        value={form.ventasDiarias}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />
                                    {/*  (AGREGAR MÁS CAMPOS EN COLUMNA DERECHA) */}

                                </Stack>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </>
    );
};

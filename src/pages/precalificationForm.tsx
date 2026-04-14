import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import { NavBar } from "../components/NavBar";
import { LeftFormsMenu } from "../components/LeftFormsMenu";
import { FormInput } from "../components/FormInput";

type PrecalificacionFormState = {
    [key: string]: string;

    // Columna izquierda
    dominioProspecto: string;
    documento: string;
    consultar: string;
    primerNombre: string;
    tercerNombre: string;
    segundoApellido: string;
    consultarCompartir: string;
    telefonoCelular: string;
    numeroDocumentoPrincipal: string;
    calificacionInterna: string;
    equifax: string;
    generarinstancia: string;

    // Columna derecha
    busqueda: string;
    tipoSolicitud: string;
    cuentaCliente: string;
    segundoNombre: string;
    primerApellido: string;
    apellidoCasada: string;
    datosPersonales: string;
    correoElectronico: string;
    nit: string;
    ssf: string;
    infored: string;

    // ✅ (AGREGAR MÁS CAMPOS AQUÍ)
};

export const PrecalificationForm = () => {
    // ✅ Datos quemados (demo) - no editables
    const [form, setForm] = useState<PrecalificacionFormState>({
        // Izquierda
        dominioProspecto: "Propio",
        documento: "358437",
        consultar: "Cliente Existente",
        primerNombre: "JOSE",
        tercerNombre: "",
        segundoApellido: "LON",
        consultarCompartir: "Si",
        telefonoCelular: "78152020",
        numeroDocumentoPrincipal: "043649194",
        calificacionInterna: "P7",
        equifax: "equifax",
        generarinstancia: "ok",

        // Derecha
        busqueda: "Cuenta Cliente",
        tipoSolicitud: "Nuevo",
        cuentaCliente: "358437",
        segundoNombre: "MARIO",
        primerApellido: "MARQUEN",
        apellidoCasada: "",
        datosPersonales: "Si",
        correoElectronico: "user.user@gmail.com",
        nit: "06020810901015",
        ssf: "Solicitud sin datos",
        infored: "infored",
    });

    // Se mantiene por compatibilidad (aunque disabled no dispara cambios)
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
                        Precalificación
                    </Typography>

                    <Paper elevation={3} sx={{ mt: 2, p: 2, borderRadius: 2, width: "100%" }}>
                        <Typography fontWeight={700} sx={{ mb: 2 }}>
                            Datos del solicitante
                        </Typography>

                        {/* ✅ 2 columnas ocupando todo el ancho, campos hacia abajo */}
                        <Box sx={{ display: "flex", gap: 3, width: "100%", px: 1 }}>
                            {/* ===================== */}
                            {/* ✅ COLUMNA IZQUIERDA */}
                            {/* ===================== */}
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Stack spacing={2}>
                                    <FormInput
                                        identifier="dominioProspecto"
                                        label="Dominio de prospecto"
                                        value={form.dominioProspecto}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="documento"
                                        label="Documento"
                                        value={form.documento}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="consultar"
                                        label="Consultar"
                                        value={form.consultar}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="primerNombre"
                                        label="Primer nombre"
                                        value={form.primerNombre}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="tercerNombre"
                                        label="Tercer nombre"
                                        value={form.tercerNombre}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="segundoApellido"
                                        label="Segundo apellido"
                                        value={form.segundoApellido}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="consultarCompartir"
                                        label="Consultar/Compartir"
                                        value={form.consultarCompartir}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="telefonoCelular"
                                        label="Teléfono celular"
                                        value={form.telefonoCelular}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="numeroDocumentoPrincipal"
                                        label="Número de Documento Principal"
                                        value={form.numeroDocumentoPrincipal}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="calificacionInterna"
                                        label="Calificación interna"
                                        value={form.calificacionInterna}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="equifax"
                                        label="Equifax"
                                        value={form.equifax}
                                        onValueChange={handleFieldChange}
                                        placeholder="—"
                                        disabled
                                    />
                                    <FormInput
                                        identifier="generarinstancia"
                                        label="Generar instancia"
                                        value={form.generarinstancia}
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
                                        identifier="busqueda"
                                        label="Búsqueda"
                                        value={form.busqueda}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="tipoSolicitud"
                                        label="Tipo solicitud"
                                        value={form.tipoSolicitud}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="cuentaCliente"
                                        label="Cuenta Cliente"
                                        value={form.cuentaCliente}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="segundoNombre"
                                        label="Segundo nombre"
                                        value={form.segundoNombre}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="primerApellido"
                                        label="Primer apellido"
                                        value={form.primerApellido}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="apellidoCasada"
                                        label="Apellido casada"
                                        value={form.apellidoCasada}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="datosPersonales"
                                        label="Datos personales"
                                        value={form.datosPersonales}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="correoElectronico"
                                        label="Correo electrónico"
                                        value={form.correoElectronico}
                                        onValueChange={handleFieldChange}
                                        placeholder="—"
                                        disabled
                                    />

                                    <FormInput
                                        identifier="nit"
                                        label="NIT"
                                        value={form.nit}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="ssf"
                                        label="SSF"
                                        value={form.ssf}
                                        onValueChange={handleFieldChange}
                                        disabled
                                    />

                                    <FormInput
                                        identifier="infored"
                                        label="Infored"
                                        value={form.infored}
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

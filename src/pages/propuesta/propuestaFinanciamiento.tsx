import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type PropuestaFinanciamientoFormState = {
  [key: string]: string;

  // =======================
  // Columna izquierda
  // =======================
  consultarCondicionesCredito: string;
  tipoCredito: string;
  monto: string;
  numeroCuotas: string;
  tasaInteres: string;
  aplicaSeguroDeDeuda: string;
  extraPrima: string;
  destinoSSF: string;
  unidadMedida: string;

  // ✅ NUEVOS (imagen) - izquierda
  microseguroSalud: string;
  planDePagos: string;
  validarDatos: string;
  anexoPlantillaEvaluacionMicroempresa: string;

  // =======================
  // Columna derecha
  // =======================
  tipoSolicitud: string;
  productoDestino: string;
  frecuencia: string;
  consultarTasa: string;
  fechaPagoPrimeraCuota: string;
  tipoSeguro: string;
  tieneSeguroDanos: string;
  validarDestino: string;
  cantidad: string;

  // ✅ NUEVOS (imagen) - derecha
  microseguroVida: string;
  formaDesembolso: string;
  validarPoliticas: string;
  observacionesGenerales: string;
};

export const PropuestaFinanciamiento = () => {
  const [form, setForm] = useState<PropuestaFinanciamientoFormState>({
    // Izquierda
    consultarCondicionesCredito: "OK",
    tipoCredito: "Vivienda Individual",
    monto: "5000",
    numeroCuotas: "48",
    tasaInteres: "32",
    aplicaSeguroDeDeuda: "Sí",
    extraPrima: "99.75",
    destinoSSF: "AMPLIACION Y REPARACION DE VIVIENDA",
    unidadMedida: "Metros Cuadrados",

    // ✅ Nuevos (izquierda)
    microseguroSalud: "Sí",
    planDePagos: "Index and length must refer to a location within the string.Parameter na",
    validarDatos: "OK",
    anexoPlantillaEvaluacionMicroempresa: "",

    // Derecha
    tipoSolicitud: "Nuevo",
    productoDestino: "Mejora de vivienda      1041",
    frecuencia: "30",
    consultarTasa: "OK",
    fechaPagoPrimeraCuota: "2026-02-23",
    tipoSeguro: "Seguro de deuda sobre Monto",
    tieneSeguroDanos: "No",
    validarDestino: "1",
    cantidad: "30",

    // ✅ Nuevos (derecha)
    microseguroVida: "Sí",
    formaDesembolso: "Cheque",
    validarPoliticas:
      "La Solicitud posee politicas de tipo ExcepcionPolitica 133 (E): Solicitud no",
    observacionesGenerales: "",
  });

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
            Propuesta de Financiamiento
          </Typography>

        <Paper elevation={3} sx={{ mt: 2, p: 2, borderRadius: 2, width: "100%" }}> 

            {/* ✅ 2 columnas (sin Grid) */}
            <Box sx={{ display: "flex", gap: 3, width: "100%" }}>
              {/* ===================== */}
              {/* ✅ COLUMNA IZQUIERDA */}
              {/* ===================== */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="consultarCondicionesCredito"
                    label="Consultar condiciones crédito"
                    value={form.consultarCondicionesCredito}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="tipoCredito"
                    label="Tipo de crédito"
                    value={form.tipoCredito}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="monto"
                    label="Monto"
                    value={form.monto}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="numeroCuotas"
                    label="N° de cuotas"
                    value={form.numeroCuotas}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="tasaInteres"
                    label="Tasa de interés %"
                    value={form.tasaInteres}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="aplicaSeguroDeDeuda"
                    label="Aplica seguro de deuda"
                    value={form.aplicaSeguroDeDeuda}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="extraPrima"
                    label="Extra prima"
                    value={form.extraPrima}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="destinoSSF"
                    label="Destino SSF"
                    value={form.destinoSSF}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="unidadMedida"
                    label="Unidad de medida"
                    value={form.unidadMedida}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  {/* ✅ NUEVOS (imagen) */}
                  <FormInput
                    identifier="microseguroSalud"
                    label="Microseguro Salud"
                    value={form.microseguroSalud}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="planDePagos"
                    label="Plan de pagos"
                    value={form.planDePagos}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="validarDatos"
                    label="Validar datos"
                    value={form.validarDatos}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="anexoPlantillaEvaluacionMicroempresa"
                    label="Anexo plantilla de evaluación microempresa"
                    value={form.anexoPlantillaEvaluacionMicroempresa}
                    onValueChange={handleFieldChange}
                    disabled
                  />
                </Stack>
              </Box>

              {/* ===================== */}
              {/* ✅ COLUMNA DERECHA */}
              {/* ===================== */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="tipoSolicitud"
                    label="Tipo solicitud"
                    value={form.tipoSolicitud}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="productoDestino"
                    label="Producto-Destino"
                    value={form.productoDestino}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="frecuencia"
                    label="Frecuencia"
                    value={form.frecuencia}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="consultarTasa"
                    label="Consultar tasa"
                    value={form.consultarTasa}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="fechaPagoPrimeraCuota"
                    label="Fecha de pago primera cuota"
                    value={form.fechaPagoPrimeraCuota}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="tipoSeguro"
                    label="Tipo seguro"
                    value={form.tipoSeguro}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="tieneSeguroDanos"
                    label="Tiene seguro de daños"
                    value={form.tieneSeguroDanos}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="validarDestino"
                    label="Validar destino"
                    value={form.validarDestino}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="cantidad"
                    label="Cantidad"
                    value={form.cantidad}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  {/* ✅ NUEVOS (imagen) */}
                  <FormInput
                    identifier="microseguroVida"
                    label="Microseguro vida"
                    value={form.microseguroVida}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="formaDesembolso"
                    label="Forma desembolso"
                    value={form.formaDesembolso}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="validarPoliticas"
                    label="Validar políticas"
                    value={form.validarPoliticas}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="observacionesGenerales"
                    label="Observaciones generales"
                    value={form.observacionesGenerales}
                    onValueChange={handleFieldChange}
                    disabled
                  />
                </Stack>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

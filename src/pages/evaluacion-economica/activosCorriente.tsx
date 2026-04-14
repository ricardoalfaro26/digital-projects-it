import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type ActivosCorrientesFormState = {
  [key: string]: string;

  // Columna izquierda
  aplicaActivoCorriente: string;
  bancosAc: string;
  cuentasPorCobrarAc: string;
  productosEnProcesoAc: string;
  inventariosAc: string;

  // Columna derecha
  efectivoAc: string;
  disponibleAc: string;
  materiaPrimaAc: string;
  productoTerminadoAc: string;

  // ✅ (AGREGAR MÁS CAMPOS AQUÍ)
};

export const ActivosCorriente = () => {
  // ✅ Datos quemados (demo) - no editables por ahora
  const [form, setForm] = useState<ActivosCorrientesFormState>({
    aplicaActivoCorriente: "Si",
    bancosAc: "",
    cuentasPorCobrarAc: "",
    productosEnProcesoAc: "",
    inventariosAc: "492.5",

    efectivoAc: "100",
    disponibleAc: "100",
    materiaPrimaAc: "492.50",
    productoTerminadoAc: "",
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
            Activos corrientes
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
              Datos de activos corrientes
            </Typography>

            {/* ✅ 2 columnas que ocupan todo el ancho, campos hacia abajo */}
            <Box sx={{ display: "flex", gap: 3, width: "100%", px: 1 }}>
              {/* ===================== */}
              {/* ✅ COLUMNA IZQUIERDA */}
              {/* ===================== */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="aplicaActivoCorriente"
                    label="Aplica Activo Corriente"
                    value={form.aplicaActivoCorriente}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="bancosAc"
                    label="Bancos AC"
                    value={form.bancosAc}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="cuentasPorCobrarAc"
                    label="Cuentas por cobrar AC"
                    value={form.cuentasPorCobrarAc}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="productosEnProcesoAc"
                    label="Productos en proceso AC"
                    value={form.productosEnProcesoAc}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="inventariosAc"
                    label="Inventarios AC"
                    value={form.inventariosAc}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  {/* ✅ (AGREGAR MÁS CAMPOS EN COLUMNA IZQUIERDA) */}
                  {/*
                  <FormInput
                    identifier="nuevoCampoIzq"
                    label="Nuevo campo"
                    value={form.nuevoCampoIzq}
                    onValueChange={handleFieldChange}
                    disabled
                  />
                  */}
                </Stack>
              </Box>

              {/* ===================== */}
              {/* ✅ COLUMNA DERECHA */}
              {/* ===================== */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="efectivoAc"
                    label="Efectivo AC"
                    value={form.efectivoAc}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="disponibleAc"
                    label="Disponible AC"
                    value={form.disponibleAc}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="materiaPrimaAc"
                    label="Materia prima AC"
                    value={form.materiaPrimaAc}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="productoTerminadoAc"
                    label="Producto terminado AC"
                    value={form.productoTerminadoAc}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  {/* ✅ (AGREGAR MÁS CAMPOS EN COLUMNA DERECHA) */}
                  {/*
                  <FormInput
                    identifier="nuevoCampoDer"
                    label="Nuevo campo"
                    value={form.nuevoCampoDer}
                    onValueChange={handleFieldChange}
                    disabled
                  />
                  */}
                </Stack>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default ActivosCorriente;


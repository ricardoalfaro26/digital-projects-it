import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type BalanceGeneralNegocioFormState = {
  [key: string]: string;

  // Columna izquierda
  disponibleBg: string;
  inventariosBg: string;
  mobiliarioMaquinariaEquipoBg: string;
  totalActivosBg: string;
  pasivosCorrientesBg: string;
  totalPasivosNoCorrientesBg: string;
  patrimonio: string;

  // Columna derecha
  cuentasPorCobrarBg: string;
  activosCorrientesBg: string;
  activoNoCorrienteBg: string;
  proveedoresBg: string;
  totalPasivosCorrientesBg: string;
  totalPasivosBg: string;
};

export const BalanceGeneralNegocio = () => {
  const [form, setForm] = useState<BalanceGeneralNegocioFormState>({
   
    disponibleBg: "100",
    cuentasPorCobrarBg: "0",

    inventariosBg: "492.5",
    activosCorrientesBg: "592.5",

    mobiliarioMaquinariaEquipoBg: "6725",
    activoNoCorrienteBg: "6725",

    totalActivosBg: "7317.5",
    proveedoresBg: "0",

    pasivosCorrientesBg: "400",
    totalPasivosCorrientesBg: "400",

    totalPasivosNoCorrientesBg: "400",
    totalPasivosBg: "800",

    patrimonio: "6517.5",
  });

  const handleFieldChange = (identifier: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [identifier]: value,
    }));
  };

  const labelTopProps = { InputLabelProps: { shrink: true } as any };

  return (
    <>
      <NavBar />

      <Box sx={{ display: "flex", gap: 2, p: 2, width: "100%" }}>
        <LeftFormsMenu />

        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography variant="h7" fontWeight={700} sx={{ mt: 1 }}>
            Balance general del negocio
          </Typography>

          <Paper elevation={3} sx={{ mt: 2, p: 2, borderRadius: 2, width: "100%" }}>
            {/* ✅ 2 columnas sin Grid */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                width: "100%",
                alignItems: "flex-start",
              }}
            >
              
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="disponibleBg"
                    label="Disponible BG"
                    value={form.disponibleBg}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                    textFieldProps={labelTopProps}
                  />

                  <FormInput
                    identifier="inventariosBg"
                    label="Inventarios BG"
                    value={form.inventariosBg}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                    textFieldProps={labelTopProps}
                  />

                  <FormInput
                    identifier="mobiliarioMaquinariaEquipoBg"
                    label="Mobiliario, maquinaria y equipo BG"
                    value={form.mobiliarioMaquinariaEquipoBg}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                    textFieldProps={labelTopProps}
                  />

                  <FormInput
                    identifier="totalActivosBg"
                    label="Total de activos BG"
                    value={form.totalActivosBg}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                    textFieldProps={labelTopProps}
                  />

                  <FormInput
                    identifier="pasivosCorrientesBg"
                    label="Pasivos corrientes BG"
                    value={form.pasivosCorrientesBg}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                    textFieldProps={labelTopProps}
                  />

                  <FormInput
                    identifier="totalPasivosNoCorrientesBg"
                    label="Total pasivos no corrientes"
                    value={form.totalPasivosNoCorrientesBg}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                    textFieldProps={labelTopProps}
                  />

                  <FormInput
                    identifier="patrimonio"
                    label="Patrimonio"
                    value={form.patrimonio}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                    textFieldProps={labelTopProps}
                  />

                  
                </Stack>
              </Box>

             
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="cuentasPorCobrarBg"
                    label="Cuentas por cobrar BG"
                    value={form.cuentasPorCobrarBg}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                    textFieldProps={labelTopProps}
                  />

                  <FormInput
                    identifier="activosCorrientesBg"
                    label="Activos corrientes BG"
                    value={form.activosCorrientesBg}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                    textFieldProps={labelTopProps}
                  />

                  <FormInput
                    identifier="activoNoCorrienteBg"
                    label="Activo no corriente BG"
                    value={form.activoNoCorrienteBg}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                    textFieldProps={labelTopProps}
                  />

                  <FormInput
                    identifier="proveedoresBg"
                    label="Proveedores BG"
                    value={form.proveedoresBg}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                    textFieldProps={labelTopProps}
                  />

                  <FormInput
                    identifier="totalPasivosCorrientesBg"
                    label="Total pasivos corrientes BG"
                    value={form.totalPasivosCorrientesBg}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                    textFieldProps={labelTopProps}
                  />

                  <FormInput
                    identifier="totalPasivosBg"
                    label="Total pasivos BG"
                    value={form.totalPasivosBg}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                    textFieldProps={labelTopProps}
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

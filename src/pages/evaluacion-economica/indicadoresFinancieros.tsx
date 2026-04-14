import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type IndicadoresFinancierosFormState = {
  [key: string]: string;

  // Columna izquierda
  liquidez: string;
  rotacionCxc: string;
  rotacionCuentasPorPagar: string;
  rentabilidadBrutaNegocio: string;
  roa: string;

  // Columna derecha
  capitalTrabajoNeto: string;
  rotacionInventarios: string;
  endeudamientoTotal: string;
  rentabilidadNetaNegocio: string;
  roe: string;
};

export const IndicadoresFinancieros = () => {
  const [form, setForm] = useState<IndicadoresFinancierosFormState>({
    // ✅ Datos quemados demo (como la imagen)
    liquidez: "1.48",
    rotacionCxc: "0",
    rotacionCuentasPorPagar: "0",
    rentabilidadBrutaNegocio: "63.15",
    roa: "0.13",

    capitalTrabajoNeto: "192.5",
    rotacionInventarios: "22.78",
    endeudamientoTotal: "10.93",
    rentabilidadNetaNegocio: "54",
    roe: "0.15",
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
            Indicadores financieros
          </Typography>

          <Paper elevation={3} sx={{ mt: 2, p: 2, borderRadius: 2, width: "100%" }}>
            
            <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
              
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="liquidez"
                    label="Liquidez"
                    value={form.liquidez}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="rotacionCxc"
                    label="Rotación de CxC"
                    value={form.rotacionCxc}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="rotacionCuentasPorPagar"
                    label="Rotación de cuentas por pagar"
                    value={form.rotacionCuentasPorPagar}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="rentabilidadBrutaNegocio"
                    label="Rentabilidad bruta del negocio"
                    value={form.rentabilidadBrutaNegocio}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="roa"
                    label="ROA"
                    value={form.roa}
                    onValueChange={handleFieldChange}
                    disabled
                  />
 
                </Stack>
              </Box>

              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="capitalTrabajoNeto"
                    label="Capital de trabajo neto"
                    value={form.capitalTrabajoNeto}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="rotacionInventarios"
                    label="Rotación de inventarios"
                    value={form.rotacionInventarios}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="endeudamientoTotal"
                    label="Endeudamiento total"
                    value={form.endeudamientoTotal}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="rentabilidadNetaNegocio"
                    label="Rentabilidad neta del negocio"
                    value={form.rentabilidadNetaNegocio}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="roe"
                    label="ROE"
                    value={form.roe}
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

export default IndicadoresFinancieros;

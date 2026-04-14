
import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type EstadoDeResultadoFormState = {
  [key: string]: string;

  totalIngresosAg: string;
  totalEgresosAg: string;

  ingresosTotales: string;
  egresosPorCompraEr: string;

  utilidadBruta: string;
  gastosOperativosEr: string;

  utilidadOperativa: string;
  gastosFinancieros: string;

  utilidadNetaDelNegocio: string;
  otrosIngresos: string;

  egresosUnidadFamiliar: string;
  excedenteFamiempresa: string;
};

export const EstadoDeResultados = () => {
  
  const [form, setForm] = useState<EstadoDeResultadoFormState>({
    totalIngresosAg: "0",
    totalEgresosAg: "0",

    ingresosTotales: "1760",
    egresosPorCompraEr: "648.56",

    utilidadBruta: "1111.44",
    gastosOperativosEr: "161",

    utilidadOperativa: "950.44",
    gastosFinancieros: "0",

    utilidadNetaDelNegocio: "950.44",
    otrosIngresos: "0",

    egresosUnidadFamiliar: "311.5",
    excedenteFamiempresa: "638.94",
  });

  const handleFieldChange = (identifier: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [identifier]: value,
    }));
  };

  
  const fieldProps = {
    disabled: true,
    textFieldProps: {
      InputLabelProps: { shrink: true }, 
    },
  } as const;
   return (
    <>
      <NavBar />

      <Box sx={{ display: "flex", gap: 2, p: 2, width: "100%" }}>
        <LeftFormsMenu />

        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography variant="h7" fontWeight={700} sx={{ mt: 1 }}>
            Estado de resultado
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
            
            <Box
              sx={{
                display: "flex",
                gap: 3,
                width: "100%",
                alignItems: "flex-start",
              }}
            >
       
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="totalIngresosAg"
                    label="Total ingresos ag"
                    value={form.totalIngresosAg}
                    onValueChange={handleFieldChange}
                    required
                    {...fieldProps}
                  />

                  <FormInput
                    identifier="ingresosTotales"
                    label="Ingresos totales"
                    value={form.ingresosTotales}
                    onValueChange={handleFieldChange}
                    required
                    {...fieldProps}
                  />

                  <FormInput
                    identifier="utilidadBruta"
                    label="Utilidad bruta"
                    value={form.utilidadBruta}
                    onValueChange={handleFieldChange}
                    required
                    {...fieldProps}
                  />

                  <FormInput
                    identifier="utilidadOperativa"
                    label="Utilidad operativa"
                    value={form.utilidadOperativa}
                    onValueChange={handleFieldChange}
                    required
                    {...fieldProps}
                  />

                  <FormInput
                    identifier="utilidadNetaDelNegocio"
                    label="Utilidad neta del negocio"
                    value={form.utilidadNetaDelNegocio}
                    onValueChange={handleFieldChange}
                    required
                    {...fieldProps}
                  />

                  <FormInput
                    identifier="egresosUnidadFamiliar"
                    label="Egresos de la unidad familiar"
                    value={form.egresosUnidadFamiliar}
                    onValueChange={handleFieldChange}
                    required
                    {...fieldProps}
                  />
                </Stack>
              </Box>

              
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="totalEgresosAg"
                    label="Total egresos ag"
                    value={form.totalEgresosAg}
                    onValueChange={handleFieldChange}
                    required
                    {...fieldProps}
                  />

                  <FormInput
                    identifier="egresosPorCompraEr"
                    label="Egresos por compra ER"
                    value={form.egresosPorCompraEr}
                    onValueChange={handleFieldChange}
                    required
                    {...fieldProps}
                  />

                  <FormInput
                    identifier="gastosOperativosEr"
                    label="Gastos operativos ER"
                    value={form.gastosOperativosEr}
                    onValueChange={handleFieldChange}
                    required
                    {...fieldProps}
                  />

                  <FormInput
                    identifier="gastosFinancieros"
                    label="Gastos financieros"
                    value={form.gastosFinancieros}
                    onValueChange={handleFieldChange}
                    required
                    {...fieldProps}
                  />

                  <FormInput
                    identifier="otrosIngresos"
                    label="Otros ingresos"
                    value={form.otrosIngresos}
                    onValueChange={handleFieldChange}
                    required
                    {...fieldProps}
                  />

                  <FormInput
                    identifier="excedenteFamiempresa"
                    label="Excedente famiempresa"
                    value={form.excedenteFamiempresa}
                    onValueChange={handleFieldChange}
                    required
                    {...fieldProps}
                  />
                </Stack>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  )
}

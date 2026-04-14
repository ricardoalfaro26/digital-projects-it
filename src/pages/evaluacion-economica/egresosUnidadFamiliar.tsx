import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type EgresosUnidadFamiliarFormState = {
  [key: string]: string;

  aplicaEgresosUnidadFamiliar: string;

  educacion: string;
  transporte: string;
  combustibles: string;
  otros: string;

  alimentacion: string;
  salud: string;
  serviciosBasicos: string;
  alquiler: string;

  egresosTotalesUnidadFamiliar: string;
};

export const EgresosUnidadFamiliar = () => {
  const [form, setForm] = useState<EgresosUnidadFamiliarFormState>({
    aplicaEgresosUnidadFamiliar: "Si",

    educacion: "",
    transporte: "",
    combustibles: "",
    otros: "",

    alimentacion: "250",
    salud: "",
    serviciosBasicos: "61.50",
    alquiler: "",

    egresosTotalesUnidadFamiliar: "311.5",
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
            Egresos de la unidad familiar
          </Typography>

          <Paper elevation={3} sx={{ mt: 2, p: 2, borderRadius: 2, width: "100%" }}>
            {/* ✅ 2 columnas sin Grid */}
            <Box sx={{ display: "flex", gap: 2, width: "100%" }}> 
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="aplicaEgresosUnidadFamiliar"
                    label="Aplica egresos de la unidad familiar"
                    value={form.aplicaEgresosUnidadFamiliar}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="educacion"
                    label="Educación"
                    value={form.educacion}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="transporte"
                    label="Transporte"
                    value={form.transporte}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="combustibles"
                    label="Combustibles (gas propano, leña, etc)"
                    value={form.combustibles}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="otros"
                    label="Otros"
                    value={form.otros}
                    onValueChange={handleFieldChange}
                    disabled
                  />
                </Stack>
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="alimentacion"
                    label="Alimentación"
                    value={form.alimentacion}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="salud"
                    label="Salud"
                    value={form.salud}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="serviciosBasicos"
                    label="Servicios básicos (agua, luz, teléfono, etc)"
                    value={form.serviciosBasicos}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="alquiler"
                    label="Alquiler"
                    value={form.alquiler}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="egresosTotalesUnidadFamiliar"
                    label="Egresos totales de la unidad familiar"
                    value={form.egresosTotalesUnidadFamiliar}
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

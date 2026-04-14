import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type ValidacionEvaluacionFormState = {
  [key: string]: string;
  validarPoliticasEvaluacion: string;
};

export const ValidacionEvaluacion = () => {
  const [form, setForm] = useState<ValidacionEvaluacionFormState>({
    validarPoliticasEvaluacion: "OK",
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
            Validación de políticas de evaluación
          </Typography>

          <Paper elevation={3} sx={{ mt: 2, p: 2, borderRadius: 2, width: "100%" }}>
           
            <Box sx={{ width: "100%", maxWidth: 520 }}>

            <Stack spacing={2}>
              <FormInput
                identifier="validarPoliticasEvaluacion"
                label="Validar políticas evaluación"
                value={form.validarPoliticasEvaluacion}
                onValueChange={handleFieldChange}
                disabled
                required
              />
            </Stack>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

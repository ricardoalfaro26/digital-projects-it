import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type DetallePersonalFormState = {
  [key: string]: string;
  numeroEmpleados: string;
};

export const DetallePersonal = () => {
  const [form, setForm] = useState<DetallePersonalFormState>({
    numeroEmpleados: "1",
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
            Detalle de personal
          </Typography>

          <Paper
            elevation={3}
            sx={{ mt: 2, p: 2, borderRadius: 2, width: "100%" }}
          >
            <Stack spacing={2} sx={{ width: "100%", maxWidth: 520 }}>
              <FormInput
                identifier="numeroEmpleados"
                label="Número de empleados"
                value={form.numeroEmpleados}
                onValueChange={handleFieldChange}
                disabled
                required
              />
            </Stack>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

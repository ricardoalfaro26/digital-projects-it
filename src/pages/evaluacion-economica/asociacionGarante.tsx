import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type AsociacionGaranteFormState = {
  [key: string]: string;
  cantidadGarantes: string;
};

export const AsociacionGarante = () => {
  const [form, setForm] = useState<AsociacionGaranteFormState>({
    cantidadGarantes: "0",
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
            Asociación garante
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

            <Box sx={{ width: "100%", maxWidth: 520 }}>
              <Stack spacing={2}>
                <FormInput
                  identifier="cantidadGarantes"
                  label="Cantidad de garantes"
                  value={form.cantidadGarantes}
                  onValueChange={handleFieldChange}
                  disabled
                />
              </Stack>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

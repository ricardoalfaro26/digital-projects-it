import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type IngresosRubroAdicionalState = {
  [key: string]: string;
  aplicaIngresosRubroAdicional: string;
};

export const IngresosRubroAdicional = () => {
    const [form, setForm] = useState<IngresosRubroAdicionalState>({
    aplicaIngresosRubroAdicional: "No",
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
            Ingresos por rubro adicional
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
            <Box sx={{ width: "100%", px: 1 }}>
              <Stack spacing={2} sx={{ width: "100%" }}>
                <FormInput
                  identifier="aplicaIngresosRubroAdicional"
                  label="Aplica ingresos por rubro adicional"
                  value={form.aplicaIngresosRubroAdicional}
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


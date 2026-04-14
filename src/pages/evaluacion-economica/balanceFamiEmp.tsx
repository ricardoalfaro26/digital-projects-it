import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type BalanceFamiEmpresaFormState = {
  [key: string]: string;

  // Izquierda
  activoFamiliar: string;
  patrimonioFamiliar: string;

  // Derecha
  totalPasivoFamiliar: string;
  patrimonioNetoFamiEmpresa: string;

};

export const BalanceFamiEmpresa = () => {
  const [form, setForm] = useState<BalanceFamiEmpresaFormState>({
    activoFamiliar: "2900",
    patrimonioFamiliar: "2900",
    totalPasivoFamiliar: "0",
    patrimonioNetoFamiEmpresa: "9417.5",
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
            Balance fami-empresa
          </Typography>

          <Paper elevation={3} sx={{ mt: 2, p: 2, borderRadius: 2, width: "100%" }}>
            
            <Box sx={{ display: "flex", gap: 3, width: "100%" }}>
            
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="activoFamiliar"
                    label="Activo familiar"
                    value={form.activoFamiliar}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="patrimonioFamiliar"
                    label="Patrimonio familiar"
                    value={form.patrimonioFamiliar}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  
                </Stack>
              </Box>

             
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="totalPasivoFamiliar"
                    label="Total pasivo familiar"
                    value={form.totalPasivoFamiliar}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="patrimonioNetoFamiEmpresa"
                    label="Patrimonio neto fami-empresa"
                    value={form.patrimonioNetoFamiEmpresa}
                    onValueChange={handleFieldChange}
                    disabled
                    required
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

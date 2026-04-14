import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type OtrasFuentesIngresosFormState = {
  [key: string]: string;

  salarioNeto: string;
  pensiones: string;
  remesas: string;
  alquileres: string;
  otros: string;
  especifique: string;
  totalOtrasFuentesIngreso: string;
};

export const OtrasFuentesIngresos = () => {
  const [form, setForm] = useState<OtrasFuentesIngresosFormState>({
    salarioNeto: "",
    pensiones: "",
    remesas: "",
    alquileres: "",
    otros: "",
    especifique: "",
    totalOtrasFuentesIngreso: "0",
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
            Otras fuentes de ingresos
          </Typography>

          <Paper elevation={3} sx={{ mt: 2, p: 2, borderRadius: 2, width: "100%" }}>
            {/* ✅ 2 columnas (sin Grid) */}
            <Box sx={{ display: "flex", gap: 3, width: "100%" }}>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="salarioNeto"
                    label="Salario neto"
                    value={form.salarioNeto}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="remesas"
                    label="Remesas"
                    value={form.remesas}
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

                  <FormInput
                    identifier="totalOtrasFuentesIngreso"
                    label="Total de otras fuentes de ingreso"
                    value={form.totalOtrasFuentesIngreso}
                    onValueChange={handleFieldChange}
                    disabled
                  />
                </Stack>
              </Box>

              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="pensiones"
                    label="Pensiones"
                    value={form.pensiones}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="alquileres"
                    label="Alquileres"
                    value={form.alquileres}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="especifique"
                    label="Especifique"
                    value={form.especifique}
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

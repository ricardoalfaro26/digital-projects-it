// pages/evaluacion-economica/pasivosCorrientes.tsx
import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type PasivosCorrientesFormState = {
  [key: string]: string;

  totalCuotasNegocio: string;
  totalCuotasFamilia: string;

  totalSaldosVigentesFamilia: string;
  totalSaldosVigentesNegocio: string;

  proveedores: string;
};

export const PasivosCorrientes = () => {
  const [form, setForm] = useState<PasivosCorrientesFormState>({
    totalCuotasNegocio: "0",
    totalCuotasFamilia: "0",
    totalSaldosVigentesFamilia: "0",
    totalSaldosVigentesNegocio: "800",
    proveedores: "",
  });

  const handleFieldChange = (identifier: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [identifier]: value,
    }));
  };

  const ACCORDION_BORDER = "1px solid rgba(0,0,0,0.14)";
  const HEADER_BG = "#D9F5F4";

  return (
    <>
      <NavBar />

      <Box sx={{ display: "flex", gap: 2, p: 2, width: "100%" }}>
        <LeftFormsMenu />

        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography variant="h7" fontWeight={700} sx={{ mt: 1 }}>
            Pasivos corrientes.
          </Typography>

          <Paper elevation={3} sx={{ mt: 2, p: 2, borderRadius: 2, width: "100%" }}>
            {/* Header celeste tipo acordeón */}
            <Accordion
              defaultExpanded={false}
              disableGutters
              elevation={0}
              sx={{
                border: ACCORDION_BORDER,
                borderRadius: 2,
                overflow: "hidden",
                mb: 2,
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  bgcolor: HEADER_BG,
                  color: "rgba(0,0,0,0.85)",
                  fontWeight: 700,
                  minHeight: 48,
                  "& .MuiAccordionSummary-content": { my: 0 },
                }}
              >
                <Typography fontWeight={700} fontSize={13}>
                  Detalle de deudas vigentes negocio
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ p: 2 }}>
                <Typography fontSize={13} color="rgba(0,0,0,0.65)">
                  {/* Aquí podés agregar el detalle después */}
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* ✅ Sin Grid: 2 columnas con Box + Stack */}
            <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
              {/* Columna izquierda */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="totalCuotasNegocio"
                    label="Total cuotas negocio"
                    value={form.totalCuotasNegocio}
                    onValueChange={handleFieldChange}
                    disabled
                    textFieldProps={{ InputLabelProps: { shrink: true } }}
                  />

                  <FormInput
                    identifier="totalSaldosVigentesFamilia"
                    label="Total saldos vigentes familia"
                    value={form.totalSaldosVigentesFamilia}
                    onValueChange={handleFieldChange}
                    disabled
                    textFieldProps={{ InputLabelProps: { shrink: true } }}
                  />

                  <FormInput
                    identifier="proveedores"
                    label="Proveedores"
                    value={form.proveedores}
                    onValueChange={handleFieldChange}
                    disabled
                    textFieldProps={{ InputLabelProps: { shrink: true } }}
                  />
                </Stack>
              </Box>

              {/* Columna derecha */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="totalCuotasFamilia"
                    label="Total cuotas familia"
                    value={form.totalCuotasFamilia}
                    onValueChange={handleFieldChange}
                    disabled
                    textFieldProps={{ InputLabelProps: { shrink: true } }}
                  />

                  <FormInput
                    identifier="totalSaldosVigentesNegocio"
                    label="Total saldos vigentes negocio"
                    value={form.totalSaldosVigentesNegocio}
                    onValueChange={handleFieldChange}
                    disabled
                    textFieldProps={{ InputLabelProps: { shrink: true } }}
                  />

                  {/* ✅ Espacio vacío para que quede como en la imagen */}
                  <Box sx={{ height: 56 }} />
                </Stack>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

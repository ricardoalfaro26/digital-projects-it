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

type ActivoNoCorrientesFormState = {
  [key: string]: string;

  cantidadNg: string;
  descripcionNg: string;
  valorNg: string;

  cantidadFam: string;
  descripcionFam: string;
  valorFam: string;

  totalFamiliares: string;
  totalNegocio: string;
};

export const ActivoNoCorrientes = () => {
  const [form, setForm] = useState<ActivoNoCorrientesFormState>({
    cantidadNg: "1",
    descripcionNg: "BIENES PARA NEGOCIO",
    valorNg: "6725",

    cantidadFam: "",
    descripcionFam: "",
    valorFam: "",

    totalFamiliares: "2900",
    totalNegocio: "6725",
  });

  const handleFieldChange = (identifier: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [identifier]: value,
    }));
  };

  const ACCORDION_BORDER = "1px solid rgba(0,0,0,0.14)";
  const HEADER_OPEN_BG = "#18C2B3";
  const HEADER_CLOSED_BG = "#D9F5F4";

  return (
    <>
      <NavBar />

      <Box sx={{ display: "flex", gap: 2, p: 2, width: "100%" }}>
        <LeftFormsMenu />

        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography variant="h7" fontWeight={700} sx={{ mt: 1 }}>
            Activos no corrientes.
          </Typography>

          <Paper elevation={3} sx={{ mt: 2, p: 2, borderRadius: 2, width: "100%" }}>
           
            <Accordion
              defaultExpanded
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
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                sx={{
                  bgcolor: HEADER_OPEN_BG,
                  color: "#fff",
                  minHeight: 48,
                  "& .MuiAccordionSummary-content": { my: 0 },
                }}
              >
                <Typography fontWeight={700} fontSize={13}>
                  Activos no corrientes negocio
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ p: 2 }}>
                <Stack spacing={2}>
                  {/* Fila 1: Cantidad (angosto) + Descripción (largo) */}
                  <Box sx={{ display: "flex", gap: 2, width: "100%", alignItems: "flex-start" }}>
                    <Box sx={{ width: { xs: "100%", md: "25%" }, minWidth: 0 }}>
                      <FormInput
                        identifier="cantidadNg"
                        label="Cantidad ng"
                        value={form.cantidadNg}
                        onValueChange={handleFieldChange}
                        disabled
                        required
                      />
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <FormInput
                        identifier="descripcionNg"
                        label="Descripción ng"
                        value={form.descripcionNg}
                        onValueChange={handleFieldChange}
                        disabled
                        required
                      />
                    </Box>
                  </Box>

                  {/* Fila 2: Valor abajo a la izquierda (angosto) + espacio vacío a la derecha */}
                  <Box sx={{ display: "flex", gap: 2, width: "100%", alignItems: "flex-start" }}>
                    <Box sx={{ width: { xs: "100%", md: "25%" }, minWidth: 0 }}>
                      <FormInput
                        identifier="valorNg"
                        label="Valor ng"
                        value={form.valorNg}
                        onValueChange={handleFieldChange}
                        disabled
                        required
                      />
                    </Box>

                    {/* espacio vacío derecho como en la imagen */}
                    <Box sx={{ flex: 1, minWidth: 0 }} />
                  </Box>
                </Stack>
              </AccordionDetails>
            </Accordion> 
            <Accordion
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
                  bgcolor: HEADER_CLOSED_BG,
                  color: "rgba(0,0,0,0.85)",
                  minHeight: 48,
                  "& .MuiAccordionSummary-content": { my: 0 },
                }}
              >
                <Typography fontWeight={700} fontSize={13}>
                  Activos no corrientes familiares
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ p: 2 }}>
                <Stack spacing={2}>
                  {/* Fila 1: Cantidad (angosto) + Descripción (largo) */}
                  <Box sx={{ display: "flex", gap: 2, width: "100%", alignItems: "flex-start" }}>
                    <Box sx={{ width: { xs: "100%", md: "25%" }, minWidth: 0 }}>
                      <FormInput
                        identifier="cantidadFam"
                        label="Cantidad familiares"
                        value={form.cantidadFam}
                        onValueChange={handleFieldChange}
                        disabled
                      />
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <FormInput
                        identifier="descripcionFam"
                        label="Descripción familiares"
                        value={form.descripcionFam}
                        onValueChange={handleFieldChange}
                        disabled
                      />
                    </Box>
                  </Box>

                  {/* Fila 2: Valor abajo a la izquierda + espacio vacío */}
                  <Box sx={{ display: "flex", gap: 2, width: "100%", alignItems: "flex-start" }}>
                    <Box sx={{ width: { xs: "100%", md: "25%" }, minWidth: 0 }}>
                      <FormInput
                        identifier="valorFam"
                        label="Valor familiares"
                        value={form.valorFam}
                        onValueChange={handleFieldChange}
                        disabled
                      />
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 0 }} />
                  </Box>
                </Stack>
              </AccordionDetails>
            </Accordion>

          
            <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <FormInput
                  identifier="totalFamiliares"
                  label="Total activos no corrientes familiares"
                  value={form.totalFamiliares}
                  onValueChange={handleFieldChange}
                  disabled
                />
              </Box>

              <Box sx={{ flex: 1, minWidth: 0 }}>
                <FormInput
                  identifier="totalNegocio"
                  label="Total activos no corrientes negocio"
                  value={form.totalNegocio}
                  onValueChange={handleFieldChange}
                  disabled
                />
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

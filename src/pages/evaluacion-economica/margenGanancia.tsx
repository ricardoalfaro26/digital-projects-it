import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type MargenGananciaV2State = {
  [key: string]: string;

  costoTotalGlobal: string;
  ventaTotalGlobal: string;
  utilidadBrutaGlobal: string;
  consolidadoMargenGananciaGlobal: string;
  consolidadoMargenCostoGlobal: string;
};

export const MargenGananciaV2Form = () => {
  // ✅ Datos quemados (demo) - NO editables
  const [form, setForm] = useState<MargenGananciaV2State>({
    costoTotalGlobal: "26.53",
    ventaTotalGlobal: "72",
    utilidadBrutaGlobal: "45.47",
    consolidadoMargenGananciaGlobal: "63.15",
    consolidadoMargenCostoGlobal: "36.85",
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
            Margen de ganancia v2
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
            {/* ✅ Header tipo "Producto" */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                py: 1.5,
                borderRadius: 1.5,
                bgcolor: "#DFF7F6",
                border: "1px solid rgba(0,0,0,0.08)",
                mb: 2,
              }}
            >
              <Typography fontWeight={700} sx={{ color: "#2A9D9F" }}>
                Producto
              </Typography>

              <KeyboardArrowRightIcon sx={{ color: "rgba(0,0,0,0.45)" }} />
            </Box>

            {/* ✅ 2 columnas completas hacia abajo (como tu imagen) */}
            <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
              {/* Columna izquierda */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="costoTotalGlobal"
                    label="Costo total global"
                    value={form.costoTotalGlobal}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="utilidadBrutaGlobal"
                    label="Utilidad bruta global"
                    value={form.utilidadBrutaGlobal}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="consolidadoMargenCostoGlobal"
                    label="Consolidado de margen de costo global"
                    value={form.consolidadoMargenCostoGlobal}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  {/* ✅ (AGREGAR MÁS CAMPOS AQUÍ - IZQUIERDA) */}
                </Stack>
              </Box>

              {/* Columna derecha */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="ventaTotalGlobal"
                    label="Venta total global"
                    value={form.ventaTotalGlobal}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="consolidadoMargenGananciaGlobal"
                    label="Consolidado de margen de ganancia global"
                    value={form.consolidadoMargenGananciaGlobal}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  {/* ✅ (AGREGAR MÁS CAMPOS AQUÍ - DERECHA) */}
                </Stack>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};


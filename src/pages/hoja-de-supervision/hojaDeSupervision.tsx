import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type HojaDeSupervisionFormState = {
  [key: string]: string;

  consultarCliente: string;
  saldoCapitalVigente: string;

  perdidaEsperada: string;
  categoriaRiesgo: string;

  scoreCrediticioProyectado: string;
  cuota: string;

  endeudamientoFuturo: string;
  relacionCuotaSobreDisponible: string;

  relMontoCreditoCostoVentas: string;
  relMontoCreditoPatrimonio: string;

  relCuotaCreditoOtorgarCuotaCreditosVigentesUtilidadOperativa: string;
  relacionCuotasMasCuotaOtorgarSobreDisponibleNeto: string;

  resumenComite: string;
};


export const HojaDeSupervision = () => {
  const [form, setForm] = useState<HojaDeSupervisionFormState>({
    consultarCliente: "OK",
    saldoCapitalVigente: "6062.32",

    perdidaEsperada: "P7",
    categoriaRiesgo: "E",

    scoreCrediticioProyectado: "400",
    cuota: "0",

    endeudamientoFuturo: "47.09",
    relacionCuotaSobreDisponible: "0",

    relMontoCreditoCostoVentas: "770.94",
    relMontoCreditoPatrimonio: "76.72",

    relCuotaCreditoOtorgarCuotaCreditosVigentesUtilidadOperativa: "0",
    relacionCuotasMasCuotaOtorgarSobreDisponibleNeto: "0",

    resumenComite: "OK",
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
            Hoja de supervisión
          </Typography>

          <Paper elevation={3} sx={{ mt: 2, p: 2, borderRadius: 2, width: "100%" }}>
            {/* ✅ 2 columnas (sin Grid) */}
            <Box sx={{ display: "flex", gap: 3, width: "100%" }}>
          
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="consultarCliente"
                    label="Consultar cliente"
                    value={form.consultarCliente}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="perdidaEsperada"
                    label="Pérdida esperada"
                    value={form.perdidaEsperada}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="scoreCrediticioProyectado"
                    label="Score crediticio proyectado"
                    value={form.scoreCrediticioProyectado}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="endeudamientoFuturo"
                    label="Endeudamiento futuro"
                    value={form.endeudamientoFuturo}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="relMontoCreditoCostoVentas"
                    label="Rel. Monto Crédito/Costo de Ventas"
                    value={form.relMontoCreditoCostoVentas}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="relCuotaCreditoOtorgarCuotaCreditosVigentesUtilidadOperativa"
                    label="Rel. Cuota de crédito a otorgar, Cuota créditos Vigentes y Utilidad Operativa"
                    value={form.relCuotaCreditoOtorgarCuotaCreditosVigentesUtilidadOperativa}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="resumenComite"
                    label="Resumen comité"
                    value={form.resumenComite}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />
                </Stack>
              </Box>

              
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="saldoCapitalVigente"
                    label="Saldo de capital vigente"
                    value={form.saldoCapitalVigente}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="categoriaRiesgo"
                    label="Categoría riesgo"
                    value={form.categoriaRiesgo}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="cuota"
                    label="Cuota"
                    value={form.cuota}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="relacionCuotaSobreDisponible"
                    label="Relación cuota sobre disponible"
                    value={form.relacionCuotaSobreDisponible}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="relMontoCreditoPatrimonio"
                    label="Rel. Monto Crédito/ Patrimonio"
                    value={form.relMontoCreditoPatrimonio}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="relacionCuotasMasCuotaOtorgarSobreDisponibleNeto"
                    label="Relación de cuotas de créditos más cuota de crédito a otorgar sobre el disponible neto"
                    value={form.relacionCuotasMasCuotaOtorgarSobreDisponibleNeto}
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

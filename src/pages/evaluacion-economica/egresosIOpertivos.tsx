import { useMemo, useState } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type EgresosOperativosState = {
  [key: string]: string;

  aplicaGastosOperativos: string;

  impuesto: string;
  alquilerLocal: string;
  energiaElectrica: string;
  bodegas: string;
  mttoVehiculosOtrosActivos: string;

  gastosPersonal: string;
  transporteFletes: string;
  agua: string;
  otrosServiciosBasicos: string;
  combustible: string;
  otrosGastos: string;
};

const toNumber = (value: string) => {
  const n = Number(String(value ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : 0;
};

export const EgresosOperativos = () => {

  const DEMO_READONLY = true;

  const [form, setForm] = useState<EgresosOperativosState>({
    aplicaGastosOperativos: "Si",

    impuesto: "",
    alquilerLocal: "",
    energiaElectrica: "",
    bodegas: "",
    mttoVehiculosOtrosActivos: "",

    gastosPersonal: "100",
    transporteFletes: "",
    agua: "",
    otrosServiciosBasicos: "",
    combustible: "",
    otrosGastos: "61",
  });

  const handleFieldChange = (identifier: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [identifier]: value,
    }));
  };

  const totalEgresos = useMemo(() => {
    const sum =
      toNumber(form.gastosPersonal) +
      toNumber(form.impuesto) +
      toNumber(form.transporteFletes) +
      toNumber(form.alquilerLocal) +
      toNumber(form.agua) +
      toNumber(form.energiaElectrica) +
      toNumber(form.otrosServiciosBasicos) +
      toNumber(form.bodegas) +
      toNumber(form.combustible) +
      toNumber(form.mttoVehiculosOtrosActivos) +
      toNumber(form.otrosGastos);

    return String(sum);
  }, [
    form.gastosPersonal,
    form.impuesto,
    form.transporteFletes,
    form.alquilerLocal,
    form.agua,
    form.energiaElectrica,
    form.otrosServiciosBasicos,
    form.bodegas,
    form.combustible,
    form.mttoVehiculosOtrosActivos,
    form.otrosGastos,
  ]);

  return (
    <>
      <NavBar />

      <Box sx={{ display: "flex", gap: 2, p: 2, width: "100%" }}>
        <LeftFormsMenu />

        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography variant="h7" fontWeight={700} sx={{ mt: 1 }}>
            Egresos por gastos operativos
          </Typography>

          <Paper
            elevation={0}
            sx={{
              mt: 2,
              p: 2,
              borderRadius: 2,
              width: "100%",
              border: "1px solid rgba(0,0,0,0.08)",
              backgroundColor: "#fff",
            }}
          >
            {/* ✅ 2 columnas, campos hacia abajo */}
            <Box sx={{ display: "flex", gap: 3, width: "100%" }}>
              {/* Columna izquierda */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="aplicaGastosOperativos"
                    label="Aplica gastos operativos"
                    value={form.aplicaGastosOperativos}
                    onValueChange={handleFieldChange}
                    disabled={DEMO_READONLY}
                  />

                  <FormInput
                    identifier="impuesto"
                    label="Impuesto"
                    value={form.impuesto}
                    onValueChange={handleFieldChange}
                    disabled={DEMO_READONLY}
                  />

                  <FormInput
                    identifier="alquilerLocal"
                    label="Alquiler del local"
                    value={form.alquilerLocal}
                    onValueChange={handleFieldChange}
                    disabled={DEMO_READONLY}
                  />

                  <FormInput
                    identifier="energiaElectrica"
                    label="Energía eléctrica"
                    value={form.energiaElectrica}
                    onValueChange={handleFieldChange}
                    disabled={DEMO_READONLY}
                  />

                  <FormInput
                    identifier="bodegas"
                    label="Bodegas"
                    value={form.bodegas}
                    onValueChange={handleFieldChange}
                    disabled={DEMO_READONLY}
                  />

                  <FormInput
                    identifier="mttoVehiculosOtrosActivos"
                    label="Mtto. vehículos y otros activos"
                    value={form.mttoVehiculosOtrosActivos}
                    onValueChange={handleFieldChange}
                    disabled={DEMO_READONLY}
                  />

                  <FormInput
                    identifier="egresoGastosOperativos"
                    label="Egreso por gastos operativos"
                    value={totalEgresos}
                    onValueChange={() => {}}
                    disabled
                  />

                  {/* ✅ (AGREGAR MÁS CAMPOS IZQUIERDA AQUÍ) */}
                </Stack>
              </Box>

              {/* Columna derecha */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="gastosPersonal"
                    label="Gastos del personal"
                    value={form.gastosPersonal}
                    onValueChange={handleFieldChange}
                    disabled={DEMO_READONLY}
                  />

                  <FormInput
                    identifier="transporteFletes"
                    label="Transporte (Fletes)"
                    value={form.transporteFletes}
                    onValueChange={handleFieldChange}
                    disabled={DEMO_READONLY}
                  />

                  <FormInput
                    identifier="agua"
                    label="Agua"
                    value={form.agua}
                    onValueChange={handleFieldChange}
                    disabled={DEMO_READONLY}
                  />

                  <FormInput
                    identifier="otrosServiciosBasicos"
                    label="Otros servicios básicos"
                    value={form.otrosServiciosBasicos}
                    onValueChange={handleFieldChange}
                    disabled={DEMO_READONLY}
                  />

                  <FormInput
                    identifier="combustible"
                    label="Combustible"
                    value={form.combustible}
                    onValueChange={handleFieldChange}
                    disabled={DEMO_READONLY}
                  />

                  <FormInput
                    identifier="otrosGastos"
                    label="Otros gastos"
                    value={form.otrosGastos}
                    onValueChange={handleFieldChange}
                    disabled={DEMO_READONLY}
                  />

                  {/* Espacio para agregar mas campos*/}
                </Stack>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};



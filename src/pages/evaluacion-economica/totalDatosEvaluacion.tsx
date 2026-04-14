import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type TotalDatosEvaluacionFormState = {
  [key: string]: string;

  // =======================
  // Columna izquierda
  // =======================
  totalIngresoMensual: string;
  totalPatrimonioIzq: string;
  totalInventarios: string;
  totalActivoFamiliar: string;
  totalPasivoDelNegocio: string;
  totalPasivoFamiliar: string;
  totalCostoDeVentas: string;
  totalVentaMensual: string;
  totalIngresosFamiliares: string;
  totalPensiones: string;

  // ✅ NUEVOS (imagen)
  totalRemesas: string;
  consultar: string;

  // =======================
  // Columna derecha
  // =======================
  utilidadNetaMensual: string;
  excedenteMensual: string;
  totalActivoCorriente: string;
  totalActivoDelNegocio: string;
  totalPatrimonioDer: string;
  totalPasivoCorriente: string;
  totalGastosOperativosDelNegocio: string;
  totalUtilidadOperativaSegundoRubro: string;
  experienciaEmpresarioMeses: string;
  salarioNeto: string;


  totalAlquileres: string;
  subSegmento: string;

};

export const TotalDatosEvaluacion = () => {
  const [form, setForm] = useState<TotalDatosEvaluacionFormState>({
 
    totalIngresoMensual: "1760",
    totalPatrimonioIzq: "6517.5",
    totalInventarios: "492.5",
    totalActivoFamiliar: "2900",
    totalPasivoDelNegocio: "800",
    totalPasivoFamiliar: "0",
    totalCostoDeVentas: "648.56",
    totalVentaMensual: "1760",
    totalIngresosFamiliares: "0",
    totalPensiones: "0",

    totalRemesas: "0",
    consultar: "OK",

    utilidadNetaMensual: "950.44",
    excedenteMensual: "638.94",
    totalActivoCorriente: "592.5",
    totalActivoDelNegocio: "7317.5",
    totalPatrimonioDer: "6517.5",
    totalPasivoCorriente: "400",
    totalGastosOperativosDelNegocio: "161",
    totalUtilidadOperativaSegundoRubro: "0",
    experienciaEmpresarioMeses: "148",
    salarioNeto: "0",

    totalAlquileres: "0",
    subSegmento: "MC de Acumulación Simple",
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
            Total datos evaluación
          </Typography>

          <Paper elevation={3} sx={{ mt: 2, p: 2, borderRadius: 2, width: "100%" }}> 

            <Box sx={{ display: "flex", gap: 3, width: "100%" }}>
 
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="totalIngresoMensual"
                    label="Total ingreso mensual"
                    value={form.totalIngresoMensual}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="totalPatrimonioIzq"
                    label="Total patrimonio"
                    value={form.totalPatrimonioIzq}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="totalInventarios"
                    label="Total inventarios"
                    value={form.totalInventarios}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="totalActivoFamiliar"
                    label="Total activo familiar"
                    value={form.totalActivoFamiliar}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="totalPasivoDelNegocio"
                    label="Total pasivo del negocio"
                    value={form.totalPasivoDelNegocio}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="totalPasivoFamiliar"
                    label="Total pasivo familiar"
                    value={form.totalPasivoFamiliar}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="totalCostoDeVentas"
                    label="Total costo de ventas"
                    value={form.totalCostoDeVentas}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="totalVentaMensual"
                    label="Total venta mensual"
                    value={form.totalVentaMensual}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="totalIngresosFamiliares"
                    label="Total ingresos familiares"
                    value={form.totalIngresosFamiliares}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="totalPensiones"
                    label="Total pensiones"
                    value={form.totalPensiones}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  
                  <FormInput
                    identifier="totalRemesas"
                    label="Total remesas"
                    value={form.totalRemesas}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="consultar"
                    label="Consultar"
                    value={form.consultar}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />
                </Stack>
              </Box>

           
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="utilidadNetaMensual"
                    label="Utilidad neta mensual"
                    value={form.utilidadNetaMensual}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="excedenteMensual"
                    label="Excedente mensual"
                    value={form.excedenteMensual}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="totalActivoCorriente"
                    label="Total activo corriente"
                    value={form.totalActivoCorriente}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="totalActivoDelNegocio"
                    label="Total activo del negocio"
                    value={form.totalActivoDelNegocio}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="totalPatrimonioDer"
                    label="Total patrimonio"
                    value={form.totalPatrimonioDer}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="totalPasivoCorriente"
                    label="Total pasivo corriente"
                    value={form.totalPasivoCorriente}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="totalGastosOperativosDelNegocio"
                    label="Total gastos operativos del negocio"
                    value={form.totalGastosOperativosDelNegocio}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="totalUtilidadOperativaSegundoRubro"
                    label="Total utilidad operativa segundo rubro"
                    value={form.totalUtilidadOperativaSegundoRubro}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="experienciaEmpresarioMeses"
                    label="Experiencia como empresario en meses"
                    value={form.experienciaEmpresarioMeses}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="salarioNeto"
                    label="Salario neto"
                    value={form.salarioNeto}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                   <FormInput
                    identifier="totalAlquileres"
                    label="Total alquileres"
                    value={form.totalAlquileres}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="subSegmento"
                    label="Sub segmento"
                    value={form.subSegmento}
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

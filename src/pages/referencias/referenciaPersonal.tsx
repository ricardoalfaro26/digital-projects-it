import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type ReferenciaPersonalFormState = {
  [key: string]: string;

  // Columna izquierda
  consultarReferencias: string;
  vinculoRef1: string;
  direccionRef1: string;
  tipoRef2: string;
  nombreRef2: string;
  telefonoRef2: string;

  // Columna derecha
  tipoRef1: string;
  nombreRef1: string;
  telefonoRef1: string;
  vinculoRef2: string;
  direccionRef2: string;
  actualizarReferencias: string;
};

export const ReferenciaPersonal = () => {
  const [form, setForm] = useState<ReferenciaPersonalFormState>({
    // ✅ Izquierda
    consultarReferencias: "OK",
    vinculoRef1: "Amistad",
    direccionRef1: "CALLE",
    tipoRef2: "FAMILIAR",
    nombreRef2: "CLAUDIA HERNANDEZ",
    telefonoRef2: "78152020",

    // ✅ Derecha
    tipoRef1: "PERSONAL",
    nombreRef1: "FRANCISCO MARVILLA",
    telefonoRef1: "78152020",
    vinculoRef2: "Amistad",
    direccionRef2: "CALLE PRINCIPAL",
    actualizarReferencias: "OK",
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
            Referencias personales
          </Typography>

          <Paper elevation={3} sx={{ mt: 2, p: 2, borderRadius: 2, width: "100%" }}>
            
            <Box sx={{ display: "flex", gap: 3, width: "100%", px: 1 }}>
            
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="consultarReferencias"
                    label="Consultar Referencias"
                    value={form.consultarReferencias}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="vinculoRef1"
                    label="Vinculo Ref 1"
                    value={form.vinculoRef1}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="direccionRef1"
                    label="Dirección Ref 1"
                    value={form.direccionRef1}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="tipoRef2"
                    label="Tipo Ref 2"
                    value={form.tipoRef2}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="nombreRef2"
                    label="Nombre Ref 2"
                    value={form.nombreRef2}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="telefonoRef2"
                    label="Teléfono Ref 2"
                    value={form.telefonoRef2}
                    onValueChange={handleFieldChange}
                    disabled
                  />
                </Stack>
              </Box>

 
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="tipoRef1"
                    label="Tipo Ref 1"
                    value={form.tipoRef1}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="nombreRef1"
                    label="Nombre Ref 1"
                    value={form.nombreRef1}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="telefonoRef1"
                    label="Teléfono Ref 1"
                    value={form.telefonoRef1}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="vinculoRef2"
                    label="Vinculo Ref 2"
                    value={form.vinculoRef2}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="direccionRef2"
                    label="Dirección Ref 2"
                    value={form.direccionRef2}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="actualizarReferencias"
                    label="Actualizar Referencias"
                    value={form.actualizarReferencias}
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

import { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

import { NavBar } from "../../components/NavBar";
import { LeftFormsMenu } from "../../components/LeftFormsMenu";
import { FormInput } from "../../components/FormInput";

type DatosDemograficosFormState = {
  [key: string]: string;

  // =======================
  // Columna izquierda
  // =======================
  consultarDatosDemograficos: string;
  numeroDependientes: string;
  esPep: string;
  recibeRemesas: string;
  telefonoDomicilio: string;
  empresaNombreEstablecimiento: string;
  direccionCompletaNegocio: string;
  paisDireccionNegocio: string;
  municipioNegocio: string;
  telefonoNegocio: string;

  // ✅ NUEVOS (imagen) - izquierda
  actividadSecundaria: string;
  genero: string;
  fechaExpedicionDocumentoPrincipal: string;
  paisExpedicionDocumentoPrincipal: string;
  municipioExpedicionDocumentoPrincipal: string;
  profesionOficio: string;
  paisCiudadania: string;
  departamentoDomicilio: string;

  // ✅ NUEVOS (última imagen) - izquierda
  esCasaYNegocio: string;
  esContribuyenteFiscal: string;
  actualizarDatos: string;

  // =======================
  // Columna derecha
  // =======================
  numeroHijos: string;
  nivelEducativo: string;
  parienteFuncionarioPublico: string;
  tiempoResidenciaDomicilioMeses: string;
  correoPersonalLaboral: string;
  empresaUbicacionEstablecimiento: string;
  tipoViviendaNegocio: string;
  departamentoNegocio: string;
  tiempoResidenciaNegocioMeses: string;
  giroActividadSecundaria: string;

  // ✅ NUEVOS (imagen) - derecha
  fechaExpedicionNit: string;
  estadoCivil: string;
  fechaVencimientoDocumentoPrincipal: string;
  departamentoExpedicionDocumentoPrincipal: string;
  paisNacimiento: string;
  sabeFirmar: string;
  direccionCompletaDomicilio: string;
  municipioDomicilio: string;

  // ✅ NUEVOS (última imagen) - derecha
  tipoViviendaLegal: string;
  esContribuyenteRenta: string;
};

export const DatosDemograficos = () => {
  const [form, setForm] = useState<DatosDemograficosFormState>({
    // =======================
    // Izquierda (base)
    // =======================
    consultarDatosDemograficos: "OK",
    numeroDependientes: "2",
    esPep: "No",
    recibeRemesas: "No",
    telefonoDomicilio: "78152020",
    empresaNombreEstablecimiento: "VENTA DE PAN DULCE",
    direccionCompletaNegocio:
      "CTON JOYA GALANA, COM LA DINERA, 10-B PG B, JOYA GALANA, APOPA, SA",
    paisDireccionNegocio: "El Salvador",
    municipioNegocio: "APOPA",
    telefonoNegocio: "78152020",

    // =======================
    // Izquierda (nuevos)
    // =======================
    actividadSecundaria: "",
    genero: "Masculino",
    fechaExpedicionDocumentoPrincipal: "2010-10-15",
    paisExpedicionDocumentoPrincipal: "El Salvador",
    municipioExpedicionDocumentoPrincipal: "APOPA",
    profesionOficio: "EMPLEADO",
    paisCiudadania: "El Salvador",
    departamentoDomicilio: "San Salvador",

    // ✅ NUEVOS (última imagen) - izquierda
    esCasaYNegocio: "Si",
    esContribuyenteFiscal: "No",
    actualizarDatos: "OK",

    // =======================
    // Derecha (base)
    // =======================
    numeroHijos: "0",
    nivelEducativo: "Medio (Bachillerato)",
    parienteFuncionarioPublico: "No",
    tiempoResidenciaDomicilioMeses: "10",
    correoPersonalLaboral: "",
    empresaUbicacionEstablecimiento: "Establecimiento / Local",
    tipoViviendaNegocio: "Propia",
    departamentoNegocio: "San Salvador",
    tiempoResidenciaNegocioMeses: "10",
    giroActividadSecundaria: "",

    // =======================
    // Derecha (nuevos)
    // =======================
    fechaExpedicionNit: "2010-10-15",
    estadoCivil: "Soltero(a)",
    fechaVencimientoDocumentoPrincipal: "2026-08-27",
    departamentoExpedicionDocumentoPrincipal: "San Salvador",
    paisNacimiento: "El Salvador",
    sabeFirmar: "Si",
    direccionCompletaDomicilio:
      "CTON JOYA GALANA, COM LA DINERA, 10-B PG B, JOYA GALANA, APOPA, SA",
    municipioDomicilio: "APOPA",

    // ✅ NUEVOS (última imagen) - derecha
    tipoViviendaLegal: "Propia",
    esContribuyenteRenta: "Renta Persona Física",
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
            Datos demográficos
          </Typography>

          <Paper elevation={3} sx={{ mt: 2, p: 2, borderRadius: 2, width: "100%" }}>
           
            {/* ✅ 2 columnas (sin Grid) */}
            <Box sx={{ display: "flex", gap: 3, width: "100%" }}>
              {/* ===================== */}
              {/* ✅ COLUMNA IZQUIERDA */}
              {/* ===================== */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="consultarDatosDemograficos"
                    label="Consultar datos demográficos"
                    value={form.consultarDatosDemograficos}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="numeroDependientes"
                    label="Número de dependientes"
                    value={form.numeroDependientes}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="esPep"
                    label="¿Es funcionario público o ha tenido un cargo público? (PEP)"
                    value={form.esPep}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="recibeRemesas"
                    label="¿Cliente recibe remesas?"
                    value={form.recibeRemesas}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="telefonoDomicilio"
                    label="Teléfono domicilio"
                    value={form.telefonoDomicilio}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="empresaNombreEstablecimiento"
                    label="Empresa-Nombre del establecimiento"
                    value={form.empresaNombreEstablecimiento}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="direccionCompletaNegocio"
                    label="Dirección completa negocio"
                    value={form.direccionCompletaNegocio}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="paisDireccionNegocio"
                    label="País dirección negocio"
                    value={form.paisDireccionNegocio}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="municipioNegocio"
                    label="Municipio negocio"
                    value={form.municipioNegocio}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="telefonoNegocio"
                    label="Teléfono negocio"
                    value={form.telefonoNegocio}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="actividadSecundaria"
                    label="Actividad secundaria"
                    value={form.actividadSecundaria}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="genero"
                    label="Género"
                    value={form.genero}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="fechaExpedicionDocumentoPrincipal"
                    label="Fecha de expedición del documento principal"
                    value={form.fechaExpedicionDocumentoPrincipal}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="paisExpedicionDocumentoPrincipal"
                    label="País de expedición del documento principal"
                    value={form.paisExpedicionDocumentoPrincipal}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="municipioExpedicionDocumentoPrincipal"
                    label="Municipio de expedición del documento principal"
                    value={form.municipioExpedicionDocumentoPrincipal}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="profesionOficio"
                    label="Profesión u oficio"
                    value={form.profesionOficio}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="paisCiudadania"
                    label="País de ciudadanía"
                    value={form.paisCiudadania}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="departamentoDomicilio"
                    label="Departamento domicilio"
                    value={form.departamentoDomicilio}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  {/* ✅ NUEVOS (última imagen) - izquierda */}
                  <FormInput
                    identifier="esCasaYNegocio"
                    label="¿Es casa y negocio?"
                    value={form.esCasaYNegocio}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="esContribuyenteFiscal"
                    label="¿Es contribuyente fiscal?"
                    value={form.esContribuyenteFiscal}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="actualizarDatos"
                    label="Actualizar datos"
                    value={form.actualizarDatos}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />
                </Stack>
              </Box>

              {/* ===================== */}
              {/* ✅ COLUMNA DERECHA */}
              {/* ===================== */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack spacing={2}>
                  <FormInput
                    identifier="numeroHijos"
                    label="Número de hijos"
                    value={form.numeroHijos}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="nivelEducativo"
                    label="Nivel educativo"
                    value={form.nivelEducativo}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="parienteFuncionarioPublico"
                    label="¿Es pariente o está relacionado con un funcionario público?"
                    value={form.parienteFuncionarioPublico}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="tiempoResidenciaDomicilioMeses"
                    label="Tiempo de residencia domicilio (Meses)"
                    value={form.tiempoResidenciaDomicilioMeses}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="correoPersonalLaboral"
                    label="Correo electrónico personal o laboral"
                    value={form.correoPersonalLaboral}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="empresaUbicacionEstablecimiento"
                    label="Empresa-Ubicación del establecimiento"
                    value={form.empresaUbicacionEstablecimiento}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="tipoViviendaNegocio"
                    label="Tipo vivienda negocio"
                    value={form.tipoViviendaNegocio}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="departamentoNegocio"
                    label="Departamento negocio"
                    value={form.departamentoNegocio}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="tiempoResidenciaNegocioMeses"
                    label="Tiempo residencia Negocio (Meses)"
                    value={form.tiempoResidenciaNegocioMeses}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="giroActividadSecundaria"
                    label="Giro de actividad secundaria"
                    value={form.giroActividadSecundaria}
                    onValueChange={handleFieldChange}
                    disabled
                  />

                  <FormInput
                    identifier="fechaExpedicionNit"
                    label="Fecha de expedición de NIT"
                    value={form.fechaExpedicionNit}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="estadoCivil"
                    label="Estado civil"
                    value={form.estadoCivil}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="fechaVencimientoDocumentoPrincipal"
                    label="Fecha de vencimiento del documento principal"
                    value={form.fechaVencimientoDocumentoPrincipal}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="departamentoExpedicionDocumentoPrincipal"
                    label="Departamento de expedición del documento principal"
                    value={form.departamentoExpedicionDocumentoPrincipal}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="paisNacimiento"
                    label="País de nacimiento"
                    value={form.paisNacimiento}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="sabeFirmar"
                    label="¿Sabe firmar?"
                    value={form.sabeFirmar}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="direccionCompletaDomicilio"
                    label="Dirección completa domicilio"
                    value={form.direccionCompletaDomicilio}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="municipioDomicilio"
                    label="Municipio domicilio"
                    value={form.municipioDomicilio}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  {/* ✅ NUEVOS (última imagen) - derecha */}
                  <FormInput
                    identifier="tipoViviendaLegal"
                    label="Tipo de vivienda legal"
                    value={form.tipoViviendaLegal}
                    onValueChange={handleFieldChange}
                    disabled
                    required
                  />

                  <FormInput
                    identifier="esContribuyenteRenta"
                    label="Es contribuyente de renta"
                    value={form.esContribuyenteRenta}
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

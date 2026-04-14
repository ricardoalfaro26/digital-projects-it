// import { useMemo, useRef, useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Button,
//   Popover,
//   Divider,
// } from "@mui/material";

// import { NavBar } from "../components/NavBar";
// import { LeftFormsMenu } from "../components/LeftFormsMenu";
// import { FormInput } from "../components";

// import dayjs, { Dayjs } from "dayjs";
// import "dayjs/locale/es";

// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

// import { TableHome } from "./tableHome/TableHome";

// dayjs.locale("es");

// type HomeFiltersState = {
//   [key: string]: string;
//   fechaRango: string;
//   busqueda: string;
// };

// const formatDate = (d: Dayjs | null) => (d ? d.format("DD/MM/YYYY") : "");

// const buildRangeText = (start: Dayjs | null, end: Dayjs | null) => {
//   const s = formatDate(start);
//   const e = formatDate(end);
//   if (!s && !e) return "";
//   if (s && !e) return `${s} -`;
//   return `${s} - ${e}`;
// };

// export const Home = () => {
//   // ✅ Altura “real” que calza perfecto con TextField size="small"
//   const CONTROL_HEIGHT = 55;

//   const inputSx = useMemo(
//     () => ({
//       "& .MuiInputBase-root": {
//         height: CONTROL_HEIGHT,
//       },
//       // centra mejor el texto dentro del input
//       "& .MuiInputBase-input": {
//         height: CONTROL_HEIGHT,
//         boxSizing: "border-box",
//         display: "flex",
//         alignItems: "center",
//         paddingTop: 0,
//         paddingBottom: 0,
//       },
//     }),
//     [CONTROL_HEIGHT]
//   );

//   const [startDate, setStartDate] = useState<Dayjs | null>(dayjs("2026-01-11"));
//   const [endDate, setEndDate] = useState<Dayjs | null>(dayjs("2026-02-10"));

//   const [filters, setFilters] = useState<HomeFiltersState>({
//     fechaRango: buildRangeText(dayjs("2026-01-11"), dayjs("2026-02-10")),
//     busqueda: "",
//   });

//   const handleFieldChange = (identifier: string, value: string) => {
//     setFilters((prev) => ({
//       ...prev,
//       [identifier]: value,
//     }));
//   };

//   const handleMostrar = () => {
//     console.log("Mostrar con filtros:", filters);
//   };

//   // =========================
//   // ✅ Popover calendario
//   // =========================
//   const anchorRef = useRef<HTMLDivElement | null>(null);
//   const [openCalendar, setOpenCalendar] = useState(false);

//   const openPopover = () => setOpenCalendar(true);
//   const closePopover = () => setOpenCalendar(false);

//   const [draftStart, setDraftStart] = useState<Dayjs | null>(startDate);
//   const [draftEnd, setDraftEnd] = useState<Dayjs | null>(endDate);

//   const rangeText = useMemo(
//     () => buildRangeText(startDate, endDate),
//     [startDate, endDate]
//   );

//   const draftRangeText = useMemo(
//     () => buildRangeText(draftStart, draftEnd),
//     [draftStart, draftEnd]
//   );

//   const handleSelectDate = (picked: Dayjs | null) => {
//     if (!picked) return;

//     if (!draftStart || (draftStart && draftEnd)) {
//       setDraftStart(picked.startOf("day"));
//       setDraftEnd(null);
//       return;
//     }

//     const s = draftStart.startOf("day");
//     const p = picked.startOf("day");

//     if (p.isBefore(s)) {
//       setDraftStart(p);
//       setDraftEnd(null);
//     } else {
//       setDraftEnd(p);
//     }
//   };

//   const handleAplicar = () => {
//     setStartDate(draftStart);
//     setEndDate(draftEnd);

//     setFilters((prev) => ({
//       ...prev,
//       fechaRango: buildRangeText(draftStart, draftEnd),
//     }));

//     closePopover();
//   };

//   const handleLimpiar = () => {
//     setDraftStart(null);
//     setDraftEnd(null);
//   };

//   const handleOpenCalendar = () => {
//     setDraftStart(startDate);
//     setDraftEnd(endDate);
//     openPopover();
//   };

//   return (
//     <>
//       <NavBar />

//       <Box sx={{ display: "flex", gap: 2, p: 2, width: "100%" }}>
//         <LeftFormsMenu />

//         <Box sx={{ flexGrow: 1, minWidth: 0 }}>
//           <Typography fontWeight={700} sx={{ mt: 1 }}>
//             Prospeccion de clientes
//           </Typography>

//           <Paper
//             elevation={3}
//             sx={{
//               mt: 2,
//               p: 2,
//               borderRadius: 2,
//               width: "100%",
//             }}
//           >
//             <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "flex-end",
//                   gap: 3,
//                   width: "100%",
//                 }}
//               >
//                 {/* ✅ Fecha rango */}
//                 <Box sx={{ flex: 1, minWidth: 320 }}>
//                   <Box ref={anchorRef}>
//                     <FormInput
//                       identifier="fechaRango"
//                       label="Fecha inicio - Fecha fin"
//                       value={rangeText}
//                       onValueChange={handleFieldChange}
//                       textFieldProps={{
//                         placeholder: "dd/mm/aaaa - dd/mm/aaaa",
//                         size: "small",
//                         fullWidth: true,
//                         inputProps: { readOnly: true },
//                         onClick: handleOpenCalendar,
//                         sx: {
//                           ...inputSx,
//                           "& .MuiInputBase-root": {
//                             ...(inputSx as any)["& .MuiInputBase-root"],
//                             cursor: "pointer",
//                           },
//                           "& input": { cursor: "pointer" },
//                         },
//                       }}
//                     />
//                   </Box>

//                   <Popover
//                     open={openCalendar}
//                     onClose={closePopover}
//                     anchorEl={anchorRef.current}
//                     anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
//                     transformOrigin={{ vertical: "top", horizontal: "left" }}
//                     PaperProps={{
//                       sx: {
//                         mt: 1,
//                         borderRadius: 2,
//                         p: 1.5,
//                         width: { xs: 320, sm: 620 },
//                       },
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "space-between",
//                         mb: 1,
//                       }}
//                     >
//                       <Typography fontWeight={700} fontSize={13}>
//                         Selecciona rango
//                       </Typography>
//                       <Typography fontSize={12} color="text.secondary">
//                         {draftRangeText || "—"}
//                       </Typography>
//                     </Box>

//                     <Divider sx={{ mb: 1.5 }} />

//                     <Box
//                       sx={{
//                         display: "flex",
//                         gap: 2,
//                         flexDirection: { xs: "column", sm: "row" },
//                       }}
//                     >
//                       <Box sx={{ flex: 1, minWidth: 0 }}>
//                         <Typography fontWeight={700} fontSize={12} sx={{ mb: 0.5 }}>
//                           Fecha inicio
//                         </Typography>

//                         <DateCalendar
//                           value={draftStart}
//                           onChange={(d) => handleSelectDate(d)}
//                           sx={{ "& .MuiPickersDay-root": { fontSize: 12 } }}
//                         />
//                       </Box>

//                       <Box sx={{ flex: 1, minWidth: 0 }}>
//                         <Typography fontWeight={700} fontSize={12} sx={{ mb: 0.5 }}>
//                           Fecha fin
//                         </Typography>

//                         <DateCalendar
//                           value={draftEnd}
//                           onChange={(d) => handleSelectDate(d)}
//                           sx={{ "& .MuiPickersDay-root": { fontSize: 12 } }}
//                         />
//                       </Box>
//                     </Box>

//                     <Divider sx={{ my: 1.5 }} />

//                     <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
//                       <Button
//                         variant="text"
//                         onClick={handleLimpiar}
//                         sx={{ textTransform: "none", fontWeight: 700 }}
//                       >
//                         Limpiar
//                       </Button>

//                       <Button
//                         variant="contained"
//                         onClick={handleAplicar}
//                         disabled={!draftStart || !draftEnd}
//                         sx={{
//                           textTransform: "none",
//                           fontWeight: 700,
//                           bgcolor: "#2E2E2E",
//                           boxShadow: "none",
//                           "&:hover": { bgcolor: "#1F1F1F", boxShadow: "none" },
//                         }}
//                       >
//                         Aplicar
//                       </Button>
//                     </Box>
//                   </Popover>
//                 </Box>

//                 {/* ✅ Búsqueda */}
//                 <Box sx={{ flex: 1, minWidth: 320 }}>
//                   <FormInput
//                     identifier="busqueda"
//                     label="Búsqueda"
//                     value={filters.busqueda}
//                     onValueChange={handleFieldChange}
//                     textFieldProps={{
//                       placeholder: "Realiza una búsqueda",
//                       size: "small",
//                       fullWidth: true,
//                       sx: inputSx,
//                     }}
//                   />
//                 </Box>

//                 {/* ✅ Botón Mostrar (igual altura exacta) */}
//                 <Button
//                   variant="contained"
//                   onClick={handleMostrar}
//                   sx={{
//                     height: CONTROL_HEIGHT,
//                     minHeight: CONTROL_HEIGHT,
//                     px: 3,
//                     borderRadius: 1.5,
//                     bgcolor: "#2E2E2E",
//                     boxShadow: "none",
//                     "&:hover": { bgcolor: "#1F1F1F", boxShadow: "none" },
//                     textTransform: "none",
//                     fontWeight: 700,
//                     fontSize: 12,
//                     whiteSpace: "nowrap",
//                     alignSelf: "flex-end",
//                     lineHeight: 1, // ayuda a calzar visualmente
//                   }}
//                 >
//                   Mostrar
//                 </Button>
//               </Box>
//             </LocalizationProvider>
//           </Paper>

//           <TableHome/>
//         </Box>
//       </Box>
//     </>
//   );
// };



import { useMemo, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Popover,
  Divider,
  Card,
  // Chip,
} from "@mui/material";

import { NavBar } from "../components/NavBar";
import { LeftFormsMenu } from "../components/LeftFormsMenu";
import { FormInput } from "../components";

import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/es";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import { TableHome } from "./tableHome/TableHome";

dayjs.locale("es");

type HomeFiltersState = {
  [key: string]: string;
  fechaRango: string;
  busqueda: string;
};

const formatDate = (d: Dayjs | null) => (d ? d.format("DD/MM/YYYY") : "");

const buildRangeText = (start: Dayjs | null, end: Dayjs | null) => {
  const s = formatDate(start);
  const e = formatDate(end);
  if (!s && !e) return "";
  if (s && !e) return `${s} -`;
  return `${s} - ${e}`;
};

export const Home = () => {
  // --- Constantes de Estilo ---
  const CONTROL_HEIGHT = 36; // Altura exacta para que coincida con botones small/medium

  const commonInputSx = {
    // Aplicamos al root del TextField
    height: CONTROL_HEIGHT,
    "& .MuiInputBase-root": {
      height: CONTROL_HEIGHT,
      minHeight: CONTROL_HEIGHT, // 👈 CRUCIAL: Esto sobreescribe el 56px de MUI
      borderRadius: 2,
      boxSizing: "border-box",
    },
    "& .MuiInputBase-input": {
      height: CONTROL_HEIGHT,
      padding: "0 14px !important", // Resetea paddings internos
      boxSizing: "border-box",
      fontSize: 13,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      "& legend": { display: "none" }, // Elimina el espacio del label interno
    },
  };

  // --- Estados ---
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
  const [filters, setFilters] = useState<HomeFiltersState>({
    fechaRango: buildRangeText(dayjs(), dayjs()),
    busqueda: "",
  });

  // Estado para el Popover (Opción recomendada por MUI)
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const openCalendar = Boolean(anchorEl);

  const [draftStart, setDraftStart] = useState<Dayjs | null>(startDate);
  const [draftEnd, setDraftEnd] = useState<Dayjs | null>(endDate);

  // --- Handlers ---
  const handleFieldChange = (identifier: string, value: string) => {
    setFilters((prev) => ({ ...prev, [identifier]: value }));
  };

  const handleMostrar = () => {
    console.log("Filtros:", filters);
  };

  const rangeText = useMemo(() => buildRangeText(startDate, endDate), [startDate, endDate]);
  const draftRangeText = useMemo(() => buildRangeText(draftStart, draftEnd), [draftStart, draftEnd]);

  const handleSelectDate = (picked: Dayjs | null) => {
    if (!picked) return;
    if (!draftStart || draftEnd) {
      setDraftStart(picked.startOf("day"));
      setDraftEnd(null);
    } else if (picked.isBefore(draftStart)) {
      setDraftStart(picked);
      setDraftEnd(null);
    } else {
      setDraftEnd(picked);
    }
  };

  const handleAplicar = () => {
    setStartDate(draftStart);
    setEndDate(draftEnd);
    setFilters((prev) => ({
      ...prev,
      fechaRango: buildRangeText(draftStart, draftEnd),
    }));
    setAnchorEl(null);
  };

  return (
    <>
      <NavBar />
      <Box sx={{ display: "flex", bgcolor: "#F8F9FA", minHeight: "100vh" }}>
        <LeftFormsMenu />
        <Box sx={{ flex: 1, p: 3, maxWidth: "1400px", mx: "auto" }}>
          
          <Typography variant="h5" fontWeight={700} mb={3}>
            Prospección de clientes
          </Typography>

          {/* 🔥 KPIs */}
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            {[
              { label: "Solicitudes hoy", value: 124 },
              { label: "Aprobadas", value: 80 },
              { label: "Pendientes", value: 44 },
            ].map((item) => (
              <Card key={item.label} sx={{ flex: 1, p: 2, borderRadius: 3, border: "1px solid #E5E7EB" }}>
                <Typography variant="body2" color="text.secondary">{item.label}</Typography>
                <Typography variant="h5" fontWeight={700}>{item.value}</Typography>
              </Card>
            ))}
          </Box>

          {/* 🔥 FILTROS */}
          <Paper elevation={0} sx={{ p: 2, borderRadius: 3, border: "1px solid #E5E7EB", mb: 3 }}>
            <Typography fontWeight={600} mb={2}>Filtros</Typography>

            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-end", flexWrap: "wrap" }}>
                
                {/* 📅 Fecha */}
                <Box sx={{ width: 280 }}>
                  <Typography variant="caption" fontWeight={600} sx={{ mb: 0.5, display: 'block', ml: 0.5 }}>
                    Fecha
                  </Typography>
                  <FormInput
                    identifier="fechaRango"
                    label="" // 👈 Agregado para cumplir con FormInputProps (TS Error 2741)
                    value={rangeText}
                    onValueChange={handleFieldChange}
                    textFieldProps={{
                      size: "small",
                      fullWidth: true,
                      inputProps: { readOnly: true },
                      onClick: (e: React.MouseEvent<HTMLDivElement>) => setAnchorEl(e.currentTarget),
                      sx: commonInputSx, // 👈 Aplicado correctamente (TS Error 6133)
                    }}
                  />
                </Box>

                {/* 🔍 Cliente */}
                <Box sx={{ width: 280 }}>
                  <Typography variant="caption" fontWeight={600} sx={{ mb: 0.5, display: 'block', ml: 0.5 }}>
                    Cliente
                  </Typography>
                  <FormInput
                    identifier="busqueda"
                    label="" // 👈 Agregado para cumplir con FormInputProps (TS Error 2741)
                    value={filters.busqueda}
                    onValueChange={handleFieldChange}
                    textFieldProps={{
                      size: "small",
                      fullWidth: true,
                      sx: commonInputSx, // 👈 Aplicado correctamente (TS Error 6133)
                    }}
                  />
                </Box>

                <Button
                  variant="contained"
                  onClick={handleMostrar}
                  sx={{
                    height: CONTROL_HEIGHT,
                    px: 4,
                    borderRadius: 2,
                    bgcolor: "#1A73E8",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": { bgcolor: "#1558B0", boxShadow: "none" },
                  }}
                >
                  Buscar
                </Button>
              </Box>

              {/* ... Chips y Popover */}
            </LocalizationProvider>
          </Paper>

          {/* 🔥 TABLA */}
          <Card sx={{ p: 2, borderRadius: 3, border: "1px solid #E5E7EB" }}>
            <Typography fontWeight={600} mb={2}>Resultados</Typography>
            <TableHome />
          </Card>
        </Box>
      </Box>

      {/* 🔥 POPOVER */}
      <Popover
        open={openCalendar}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Box sx={{ p: 2 }}>
          <Typography fontWeight={600} mb={1}>Selecciona rango</Typography>
          <Typography fontSize={12} color="text.secondary" mb={1}>{draftRangeText}</Typography>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: "flex", gap: 2 }}>
            <DateCalendar value={draftStart} onChange={(d) => handleSelectDate(d)} />
            <DateCalendar value={draftEnd} onChange={(d) => handleSelectDate(d)} />
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button onClick={() => setAnchorEl(null)}>Cancelar</Button>
            <Button variant="contained" onClick={handleAplicar} disabled={!draftStart || !draftEnd}>
              Aplicar
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

import { useMemo, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  IconButton,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type Order = "asc" | "desc";

type HomeRow = {
  fecha: string; // "10 feb 2026"
  hora: string; // "10:19 AM"
  numero: string; // "52884N"
  cliente: string;
  etapa: string; // icono o texto corto
  grupo: string; // "--"
  tipoSolicitud: string;
  monto: number;
  gestor: string;
};

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

const rowsSeed: HomeRow[] = [
  {
    fecha: "10 feb 2026",
    hora: "10:19 AM",
    numero: "52884N",
    cliente: "Pablo Javier Bengoechea Morena",
    etapa: "✍️",
    grupo: "--",
    tipoSolicitud: "Prospecto Cliente Empresario",
    monto: 7500,
    gestor: "ABELTRAN - ALMA ELIZABETH BELTRAN DE RIVE",
  },
  {
    fecha: "10 feb 2026",
    hora: "09:01 AM",
    numero: "52881N",
    cliente: "Pablo Javier 468047 Bengoechea Morena",
    etapa: "✍️",
    grupo: "--",
    tipoSolicitud: "Prospecto Cliente Empresario",
    monto: 0,
    gestor: "ABELTRAN - ALMA ELIZABETH BELTRAN DE RIVE",
  },
  {
    fecha: "10 feb 2026",
    hora: "08:59 AM",
    numero: "52879N",
    cliente: "Pablo Javier Bengoechea Morena",
    etapa: "✍️",
    grupo: "--",
    tipoSolicitud: "Prospecto Cliente Empresario",
    monto: 0,
    gestor: "ABELTRAN - ALMA ELIZABETH BELTRAN DE RIVE",
  },
  {
    fecha: "09 feb 2026",
    hora: "11:28 AM",
    numero: "52877N",
    cliente: "Pablo Javier 231065 Bengoechea Morena",
    etapa: "✍️",
    grupo: "--",
    tipoSolicitud: "Prospecto Cliente Empresario",
    monto: 6186.48,
    gestor: "ABELTRAN - ALMA ELIZABETH BELTRAN DE RIVE",
  },
  {
    fecha: "09 feb 2026",
    hora: "10:57 AM",
    numero: "52876N",
    cliente: "Pablo Javier 424286 Bengoechea Morena",
    etapa: "✍️",
    grupo: "--",
    tipoSolicitud: "Prospecto Cliente Empresario",
    monto: 10500,
    gestor: "ABELTRAN - ALMA ELIZABETH BELTRAN DE RIVE",
  },
  {
    fecha: "05 feb 2026",
    hora: "02:19 PM",
    numero: "52874N",
    cliente: "Pablo Javier 276547 Bengoechea Morena",
    etapa: "✍️",
    grupo: "--",
    tipoSolicitud: "Prospecto Cliente Empresario",
    monto: 0,
    gestor: "ABELTRAN - ALMA ELIZABETH BELTRAN DE RIVE",
  },
  {
    fecha: "05 feb 2026",
    hora: "02:15 PM",
    numero: "52873N",
    cliente: "Pablo Javier 276547 Bengoechea Morena",
    etapa: "✍️",
    grupo: "--",
    tipoSolicitud: "Prospecto Cliente Empresario",
    monto: 0,
    gestor: "ABELTRAN - ALMA ELIZABETH BELTRAN DE RIVE",
  },
];

type SortKey = keyof Pick<
  HomeRow,
  "fecha" | "hora" | "numero" | "cliente" | "etapa" | "grupo" | "tipoSolicitud" | "monto" | "gestor"
>;

export const TableHome = () => {
  const [buscar, setBuscar] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const [orderBy, setOrderBy] = useState<SortKey>("fecha");
  const [order, setOrder] = useState<Order>("asc");

  const handleRequestSort = (key: SortKey) => {
    if (orderBy === key) {
      setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
      return;
    }
    setOrderBy(key);
    setOrder("asc");
  };

  const filtered = useMemo(() => {
    const q = buscar.trim().toLowerCase();
    if (!q) return rowsSeed;

    return rowsSeed.filter((r) => {
      const blob = [
        r.fecha,
        r.hora,
        r.numero,
        r.cliente,
        r.etapa,
        r.grupo,
        r.tipoSolicitud,
        String(r.monto),
        r.gestor,
      ]
        .join(" ")
        .toLowerCase();

      return blob.includes(q);
    });
  }, [buscar]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    arr.sort((a, b) => {
      const av = a[orderBy];
      const bv = b[orderBy];

      // monto numérico
      if (orderBy === "monto") {
        const na = Number(av);
        const nb = Number(bv);
        return order === "asc" ? na - nb : nb - na;
      }

      // strings
      const sa = String(av).toLowerCase();
      const sb = String(bv).toLowerCase();
      if (sa < sb) return order === "asc" ? -1 : 1;
      if (sa > sb) return order === "asc" ? 1 : -1;
      return 0;
    });
    return arr;
  }, [filtered, order, orderBy]);

  const visible = useMemo(() => sorted.slice(0, rowsPerPage), [sorted, rowsPerPage]);

  return (
    <Paper
      elevation={3}
      sx={{
        mt: 2,
        borderRadius: 2,
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Toolbar (Buscar + selector 10) */}
      <Box
        sx={{
          p: 2,
          pb: 1.25,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <TextField
          size="small"
          placeholder="Buscar"
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
          sx={{
            width: 280,
            "& .MuiInputBase-root": { height: 40 },
          }}
        />

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography fontSize={12} color="text.secondary">
            {""}
          </Typography>

          <FormControl size="small">
            <Select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              sx={{
                height: 40,
                minWidth: 70,
                "& .MuiSelect-select": { display: "flex", alignItems: "center" },
              }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <TableContainer sx={{ maxHeight: 520 }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              {[
                { key: "fecha", label: "Fecha", align: "left" as const },
                { key: "hora", label: "Hora", align: "left" as const },
                { key: "numero", label: "#", align: "left" as const },
                { key: "cliente", label: "Cliente", align: "left" as const },
                { key: "etapa", label: "Etapa", align: "center" as const },
                { key: "grupo", label: "Grupo", align: "center" as const },
                { key: "tipoSolicitud", label: "Tipo solicitud", align: "left" as const },
                { key: "monto", label: "Monto", align: "right" as const },
                { key: "gestor", label: "Gestor", align: "left" as const },
              ].map((h) => (
                <TableCell
                  key={h.key}
                  align={h.align}
                  sx={{
                    fontWeight: 700,
                    fontSize: 12,
                    bgcolor: "#fff",
                    borderBottom: "1px solid rgba(0,0,0,0.08)",
                    whiteSpace: "nowrap",
                  }}
                >
                  <TableSortLabel
                    active={orderBy === (h.key as SortKey)}
                    direction={orderBy === (h.key as SortKey) ? order : "asc"}
                    onClick={() => handleRequestSort(h.key as SortKey)}
                    IconComponent={ArrowDropDownIcon}
                    sx={{
                      "& .MuiTableSortLabel-icon": {
                        opacity: 0.55,
                      },
                    }}
                  >
                    {h.label}
                  </TableSortLabel>
                </TableCell>
              ))}

              <TableCell
                align="center"
                sx={{
                  fontWeight: 700,
                  fontSize: 12,
                  bgcolor: "#fff",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  whiteSpace: "nowrap",
                }}
              >
                Descargar
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {visible.map((r, idx) => (
              <TableRow
                key={`${r.numero}-${idx}`}
                hover
                sx={{
                  "& td": {
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                  },
                }}
              >
                <TableCell sx={{ fontSize: 12, color: "rgba(0,0,0,0.65)" }}>{r.fecha}</TableCell>
                <TableCell sx={{ fontSize: 12, color: "rgba(0,0,0,0.65)" }}>{r.hora}</TableCell>
                <TableCell sx={{ fontSize: 12, color: "rgba(0,0,0,0.65)" }}>{r.numero}</TableCell>

                <TableCell sx={{ fontSize: 12, fontWeight: 600, color: "rgba(0,0,0,0.82)" }}>
                  {r.cliente}
                </TableCell>

                <TableCell align="center" sx={{ fontSize: 14 }}>
                  {r.etapa}
                </TableCell>

                <TableCell align="center" sx={{ fontSize: 12, color: "rgba(0,0,0,0.55)" }}>
                  {r.grupo}
                </TableCell>

                <TableCell sx={{ fontSize: 12, color: "rgba(0,0,0,0.55)" }}>
                  {r.tipoSolicitud}
                </TableCell>

                <TableCell align="right" sx={{ fontSize: 12, fontWeight: 700, color: "rgba(0,0,0,0.75)" }}>
                  {money(r.monto)}
                </TableCell>

                <TableCell sx={{ fontSize: 11.5, color: "rgba(0,0,0,0.50)" }}>
                  {r.gestor}
                </TableCell>

                <TableCell align="center">
                  <IconButton
                    size="small"
                    onClick={() => console.log("Descargar:", r)}
                    sx={{
                      border: "1px solid rgba(0,0,0,0.15)",
                      borderRadius: 1.5,
                      width: 30,
                      height: 30,
                    }}
                  >
                    <DownloadOutlinedIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}

            {visible.length === 0 && (
              <TableRow>
                <TableCell colSpan={10} sx={{ py: 3 }}>
                  <Typography fontSize={12} color="text.secondary" textAlign="center">
                    No hay resultados para mostrar.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

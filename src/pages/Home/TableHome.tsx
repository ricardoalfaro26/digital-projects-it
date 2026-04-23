import { useMemo, useState } from "react";
import {
    Box,
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
    Tooltip,
} from "@mui/material";
import { Dayjs } from "dayjs";

// Iconos para las acciones
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import TimelineIcon from "@mui/icons-material/Timeline";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";

export type HomeRow = {
    id: number;
    fecha: string;
    hora: string;
    numero: string;
    cliente: string;
    etapa: string;
    grupo: string;
    tipoSolicitud: string;
    monto: number;
    gestor: string;
};

type Order = "asc" | "desc";
type SortKey = keyof HomeRow;

interface TableHomeProps {
    onAction: (client: HomeRow, tab: "seguimiento" | "flujo" | "docs") => void;
    rows: HomeRow[];
    cliente: string;
    startDate: Dayjs | null;
    endDate: Dayjs | null;
}

const money = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD" });

export const TableHome = ({ onAction, rows, cliente, startDate, endDate }: TableHomeProps) => {
    const [buscar, setBuscar] = useState("");
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const [orderBy, setOrderBy] = useState<SortKey>("fecha");
    const [order, setOrder] = useState<Order>("asc");

    const handleRequestSort = (key: SortKey) => {
        setOrder(orderBy === key && order === "asc" ? "desc" : "asc");
        setOrderBy(key);
    };

    const filtered = useMemo(() => {
        const q = buscar.trim().toLowerCase();

        return rows.filter((r) => {
            // 🔎 filtro por buscador global
            const matchesSearch = q
                ? Object.values(r).join(" ").toLowerCase().includes(q)
                : true;

            // 🔎 filtro por cliente (input externo)
            const matchesCliente = cliente
                ? r.cliente.toLowerCase().includes(cliente.toLowerCase())
                : true;

            // 🔎 filtro por fechas
            const rowDate = new Date(r.fecha); // ⚠️ asegúrate formato YYYY-MM-DD

            const matchesStart = startDate
                ? rowDate >= startDate.toDate()
                : true;

            const matchesEnd = endDate
                ? rowDate <= endDate.toDate()
                : true;

            return matchesSearch && matchesCliente && matchesStart && matchesEnd;
        });
    }, [buscar, rows, cliente, startDate, endDate]);

    const sorted = useMemo(() => {
        return [...filtered].sort((a, b) => {
            const av = a[orderBy], bv = b[orderBy];

            if (typeof av === "number" && typeof bv === "number") {
                return order === "asc" ? av - bv : bv - av;
            }

            return order === "asc"
                ? String(av).localeCompare(String(bv))
                : String(bv).localeCompare(String(av));
        });
    }, [filtered, order, orderBy]);

    const visible = sorted.slice(0, rowsPerPage);

    return (
        <Box>
            <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", gap: 2 }}>
                <TextField
                    size="small"
                    placeholder="Buscar solicitud..."
                    value={buscar}
                    onChange={(e) => setBuscar(e.target.value)}
                    sx={{ width: 320, "& .MuiInputBase-root": { height: 40, borderRadius: 2 } }}
                />
                <FormControl size="small">
                    <Select
                        value={rowsPerPage}
                        onChange={(e) => setRowsPerPage(Number(e.target.value))}
                        sx={{ height: 40, borderRadius: 2 }}
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <TableContainer>
                <Table stickyHeader size="small">
                    <TableHead>
                        <TableRow>
                            {[
                                { label: "Fecha", key: "fecha" },
                                { label: "Hora", key: "hora" },
                                { label: "Solicitud", key: "numero" },
                                { label: "Cliente", key: "cliente" },
                                { label: "Etapa", key: "etapa" },
                                { label: "Grupo", key: "grupo" },
                                { label: "Tipo solicitud", key: "tipoSolicitud" },
                                { label: "Monto", key: "monto" },
                                { label: "Gestor", key: "gestor" },
                            ].map((col) => (
                                <TableCell key={col.key} sx={{ fontWeight: 700, fontSize: 12, bgcolor: "#fff" }}>
                                    <TableSortLabel
                                        active={orderBy === col.key}
                                        direction={order}
                                        onClick={() => handleRequestSort(col.key as SortKey)}
                                    >
                                        {col.label}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                            <TableCell align="center" sx={{ fontWeight: 700, fontSize: 12, bgcolor: "#fff" }}>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visible.map((r, idx) => (
                            <TableRow key={idx} hover>
                                <TableCell sx={{ fontSize: 12 }}>{r.fecha}</TableCell>
                                <TableCell sx={{ fontSize: 12 }}>{r.hora}</TableCell>
                                <TableCell sx={{ fontSize: 12 }}>{r.numero}</TableCell>
                                <TableCell sx={{ fontSize: 12, fontWeight: 600 }}>{r.cliente}</TableCell>
                                <TableCell align="center">{r.etapa}</TableCell>
                                <TableCell align="center">{r.grupo}</TableCell>
                                <TableCell sx={{ fontSize: 12 }}>{r.tipoSolicitud}</TableCell>
                                <TableCell align="right" sx={{ fontSize: 12, fontWeight: 700 }}>
                                    {money(r.monto)}
                                </TableCell>
                                <TableCell sx={{ fontSize: 11, color: "text.secondary" }}>
                                    {r.gestor}
                                </TableCell>

                                {/* 🔒 SIN CAMBIOS */}
                                <TableCell align="center">
                                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                                        <Tooltip title="Seguimiento">
                                            <IconButton
                                                size="small"
                                                onClick={() => onAction(r, 'seguimiento')}
                                                sx={{ border: "1px solid #eee", color: '#1A73E8' }}
                                            >
                                                <VisibilityOutlinedIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title="Ver Flujo">
                                            <IconButton
                                                size="small"
                                                onClick={() => onAction(r, 'flujo')}
                                                sx={{ border: "1px solid #eee", color: '#F57C00' }}
                                            >
                                                <TimelineIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title="Documentos">
                                            <IconButton
                                                size="small"
                                                onClick={() => onAction(r, 'docs')}
                                                sx={{ border: "1px solid #eee", color: '#757575' }}
                                            >
                                                <PrintOutlinedIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};
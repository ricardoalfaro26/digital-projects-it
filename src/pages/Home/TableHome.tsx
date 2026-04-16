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

// Iconos para las acciones
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import TimelineIcon from "@mui/icons-material/Timeline";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";

export type HomeRow = {
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
}

const money = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD" });

const rowsSeed: HomeRow[] = [
    { fecha: "10 feb 2026", hora: "10:19 AM", numero: "52884N", cliente: "Pablo Javier Bengoechea Morena", etapa: "✍️", grupo: "--", tipoSolicitud: "Prospecto Cliente Empresario", monto: 7500, gestor: "ABELTRAN - ALMA ELIZABETH" },
    { fecha: "10 feb 2026", hora: "09:01 AM", numero: "52881N", cliente: "Juan Antonio Perez Mancilla", etapa: "✍️", grupo: "--", tipoSolicitud: "Prospecto Flujo Corto", monto: 4000, gestor: "ABELTRAN - ALMA ELIZABETH" },
    { fecha: "09 feb 2026", hora: "11:28 AM", numero: "52877N", cliente: "Pablo Javier 231065 Bengoechea", etapa: "✍️", grupo: "--", tipoSolicitud: "Prospecto Cliente Empresario", monto: 6186.48, gestor: "ABELTRAN - ALMA ELIZABETH" },
];

export const TableHome = ({ onAction }: TableHomeProps) => {
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
        return q ? rowsSeed.filter(r => Object.values(r).join(" ").toLowerCase().includes(q)) : rowsSeed;
    }, [buscar]);

    const sorted = useMemo(() => {
        return [...filtered].sort((a, b) => {
            const av = a[orderBy], bv = b[orderBy];
            if (typeof av === 'number' && typeof bv === 'number') return order === "asc" ? av - bv : bv - av;
            return order === "asc" ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
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
                            {["Fecha", "Hora", "#", "Cliente", "Etapa", "Grupo", "Tipo solicitud", "Monto", "Gestor"].map((label, i) => (
                                <TableCell key={label} sx={{ fontWeight: 700, fontSize: 12, bgcolor: "#fff" }}>
                                    <TableSortLabel
                                        active={orderBy === (Object.keys(rowsSeed[0])[i] as SortKey)}
                                        direction={order}
                                        onClick={() => handleRequestSort(Object.keys(rowsSeed[0])[i] as SortKey)}
                                    >
                                        {label}
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
                                <TableCell align="right" sx={{ fontSize: 12, fontWeight: 700 }}>{money(r.monto)}</TableCell>
                                <TableCell sx={{ fontSize: 11, color: "text.secondary" }}>{r.gestor}</TableCell>

                                <TableCell align="center">
                                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                                        <Tooltip title="Seguimiento">
                                            <IconButton size="small" onClick={() => onAction(r, 'seguimiento')} sx={{ border: "1px solid #eee", color: '#1A73E8' }}>
                                                <VisibilityOutlinedIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Ver Flujo">
                                            <IconButton size="small" onClick={() => onAction(r, 'flujo')} sx={{ border: "1px solid #eee", color: '#F57C00' }}>
                                                <TimelineIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Documentos">
                                            <IconButton size="small" onClick={() => onAction(r, 'docs')} sx={{ border: "1px solid #eee", color: '#757575' }}>
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
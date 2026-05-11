import { useMemo, useState, useEffect  } from "react";
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    IconButton,
    Tooltip,
    TablePagination,
    FormControl,
    Select,
    MenuItem
} from "@mui/material";
// import { Dayjs } from "dayjs";

// Iconos para las acciones
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import TimelineIcon from "@mui/icons-material/Timeline";
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
    // cliente: string;
    // startDate: Dayjs | null;
    // endDate: Dayjs | null;
}

const money = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD" });

export const TableHome = ({ onAction, rows }: TableHomeProps) => {
    const [rowsPerPage, setRowsPerPage] = useState<number>(6);
    const [page, setPage] = useState(0);
    const [orderBy, setOrderBy] = useState<SortKey>("id");
    const [order, setOrder] = useState<Order>("desc");

    const handleRequestSort = (key: SortKey) => {
        setOrder(orderBy === key && order === "asc" ? "desc" : "asc");
        setOrderBy(key);
    };

    const sorted = useMemo(() => {
        return [...rows].sort((a, b) => {
            const av = a[orderBy], bv = b[orderBy];

            if (typeof av === "number" && typeof bv === "number") {
                return order === "asc" ? av - bv : bv - av;
            }

            return order === "asc"
                ? String(av).localeCompare(String(bv))
                : String(bv).localeCompare(String(av));
        });
    }, [rows, order, orderBy]);

    const visible = sorted.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    useEffect(() => {
        console.log("Ejecutando efecto");
    }, []);

    return (
        <Box>
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
                                <TableCell
                                    key={col.key}
                                    align="center"
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: 12,
                                        bgcolor: "#fff"
                                    }}
                                >
                                    <TableSortLabel
                                        active={orderBy === col.key}
                                        direction={order}
                                        onClick={() => handleRequestSort(col.key as SortKey)}
                                        sx={{
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "center"
                                        }}
                                    >
                                        {col.label}
                                    </TableSortLabel>
                                </TableCell>
                            ))}

                            <TableCell
                                align="center"
                                sx={{ fontWeight: 700, fontSize: 12, bgcolor: "#fff" }}
                            >
                                Acciones
                            </TableCell>
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

                                        {/* <Tooltip title="Ver Flujo">
                                            <IconButton
                                                size="small"
                                                onClick={() => onAction(r, 'flujo')}
                                                sx={{ border: "1px solid #eee", color: '#F57C00' }}
                                            >
                                                <TimelineIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip> */}

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
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 2,
                    py: 1
                }}
            >
                {/* IZQUIERDA → rows per page */}
                <FormControl size="small">
                    <Select
                        value={rowsPerPage}
                        onChange={(e) => {
                            setRowsPerPage(Number(e.target.value));
                            setPage(0);
                        }}
                        sx={{ height: 36, width: 60, borderRadius: 2 }}
                    >
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>
                </FormControl>

                {/* DERECHA → paginación */}
                <TablePagination
                    component="div"
                    count={rows.length}
                    page={page}
                    onPageChange={(_, newPage) => setPage(newPage)}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={() => {}}
                    rowsPerPageOptions={[]} // ocultamos selector interno
                />
            </Box>
        </Box>
    );
};
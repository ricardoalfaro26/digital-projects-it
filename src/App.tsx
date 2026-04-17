import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Home } from "./pages/Home/Home";
import Login from "./pages/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";

// ✅ Formularios (crealos en ./pages o ajusta el path de import)
import { PrecalificationForm } from "./pages/precalificationForm";
import {SolicitudeForm} from "./pages/solicitudeForm.tsx";
import { MainTratamientoPage } from "./pages/MainTratamientoForm";
import {IngresosPorVentas} from "./pages/evaluacion-economica/ingresosPorVentas.tsx";
import {MargenGananciaV2Form} from "./pages/evaluacion-economica/margenGanancia.tsx";
import {EgresosOperativos} from "./pages/evaluacion-economica/egresosIOpertivos.tsx";
import {IngresosRubroAdicional} from "./pages/evaluacion-economica/ingresosrubroAdicional.tsx";
import ActivosCorriente from "./pages/evaluacion-economica/activosCorriente.tsx";
import {ActivoNoCorrientes} from "./pages/evaluacion-economica/activoNoCorrientes.tsx";
import {PasivosCorrientes} from "./pages/evaluacion-economica/pasivosCorrientes.tsx";
import {EgresosUnidadFamiliar} from "./pages/evaluacion-economica/egresosUnidadFamiliar.tsx";
import {EstadoDeResultados} from "./pages/evaluacion-economica/estadoDeResultados.tsx";
import {BalanceGeneralNegocio} from "./pages/evaluacion-economica/balanceGeneralNegocio.tsx";
import IndicadoresFinancieros from "./pages/evaluacion-economica/indicadoresFinancieros.tsx";
import {DatosDemograficos} from "./pages/evaluacion-economica/datosDemograficos.tsx";
import {AsociacionGarante} from "./pages/evaluacion-economica/asociacionGarante.tsx";
import {ValidacionEvaluacion} from "./pages/evaluacion-economica/validacionEvaluacion.tsx";
import {BalanceFamiEmpresa} from "./pages/evaluacion-economica/balanceFamiEmp.tsx";
import {TotalDatosEvaluacion} from "./pages/evaluacion-economica/totalDatosEvaluacion.tsx";
import {ReferenciaPersonal} from "./pages/referencias/referenciaPersonal.tsx";
import {PropuestaFinanciamiento} from "./pages/propuesta/propuestaFinanciamiento.tsx";
import {HojaDeSupervision} from "./pages/hoja-de-supervision/hojaDeSupervision.tsx";
import {DetallePersonal} from "./pages/evaluacion-economica/detallePersonal.tsx";
import {OtrasFuentesIngresos} from "./pages/evaluacion-economica/otrasFuentesIngresos.tsx";


function App() {
    const isAuthenticated = localStorage.getItem("token"); // si existe token, está logueado
    return (
        <>
            <CssBaseline />

            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />

                    {/* ✅ Rutas de formularios (para el menú derecho) */}
                    <Route
                        path="/forms/precalificacion"
                        element={
                            <ProtectedRoute>
                                <PrecalificationForm />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/forms/solicitud"
                        element={
                            <ProtectedRoute>
                                <SolicitudeForm />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/forms/gestion"
                        element={
                            <ProtectedRoute>
                                <MainTratamientoPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/forms/evaluacion-economica/ingresos-ventas"
                        element={
                            <ProtectedRoute>
                                <IngresosPorVentas />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/forms/evaluacion-economica/margen-ganancia-v2"
                        element={
                            <ProtectedRoute>
                                <MargenGananciaV2Form/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/forms/evaluacion-economica/egresos-operativos"
                        element = {
                            <ProtectedRoute>
                                <EgresosOperativos/>
                            </ProtectedRoute>
                        }                      
                    />
                    <Route
                        path="/forms/evaluacion-economica/ingresos-rubro-adicional"
                        element = {
                            <ProtectedRoute>
                                <IngresosRubroAdicional/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/forms/evaluacion-economica/activos-corrientes"
                        element = {
                            <ProtectedRoute>
                                <ActivosCorriente/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/forms/evaluacion-economica/activos-no-corrientes"
                        element = {
                            <ProtectedRoute>
                                <ActivoNoCorrientes/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/forms/evaluacion-economica/pasivos-corrientes"
                        element = {
                            <ProtectedRoute>
                                <PasivosCorrientes/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/forms/evaluacion-economica/egresos-unidad-familiar"
                        element = {
                            <ProtectedRoute>
                                <EgresosUnidadFamiliar/>
                            </ProtectedRoute>
                        }
                    />
                     <Route
                        path="/forms/evaluacion-economica/estado-resultado"
                        element = {
                            <ProtectedRoute>
                                <EstadoDeResultados/>
                            </ProtectedRoute>
                        }
                    />
                      <Route
                        path="/forms/evaluacion-economica/balance-general-negocio"
                        element = {
                            <ProtectedRoute>
                                <BalanceGeneralNegocio/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/forms/evaluacion-economica/indicadores-financieros"
                        element = {
                            <ProtectedRoute>
                                <IndicadoresFinancieros/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/forms/evaluacion-economica/datos-demograficos"
                        element = {
                            <ProtectedRoute>
                                <DatosDemograficos/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/forms/evaluacion-economica/asociacion-garante"
                        element = {
                            <ProtectedRoute>
                                <AsociacionGarante/>
                            </ProtectedRoute>
                        }
                    />
                     <Route
                        path="/forms/evaluacion-economica/balance-fami-empresa"
                        element = {
                            <ProtectedRoute>
                                <BalanceFamiEmpresa/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/forms/evaluacion-economica/total-datos-evaluacion"
                        element = {
                            <ProtectedRoute>
                                <TotalDatosEvaluacion/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/forms/evaluacion-economica/validacion-politicas-evaluacion"
                        element = {
                            <ProtectedRoute>
                                <ValidacionEvaluacion/>
                            </ProtectedRoute>
                        }
                    />
                     <Route
                        path="/forms/referencias/referencias-personales"
                        element = {
                            <ProtectedRoute>
                                <ReferenciaPersonal/>
                            </ProtectedRoute>
                        }
                    />
                     <Route
                        path="/forms/propuesta/propuesta-financiamiento"
                        element = {
                            <ProtectedRoute>
                                <PropuestaFinanciamiento/>
                            </ProtectedRoute>
                        }
                    />
                     <Route
                        path="/forms/hoja-de-supervision/hoja-de-supervision"
                        element = {
                            <ProtectedRoute>
                                <HojaDeSupervision/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/forms/evaluacion-economica/detalle-personal"
                        element = {
                            <ProtectedRoute>
                                <DetallePersonal/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/forms/evaluacion-economica/otras-fuentes-ingresos"
                        element = {
                            <ProtectedRoute>
                                <OtrasFuentesIngresos/>
                            </ProtectedRoute>
                        }
                    />

                    {/* Ruta de login: redirige si ya está autenticado */}
                    <Route
                        path="/login"
                        element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
                    />

                    {/* Ruta por defecto */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

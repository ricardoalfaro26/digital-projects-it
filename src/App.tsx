import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import { Home } from "./pages/Home/Home";
import Login from "./pages/Login";

import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {

    return (
        <>
            <CssBaseline />

            <BrowserRouter>
                <Routes>

                    {/* LOGIN */}
                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    {/* HOME PROTEGIDO */}
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />

                    {/* DEFAULT */}
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
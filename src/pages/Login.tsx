import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  InputAdornment,
  Paper,
  CircularProgress,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const timerRef = useRef<number | null>(null);

  const BURNED_USER = "matias.sarmiento";
  const BURNED_PASS = "integral2025";

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated === "true") navigate("/", { replace: true });

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [navigate]);

  const handleLogin = () => {
    if (loading) return;
    setError("");
    setLoading(true);

    timerRef.current = window.setTimeout(() => {
      const userInput = username.trim().toLowerCase();
      const passInput = password.trim();

      const ok =
          userInput === BURNED_USER.toLowerCase() && passInput === BURNED_PASS;

      setLoading(false);

      if (ok) {
        // ✅ IMPORTANTE: setear token demo para que Home/Detail no queden 401 y en loop
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("token", "fake-token-demo");
        navigate("/", { replace: true });
      } else {
        setError("Usuario o contraseña incorrecta.");
      }
    }, 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!loading && e.key === "Enter") handleLogin();
  };

  return (
      <Box
          sx={{
              height: "100vh",
              bgcolor: "#f5f5f5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
          }}
      >
          <Paper elevation={3} sx={{ p: 4, width: 350, borderRadius: "16px" }}>
              <Box textAlign="center" mb={2}>
                  <img
                      src="src/assets/Logo.png"
                      alt="Logo"
                      style={{ width: "90px", marginBottom: "5px" }}
                  />
                  <Typography variant="h6" fontWeight="bold" color="#003A70">
                      Bienvenido
                  </Typography>
                  <Typography fontSize={13} mt={2}>
                      Ingrese sus credenciales para acceder
                  </Typography>
              </Box>

              <TextField
                  fullWidth
                  variant="standard"
                  placeholder="Usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={loading}
                  InputProps={{
                      startAdornment: (
                          <InputAdornment position="start">
                              <AccountCircle fontSize="small" />
                          </InputAdornment>
                      ),
                  }}
                  sx={{ mb: 4 }}
              />

              <TextField
                  fullWidth
                  variant="standard"
                  placeholder="Contraseña"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={loading}
                  InputProps={{
                      startAdornment: (
                          <InputAdornment position="start">
                              <LockIcon fontSize="small" />
                          </InputAdornment>
                      ),
                  }}
                  sx={{ mb: 6 }}
              />

              {error && (
                  <Typography color="error" fontSize={13} mb={5}>
                      {error}
                  </Typography>
              )}

              <Button
                  variant="contained"
                  fullWidth
                  onClick={handleLogin}
                  disabled={loading}
                  endIcon={!loading ? <LoginIcon /> : undefined}
                  sx={{
                      backgroundColor: "#003A70",
                      height: 40,
                      "&.Mui-disabled": {
                          backgroundColor: "#003A70",
                          color: "#ffffff",
                          opacity: 1,
                      },
                      "&:hover": { backgroundColor: "#00264d" },
                  }}
              >
                  {loading ? <CircularProgress size={22} color="inherit" /> : "Ingresar"}
              </Button>
          </Paper>
      </Box>
  );
};

export default Login;

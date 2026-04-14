import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const LEFT_MENU_WIDTH = 260;

const MENU_BG = "white";
const MENU_SELECTED = "#F58025";
const DOT_COLOR = "#F58025";
const OPEN_BG = "rgba(0,0,0,0.08)"; // gris hover

const STORAGE_KEY_EVAL = "leftMenu.evalEcoOpen";
const STORAGE_KEY_REF = "leftMenu.referenciasOpen";
const STORAGE_KEY_PROP = "leftMenu.propuestaOpen";
const STORAGE_KEY_HOJA = "leftMenu.hojaSupervisionOpen";

type MenuItem = {
  label: string;
  path: string;
};

type MenuGroup = {
  label: string;
  basePath: string;
  children: MenuItem[];
};

// ✅ Menú simple (INICIO primero)
const FORM_MENU_ITEMS: MenuItem[] = [
  { label: "INICIO", path: "/" }, // ✅ NUEVO
  { label: "PRECALIFICACION", path: "/forms/precalificacion" },
  { label: "SOLICITUD", path: "/forms/solicitud" },
];

// ✅ Grupo desplegable para EVALUACION ECONOMICA
const EVALUACION_ECONOMICA_GROUP: MenuGroup = {
  label: "EVALUACION ECONOMICA",
  basePath: "/forms/evaluacion-economica",
  children: [ 
    { label: "Ingresos por ventas", path: "/forms/evaluacion-economica/ingresos-ventas" },
    { label: "Margen de ganancia v2", path: "/forms/evaluacion-economica/margen-ganancia-v2" },
    { label: "Egresos por gastos operativos", path: "/forms/evaluacion-economica/egresos-operativos" },
    { label: "Ingresos por rubro adicional", path: "/forms/evaluacion-economica/ingresos-rubro-adicional" },
    { label: "Activos corrientes", path: "/forms/evaluacion-economica/activos-corrientes" },
    { label: "Activos no corrientes", path: "/forms/evaluacion-economica/activos-no-corrientes" },
    { label: "Pasivos corrientes", path: "/forms/evaluacion-economica/pasivos-corrientes" },
    { label: "Egresos de la unidad familiar", path: "/forms/evaluacion-economica/egresos-unidad-familiar" },
    { label: "Detalle de personal", path: "/forms/evaluacion-economica/detalle-personal" },
    { label: "Otras fuentes de ingresos", path: "/forms/evaluacion-economica/otras-fuentes-ingresos" },
    { label: "Estado de resultado", path: "/forms/evaluacion-economica/estado-resultado" },
    { label: "Balance general del negocio", path: "/forms/evaluacion-economica/balance-general-negocio" },
    { label: "Balance fami-empresa", path: "/forms/evaluacion-economica/balance-fami-empresa" },
    { label: "Indicadores financieros", path: "/forms/evaluacion-economica/indicadores-financieros" },
    { label: "Total datos evaluación", path: "/forms/evaluacion-economica/total-datos-evaluacion" },
    { label: "Datos demográficos", path: "/forms/evaluacion-economica/datos-demograficos" },
    { label: "Asociación garante", path: "/forms/evaluacion-economica/asociacion-garante" },
    { label: "Validación de políticas de evaluación", path: "/forms/evaluacion-economica/validacion-politicas-evaluacion" },
  ],
};

// ✅ Grupo desplegable para REFERENCIAS
const REFERENCIAS_GROUP: MenuGroup = {
  label: "REFERENCIAS",
  basePath: "/forms/referencias",
  children: [{ label: "Referencias personales", path: "/forms/referencias/referencias-personales" }],
};

// ✅ Grupo desplegable para PROPUESTA
const PROPUESTA_GROUP: MenuGroup = {
  label: "PROPUESTA",
  basePath: "/forms/propuesta",
  children: [{ label: "Propuesta de financiamiento", path: "/forms/propuesta/propuesta-financiamiento" }],
};

// ✅ Grupo desplegable para HOJA DE SUPERVISIÓN
const HOJA_SUPERVISION_GROUP: MenuGroup = {
  label: "HOJA DE SUPERVISIÓN",
  basePath: "/forms/hoja-de-supervision",
  children: [{ label: "Hoja de supervisión", path: "/forms/hoja-de-supervision/hoja-de-supervision" }],
};

export const LeftFormsMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isInsideEvalGroup = location.pathname.startsWith(EVALUACION_ECONOMICA_GROUP.basePath);
  const isInsideReferenciasGroup = location.pathname.startsWith(REFERENCIAS_GROUP.basePath);
  const isInsidePropuestaGroup = location.pathname.startsWith(PROPUESTA_GROUP.basePath);
  const isInsideHojaGroup = location.pathname.startsWith(HOJA_SUPERVISION_GROUP.basePath);

  // =========================
  // ✅ EVALUACION ECONOMICA
  // =========================
  const [evalOpen, setEvalOpen] = React.useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_EVAL);
    if (saved === "true") return true;
    if (saved === "false") return false;
    return isInsideEvalGroup;
  });

  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY_EVAL, String(evalOpen));
  }, [evalOpen]);

  React.useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY_EVAL);
    if ((saved === null || saved === undefined) && isInsideEvalGroup) setEvalOpen(true);
  }, [isInsideEvalGroup]);

  const handleEvalClick = () => setEvalOpen((prev) => !prev);

  // =========================
  // ✅ REFERENCIAS
  // =========================
  const [refOpen, setRefOpen] = React.useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_REF);
    if (saved === "true") return true;
    if (saved === "false") return false;
    return isInsideReferenciasGroup;
  });

  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY_REF, String(refOpen));
  }, [refOpen]);

  React.useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY_REF);
    if ((saved === null || saved === undefined) && isInsideReferenciasGroup) setRefOpen(true);
  }, [isInsideReferenciasGroup]);

  const handleReferenciasClick = () => setRefOpen((prev) => !prev);

  // =========================
  // ✅ PROPUESTA
  // =========================
  const [propOpen, setPropOpen] = React.useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PROP);
    if (saved === "true") return true;
    if (saved === "false") return false;
    return isInsidePropuestaGroup;
  });

  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PROP, String(propOpen));
  }, [propOpen]);

  React.useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PROP);
    if ((saved === null || saved === undefined) && isInsidePropuestaGroup) setPropOpen(true);
  }, [isInsidePropuestaGroup]);

  const handlePropuestaClick = () => setPropOpen((prev) => !prev);

  // =========================
  // ✅ HOJA DE SUPERVISIÓN
  // =========================
  const [hojaOpen, setHojaOpen] = React.useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_HOJA);
    if (saved === "true") return true;
    if (saved === "false") return false;
    return isInsideHojaGroup;
  });

  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY_HOJA, String(hojaOpen));
  }, [hojaOpen]);

  React.useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY_HOJA);
    if ((saved === null || saved === undefined) && isInsideHojaGroup) setHojaOpen(true);
  }, [isInsideHojaGroup]);

  const handleHojaClick = () => setHojaOpen((prev) => !prev);

  const renderGroup = (group: MenuGroup, open: boolean, onToggle: () => void) => {
    return (
      <>
        <ListItemButton
          onClick={onToggle}
          sx={{
            mb: 1,
            borderRadius: 2,
            bgcolor: open ? OPEN_BG : "transparent",
            "&:hover": { bgcolor: OPEN_BG },
            display: "flex",
            alignItems: "center",
          }}
        >
          <ListItemText
            primary={group.label}
            primaryTypographyProps={{
              fontWeight: 700,
              fontSize: 13,
              color: "rgba(0,0,0,0.87)",
            }}
          />

          <KeyboardArrowRightIcon
            sx={{
              ml: 1,
              transition: "transform 180ms ease",
              transform: open ? "rotate(90deg)" : "rotate(0deg)",
              color: "rgba(0,0,0,0.65)",
            }}
          />
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List sx={{ pl: 1, pb: 1 }}>
            {group.children.map((child) => {
              const selected = location.pathname === child.path;

              return (
                <ListItemButton
                  key={child.path}
                  selected={selected}
                  onClick={() => navigate(child.path)}
                  sx={{
                    mb: 0.75,
                    borderRadius: 2,
                    ml: 1,

                    // ✅ CAMBIO: seleccionado solo texto naranja (sin fondo naranja)
                    "&.Mui-selected": {
                      bgcolor: "transparent",
                      color: MENU_SELECTED,
                    },
                    "&.Mui-selected:hover": {
                      bgcolor: OPEN_BG,
                      color: MENU_SELECTED,
                    },

                    "&:hover": { bgcolor: OPEN_BG },
                    pl: 2.2,
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      // ✅ CAMBIO: punto siempre naranja, incluso seleccionado
                      bgcolor: DOT_COLOR,
                      mr: 1.2,
                      flexShrink: 0,
                    }}
                  />

                  <ListItemText
                    primary={child.label}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: 12.5,
                      // ✅ CAMBIO: letras naranjas cuando está seleccionado
                      color: selected ? MENU_SELECTED : "rgba(0,0,0,0.80)",
                    }}
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  };

  return (
    <Box
      sx={{
        width: LEFT_MENU_WIDTH,
        bgcolor: MENU_BG,
        height: "auto",
        overflowY: "visible",
        p: 1.5,
        borderRadius: 2,
      }}
    >
      <List sx={{ p: 0 }}>
        {/* ✅ Items normales */}
        {FORM_MENU_ITEMS.map((item) => {
          const selected = location.pathname === item.path;

          return (
            <ListItemButton
              key={item.path}
              selected={selected}
              onClick={() => navigate(item.path)}
              sx={{
                mb: 1,
                borderRadius: 2,

                // ✅ CAMBIO: seleccionado solo letras naranjas (sin fondo naranja)
                "&.Mui-selected": {
                  bgcolor: "transparent",
                  color: MENU_SELECTED,
                },
                "&.Mui-selected:hover": {
                  bgcolor: OPEN_BG,
                  color: MENU_SELECTED,
                },

                "&:hover": { bgcolor: OPEN_BG },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 700,
                  fontSize: 13,
                  // ✅ asegura el color del texto en selected
                  color: selected ? MENU_SELECTED : "rgba(0,0,0,0.87)",
                }}
              />
            </ListItemButton>
          );
        })}

        {/* ✅ Grupos */}
        {renderGroup(EVALUACION_ECONOMICA_GROUP, evalOpen, handleEvalClick)}
        {renderGroup(REFERENCIAS_GROUP, refOpen, handleReferenciasClick)}
        {renderGroup(PROPUESTA_GROUP, propOpen, handlePropuestaClick)}
        {renderGroup(HOJA_SUPERVISION_GROUP, hojaOpen, handleHojaClick)}
      </List>
    </Box>
  );
};

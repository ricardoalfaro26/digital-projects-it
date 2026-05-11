import { Navigate, useLocation } from "react-router-dom";
import type { ReactElement } from "react";

export const ProtectedRoute = ({
  children,
}: {
  children: ReactElement;
}) => {

  const token = localStorage.getItem("token");

  const location = useLocation();

  // SI NO HAY TOKEN → LOGIN
  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  // SI HAY TOKEN → ENTRA
  return children;
};
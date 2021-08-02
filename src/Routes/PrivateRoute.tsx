import { LoggedLayout } from "Layouts/LoggedLayout";
import React from "react";
import { Redirect } from "react-router-dom";

/* Componente que protege la ruta --> vista de usuario logueado  */
export const PrivateRoute = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <LoggedLayout />;
  }

  return <Redirect to="/login" />;
};

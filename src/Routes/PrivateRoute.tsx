import { LoggedLayout } from "Layouts/LoggedLayout/LoggedLayout";
import React from "react";
import { Redirect, Route } from "react-router-dom";

/* Componente que protege la ruta --> vista de usuario logueado  */
export const PrivateRoute = ({ path, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Route path={path} component={LoggedLayout} />;
  }

  return <Redirect to="/login" />;
};

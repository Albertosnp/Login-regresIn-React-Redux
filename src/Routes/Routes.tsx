import React from "react";
import { Switch } from "react-router";
import { Redirect, Route } from "react-router-dom";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { RootStateOrAny, useSelector } from "react-redux";
import { LoggedLayout } from "Layouts/LoggedLayout";

/* Componente Routes que aloja los componentes a mostrar dependiendo de si esta logueado */
export const Routes = () => {
  //Trae estado global de login para saber si esta logueado o no
  const auth = useSelector(
    (state: RootStateOrAny) => state.login.isAuthenticated
  );
  return (
    <Switch>
      <Route path="/login" exact>
        {auth && <Redirect to="/users" />}
        <LoginForm />
      </Route>
      <Route path="/users" exact>
        {!auth && <Redirect to="/login" />}
        <LoggedLayout />
      </Route>
      {/* <Redirect to="/login" /> */}
    </Switch>
  );
};

import React, { useEffect, useState } from "react";
import { Switch } from "react-router";
import { Redirect, Route } from "react-router-dom";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { PrivateRoute } from "./PrivateRoute";
import { logInWithToken } from "reducers/loginReducer";

/**
 * Componente Routes que aloja los componentes a mostrar dependiendo de si esta logueado
 * Lee el localStorage para saber si esta logueado o no
 */
export const Routes = () => {
  const dispatch = useDispatch();
  const token: boolean = localStorage.getItem("token") !== null;
  //Trae estado global de login para saber si esta logueado o no
  const auth: boolean = useSelector(
    (state: RootStateOrAny) => state.login.isAuthenticated
  );
  //Si hay toquen --> Cambia estado global
  if (token) dispatch(logInWithToken());

  return (
    <Switch>
      <Route path="/login" exact>
        {auth && <Redirect to="/users" />}
        <LoginForm />
      </Route>
      <PrivateRoute path="/users" isAuthenticated={auth} />
    </Switch>
  );
};

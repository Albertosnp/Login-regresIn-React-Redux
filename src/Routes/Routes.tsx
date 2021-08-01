import React from "react";
import { Users } from "components/Users/Users";
import { Switch } from "react-router";
import { Redirect, Route } from "react-router-dom";
import { ButtonLogOut } from "../components/ButtonLogOut/ButtonLogOut";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { RootStateOrAny, useSelector } from "react-redux";

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
        <ButtonLogOut />
        <Users />
      </Route>
      <Redirect to="/login" />
    </Switch>
  );
};

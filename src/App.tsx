import React from "react";
import { LoginForm } from "components/LoginForm/LoginForm";
import { Users } from "components/Users/Users";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import ButtonLogOut from "components/ButtonLogOut/ButtonLogOut";
import { RootStateOrAny, useSelector } from "react-redux";

const App = () => {
  const auth = useSelector(
    (state: RootStateOrAny) => state.login.isAuthenticated
  );
  console.log(auth);
  
  return (
    <BrowserRouter>
      <p>Prueba técnica de LaLiga</p>
      {!auth ? <Link to="/login" /> : <Link to="/users" />}
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
    </BrowserRouter>
  );
};

export default App;

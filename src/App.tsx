import React from "react";
import { LoginForm } from "components/LoginForm/LoginForm";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { logOut } from "reducers/loginReducer";
import { Users } from "components/Users/Users";

const App = () => {
  const dispatch = useDispatch();
  useSelector((state: RootStateOrAny) => state.login);
  const token: String | null = localStorage.getItem("token");

  const handlerClick = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <p>Prueba técnica de LaLiga</p>
      {!token ? (
        <LoginForm />
      ) : (
        <div>
          <button onClick={() => handlerClick()}>Cerrar sesión</button>
          <Users />
        </div>
      )}
    </div>
  );
};

export default App;

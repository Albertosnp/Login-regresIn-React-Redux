import React from "react";
import { LoginForm } from "components/LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import { logOut } from "reducers/loginReducer";

const App = () => {
  const dispatch = useDispatch();
  const user = localStorage.getItem("token");
  const handlerClick = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <p>Prueba técnica de LaLiga</p>
      {!user ? (
        <LoginForm />
      ) : (
        <button onClick={() => handlerClick()}>Cerrar sesión</button>
      )}
    </div>
  );
};

export default App;

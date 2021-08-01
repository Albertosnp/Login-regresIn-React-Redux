import React, { useState } from "react";
import { LoginForm } from "components/LoginForm/LoginForm";

const App = () => {
  const [login, setlogin] = useState(true);
  const token = localStorage.getItem("token");
  console.log(token);
  const handlerClick = () => {
    localStorage.removeItem("token");
    //Añadir estado global
    setlogin(false);
  };
  return (
    <div>
      <p>Prueba técnica de LaLiga</p>
      {!login ? (
        <LoginForm />
      ) : (
        <button onClick={() => handlerClick()}>Cerrar sesión</button>
      )}
    </div>
  );
};

export default App;

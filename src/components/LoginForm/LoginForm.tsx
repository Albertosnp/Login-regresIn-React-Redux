import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "reducers/loginReducer";
import "./LoginForm.css";

/* Componente de Login */
export const LoginForm = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //Para cambiar los estados del input
  const handlerChange = (e) => {
    const { target } = e;
    if (target.name === "userName") {
      const userName = target.value;
      setUserName(userName.trim());
    }
    if (target.name === "password") {
      const password = target.value;
      setPassword(password.trim());
    }
  };
  //Comprueba usuario y contraseña y conecta si es correcto
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.value = "";
    //Para que no se envien datos al servidor vacios
    if (!userName || !password) return;
    //Dispara el action que llama al metodo logIn del reducer
    dispatch(logIn(userName, password));
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit} name="login">
          <input
            type="text"
            name="userName"
            placeholder="username"
            onChange={handlerChange}
            autoComplete="on"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handlerChange}
            autoComplete="off"
          />
          <button>Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};

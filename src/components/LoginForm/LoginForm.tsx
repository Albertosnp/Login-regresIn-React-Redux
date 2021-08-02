import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "reducers/loginReducer";
import { isValidateEmail } from "utils/validations";
import "./LoginForm.css";

/* Componente de Login */
export const LoginForm = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(false);
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
    let formOk = true;
    //Para que no se envien datos al servidor vacios
    if (!isValidateEmail(userName) || !password) formOk = false;
    //Dispara el action que llama al metodo logIn del reducer
    formOk ? dispatch(logIn(userName, password)) : setFormError(true);
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit} name="login">
          {formError ? (
            <span className="error-text">
              Por favor, introduce credenciales correctas
            </span>
          ) : (
            ""
          )}
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

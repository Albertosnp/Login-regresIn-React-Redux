import React, { useState } from "react";
import { loginUser } from "services/userLogin";
import "./LoginForm.css";

/* Componente de Login */
export const LoginForm = () => {
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

    loginUser(userName, password)
      .then((res) => {
        if (res.status === 200) {
          const { token } = res.data;
          localStorage.setItem("token", token);
        } else console.log(res);
      })
      .catch((e) => console.log("Login incorrecto"));
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="username"
            onChange={handlerChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handlerChange}
          />
          <button>Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import "./LoginForm.css";

/* Componente de Login */
export const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handlerChange = (e) => {
    const { target } = e;
    if (target.name === "userName") {
      setUserName(target.value);
    }
    if (target.name === "password") {
      setPassword(target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.value = "";
    //TODO: Enviar datos a servidor
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
          <button>login</button>
        </form>
      </div>
    </div>
  );
};

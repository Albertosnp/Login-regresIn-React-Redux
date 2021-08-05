import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "reducers/loginReducer";
import { isValidateEmail } from "utils/validations";
import styled from "styled-components";
import { loginUser } from "services/login";

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.value = "";
    //Para mostrar mensaje de error si hay alguno
    if (!isValidateEmail(userName) || !password) {
      setFormError(true);
      setTimeout(() => {
        setFormError(false);
      }, 5000);
      return;
    }
    
    if (!formError) {
      try {
        const token = await loginUser(userName, password);
        //Guarda token e inicia sesion con en estado global
        localStorage.setItem("token", token);
        dispatch(logIn());
      } catch (error) {
        console.log("Error en credenciales");
        //para eliminar mensaje de error pasados 5 segundos
        setFormError(true);
        setTimeout(() => {
          setFormError(false);
        }, 5000);
      }
    }
  };

  return (
    <div className="login-page">
      <StyledForm onSubmit={handleSubmit} name="login">
        {formError ? (
          <span>Por favor, introduce credenciales correctas</span>
        ) : (
          ""
        )}
        <StyledInput
          type="text"
          name="userName"
          placeholder="username"
          onChange={handlerChange}
          autoComplete="on"
        />
        <StyledInput
          type="password"
          name="password"
          placeholder="password"
          onChange={handlerChange}
          autoComplete="off"
        />
        <StyledButton>Iniciar sesión</StyledButton>
      </StyledForm>
    </div>
  );
};

const StyledForm = styled.form`
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;
const StyledInput = styled.input`
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;
const StyledButton = styled.button`
  text-transform: uppercase;
  outline: 0;
  background: #0b83d3;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    background: #2e5f9e;
  }
`;

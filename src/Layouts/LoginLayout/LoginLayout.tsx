import { LoginForm } from "components/LoginForm/LoginForm";
import React from "react";
import "./LoginLayout.css";

export const LoginLayout = () => {
  return (
    <div className="logged-layout">
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

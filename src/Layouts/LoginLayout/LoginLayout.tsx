import { LoginForm } from "components/LoginForm/LoginForm";
import React from "react";

export const LoginLayout = () => {
  return (
    <div className="logged-layout">
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

import { LoginForm } from "components/LoginForm/LoginForm";
import React from "react";
import styled from "styled-components";

export const LoginLayout = () => {
  return (
    <StyledLoginLayout>
      <h2>Login</h2>
      <LoginForm />
    </StyledLoginLayout>
  );
};

const StyledLoginLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 360px;
  margin: auto;
`;

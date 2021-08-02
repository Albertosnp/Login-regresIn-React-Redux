import React from "react";
import ButtonLogOut from "../../components/ButtonLogOut/ButtonLogOut";
import { Users } from "../../components/Users/Users";
import styled from "styled-components";

export const LoggedLayout = () => {
  return (
    <StyledLoggedLayout>
      <h2>Listado</h2>
      <ButtonLogOut />
      <Users />
    </StyledLoggedLayout>
  );
};

const StyledLoggedLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`;

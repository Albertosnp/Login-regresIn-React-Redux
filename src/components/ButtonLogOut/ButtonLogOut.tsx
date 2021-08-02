import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { logOut } from "reducers/loginReducer";
import styled from "styled-components";

export const ButtonLogOut = () => {
  useSelector((state: RootStateOrAny) => state.login);
  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(logOut());
  };
  return (
    <div className="button-logOut">
      <StyledButtonLogOut onClick={() => handlerClick()}>
        Cerrar sesión
      </StyledButtonLogOut>
    </div>
  );
};

export default ButtonLogOut;

const StyledButtonLogOut = styled.button`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #0b83d3;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background: #2e5f9e;
  }
`;

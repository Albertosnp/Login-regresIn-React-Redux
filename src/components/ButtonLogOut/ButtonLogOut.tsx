import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { logOut } from "reducers/loginReducer";

export const ButtonLogOut = () => {
  useSelector((state: RootStateOrAny) => state.login);
  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(logOut());
  };
  return <button onClick={() => handlerClick()}>Cerrar sesión</button>;
};

export default ButtonLogOut;

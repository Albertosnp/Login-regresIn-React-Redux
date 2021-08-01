import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { logOut } from "reducers/loginReducer";
import "./ButtonLogOut.css";

export const ButtonLogOut = () => {
  useSelector((state: RootStateOrAny) => state.login);
  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(logOut());
  };
  return (
    <div className="button-logOut">
      <button onClick={() => handlerClick()}>Cerrar sesión</button>
    </div>
  );
};

export default ButtonLogOut;

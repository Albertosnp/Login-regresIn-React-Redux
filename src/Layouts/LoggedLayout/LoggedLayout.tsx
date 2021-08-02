import React from "react";
import ButtonLogOut from "../../components/ButtonLogOut/ButtonLogOut";
import { Users } from "../../components/Users/Users";
import "./loggedLayout.css";

export const LoggedLayout = () => {
  return (
    <div className="logged-layout">
      <h2>Listado</h2>
      <ButtonLogOut />
      <Users />
    </div>
  );
};

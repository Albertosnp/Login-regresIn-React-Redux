import React from "react";
import ButtonLogOut from "../components/ButtonLogOut/ButtonLogOut";
import { Users } from "../components/Users/Users";

export const LoggedLayout = () => {
  return (
    <div>
      <ButtonLogOut />
      <Users />
    </div>
  );
};

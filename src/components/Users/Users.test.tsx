import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { User } from "./Users";

test("User render", () => {
  const [avatar, email, first_name, last_name] = [
    "avatar",
    "email",
    "Juan",
    "Sanchez",
  ];

  const component = render(
    <User
      avatar={avatar}
      email={email}
      first_name={first_name}
      last_name={last_name}
    />
  );
  component.getByText("email");
});

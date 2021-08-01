import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RootStateOrAny, useSelector } from "react-redux";
import { Routes } from "Routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <p>Prueba técnica de LaLiga</p>
      <Routes />
    </BrowserRouter>
  );
};

export default App;

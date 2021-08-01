import React from "react";
import { BrowserRouter } from "react-router-dom";
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

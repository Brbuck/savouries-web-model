import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/index";
import Services from "./pages/Services";
import Teste from "./pages/Teste";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos" element={<Services />} />
      <Route path="/teste" element={<Teste />} />
    </Routes>
  );
}

export default Routers;

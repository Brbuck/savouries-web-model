import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Teste from "./pages/Teste";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quem-somos" element={<About />} />
      <Route path="/teste" element={<Teste />} />
    </Routes>
  );
}

export default Routers;

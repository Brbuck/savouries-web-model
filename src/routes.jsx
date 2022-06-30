import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Savouries from "./pages/Savouries";
import CakeAndCandies from "./pages/CakeAndCandies";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quem-somos" element={<About />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/salgados" element={<Savouries />} />
      <Route path="/bolos-doces" element={<CakeAndCandies />} />
    </Routes>
  );
}

export default Routers;

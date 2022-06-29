import React from "react";
import "./styles.scss";

import Products from "../../components/Products";
import { Data } from "./Data";

function Savouries() {
  return (
    <div className="savouries-container">
      <div className="image">Nossas Maravilhas</div>
      <Products data={Data} />
    </div>
  );
}

export default Savouries;

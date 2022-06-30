import React from "react";
import "./styles.scss";

import Products from "../../components/Products";
import { Data } from "./Data";

function CakeAndCandies() {
  return (
    <div className="cake-and-candies-container">
      <div className="image">Nossas Maravilhas de Doces</div>
      <Products data={Data} />
    </div>
  );
}

export default CakeAndCandies;

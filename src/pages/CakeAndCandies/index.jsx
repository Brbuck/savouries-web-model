import React from "react";
import "./styles.scss";

import Banner from "../../components/Banner";
import Products from "../../components/Products";
import { Data } from "./Data";

function CakeAndCandies() {
  return (
    <div className="cake-and-candies-container">
      <Banner title={"Nossas Maravilhas de Doces"} />
      <Products data={Data} />
    </div>
  );
}

export default CakeAndCandies;

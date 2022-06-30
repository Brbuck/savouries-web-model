import React from "react";
import "./styles.scss";

import Banner from "../../components/Banner";
import Products from "../../components/Products";
import { Data } from "./Data";


function Savouries() {
  return (
    <div className="savouries-container">
      <Banner title={"Nossas Maravilhas Salgadas"} />
      <Products data={Data} />
    </div>
  );
}

export default Savouries;

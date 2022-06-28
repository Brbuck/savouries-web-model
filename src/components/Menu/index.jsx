import React from "react";
import "./styles.scss";

import Pdf from "../../assets/teste.pdf";

function Menu({ data, title, link}) {
  return (
    <section className="wrapper-menu-container">
      <div className="menu-container">
        <h1>{title}</h1>
        <a href={Pdf} target="_blank" rel="noreferrer">
          {link}
        </a>
        <div className="grid-products">
          {data?.map((item, index) => (
            <div
              className="card-product"
              key={index}
              style={{ backgroundImage: `url(${item?.image})` }}
            >
              <p>{item.title}</p>
              <img src={data?.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;

import React from "react";
import "./styles.scss";

import { WhatsappLogo } from "phosphor-react";
import LogoIfood from "../../assets/icons8-ifood-48.png";

import Pdf from "../../assets/teste.pdf";

function Products({ data }) {
  return (
    <div className="wrapper-product">
      <div className="container-product">
        {data.map((item, index) => (
          <div className="grid-products" key={index}>
            <div
              className="image-product"
              style={{ backgroundImage: `url(${item?.image})` }}
            />
            <div className="info-product">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <span>{item.typeone}</span>
              <span>{item.typetwo}</span>
              <a
                href="http://api.whatsapp.com/send?1=pt_BR&phone=55119990000"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsappLogo size={32} color="#FFF" />
                <span>Comprar via Whatsapp</span>
              </a>
              <a
                href="https://www.ifood.com.br/delivery/campinas-sp/habibs---campinas-iii-jardim-pauliceia/17c7fb7e-bff8-4268-865c-33ad73d4e6cf"
                target="_blank"
                rel="noreferrer"
              >
                <img src={LogoIfood} alt="Logo do Ifood" />
                <span>Comprar via Ifood</span>
              </a>
            </div>
          </div>
        ))}
        <a href={Pdf} target="_blank" rel="noreferrer" className='menu'>
          Clique aqui e confira nosso cardápio completo
        </a>
      </div>
    </div>
  );
}

export default Products;

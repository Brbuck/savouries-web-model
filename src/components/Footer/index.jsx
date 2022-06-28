import React from "react";
import "./styles.scss";

import LogoImage from "../../assets/icons8-coxinha-64.png";
import FacebookImage from "../../assets/icon-facebook.png";
import InstagramImage from "../../assets/icon-instagram.png";
import TwitterImage from "../../assets/icon-twitter.png";

function Footer() {
  return (
    <div className="wrapper-footer">
      <div className="footer">
        <div>
          <h2>
            <img src={LogoImage} alt="Desenho de uma coxinha" /> Salgados
            Maravilha
          </h2>
          <p>
            Desde 1994 a Salgados Maravilha se dedica às maravilhas da
            gastronomia, sendo reconhecida pelo seu alto padrão e originalidade.
          </p>
          <h3>Horário de atendimento: </h3>
          <p>Segunda a sexta-feira, das 8h às 19h</p>
          <p>Sábado, das 8h às 13h</p>
        </div>
        <div className="social_media">
          <h2>Contato</h2>
          <h3>Telefone</h3>
          <p>(11) 4817-0000</p>
          <p>(11) 97777-0000</p>
          <h3>E-mail</h3>
          <a
            style={{ color: "#ff963e" }}
            className="email"
            href="mailto:email@teste.com?subject=Quero receber novidades&amp;subject=Quero%20receber%20novidades &amp;body=Digite%20a%20sua%20mensagem%20aqui"
          >
            faleconosco@teste.com.br
          </a>
          <h3>Redes Sociais</h3>
          <ul>
            <li>
              <a
                href="https://pt-br.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={FacebookImage} alt="Logo do Facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/twitterbrasil"
                target="_blank"
                rel="noreferrer"
              >
                <img src={TwitterImage} alt="Logo do Facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={InstagramImage} alt="Logo do Facebook" />
              </a>
            </li>
          </ul>
          <span>Av. Barão, 2000 – Vila Rami, Campinas-SP CEP: 13210-000</span>
        </div>
      </div>
      <span>Copyright © 2022 | Website by Ribeiro</span>
    </div>
  );
}

export default Footer;

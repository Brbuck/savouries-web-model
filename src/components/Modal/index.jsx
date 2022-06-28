import React from "react";

import "./styles.scss";
import { EnvelopeSimple, PhoneCall, WhatsappLogo } from "phosphor-react";

function Modal({ showmodal, togleModal }) {
  return (
    <div
      className={showmodal ? "wrapper-modal actives" : "wrapper-modal"}
      onClick={togleModal}
    >
      <div className="container-modal" onClick={togleModal}>
        <div className="close">
          <span></span>
          <span>X</span>
        </div>
        <a href="tel:1148000000">
          <span>
          <PhoneCall size={32} color="#FFF" />
          </span>
          <span>Ligue por aqui</span>
        </a>
        <a
          href="http://api.whatsapp.com/send?1=pt_BR&phone=55119990000"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsappLogo size={32} color="#FFF" />
          <span>Atendimento via Whatsapp</span>
        </a>
        <a
          className="email"
          href="mailto:email@teste.com?subject=Quero receber novidades&amp;subject=Quero%20receber%20novidades &amp;body=Digite%20a%20sua%20mensagem%20aqui"
        >
          <EnvelopeSimple size={32} color="#FFF" />
          <span>Envie por e-mail!</span>
        </a>
      </div>
    </div>
  );
}

export default Modal;

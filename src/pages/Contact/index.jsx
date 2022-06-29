import React from "react";
import "./styles.scss";

import WhatsappIcon from "../../assets/icons8-whatsapp-48.png";

function Contact() {
  return (
    <>
      <div className="container-contact">
        <div>
          <h2>Atendimento ao Cliente</h2>
          <h3>Telefone</h3>
          <p>(11) 4817-0000</p>
          <p>(11) 97777-0000</p>
          <a
            href="http://api.whatsapp.com/send?1=pt_BR&phone=5511999360000"
            target="_blank"
            rel="noreferrer"
          >
            <img src={WhatsappIcon} alt="Whatsapp contato" />
            <span>Atendimento via Whatsapp</span>
          </a>
          <h3>E-mail</h3>
          <a
            className="email"
            href="mailto:email@teste.com?subject=Quero receber novidades&amp;subject=Quero%20receber%20novidades &amp;body=Digite%20a%20sua%20mensagem%20aqui"
          >
            faleconosco@teste.com.br
          </a>
        </div>
      </div>
      <div className="google-map-code">
        <h3>SAIBA COMO CHEGAR</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14702.107878518691!2d-47.07023316670504!3d-22.89392612579177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf5452d7cf7b%3A0x4a7af5dd1c77b6e9!2sCambu%C3%AD%2C%20Campinas%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1656452848042!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="This is a unique title"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;

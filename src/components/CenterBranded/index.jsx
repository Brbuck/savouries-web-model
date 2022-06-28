import React, {useState} from "react";
import "./styles.scss";

import Modal from '../Modal'


function CenterBranded({ title, subtitle, link}) {

  const [showmodal, setShowmodal] = useState(false)

  function togleModal(){
    setShowmodal(!showmodal)
  }
  return (
    <div className="wrapper-center-branded">
      <div className="container-center-branded">
        <h1 className="title-center-brand">
          <span>{title} </span>
        </h1>
        <div>
          <p>{subtitle}</p>
        </div>
        <button onClick={togleModal}>{link}</button>
      </div>
      <Modal showmodal={showmodal} togleModal={togleModal} />
    </div>
  );
}

export default CenterBranded;

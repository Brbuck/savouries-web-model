import React, { useState } from "react";
import "./styles.scss";

import { Link } from "react-router-dom";
import { List } from "phosphor-react";
import Logo from "../../assets/icons8-coxinha-64.png";

function Header() {
  const [menu, setMenu] = useState(false);

  const togleShowMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={Logo} />
      </Link>
      <nav
        className={menu ? "nav-new-header active" : "nav-new-header"}
        onClick={togleShowMenu}
      >
        <Link to="/">Início</Link>
        <Link to="/quem-somos">Quem Somos</Link>
        <Link to="/salgados">Salgados</Link>
        <Link to="/bolos-doces">Bolos & Doces </Link>
        <Link to="/contato">Fale Conosco</Link>
      </nav>
      <span className="menu-mobile">
        <List size={36} color="#f7c093" onClick={togleShowMenu} />
      </span>
    </header>
  );
}

export default Header;

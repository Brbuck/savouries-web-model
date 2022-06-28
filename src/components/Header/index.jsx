import React, { useState } from "react";
import "./styles.scss";

import { Link } from "react-router-dom";
import { List } from "phosphor-react";

function Header() {
  const [menu, setMenu] = useState(false);

  const togleShowMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="header">
      <span>
        <Link to="/">
          {/* <GiSittingDog /> */}
        </Link>
      </span>
      <nav
        className={menu ? "nav-new-header active" : "nav-new-header"}
        onClick={togleShowMenu}
      >
        <Link to="/">Início</Link>
        <Link to="/quem-somos">Quem Somos</Link>
        <Link to="/salgados">Salgados</Link>
        <Link to="/kit-festas">Kit Festas</Link>
        <Link to="/contato">Fale Conosco</Link>
      </nav>
      <span className="menu-mobile">
      <List size={36} color="#26352e" onClick={togleShowMenu} />
      </span>
    </header>
  );
}

export default Header;

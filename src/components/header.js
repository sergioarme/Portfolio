import React, { useState } from "react";
import { Link } from "gatsby";
import { FaLinkedinIn, FaAngleDown } from "react-icons/fa";

import "./header.scss";
import Switch from "./switch";

export default function Headers(props) {
  const { dark, setDarck } = props;
  const [menuView, setMenuView] = useState(false);

  return (
    <header class={dark ? "header darkheader" : "header"}>
      <div class="header__logo">
        <a href="/#">
          <p>SA</p>
        </a>
      </div>
      <nav class={menuView ? "header__nav" : "header__nav oculto"}>
        <button onClick={() => setMenuView(!menuView)}>
          <FaAngleDown size={"20px"} />
        </button>
        <ul>
          <li>
            <Link onClick={() => setMenuView(false)} to="/#sobremi">
              Sobre mí
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuView(false)} to="/#habilidades">
              Habilidades
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuView(false)} to="/#portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuView(false)} to="/#contacto">
              Contacto
            </Link>
          </li>
        </ul>
        <Switch value={dark} setValue={setDarck} />
      </nav>

      <div className={"header__rrss"}>
        <a
          href="https://es.linkedin.com/in/sergioarmen"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn className="header__rrss__icon" />
        </a>
      </div>
    </header>
  );
}

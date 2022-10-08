import React from "react";
import Cube from "../components/cube";
import Cartel from "../components/cartel";
import { MdOutgoingMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

import "./contacto.scss";

const contacto = (props) => {
  const { dark } = props;

  return (
    <Cube dark={dark} id={"contacto"}>
      <div className="contacto">
        <Cartel content={"Contáctame"} />
        <div className="contacto__content">
          <h3>Espero que te haya gustado mi portfolio </h3>
          <p>Si quieres contactar conmigo aquí te dejo varias opciones.</p>
          <div className="contacto__content__buttons">
            <a href="mailto:hola@sergioarmenteros.com">
              <MdOutgoingMail size={"30px"} />
              Correo electrónico
            </a>
            <a
              href="https://es.linkedin.com/in/sergioarmen"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={"30px"} />
              sergioarmen
            </a>
          </div>
        </div>
      </div>
    </Cube>
  );
};

export default contacto;

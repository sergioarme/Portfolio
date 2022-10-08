import React from "react";
import Cube from "../components/cube";
import Cartel from "../components/cartel";
import { FaLaptopCode, FaMusic, FaPizzaSlice } from "react-icons/fa";
import { GiScooter } from "react-icons/gi";
import { FaApple, FaUmbrellaBeach } from "react-icons/fa";

import "./sobremi.scss";

const sobremi = (props) => {
  const { dark } = props;

  return (
    <Cube id={"sobremi"} dark={dark}>
      <div className="sobremi">
        <Cartel content={"Conóceme un poco más"} />
        <div className="sobremi__content">
          <p>
            Como has podido ver, me llamo Sergio Armenteros. Trabajo desde hace
            más de 13 años en el sector de la automoción, a día de hoy en el
            puesto de Contact Center. <br />
            <br />
            Actualmente estoy cursando técnico superior de desarrollo de
            aplicaciones multiplataforma, siempre me ha atraído el mundo de la
            informática y la tecnología, solo tenía 10 años cuando iba a clases
            de mecanografía y practicaba en mi casa con una máquina de escribir,
            fue en 2005, dos años después cuando tuve mi primer ordenador.{" "}
            <br />
            <br />
            Me considero una persona autodidacta, en 2018 hice mi primer “hola
            mundo” y desde ahí comenzó mi hobby por el diseño y la programación,
            realizando cursos y adquiriendo conocimientos en diferentes
            plataformas que verás en la sección de habilidades.
          </p>
          <div className="separator" />
          <h3>Algunos gustos y aficiones</h3>
          <div className="sobremi__content__cards ">
            <FaMusic size={"50px"} />
            <GiScooter size={"50px"} />
            <FaPizzaSlice size={"50px"} />
            <FaLaptopCode size={"50px"} />
            <FaApple size={"50px"} />
            <FaUmbrellaBeach size={"50px"} />
          </div>
        </div>
      </div>
    </Cube>
  );
};

export default sobremi;

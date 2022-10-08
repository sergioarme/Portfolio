import React from "react";
import Cube from "../components/cube";
import fotoSA from "../images/SA.jpg";

import "./intro.scss";

const intro = (props) => {
  const { dark } = props;

  return (
    <Cube id={"intro"} dark={dark}>
      <div className={dark ? "intro darkintro" : "intro"}>
        <div className="column">
          <div className="intro__intro">
            <h1> ¡Hola! </h1>
            <h3>Soy Sergio Armenteros, bienvenidos a mi Portfolio.</h3>
          </div>
          <div className="intro__img">
            <img src={fotoSA} alt="Logo" width={"500px"} />
          </div>
        </div>
      </div>
    </Cube>
  );
};

export default intro;

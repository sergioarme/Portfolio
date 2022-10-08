import React from "react";
import Cube from "../components/cube";
import Cartel from "../components/cartel";
import { Carousel } from "react-responsive-carousel";
import PorfolioPc from "../images/portfolioPc.png";
import PorfolioPhone from "../images/portfolioPhone.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./portfolio.scss";

const portfolio = (props) => {
  const { dark } = props;

  return (
    <Cube dark={dark} id={"portfolio"}>
      <div className="portfolio">
        <Cartel content={"Últimos trabajos"} />
        <Carousel
          className="carosel"
          showThumbs={false}
          emulateTouch={true}
          showStatus={false}
          // infiniteLoop={true}
        >
          <div>
            <img src={PorfolioPc} alt="Porfolio Personal Pc" />
          </div>
          <div>
            <img src={PorfolioPhone} alt="Porfolio Personal Movil" />
          </div>
          <div className="carouselText">
            <div>
              <h3>
                De momento os muestro este portfolio realizado con Gatsby Js.
              </h3>
              <h4>
                Estoy preparando proyectos anteriores para poder publicarlos.
              </h4>
            </div>
          </div>
        </Carousel>
      </div>
    </Cube>
  );
};

export default portfolio;

import React from "react";
import Cartel from "../components/cartel";
import Cube from "../components/cube";
import CardSkill from "../components/cardSkill";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaSass,
  FaWordpressSimple,
  FaNode,
} from "react-icons/fa";
import { SiMongodb, SiGraphql, SiExpress, SiPostman } from "react-icons/si";
import { IoPhonePortraitOutline } from "react-icons/io5";

import "./habilidades.scss";

const habilidades = (props) => {
  const { dark } = props;

  return (
    <Cube dark={dark} id={"habilidades"}>
      <div className="habilidades">
        <Cartel content={"Habilidades"} />
        <div className="habilidades__content">
          <div className="habilidades__content__skill">
            <CardSkill tittle={"Html"} icon={<FaHtml5 />} porc={90} />
            <CardSkill tittle={"CSS"} icon={<FaCss3Alt />} porc={95} />
            <CardSkill tittle={"JavaScript"} icon={<FaJsSquare />} porc={90} />
            <CardSkill tittle={"React Js"} icon={<FaReact />} porc={90} />
            <CardSkill
              tittle={"React Native"}
              icon={<IoPhonePortraitOutline />}
              porc={95}
            />
            <CardSkill tittle={"Sass"} icon={<FaSass />} porc={80} />
            <CardSkill
              tittle={"WordPress"}
              icon={<FaWordpressSimple />}
              porc={90}
            />
            <CardSkill tittle={"Node Js"} icon={<FaNode />} porc={75} />
            <CardSkill tittle={"Express Js"} icon={<SiExpress />} porc={60} />
            <CardSkill tittle={"Mongo DB"} icon={<SiMongodb />} porc={75} />
            <CardSkill tittle={"Api Rest"} icon={<SiPostman />} porc={60} />
            <CardSkill tittle={"Graphql"} icon={<SiGraphql />} porc={70} />
          </div>
        </div>
      </div>
    </Cube>
  );
};

export default habilidades;

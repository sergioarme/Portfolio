import React from "react";
import "./cardSkill.scss";

export default function CardSkill(props) {
  const { icon, tittle, porc } = props;

  return (
    <div className="cardSkill">
      <p>{tittle}</p>
      {icon}
      <div>
        <span style={{ width: porc - 10 + "%" }} />
      </div>
    </div>
  );
}

import React from "react";
import "./cartel.scss";

export default function Cartel(props) {
  const { content } = props;

  return (
    <div className="cartel">
      <h1>{content}</h1>
    </div>
  );
}

import React from "react";

import "./footer.scss";

export default function Footer(props) {
  const { dark } = props;
  return (
    <footer class={dark ? "footer footerdark" : "footer"}>
      <p>
        © Sergio Armenteros - Diseño y desarrollo web -
        <a href="mailto:hola@sergioarmenteros.com">
          {" "}
          hola@sergioarmenteros.com
        </a>
      </p>
    </footer>
  );
}

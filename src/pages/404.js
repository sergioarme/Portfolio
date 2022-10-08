import * as React from "react";
import { Link } from "gatsby";
import Cube from "../components/cube";

const linkStyles = {
  backgroundColor: "black",
  color: "white",
  padding: "10px",
  borderRadius: "15px",
};

const NotFoundPage = () => {
  return (
    <Cube>
      <main>
        <h1>Página no encontrada.</h1>
        <p>
          Lo sentimos 😔, no pudimos encontrar lo que estabas buscando.
          <br />
          <br />
          <Link style={linkStyles} to="/">
            Volver al Portfolio
          </Link>
        </p>
      </main>
    </Cube>
  );
};

export default NotFoundPage;

export const Head = () => <title>Página no Encontrada</title>;

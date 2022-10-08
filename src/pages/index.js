import React, { useState } from "react";
import Header from "../components/header";
import Intro from "../sections/intro";
import Sobremi from "../sections/sobremi";
import Habilidades from "../sections/habilidades";
import Portfolio from "../sections/portfolio";
import Contacto from "../sections/contacto";
import Footer from "../components/footer";
import "../styles/index.scss";

const IndexPage = () => {
  const [dark, setDarck] = useState(false);

  return (
    <>
      <Header dark={dark} setDarck={setDarck} position="position" />
      <main>
        <Intro dark={dark} />
        <div className={dark ? "space darkspace" : "space"}></div>
        <Sobremi dark={dark} />
        <div className={dark ? "space darkspace" : "space"}></div>
        <Habilidades dark={dark} />
        <div className={dark ? "space darkspace" : "space"}></div>
        <Portfolio dark={dark} />
        <div className={dark ? "space darkspace" : "space"}></div>
        <Contacto dark={dark} />
      </main>
      <Footer dark={dark} />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Sergio Armenteros</title>;

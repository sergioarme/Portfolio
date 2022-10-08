import React, { useEffect, useRef, useState } from "react";
import "./cube.scss";

export default function Cube(props) {
  const { dark, id } = props;
  const [moving, setMoving] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      const { y, height } = element?.getBoundingClientRect();
      const heightw = window.innerHeight;
      const var1 = -height / 100; // Saco el porcentaje que hay visto desde el TOP
      const var2 = y / var1 + (heightw / height) * 50; //

      if (var2 <= 150 && var2 >= -150) {
        setMoving(var2);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id={id}
      className={dark ? "section darkcube" : "section"}
      ref={ref}
    >
      <div class="screen" style={{ perspectiveOrigin: "50% " + moving + "%" }}>
        <div className="childrendiv">{props.children}</div>
        <div className="room">
          <div class="lateral_left"></div>
          <div class="lateral_front"></div>
          <div class="lateral_right"></div>
        </div>
      </div>
    </section>
  );
}

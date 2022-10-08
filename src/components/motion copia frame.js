import React, { useRef } from "react";
import { useInView } from "framer-motion";
import "./motion.scss";

export default function Elemotion(props) {
  const { time, translate = "translate(100px,100px)" } = props;

  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });

  return (
    <section ref={ref}>
      <span
        style={{
          display: "block",
          transform: isInView ? "none" : translate,
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {props.children}
      </span>
    </section>
  );
}

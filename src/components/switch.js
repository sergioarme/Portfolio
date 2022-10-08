import React from "react";
import { MdModeNight, MdWbSunny } from "react-icons/md";
import "./switch.scss";

export default function Switch(props) {
  const { value, setValue } = props;

  return (
    <div className="switch">
      <input
        type="checkbox"
        className="switch-checkbox"
        name="switch"
        id="switch"
        value={value}
        onChange={() => setValue(!value)}
      />
      <label className="switch-label" htmlFor="switch">
        <MdModeNight className="switch-night" color="black" />

        <MdWbSunny className="switch-sun" color="yellow" />
        <span className="switch-switch" />
      </label>
    </div>
  );
}

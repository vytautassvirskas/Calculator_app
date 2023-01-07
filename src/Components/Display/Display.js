import React, { useContext } from "react";
import MainContext from "../../Utils/MainContext";
import "./Display.scss";

const Display = () => {
  const { display, setDisplay } = useContext(MainContext);
  return (
    <div className="display">
      <p className="display__value"> {display}</p>
    </div>
  );
};

export default Display;

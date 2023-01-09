import React, { useContext } from "react";
import MainContext from "../../Utils/MainContext";
import "./Display.scss";

const Display = () => {
  const { calc, setCalc } = useContext(MainContext);

  return (
    <div className="display">
      <p className="display__value">{calc.input ? calc.input : calc.result}</p>
    </div>
  );
};

export default Display;

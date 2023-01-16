import React, { useContext } from "react";
import MainContext from "../../Utils/MainContext";
import "./Display.scss";

const Display = () => {
  const { calc } = useContext(MainContext);

  return (
    <div className="display">
      <p className="display__info-screen">
        {calc.infoLine ? calc.infoLine : ""}
      </p>
      <p className="display__main-screen">
        {calc.input ? calc.input : calc.result}
        {/* {calc.input ? calc.input : calc.result || "0"} */}
      </p>
    </div>
  );
};

export default Display;

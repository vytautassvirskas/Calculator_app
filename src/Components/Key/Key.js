import React, { useContext } from "react";
import MainContext from "../../Utils/MainContext";
import "./Key.scss";

const Key = (props) => {
  const { className, value, handleClick } = props;

  const { handleDisplay } = useContext(MainContext);

  return (
    <button
      type="button"
      className={className ? `${className}` : "key"}
      onClick={(e) => handleClick(value, e)}
    >
      {value}
    </button>
  );
};

export default Key;

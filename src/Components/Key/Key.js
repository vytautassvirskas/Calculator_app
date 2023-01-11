import React from "react";
import "./Key.scss";

const Key = (props) => {
  const { className, value, handleClick } = props;

  return (
    <button
      type="button"
      className={className ? `${className}` : "key"}
      onClick={() => handleClick(value)}
    >
      {value}
    </button>
  );
};

export default Key;

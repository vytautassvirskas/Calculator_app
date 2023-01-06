import React from "react";
import "./Key.scss";

const Key = (props) => {
  console.log("props.classname", props.className);
  return (
    <div className={props.className ? `key ${props.className}` : "key"}>
      {props.value}
    </div>
  );
};

export default Key;

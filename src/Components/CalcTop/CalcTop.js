import React from "react";
import Switch from "../Switch/Switch";
import "./CalcTop.scss";

const CalcTop = () => {
  return (
    <div className="calctop">
      <p className="calctop__title">calc</p>
      <Switch />
    </div>
  );
};

export default CalcTop;

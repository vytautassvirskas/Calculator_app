import React from "react";
import Key from "../Key/Key";
import "./KeyPad.scss";

const KeyPad = () => {
  return (
    <div className="keypad">
      <Key value={7} />
      <Key value={8} />
      <Key value={9} />
      <Key className="keypad__blue" value={"DEL"} />
      <Key value={4} />
      <Key value={5} />
      <Key value={6} />
      <Key value={"+"} />
      <Key value={1} />
      <Key value={2} />
      <Key value={3} />
      <Key value={"-"} />
      <Key value={"."} />
      <Key value={0} />
      <Key value={"/"} />
      <Key value={"x"} />
      <Key className="keypad__merged-one keypad__blue" value={"RESET"} />
      <Key className="keypad__merged-two keypad__red" value={"="} />
    </div>
  );
};

export default KeyPad;

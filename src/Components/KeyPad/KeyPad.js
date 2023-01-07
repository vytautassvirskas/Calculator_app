import React, { useContext, useEffect } from "react";
import MainContext from "../../Utils/MainContext";
import btnsValues from "../../Utils/data.js";
import Key from "../Key/Key";
import "./KeyPad.scss";

const KeyPad = () => {
  const { display, setDisplay } = useContext(MainContext);

  const handleDelete = () => {
    console.log("delete btn veikia")
  }

  //reset
  const handleReset = (value) => {
    console.log("reset mygtukas", "handleReset rodo value: ", value);
    setDisplay("0");
  };

  //display
  function handleDisplay(value) {
    console.log(
      "handelDisplay funct value:",
      value,
      "typeof value: ",
      typeof value
    );

    if (display.contain)
      if (display === "0" && value !== "0") {
        //jei pirmas skaicius 0 ir pradedi vesti skaicius be tasko
        if (value === ".") {
          setDisplay(display + value);
          return;
        }
        setDisplay(value);
        return;
      }

    if (display === "0" && value === "0") {
      console.log("display yra nulis");
      // setDisplay((prevValue) => {
      //   return prevValue;
      // });
      return;
    }

    setDisplay((prevValue) => {
      return prevValue + value;
    });
  }

  // useEffect(() => {
  //   console.log(
  //     "useEfecte display: ",
  //     display,
  //     "display tupeof: ",
  //     typeof display
  //   );
  // }, [display]);

  return (
    <div className="keypad">
      {btnsValues.map((btn, index) => {
        return (
          <Key
            key={index}
            value={btn}
            className={
              btn === "DEL"
                ? "key--delReset"
                : btn === "RESET"
                ? "key--spanOne key--delReset"
                : btn === "=" && "key--spanTwo key--equal"
            }
            handleClick={
              btn === "DEL" ? 
            }
          />
        );
      })}
    </div>
  );
};

export default KeyPad;

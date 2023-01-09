import React, { useContext, useEffect } from "react";
import MainContext from "../../Utils/MainContext";
import btnsValues from "../../Utils/data.js";
import Key from "../Key/Key";
import "./KeyPad.scss";

const KeyPad = () => {
  const { calc, setCalc } = useContext(MainContext);

  //delete +++???
  const handleDelete = () => {
    if (calc.input.length > 1 || calc.result.length > 1) {
      setCalc({
        ...calc,
        input: calc.input
          ? calc.input.toString().slice(0, calc.input.length - 1)
          : 0,
        result: calc.result
          ? calc.result.toString().slice(0, calc.result.length - 1)
          : 0,
      });
      return;
    }

    setCalc({
      ...calc,
      input: 0,
      result: 0,
    });
  };

  //reset ++++
  const handleReset = (value) => {
    // console.log(`veikia  resetbtn ${value}`);
    setCalc({
      ...calc,
      mathSign: "",
      input: 0,
      result: 0,
    });
  };

  //handleDot +++
  const handleDot = (value) => {
    // console.log(`veikia  dot btn ${value}`);

    setCalc({
      ...calc,
      input: !calc.input.toString().includes(".")
        ? calc.input + value
        : calc.input,
    });
  };

  //handleNumber
  const handleNumber = (value) => {
    // console.log(`skaicius ${value}, jo datatype ${typeof value}`);

    if (calc.input.toString().length < 18) {
      setCalc({
        ...calc,
        input:
          calc.input === 0 && value === "0"
            ? "0"
            : calc.input === "0" || calc.input === 0
            ? value
            : calc.input + value,
      });
    }
  };

  const handleMath = (a, b, mathSign) => {
    return mathSign === "+"
      ? a + b
      : mathSign === "-"
      ? a - b
      : mathSign === "x"
      ? a * b
      : a / b;
  };

  //equal
  const handleEqual = (value) => {
    // console.log(`veikia  lygu btn ${value}`);
    if (calc.mathSign && calc.input) {
      setCalc({
        ...calc,
        result:
          calc.mathSign === "/" && calc.input === "0"
            ? "Cannot divide by zero"
            : handleMath(+calc.result, +calc.input, calc.mathSign),
        mathSign: "",
        input: 0,
      });
    }
  };

  //handleMath
  const handleMathSign = (value) => {
    // console.log(`veikia  math btn ${value}`);
    setCalc({
      ...calc,
      mathSign: value,
      result:
        calc.result && calc.input
          ? handleMath(+calc.result, +calc.input, calc.mathSign)
          : calc.result
          ? calc.result
          : calc.input,
      input: 0,
    });
  };

  useEffect(() => {
    console.log("useEfecte calc: ", calc);
  }, [calc]);

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
              btn === "DEL"
                ? handleDelete
                : btn === "RESET"
                ? handleReset
                : btn === "="
                ? handleEqual
                : btn === "."
                ? handleDot
                : btn === "+" || btn === "-" || btn === "x" || btn === "/"
                ? handleMathSign
                : handleNumber
            }
          />
        );
      })}
    </div>
  );
};

export default KeyPad;

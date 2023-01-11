import React, { useContext, useEffect } from "react";
import MainContext from "../../Utils/MainContext";
import btnsValues from "../../Utils/data.js";
import Key from "../Key/Key";
import "./KeyPad.scss";

const KeyPad = () => {
  const { calc, setCalc } = useContext(MainContext);

  const handleSlice = (value) => {
    return value.toString().slice(0, value.length - 1);
  };

  //delete
  const handleDelete = () => {
    if (calc.input.length > 1 || calc.result.length > 1) {
      setCalc({
        ...calc,
        input: calc.input ? handleSlice(calc.input) : 0,
        result:
          calc.result && !calc.input ? handleSlice(calc.result) : calc.result,
      });
      return;
    }

    setCalc({
      ...calc,
      input: 0,
      result: 0,
    });
  };

  //reset
  const handleReset = () => {
    setCalc({
      ...calc,
      mathSign: "",
      input: 0,
      result: 0,
    });
  };

  //handleDot
  const handleDot = (value) => {
    setCalc({
      ...calc,
      input:
        calc.result && !calc.result.toString().includes(".")
          ? calc.result + value
          : !calc.input.toString().includes(".")
          ? calc.input + value
          : calc.input,
      result: !calc.mathSign ? 0 : calc.result,
    });
  };

  //handleNumber
  const handleNumber = (value) => {
    if (calc.input.toString().length < 18) {
      setCalc({
        ...calc,
        input:
          calc.input === 0 && value === "0"
            ? "0"
            : calc.result && !calc.input && !calc.mathSign
            ? calc.result + value
            : calc.input === "0" || calc.input === 0
            ? value
            : calc.input + value,
        result: !calc.mathSign ? 0 : calc.result,
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
  const handleEqual = () => {
    if (calc.mathSign && calc.input) {
      setCalc({
        ...calc,
        result:
          calc.mathSign === "/" && calc.input === "0"
            ? "Cannot divide by zero"
            : handleMath(+calc.result, +calc.input, calc.mathSign).toString(), //for deleting last digit it should be string
        mathSign: "",
        input: 0,
      });
    }
  };

  //handleMath
  const handleMathSign = (value) => {
    setCalc({
      ...calc,
      mathSign: value,
      result:
        calc.result && calc.input
          ? handleMath(+calc.result, +calc.input, calc.mathSign)
          : calc.result
          ? calc.result
          : Number(calc.input).toString(), //for deleting last digit it should be string
      input: 0,
    });
  };
  //console.log calc
  // useEffect(() => {
  //   console.log("useEffect calc: ", calc);
  // }, [calc]);

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

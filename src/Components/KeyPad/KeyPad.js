import React, { useContext, useEffect } from "react";
import MainContext from "../../Utils/MainContext";
import btnsValues from "../../Utils/data.js";
import Key from "../Key/Key";
import "./KeyPad.scss";

const KeyPad = () => {
  const { calc, setCalc } = useContext(MainContext);
  const zeroErr = "Cannot divide by zero";

  const handleSlice = (value) => {
    return value.toString().slice(0, value.length - 1);
  };

  //delete
  const handleDelete = () => {
    // if (calc.input.length > 1 || calc.result.length > 1) {
    setCalc({
      ...calc,
      input:
        calc.input && calc.input.length > 1
          ? handleSlice(calc.input)
          : calc.mathSign && calc.input.length === 1
          ? "0"
          : 0,
      result: calc.result && !calc.mathSign ? 0 : calc.result,
      infoLine: calc.result && !calc.mathSign ? "" : calc.infoLine,
      // mathSign: "",
    });
    return;
    // }

    // setCalc({
    //   ...calc,
    //   input: 0,
    //   result: 0,
    //   infoLine: "",
    //   mathSign: "",
    // });
  };

  //reset  ++++
  const handleReset = () => {
    setCalc({
      ...calc,
      mathSign: "",
      input: 0,
      result: 0,
      infoLine: "",
    });
  };

  //handleDot +++
  const handleDot = (value) => {
    // console.log(typeof Number(calc.result));
    setCalc({
      ...calc,
      input: !calc.input.toString().includes(".")
        ? calc.input + value
        : calc.input,
      result: !calc.mathSign ? 0 : calc.result,
      infoLine: !calc.mathSign ? "" : calc.infoLine,
    });
  };

  //handleNumber ++++
  const handleNumber = (value) => {
    if (calc.input.toString().length < 18) {
      setCalc({
        ...calc,
        input:
          calc.input === 0 && value === "0"
            ? value
            : calc.input === "0" || calc.input === 0
            ? value
            : calc.input + value,
        result: !calc.mathSign ? 0 : calc.result,
        infoLine: !calc.mathSign ? "" : calc.infoLine,
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

  //equal +++
  const handleEqual = (value) => {
    if (calc.mathSign && calc.input) {
      setCalc({
        ...calc,
        result:
          calc.mathSign === "/" && Number(calc.input) === 0
            ? zeroErr
            : handleMath(+calc.result, +calc.input, calc.mathSign).toString(), //for deleting last digit it should be string
        infoLine: calc.infoLine + Number(calc.input) + value,
        mathSign: "",
        input: 0,
      });
    }
  };

  //handleMath +++++
  const handleMathSign = (value) => {
    setCalc({
      ...calc,
      mathSign:
        calc.result === zeroErr
          ? ""
          : calc.mathSign === "/" && Number(calc.input) === 0
          ? ""
          : value,
      result:
        calc.mathSign === "/" && Number(calc.input) === 0
          ? zeroErr
          : calc.result === zeroErr
          ? 0
          : calc.result && calc.input
          ? handleMath(+calc.result, +calc.input, calc.mathSign).toString()
          : calc.result
          ? calc.result
          : Number(calc.input).toString(), //for deleting last digit it should be string
      infoLine:
        calc.result === zeroErr
          ? ""
          : calc.mathSign === "/" && Number(calc.input) === 0
          ? `(${calc.infoLine}${Number(calc.input).toString()})${value}`
          : calc.input && calc.result
          ? handleMath(+calc.result, +calc.input, calc.mathSign).toString() +
            value
          : calc.result
          ? calc.result + value
          : Number(calc.input) + value,
      input: 0,
    });
  };
  //console.log calc
  useEffect(() => {
    console.log("calc: ", calc);
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

import React, { useState, useEffect } from "react";
import MainContext from "./Utils/MainContext.js";

import "./App.scss";
import KeyPad from "./Components/KeyPad/KeyPad.js";
import Display from "./Components/Display/Display.js";
import DashBoard from "./Components/CalcTop/DashBoard.js";

function App() {
  const [theme, setTheme] = useState("theme1");
  const [operand1, setOperand1] = useState(null);
  const [operand2, setOperand2] = useState(null);
  const [display, setDisplay] = useState(0);
  const contextValues = { display, setDisplay };

  return (
    <MainContext.Provider value={contextValues}>
      <div className="calc" id={theme}>
        <DashBoard />
        <Display />
        <KeyPad />
      </div>
    </MainContext.Provider>
  );
}

export default App;

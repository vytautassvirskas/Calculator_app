import React, { useState, useEffect } from "react";
import MainContext from "./Utils/MainContext.js";

import "./App.scss";
import variables from "./Styles/Variables.scss";
import KeyPad from "./Components/KeyPad/KeyPad.js";
import Display from "./Components/Display/Display.js";
import CalcTop from "./Components/CalcTop/CalcTop.js";

function App() {
  const [theme, setTheme] = useState("theme1");
  const [calc, setCalc] = useState({
    mathSign: "",
    input: 0,
    result: 0,
  });
  const contextValues = { calc, setCalc, theme, setTheme };

  useEffect(() => {
    console.log("theme pavadinimas", theme);
    if (theme === "theme2") {
      document.body.style.backgroundColor = variables.backgroundTheme2;
    } else if (theme === "theme3") {
      document.body.style.backgroundColor = variables.backgroundTheme3;
    } else {
      document.body.style.backgroundColor = variables.backgroundTheme1;
    }

    console.dir(document.body);
  }, [theme]);

  return (
    <MainContext.Provider value={contextValues}>
      <div className="calc" id={theme}>
        <CalcTop />
        <Display />
        <KeyPad />
      </div>
    </MainContext.Provider>
  );
}

export default App;

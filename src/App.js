import React, { useState } from "react";
import MainContext from "./Utils/MainContext.js";

import "./App.scss";
import KeyPad from "./Components/KeyPad/KeyPad.js";

function App() {
  const [theme, setTheme] = useState("theme1");
  const contextValues = {};

  return (
    <MainContext.Provider value={contextValues}>
      <div className="App" id={theme}>
        <div className="">
          <KeyPad />
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default App;

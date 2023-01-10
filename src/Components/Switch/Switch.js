import React, { useContext } from "react";
import MainContext from "../../Utils/MainContext";
import "./Switch.scss";

const Switch = () => {
  const { theme, setTheme } = useContext(MainContext);

  const handleThemeChange = (theme) => {
    setTheme(theme);
  };
  return (
    <div className="theme-toggle">
      <h5 className="theme-toggle__title">THEME</h5>
      <div className="theme-toggle__wrapper">
        <label className="theme-toggle__radio-btn">
          <input
            className="theme-toggle__input"
            id="first"
            name="toggle-state"
            type="radio"
            checked={theme === "theme1" ? true : false}
            onChange={() => setTheme("theme1")}
          />
          <span className="theme-toggle__checkmark"></span>
        </label>
        <label className="theme-toggle__radio-btn">
          <input
            className="theme-toggle__input"
            id="second"
            name="toggle-state"
            type="radio"
            checked={theme === "theme2" ? true : false}
            onChange={() => setTheme("theme2")}
          />
          <span className="theme-toggle__checkmark"></span>
        </label>
        <label className="theme-toggle__radio-btn">
          <input
            className="theme-toggle__input"
            id="third"
            name="toggle-state"
            type="radio"
            checked={theme === "theme3" ? true : false}
            onChange={() => setTheme("theme3")}
          />
          <span className="theme-toggle__checkmark"></span>
        </label>
        <ol className="theme-toggle__list">
          <li className="theme-toggle__themeNo">1</li>
          <li className="theme-toggle__themeNo">2</li>
          <li className="theme-toggle__themeNo">3</li>
        </ol>
      </div>
    </div>
  );
};

export default Switch;

import React, { useContext } from "react";
import MainContext from "../../Utils/MainContext";
import "./Switch.scss";

const Switch = () => {
  const { theme, setTheme } = useContext(MainContext);
  const handleChecked = (currentTheme, themeOption) => {
    return currentTheme === themeOption ? true : false;
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
            checked={handleChecked(theme, "dark")}
            onChange={() => setTheme("dark")}
          />
          <span className="theme-toggle__checkmark"></span>
        </label>
        <label className="theme-toggle__radio-btn">
          <input
            className="theme-toggle__input"
            id="second"
            name="toggle-state"
            type="radio"
            checked={handleChecked(theme, "light")}
            onChange={() => setTheme("light")}
          />
          <span className="theme-toggle__checkmark"></span>
        </label>
        <label className="theme-toggle__radio-btn">
          <input
            className="theme-toggle__input"
            id="third"
            name="toggle-state"
            type="radio"
            checked={handleChecked(theme, "neon")}
            onChange={() => setTheme("neon")}
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

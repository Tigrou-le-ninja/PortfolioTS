// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

import { useState } from "react";

import "./themeswitch.scss";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState("dark");
  const rootTheme = document.getElementById("root");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    rootTheme.setAttribute("data-theme", newTheme);
  };

  console.log("Current theme:", theme);

  return (
    <>
      {/* Version PC : toggle */}
      <label className="toggle">
        <input type="checkbox" onChange={toggleTheme} checked={theme === "light"} />
        <span className="slider"></span>
      </label>

      {/* Version Mobile : button qui change le thème au click et dont le contenu change en fonction du thème */}
      <div className="toggle-mobile">
        <button onClick={toggleTheme}>
          {theme === "light" ? (
            <FontAwesomeIcon icon="fa-regular fa-sun" className="theme-icon-mobile" />
          ) : (
            <FontAwesomeIcon icon="fa-regular fa-moon" className="theme-icon-mobile" />
          )}
        </button>
      </div>
    </>
  );
};

export default ThemeSwitch;

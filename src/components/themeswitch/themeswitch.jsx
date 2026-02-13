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

  // Mettre "transition: all 1s ease;" dans le css des blocks et composants pour un changement de thème fluide!

  console.log("Current theme:", theme);

  return (
    <>
      <label className="toggle">
        <input type="checkbox" onChange={toggleTheme} checked={theme === "light"} />
        <span className="slider"></span>
      </label>
    </>
  );
};

export default ThemeSwitch;

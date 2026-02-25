// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

import ThemeSwitch from "../themeswitch/themeswitch";
import LanguageSwitch from "../languageswitch/languageswitch";

import { useTranslation } from "react-i18next";

import "./navbar.scss";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="theme">
        <FontAwesomeIcon icon="fa-regular fa-moon" className="theme-icon" />
        <ThemeSwitch />
        <FontAwesomeIcon icon="fa-regular fa-sun" className="theme-icon" />
      </div>
      <ul className="navlinks">
        <li>
          <a href="#about">
            <FontAwesomeIcon icon="fa-regular fa-circle-user" className="nav-icon" /> <span>{t("navbar.about")}</span>
          </a>
        </li>
        <li>
          <a href="#skills">
            <FontAwesomeIcon icon="fa-solid fa-gears" className="nav-icon" /> <span>{t("navbar.skills")}</span>
          </a>
        </li>
        <li>
          <a href="#projects">
            <FontAwesomeIcon icon="fa-solid fa-list-check" className="nav-icon" /> <span>{t("navbar.projects")}</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <FontAwesomeIcon icon="fa-regular fa-envelope" className="nav-icon" /> <span>{t("navbar.contact")}</span>
          </a>
        </li>
      </ul>
      <LanguageSwitch />
    </nav>
  );
};

export default Navbar;

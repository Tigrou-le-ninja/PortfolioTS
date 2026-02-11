import ThemeSwitch from "../themeswitch/themeswitch";
import LanguageSwitch from "../languageswitch/languageswitch";

import { useTranslation } from "react-i18next";

import "./navbar.scss";

import aboutIcon from "../../assets/about.svg";
import skillsIcon from "../../assets/skills.svg";
import projectsIcon from "../../assets/projects.svg";
import contactIcon from "../../assets/contact.svg";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <nav className="navbar">
      <ThemeSwitch />
      <ul className="navlinks">
        <li>
          <a href="#about">
            <img src={aboutIcon} alt="À propos" /> <span>{t("navbar.about")}</span>
          </a>
        </li>
        <li>
          <a href="#skills">
            <img src={skillsIcon} alt="Compétences" /> <span>{t("navbar.skills")}</span>
          </a>
        </li>
        <li>
          <a href="#projects">
            <img src={projectsIcon} alt="Projets" /> <span>{t("navbar.projects")}</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <img src={contactIcon} alt="Contact" /> <span>{t("navbar.contact")}</span>
          </a>
        </li>
      </ul>
      <LanguageSwitch />
    </nav>
  );
};

export default Navbar;

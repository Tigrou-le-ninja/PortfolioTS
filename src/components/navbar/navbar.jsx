import ThemeSwitch from "../themeswitch/themeswitch";

import "./navbar.scss";

import aboutIcon from "../../assets/about.svg";
import skillsIcon from "../../assets/skills.svg";
import projectsIcon from "../../assets/projects.svg";
import contactIcon from "../../assets/contact.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <ThemeSwitch />
      <ul className="navlinks">
        <li>
          <a href="#about">
            <img src={aboutIcon} alt="À propos" /> <span>À propos / About me</span>
          </a>
        </li>
        <li>
          <a href="#skills">
            <img src={skillsIcon} alt="Compétences" /> <span>Compétences / Skills</span>
          </a>
        </li>
        <li>
          <a href="#projects">
            <img src={projectsIcon} alt="Projets" /> <span>Projets / Projects</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <img src={contactIcon} alt="Contact" /> <span>Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

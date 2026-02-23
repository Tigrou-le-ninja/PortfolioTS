import "./about.scss";
import Theo from "../../assets/Theo.webp";

import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about" id="about">
      <img src={Theo} alt="Photo de Théo Sommacal" />
      <div className="about-text">
        <h1>{t("about.welcome")}</h1>
        <p>{t("about.description")}</p>
      </div>
    </div>
  );
};

export default About;

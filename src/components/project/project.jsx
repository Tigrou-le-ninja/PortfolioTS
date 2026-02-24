// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

import "./project.scss";
import { useTranslation } from "react-i18next";
import Carousel from "../carousel/carousel";

const Project = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className="project">
      <h2>{project.title}</h2>
      <Carousel pictures={project.pictures} />
      <p>{t(`projectsContent.${project.id}`)}</p>
      <div className="links">
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-github" className="link-icon" />
        </a>
        {project.site && (
          <a href={project.site} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon="fa-solid fa-globe" className="link-icon" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;

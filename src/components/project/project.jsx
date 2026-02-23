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
    </div>
  );
};

export default Project;

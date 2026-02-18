import "./project.scss";
import { useTranslation } from "react-i18next";

const Project = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className="project">
      <h2>{project.title}</h2>
      <p>{t(`projectsContent.${project.id}`)}</p>
    </div>
  );
};

export default Project;

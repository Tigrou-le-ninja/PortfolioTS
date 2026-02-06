import "./project.scss";

const Project = ({ project }) => {
  return (
    <div className="projects">
      <h2>{project.title}</h2>
      <p>{project.content}</p>
    </div>
  );
};

export default Project;

import "./home.scss";

import Navbar from "../../components/navbar/navbar";
import About from "../../components/about/about";
import Footer from "../../components/footer/footer";
import Project from "../../components/project/project";
import Contact from "../../components/contact/contact";
import Skills from "../../components/skills/skills";

import projects from "../../data/projects.json";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main className="main-content">
        <About />
        <Skills />
        <section className="projects" id="projects">
          <h2>{t("projectsContent.title")}</h2>
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </section>
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;

import "./home.scss";

import Navbar from "../../components/navbar/navbar";
import About from "../../components/about/about";
import Footer from "../../components/footer/footer";
import Project from "../../components/project/project";
import Contact from "../../components/contact/contact";

import projects from "../../data/projects.json";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <About />
        <section className="projects">
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

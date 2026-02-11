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
      <div className="content">
        <main className="main-content">
          <About />
          {/* Faire un map ici et appeler plusieurs fois le composant PROJECT AU SINGULIER pour n'afficher qu'un projet à la fois */}
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;

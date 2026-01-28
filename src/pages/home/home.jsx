import "./home.scss";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Projects from "../../components/projects/projects";
import Contact from "../../components/contact/contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <h1>Welcome to the Home Page biatch</h1>
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;

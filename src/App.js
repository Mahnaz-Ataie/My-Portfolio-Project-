import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import HeaderSection from "./Components/Header";

import "./styles.css";
import { projects } from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import ProjectCards from "./Components/ProjectCards";
// import ProjectSearch from "./Components/ProjectSearch";
export default function App() {
  return (
    <div className="App">
      <div>

        <Navbar></Navbar>
        <HeaderSection></HeaderSection>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <ContactMe></ContactMe>
        <ProjectCards projects={projects}></ProjectCards>

        <Footer></Footer>
      </div>
    </div>
  );
}

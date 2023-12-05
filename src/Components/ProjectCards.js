import ProjectRating from "./ProjectRating";
import Typewriter from "typewriter-effect";
import "./ProjectCards.css";
import "../styles.css";
export default function PerfumesCards({ projects }) {
  return (
    <div className="cart-project">
      <section id="projects" className="project-section">
        <div className="container">
          <h1 className="project-title">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["My Projects"],
              }}
            />
          </h1>

          <div className="carts">
            {projects.map((project, index) => (
              <div className="cart" key={index}>
                <img src={project.image} alt={project.title} />
                <br />
                <h3 className="cart-title">{project.title}</h3>
                <p className="cart-description">
                  {project.description} ({project.thepagelink}){" "}
                </p>
                <p>
                  <ProjectRating></ProjectRating>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

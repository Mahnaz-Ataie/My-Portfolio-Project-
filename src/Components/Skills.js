import "./Skills.css";
import "../styles.css";
import Typewriter from "typewriter-effect";
import ProgressBar from "@ramonak/react-progress-bar";
export default function Myskills() {
  return (      
    <section id="skills" className="skills-section">
      <div className="skills component-space">
        <div className="row">
          <div className=" first-column col-md-6 col-lg-6 col-sm-6">
            <div className="skills-box">
              <h1 className="my-skills-heading">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: ["My Skills"],
                  }}
                />
              </h1>
              <p className="skills-description">
                My skills in website design, apart from the skills of
                programming languages, are: <br /> hard working, perseverance
                and follow-up, which is requirement for every programmer.
                <br /> Skills that I am very proud to have been blessed with.
              </p>
            </div>
          </div>
          <div className=" second-column col-md-6 col-lg-6 col-sm-6">
            <div>
              <p className="chosse-heading">
                {" "}
                Why<span> Choose</span> Me:
              </p>
              <p className="bars-title">HTML:</p>
              <ProgressBar
                completed={99}
                animatedOnRender={true}
                bgColor="navy"
              />
            </div>
            <div>
              <p className="bars-title">CSS:</p>
              <ProgressBar
                completed={95}
                animatedOnRender={true}
                bgColor="navy"
              />
            </div>
            <div className>
              <p className="bars-title">JavaScript:</p>
              <ProgressBar
                completed={89}
                animatedOnRender={true}
                bgColor="navy"
              />
            </div>
            <div className>
              <p className="bars-title">Bootstrap:</p>
              <ProgressBar
                completed={85}
                animatedOnRender={true}
                bgColor="navy"
              />
            </div>
            <div className>
              <p className="bars-title">React:</p>
              <ProgressBar
                completed={80}
                animatedOnRender={true}
                bgColor="navy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

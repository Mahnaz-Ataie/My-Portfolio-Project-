import "./AboutMe.css";
import "../styles.css";
import Typewriter from "typewriter-effect";
import image2 from "../assets/images/profile.jpg";
import AboutMeTimeline from "./AboutMeTimeline";
export default function AboutMe() {
  return (
    <section id="about" className="about-me-section">
      <div className="about component-space">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-6">
            <div className="about-box">
              <div>
                <img
                  className="about-me-image"
                  src={image2}
                  alt="mahnaz-profile"
                ></img>
              </div>
            </div>
          </div>
          <div className=" second-column col-md-6 col-lg-6 col-sm-6">
            <h2 className="about-me-text">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: ["About Me"],
                }}
              />
            </h2>
            <div className="about-me-description">
              <p>
                I am a super hardworking software engineer looking for
                opportunities to shine and show my talents to the world.who
                became interested in web design since teenage.my
                intrests:(Reading books /Watching films /coading).
              </p>
            </div>
            <AboutMeTimeline></AboutMeTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}

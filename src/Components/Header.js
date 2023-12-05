import "./Header.css";
import Typewriter from "typewriter-effect";
import image from "../assets/images/mahnaz.jpg";
export default function Header() {
  return (
    <section id="home" className="header-section">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-6">
          <div className="header-box">
            <div className="header--me">
              <img
                className="home-page-image"
                src={image}
                alt="mahnaz ataie"
              ></img>
            </div>
          </div>
        </div>
        <div className=" second-column col-md-6 col-lg-6 col-sm-6">
          <p className="home-paragraph">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: [" hi, I'm Mahnaz"],
              }}
            />
          </p>{" "}
          <br />
          <h2 className="home-heading">
            <span>Full stack</span> <br />
            Developer
          </h2>
          <br />
          <br />
          <p className="home--section-description">
            Working on projects and studying as a full stuck developer in CTI
            stands for code to inspire. <br />
            BCA student in symbiosis Indian university{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

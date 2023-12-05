// import emailjs from "emailjs-com";
import GoogleMap from "./GoogleMap";
import Typewriter from "typewriter-effect";
import React from "react";
import "./ContactMe.css";
import "../styles.css";
export default function ContactMe() {
  // function sendEmail(e) {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_5wawtjy",
  //       "template_fewxqm7",
  //       e.target,
  //       "jMC3dnOUSMVYP_38L",
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }
  return (
    <section id="contact" className="contact-me-section">
      <div className="contact component-space">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-6">
            <div className="contact-box">
              <div className="contact--me">
                <h1 className="hire-text">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      strings: ["Hire Me"],
                    }}
                  />
                </h1>
                <div className="input-box">
                  <form action="https:///mahnazataie11@gmail.com" method="POST">
                    <input
                      type="text"
                      className="contact name"
                      placeholder="Your name"
                      name="name"
                    />
                    <input
                      type="text"
                      className="contact email"
                      placeholder="Your Email"
                      name="user_email"
                    />
                    <input
                      type="text"
                      className="contact subject"
                      name="subject"
                      placeholder="Write Your subjest"
                    />
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Write your message"
                    />
                    <button className="view__more contact pointer btn btn-dark">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className=" second-column col-md-6 col-lg-6 col-sm-6">
            <h1 className="hire-text" id="location">
              My <span>location</span>
            </h1>
            <p>
              <GoogleMap></GoogleMap>
            </p>
            <p>
              {" "}
              <i class="fa-sharp fa-solid fa-phone-volume"></i> 0098797402510
            </p>
            <p>
              {" "}
              <i class="fa-solid fa-envelope"></i> mahnazataie11@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className=" first-column col-md-6 col-lg-6 col-12 ft-1">
              <h3>
                {" "}
                <span>Follow</span> Me
              </h3>

              <div className="footer-icons">
                <a href="https://twitter.com/mahnaz41174005/status/1723378041726931328?s=46&t=oY4TKR0dZ-IkDgLqAgAUoA">
                  {" "}
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/mahnaz-ataie-657983203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                  {" "}
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>

                <a href="https://github.com/Mahnaz-Ataie">
                  {" "}
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <div className=" second-column col-md-6 col-lg-6 col-12 ft-2">
              <h3>
                <span>Contact</span> Me{" "}
              </h3>
              <p>
                {" "}
                <i class="fa-sharp fa-solid fa-phone-volume"></i> 0098797402510
              </p>
              <p>
                {" "}
                <i class="fa-solid fa-envelope"></i> mahnazataie11@gmail.com
              </p>
              <p>
                {" "}
                <i class="fa-brands fa-telegram"></i> mahnaz_ataie
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="last-footer">
        <p> Copyright &copy; 2023 by Mahnaz Ataie | all rights reserved </p>
      </div>
    </div>
  );
}

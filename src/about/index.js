import "./index.scss";
import React, { useEffect, useState } from "react";
import Brian from "../assets/briancv.pdf";

const About = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <>
          <div className="about-page">
            <div className="about-container">
              <button
                className="download-cv"
                onClick={() => window.open(Brian, "_blank")}
              >
                Download CV
              </button>
              <div className="left-about">
                <h4>Information Available About me</h4>
                <p>
                  Hello i'm brian oricho, a software engineer/web developer. My
                  country of residence is kenya 🇰🇪 and city Nairobi, that being
                  said i'll take on any remote jobs within my skillset.I have
                  worked on many projects during my time as a freelancer and
                  student. <br /> <br /> I recently just graduated from
                  university
                  <span>(21st MKU graduation)</span> with my diploma in
                  information technology. I'm experienced with javascript, it
                  being my first programming language and all Js frameworks ie.
                  NextJS, ReactJ e.t.c.
                </p>
              </div>
              <div className="right-about">
                <div className="about-item">
                  <div className="abt-text">
                    <p>50+</p>
                    <p>
                      Completed <br /> Projects
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="abt-text">
                    <p>6+</p>
                    <p>
                      Years of <br /> Javascript XP
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div class="abt-text">
                    <p>3+</p>
                    <p>
                      years of <br /> Python XP
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="abt-text">
                    <p>20+</p>
                    <p>
                      Satisfied <br /> Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default About;

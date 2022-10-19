import React, { useEffect, useState } from "react";
import "./index.scss";
import logo from "../assets/img2.png";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TextScrambler from "react-scramble-text";
import "react-scramble-text/dist/index.css";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  const phrases = [
    "Web Developer",
    "Graphic Designer",
    "Backend Developer",
    "Network Engineer",
  ];

  return (
    <>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <>
          <section className="homepage ">
            <div className="homepage-content">
              <div className="content">
                <h1>Hi, </h1>
                <h1>I'm Brian Oricho. </h1>

                <div>
                  <h1 className="scrambeled-text">
                    <TextScrambler
                      phrases={phrases}
                      speed={50}
                      pauseTime={3000}
                    />
                  </h1>
                </div>
                <div className="submit-btn">
                  <Link to="/contact" className="main-btn">
                    <span className="btn-text">contact me</span>
                    <FontAwesomeIcon icon={faPaperPlane} className="btn-icon" />
                  </Link>
                </div>
              </div>
            </div>
            <img src={logo} alt="" className="heroimg" />
          </section>
        </>
      )}
    </>
  );
};

export default Home;

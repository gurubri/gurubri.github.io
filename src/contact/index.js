import { Link } from "react-router-dom";
import "./index.scss";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const refForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setloading(true);
    emailjs
      .sendForm(
        "service_ui7lddt",
        "template_lvux01y",
        refForm.current,
        "Byb8uFvgChrUXLyH_"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
    setloading(false);
  };
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
          <section className="section-book">
            <div className="row">
              <div className="book">
                <div className="book__form">
                  <form className="form" ref={refForm} onSubmit={sendEmail}>
                    <div className="u-margin-bottom-medium">
                      <h2 className="heading-secondary">Contact me</h2>
                    </div>

                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      required
                      className="form_element1"
                    />

                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                      className="form_element1"
                    />

                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                      className="form_element"
                    />

                    <textarea
                      placeholder="Type your message here...."
                      name="message"
                      required
                      className="form_textarea"
                    ></textarea>

                    <div className="submit-btn">
                      <Link
                        to="/contact"
                        className="main-btn"
                        onClick={sendEmail}
                      >
                        <span className="btn-text">contact me</span>
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          className="btn-icon"
                        />
                      </Link>
                    </div>
                  </form>
                  <div className="footer-info">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/in/brian-oricho-13248a19b"
                    >
                      <FontAwesomeIcon icon={faLinkedin} color="#86888a" />
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/gurubri"
                    >
                      <FontAwesomeIcon icon={faGithub} color="#191d21" />
                    </a>
                    <Link target="_blank" href="/">
                      <FontAwesomeIcon icon={faYoutube} color="red" />
                    </Link>
                    <Link target="_blank" href="/">
                      <FontAwesomeIcon icon={faSkype} color="lightblue" />
                    </Link>

                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://twitter.com/brian__oricho"
                    >
                      <FontAwesomeIcon icon={faTwitter} color="#1b7fde" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Contact;

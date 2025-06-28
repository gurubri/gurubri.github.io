import { Outlet } from "react-router-dom";
import {
  faHome,
  faUser,
  faEnvelope,
  faNewspaper,
  faBriefcase,
  faEnvelopeOpen,
  faAdjust,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";
import { useEffect } from "react";

const Layout = () => {
  let location = useLocation();
  let n = location.pathname.slice(1);

  useEffect(() => {
    if (n !== "") {
      document.querySelector(".active-btn").classList.remove("active-btn");
      document.querySelector(`.${n}`).classList.add("active-btn");
    } else {
      document.querySelector(".active-btn").classList.remove("active-btn");
      document.querySelector(`.home`).classList.add("active-btn");
    }
  }, [n]);

  return (
    <>
      <div className="controls">
        <Link className="control active-btn home" to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link className="control about" to="/about">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link className="control contact" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </div>
      <div
        className="theme-btn"
        onClick={() => document.body.classList.toggle("dark-mode")}
      >
        <FontAwesomeIcon icon={faAdjust} />
      </div>

      <Outlet />
    </>
  );
};

export default Layout;

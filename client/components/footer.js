import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
      <a href="#home" className="w3-button w3-light-grey">
        <i className="fa fa-arrow-up w3-margin-right"></i>To the top
      </a>
      <div className="w3-xlarge w3-section footer-logos">
        <a
          href="www.linkedin.com/in/morgan-mattone"
          className="fa fa-linkedin w3-hover-opacity"
        ></a>
        <a
          href="https://github.com/morgzmatty"
          className="fa fa-github w3-hover-opacity"
        ></a>
      </div>
      <p>Morgan Mattone</p>
    </footer>
  );
};

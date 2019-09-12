import React from "react";

export const About = () => {
  let webdesign = {
    width: "85%"
  };
  let photoshop = {
    width: "75%"
  };
  let photography = {
    width: "90%"
  };
  return (
    <div className="w3-content w3-container w3-padding-64" id="about">
      <h3 className="w3-center">ABOUT ME</h3>
      <p className="w3-center">
        <em>I love photography</em>
      </p>
      <p>
        We have created a fictional "personal" website/blog, and our fictional
        character is a hobby photographer. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="w3-row">
        <div className="w3-col m6 w3-center w3-padding-large">
          <p>
            <b>
              <i className="fa fa-user w3-margin-right"></i>My Name
            </b>
          </p>
          <br />
          <img
            src="/w3images/avatar_hat.jpg"
            className="w3-round w3-image w3-opacity w3-hover-opacity-off"
            alt="Photo of Me"
            width="500"
            height="333"
          />
        </div>
        <div className="w3-col m6 w3-hide-small w3-padding-large">
          <p>
            Welcome to my website. I am lorem ipsum consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
      <p className="w3-large w3-center w3-padding-16">Im really good at:</p>
      <p className="w3-wide">
        <i className="fa fa-camera"></i>Photography
      </p>
      <div className="w3-light-grey">
        <div
          className="w3-container w3-padding-small w3-dark-grey w3-center"
          style={photography}
        >
          90%
        </div>
      </div>
      <p className="w3-wide">
        <i className="fa fa-laptop"></i>Web Design
      </p>
      <div className="w3-light-grey">
        <div
          className="w3-container w3-padding-small w3-dark-grey w3-center"
          style={webdesign}
        >
          85%
        </div>
      </div>
      <p className="w3-wide">
        <i className="fa fa-photo"></i>Photoshop
      </p>
      <div className="w3-light-grey">
        <div
          className="w3-container w3-padding-small w3-dark-grey w3-center"
          style={photoshop}
        >
          75%
        </div>
      </div>
    </div>
  );
};

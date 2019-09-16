import React from "react";

export const Contact = () => {
  let formStyle = {
    margin: "0 -16px 8px -16px"
  };
  let image1 = {
    width: "100%"
  };
  return (
    <div>
      <div className="bgimg-3 w3-display-container w3-opacity-min">
        <div className="w3-display-middle">
          <span className="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
        </div>
      </div>
      <div className="w3-content w3-container w3-padding-64" id="contact">
        <h3 className="w3-center">WHERE I WORK</h3>
        <p className="w3-center">
          <em>I'd love your feedback!</em>
        </p>

        <div className="w3-row w3-padding-32 w3-section">
          <div className="w3-col m4 w3-container">
            <img
              src="/w3images/map.jpg"
              className="w3-image w3-round"
              style={image1}
            />
          </div>
          <div className="w3-col m8 w3-panel">
            <div className="w3-large w3-margin-bottom">
              <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i>
              New York, New York
              <br />
              <i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i>
              Phone: +1 347 229 3385
              <br />
              <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i>
              Email: morgan.mattone@gmail.com
              <br />
            </div>
            <p>
              Swing by for a cup of <i className="fa fa-coffee" />, or leave me
              a note:
            </p>
            <form action="/action_page.php" target="_blank">
              <div className="w3-row-padding" style={formStyle}>
                <div className="w3-half">
                  <input
                    className="w3-input w3-border"
                    type="text"
                    placeholder="Name"
                    required
                    name="Name"
                  />
                </div>
                <div className="w3-half">
                  <input
                    className="w3-input w3-border"
                    type="text"
                    placeholder="Email"
                    required
                    name="Email"
                  />
                </div>
              </div>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Message"
                required
                name="Message"
              />
              <button
                className="w3-button w3-black w3-right w3-section"
                type="submit"
              >
                <i className="fa fa-paper-plane" /> SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

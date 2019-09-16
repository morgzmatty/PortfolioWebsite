import React from "react";

export const Portfolio = () => {
  let image1 = {
    width: "100%"
  };
  let loadMore = {
    marginTop: "64px"
  };
  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  return (
    <div className="w3-content w3-container w3-padding-64" id="portfolio">
      <h3 className="w3-center">MY WORK</h3>
      <p className="w3-center">
        <em>
          Here are some of my latest lorem work ipsum tipsum.
          <br />
          Click on the images to make them bigger
        </em>
      </p>
      <br />
      <div className="w3-row-padding w3-center">
        <div className="w3-col m3">
          <img
            src="/w3images/p1.jpg"
            style={image1}
            className="w3-hover-opacity"
            alt="The mist over the mountains"
          />
        </div>

        <div className="w3-col m3">
          <img
            src="/w3images/p2.jpg"
            style={image1}
            className="w3-hover-opacity"
            alt="Coffee beans"
          />
        </div>

        <div className="w3-col m3">
          <img
            src="/w3images/p3.jpg"
            style={image1}
            className="w3-hover-opacity"
            alt="Bear closeup"
          />
        </div>

        <div className="w3-col m3">
          <img
            src="/w3images/p4.jpg"
            style={image1}
            className="w3-hover-opacity"
            alt="Quiet ocean"
          />
        </div>
      </div>

      <div className="w3-row-padding w3-center w3-section">
        <div className="w3-col m3">
          <img
            src="/w3images/p5.jpg"
            style={image1}
            className="w3-hover-opacity"
            alt="The mist"
          />
        </div>

        <div className="w3-col m3">
          <img
            src="/w3images/p6.jpg"
            style={image1}
            className="w3-hover-opacity"
            alt="My beloved typewriter"
          />
        </div>

        <div className="w3-col m3">
          <img
            src="/w3images/p7.jpg"
            style={image1}
            className="w3-hover-opacity"
            alt="Empty ghost train"
          />
        </div>

        <div className="w3-col m3">
          <img
            src="/w3images/p8.jpg"
            style={image1}
            className="w3-hover-opacity"
            alt="Sailing"
          />
        </div>
        <button
          className="w3-button w3-padding-large w3-light-grey"
          style={loadMore}
        >
          LOAD MORE
        </button>
      </div>
    </div>
  );
};

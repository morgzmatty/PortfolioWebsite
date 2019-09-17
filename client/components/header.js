import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      offset: 0
    };
    //this.parallaxShift = this.parallaxShift.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.parallaxShift);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.parallaxShift);
  }
  // parallaxShift = () => {
  //   this.setState({
  //     offset: window.pageYOffset
  //   });
  // };
  render() {
    return (
      <header
        className="header-background"
        style={{ backgroundPositionY: this.state.offset }}
      >
        <section
          className="info-container"
          style={{ bottom: this.state.offset / 2 }}
        >
          <h1>Morgan Mattone</h1>
          <h3>Fullstack Engineer</h3>
        </section>
      </header>
    );
  }
}

export default Header;

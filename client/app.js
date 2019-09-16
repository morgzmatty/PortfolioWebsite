import React from "react";
import { Navbar } from "./components/navbar";
import { Logo } from "./components/logo";
import { About } from "./components/about";
import { Portfolio } from "./components/portfolio";
import { Contact } from "./components/contact";
//import Routes from "./routes";

const App = () => {
  return (
    <div>
      <Navbar />
      <Logo />
      <About />
      <Portfolio />
      <Contact />
      {/* <Routes /> */}
    </div>
  );
};

export default App;

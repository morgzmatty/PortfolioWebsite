import React from "react";
import { Navbar } from "./components/navbar";
import { Logo } from "./components/logo";
import { About } from "./components/about";
//import Routes from "./routes";

const App = () => {
  return (
    <div>
      <Navbar />
      <Logo />
      <About />
      {/* <Routes /> */}
    </div>
  );
};

export default App;

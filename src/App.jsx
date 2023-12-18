import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";
import Review from "./components/Review";

const App = () => {
  return (
    <div>
      <Navbar />

      <Home />

      <Dishes />

      <About />

      <Menu />

      <Review />

      <Footer />
    </div>
  );
};

export default App;

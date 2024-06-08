import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import AboutUs from "./components/pages/About/AboutUs";
import OurServices from "./components/pages/OurServices/OurServices";
import Reviews from "./components/pages/Reviews/Reviews";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <OurServices />
      <Reviews />
    </>
  );
};

export default App;

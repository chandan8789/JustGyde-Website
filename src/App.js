import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import AboutUs from "./components/pages/About/AboutUs";
import OurServices from "./components/pages/OurServices/OurServices";
import Reviews from "./components/pages/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import OurMission from "./components/pages/OurServices/OurMission";
import OurVission from "./components/pages/OurServices/OurVission";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/our-vission" element={<OurVission/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

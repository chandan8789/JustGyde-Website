import React from "react";
import About from "../../assets/Aboutus.png";
import OurServices from "../OurServices/OurServices";

const AboutUs = () => {
  return (
    <div className="container-fluid py-5">
      <h1
        className="text-center mt-5 fw-bold"
        style={{ color: "rgba(78, 66, 80, 1)" }}
      >
        About Us
      </h1>
      <img src={About} alt="About Us" className="w-100 mt-4" />
      <div className="container mt-5 text-center">
        <p style={{ color: " rgba(0, 0, 102, 1)" }}>
          Welcome to Just Gyde, your all-in-one platform for essential services
          in healthcare, education, finance, and entertainment. Our mission is
          to empower communities by making these services easily accessible and
          user-friendly.
        </p>
        <p style={{ color: " rgba(0, 0, 102, 1)" }}>
        Just Gyde is dedicated to improving lives by bridging gaps in essential services. Our passionate team works tirelessly to bring you innovative solutions that simplify everyday life.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

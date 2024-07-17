import React from "react";
import About from "../../assets/Aboutus.png";
import OurServices from "../OurServices/OurServices";

const AboutUs = () => {
  return (
    <div className="container-fluid py-5 p-1">
      <h1
        className="text-center mt-5 fw-bold"
        style={{ color: "rgba(78, 66, 80, 1)" }}
      >
        About Us
      </h1>
      <img src={About} alt="About Us" className="w-100 mt-4" />
      <div className="container mt-5 text-center">
        <p className="mx-2">
          Welcome to Just Gyde, your all-in-one platform for essential services
          in healthcare, education, finance, and entertainment. Our mission is
          to empower communities by making these services easily accessible and
          user-friendly.
        </p>
        {/* <p className="mx-5">
          Just Gyde is dedicated to improving lives by bridging gaps in
          essential services. Our passionate team works tirelessly to bring you
          innovative solutions that simplify everyday life.
        </p> */}
        <p className="mx-2">
          Just Gyde, part of AERO BEE STAR GLOBAL SOLUTIONS INDIA PRIVATE
          LIMITED, is dedicated to improving lives by bridging gaps in essential
          services. Our passionate team works tirelessly to bring you innovative
          solutions that simplify everyday life.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

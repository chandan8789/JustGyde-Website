import homebg from "../../assets/blue.png";
// import homebg from "../../assets/pupple.png";
import phone from "../../assets/Phone.png";
import "./Home.css";
import OurServices from "../OurServices/OurServices";
import Reviews from "../Reviews/Reviews";
import Ecommerce from "../Reviews/Ecommerce";

import React from "react";

const Home = () => {
  return (
    <div>
      <div className="d-flex justify-content-around gradient-bg">
        <div className="text-container">
          <h1 className="m-0 fw-bold letter-spacing mt-5 text-white reliablesolutions">
            Reliable Solutions,
          </h1>
          <h1 className="m-0 fw-bold letter-spacing text-white">
            Exceptional Service
          </h1>
          <p className="w-75 mt-3 mb-5 text-white mx-auto">
            At our company "AERO BEE STAR GLOBAL SOLUTIONS INDIA PRIVATE
            LIMITED" , we pride ourselves on delivering reliable solutions
            coupled with exceptional service. Our commitment to excellence
            ensures that every project we undertake meets the highest standards
            of quality and satisfaction. Trust us to provide innovative and
            dependable solutions tailored to your needs, backed by a team
            dedicated to outstanding customer service.
          </p>
          <button
            className="p-3 w-50 rounded bg-blue fs-5 mt-1"
            type="button"
            style={{
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              border: "none",
            }}
          >
            Download
          </button>
        </div>
        <div className="img-container">
          <img
            src={phone}
            alt=""
            className="img-fluid"
            style={{ height: "450px", width: "500px", marginTop: "2rem" }}
          />
        </div>
      </div>
      <OurServices />
      <Ecommerce />
      <Reviews />
    </div>
  );
};

export default Home;

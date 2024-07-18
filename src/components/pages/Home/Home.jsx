import React from "react";
import homebg from "../../assets/pupple.png";
import phone from "../../assets/Phone.png";
import "./Home.css";
import OurServices from "../OurServices/OurServices";
import Reviews from "../Reviews/Reviews";
import Ecommerce from "../Reviews/Ecommerce";
const Home = () => {
  return (
    <>
      <div>
        <div>
          <img style={{ width: "100%", height: "100vh" }} src={homebg} alt="" />
          <div class="centered">
            <h1 className="m-0 fw-bold letter-spacing">Reliable Solutions,</h1>
            <h1 className="m-0 fw-bold letter-spacing">Exceptional Service</h1>
            <p className="w-75 mt-4">
              At our company "AERO BEE STAR GLOBAL SOLUTIONS INDIA PRIVATE
              LIMITED" , we pride ourselves on delivering reliable solutions
              coupled with exceptional service. Our commitment to excellence
              ensures that every project we undertake meets the highest
              standards of quality and satisfaction. Trust us to provide
              innovative and dependable solutions tailored to your needs, backed
              by a team dedicated to outstanding customer service.
            </p>
          </div>
        </div>
        <div
          style={{ marginTop: "-27%", marginLeft: "55%" }}
          className="phoneImages"
        >
          <img
            src={phone}
            alt=""
            style={{ width: "500px", height: "475px" }}
            className="phoneImagesmedia"
          />
        </div>
        <OurServices />
        <Ecommerce />
        <Reviews />
      </div>
    </>
  );
};

export default Home;

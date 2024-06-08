import React from "react";
import homebg from "../../assets/blue.png";
import phone from "../../assets/Phone.png";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div>
        <div>
          <img style={{ width: "100%", height: "550px" }} src={homebg} alt="" />
          <div class="centered">
            <h1 className="m-0 fw-bold letter-spacing">Reliable Solutions,</h1>
            <h1 className="m-0 fw-bold letter-spacing">Exceptional Service</h1>
            <p className="w-50 mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias quaerat id sapiente pariatur quasi consequuntur ullam
              quia expedita sequi ea alias, rem ducimus. Inventore libero
              laborum porro eaque, obcaecati ducimus?
            </p>
          </div>
        </div>
        <div style={{ marginTop: "-27%", marginLeft: "55%" }}>
          <img src={phone} alt="" style={{ width: "500px", height: "475px" }} />
        </div>
      </div>
    </>
  );
};

export default Home;

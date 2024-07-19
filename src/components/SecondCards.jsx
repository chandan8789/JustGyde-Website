import React from "react";

const SecondCards = ({ title, img, des }) => {
  return (
    <div className="d-flex mb-2">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 order-1 order-md-2 mt-4">
          <img
            src={img}
            alt=""
            className="img-fluid"
            style={{ maxHeight: "350px", width: "100%" }}
          />
        </div>
        <div className="col-md-6 order-2 order-md-1 mt-3 mt-md-0">
          <h1 className=" mb-4 fw-bold" style={{ color: "#4e4250" }}>
            {title}
          </h1>
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
};

export default SecondCards;

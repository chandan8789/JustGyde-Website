import React from "react";

const MultiCards = ({ img, title, des }) => {
  return (
    <div className="d-flex mb-2">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 mt-4">
          <img
            src={img}
            alt=""
            className="img-fluid order-sm-1 order-lg-2"
            style={{ maxHeight: "400px", width: "100%" }}
          />
        </div>
        <div className="col-md-6 mt-3 mt-md-0">
          <h1 className="display-4 mb-4 fw-bold" style={{ color: "#4e4250" }}>
            {title}
          </h1>
          <p className="lead">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default MultiCards;

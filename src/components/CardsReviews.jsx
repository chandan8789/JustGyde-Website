import React from "react";
import locationss from "./assets/locationgyde.png";
import Start from "./assets/juststr.png";

const CardsReviews = ({ title, des, Name, img }) => {
  return (
    <div className="container mt-4 mb-3">
      <div className="card p-1">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <div className="me-3">
              <img
                src={img}
                alt="Avatar"
                style={{ height: "100px", width: "100px", borderRadius: "50%" }}
              />
            </div>
            <div className="flex-grow-1">
              <p className="m-0 fw-bold">{Name}</p>
              <div className="d-flex align-items-center">
                <img
                  src={locationss}
                  alt="Location"
                  style={{ height: "20px", width: "15px" }}
                />
                <span className="ms-2">Delhi</span>
              </div>
            </div>
            <div className="text-end">
              <img
                src={Start}
                alt="Rating"
                style={{ height: "30px", width: "150px" }}
              />
              <p className="m-0">4/5</p>
            </div>
          </div>
          <h3
            style={{
              fontSize: 28,
              fontWeight: "600",
              lineHeight: 2,
              color: "rgba(0, 0, 102, 1)",
            }}
          >
            {title}
          </h3>
          <p
            className="card-text mb-3"
            style={{ fontSize: 20, lineHeight: 1.4 }}
          >
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardsReviews;

import React from "react";
import locationss from "./assets/locationgyde.png";
import Start from "./assets/juststr.png";

const CardsReviews = ({ title, des, Name, img }) => {
  return (
    <div className="container mt-4 mb-4 w-100">
      <div
        className="card p-2 cardsize"
        style={{
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          border: "none",
        }}
      >
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <div className="me-3">
              <img
                src={img}
                alt="Avatar"
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
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
            <div style={{display:"flex",justifyContent:"end",flexDirection:"column",alignItems:"end"}}>
              <img
                src={Start}
                alt="Rating"
                className="w-50"
              />
              <p className="m-1">4/5</p>
            </div>
          </div>
          <h3
            style={{
              fontSize: 18,
              fontWeight: "600",
              lineHeight: 2,
              color: "rgba(0, 0, 102, 1)",
            }}
          >
            {title}
          </h3>
          <p
            className="card-text mb-3"
            style={{ fontSize: "15px" }}
          >
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardsReviews;

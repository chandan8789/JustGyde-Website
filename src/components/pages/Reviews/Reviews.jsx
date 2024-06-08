import React from "react";
import CardsReviews from "../../CardsReviews";
import Footer from "../../Footer/Footer";

const Reviews = () => {
  return (
    <>
      <div className="container mt-3">
        <h1 className="text-center fw-bold mb-4 mt-2">Reviews</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-6 col-lg-5 mb-4">
            <CardsReviews />
          </div>
          <div className="col-12 col-sm-10 col-md-6 col-lg-5 mb-4">
            <CardsReviews />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;

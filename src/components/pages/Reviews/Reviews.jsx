import React from "react";
import CardsReviews from "../../CardsReviews";
import Footer from "../../Footer/Footer";

const Reviews = () => {
  return (
    <>
      <div className="container py-5">
        <h1
          className="text-center mt-5 fw-bold"
          style={{ color: "rgba(78, 66, 80, 1)" }}
        >
          Reviews
        </h1>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-6 col-lg-5 mb-4">
            <CardsReviews
            Name="Amit"
              title="Medical Service"
              des="Just Gyde brings excitement to your life with a wide array of entertainment services. We have partnerships with multiple and other entities to offer exclusive deals and rewards. Our platform allows users to earn and redeem coins for various entertainment activities. Enjoy movies, events, and more with our seamless booking and reward system. We aim to make entertainment accessible and affordable for everyone. Our services include discounts on movie tickets, event passes, and more. Just Gyde enhances your leisure time by providing curated entertainment experiences. Dive into a world of fun and relaxation with Just Gyde, where entertainment meets convenience.

"
            />
          </div>
          <div className="col-12 col-sm-10 col-md-6 col-lg-5 mb-4">
            <CardsReviews
              Name="Sandeep"
              title="Entertainment Service"
              des="Just Gyde brings excitement to your life with a wide array of entertainment services. We have partnerships with multiple and other entities to offer exclusive deals and rewards. Our platform allows users to earn and redeem coins for various entertainment activities. Enjoy movies, events, and more with our seamless booking and reward system. We aim to make entertainment accessible and affordable for everyone. Our services include discounts on movie tickets, event passes, and more. Just Gyde enhances your leisure time by providing curated entertainment experiences. Dive into a world of fun and relaxation with Just Gyde, where entertainment meets convenience."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;

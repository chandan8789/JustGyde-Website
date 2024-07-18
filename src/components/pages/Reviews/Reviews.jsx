import React from "react";
import CardsReviews from "../../CardsReviews";
import Footer from "../../Footer/Footer";
import images from "../../assets/avtarsgyde.png";

const Reviews = () => {
  return (
    <>
      <div className="container py-5">
        <h1
          className="text-center mt-1 fw-bold"
          style={{ color: "rgba(78, 66, 80, 1)" }}
        >
          Reviews
        </h1>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-6 col-lg-5 mb-4">
            <CardsReviews
              img="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              Name="Amit Yadav"
              title="Medical Service"
              des="Booking consultations, tests, and more is seamless with their user-friendly system. I’ve enjoyed significant discounts on doctor appointments and diagnostic tests, which has been a huge relief. Just Health has definitely enhanced my healthcare experience by providing curated medical services tailored to my needs. I highly recommend Just Health to anyone looking to dive into a world of health and well-being. They’ve truly made healthcare meet convenience!"
            />
          </div>
          <div className="col-12 col-sm-10 col-md-6 col-lg-5 mb-4">
            <CardsReviews
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_k00ibnFvQaMvvSRBY3ZBpT3Cit1hn9ztHw&s"
              Name="Kajal Yadav"
              title="FMCG Services"
              des="Just Gyde revolutionizes your shopping experience with a wide range of FMCG (Fast-Moving Consumer Goods) services. We have partnered with top brands to offer exclusive discounts and rewards on everyday essentials. Our platform allows you to earn and redeem coins for purchases, Experience the convenience of seamless shopping, timely delivery, and exceptional customer service. With Just Gyde, your daily essentials are just a click away, making life simpler and more affordable."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;

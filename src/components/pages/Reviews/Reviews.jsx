import React from "react";
import CardsReviews from "../../CardsReviews";
import Footer from "../../Footer/Footer";
import images from "../../assets/avtarsgyde.png";

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
              img="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              Name="Amit"
              title="Medical Service"
              des="Just Gyde brings excitement to your life with a wide array of entertainment services. We have partnerships with multiple and other entities to offer exclusive deals and rewards. Our platform allows users to earn and redeem coins for various entertainment activities. Enjoy movies, events, and more with our seamless booking and reward system. We aim to make entertainment accessible and affordable for everyone. Our services include discounts on movie tickets, event passes, and more. Just Gyde enhances your leisure time by providing curated entertainment experiences. Dive into a world of fun and relaxation with Just Gyde, where entertainment meets convenience.

"
            />
          </div>
          <div className="col-12 col-sm-10 col-md-6 col-lg-5 mb-4">
            <CardsReviews
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_k00ibnFvQaMvvSRBY3ZBpT3Cit1hn9ztHw&s"
              Name="Sandeep"
              title="FMCG Services"
              des="Just Gyde revolutionizes your shopping experience with a wide range of FMCG (Fast-Moving Consumer Goods) services. We have partnered with top brands to offer exclusive discounts and rewards on everyday essentials. Our platform allows you to earn and redeem coins for purchases, making it easier to manage your budget while enjoying high-quality products. From groceries to personal care items, Just Gyde ensures that you get the best deals on all your household needs. Experience the convenience of seamless shopping, timely delivery, and exceptional customer service. With Just Gyde, your daily essentials are just a click away, making life simpler and more affordable."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;

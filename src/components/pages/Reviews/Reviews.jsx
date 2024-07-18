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
              Name="Amit Yadav"
              title="Medical Service"
              des="I recently used JustGyde's medical services, and I couldn't be more satisfied. The process was seamless from start to finish. I easily booked an appointment with a specialist through their app, and the entire experience was smooth and hassle-free. The staff was professional, and I felt well taken care of. The convenience of having access to top-notch medical services through JustGyde is truly remarkable. I highly recommend their services to anyone seeking quality healthcare without the usual stress and complications."
            />
          </div>
          <div className="col-12 col-sm-10 col-md-6 col-lg-5 mb-4">
            <CardsReviews
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_k00ibnFvQaMvvSRBY3ZBpT3Cit1hn9ztHw&s"
              Name="Kajal Yadav"
              title="FMCG Services"
              des="JustGyde's FMCG services have completely transformed my shopping experience. I found an incredible range of products at unbeatable prices. The app's user-friendly interface made it easy to browse and order everything I needed, from daily essentials to specialty items. The delivery was prompt, and the quality of the products exceeded my expectations. I love the convenience and the savings I get with JustGyde's FMCG services. It's now my go-to platform for all my grocery and household needs. Highly recommended!"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;

import React from "react";
import CardsReviews from "../../CardsReviews";
// import Footer from "../../Footer/Footer";
// import images from "../../assets/avtarsgyde.png";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import man from '../../../components/assets/man.jpg'
import vivek from '../../../components/assets/vivek.jpg'

const Reviews = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="container px-4 mb-4 py-4">
        <motion.h1
          className="text-center mt-5 fw-bold"
          style={{ color: "rgba(78, 66, 80, 1)" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Reviews
        </motion.h1>

        <div className="row justify-content-center">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <motion.div
                  // className="col-12 col-sm-10 col-md-6 col-lg-5 mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <CardsReviews
                    img={man}
                    Name="Ravi"
                    title="Excited About the Potential of AEROGENIE!"
                    des="I just downloaded the AEROGENIE App and Service, I'm excited about the possibilities. The app's interface is sleek and easy to navigate, with a wide range of entertainment options. I'm planning to use AEROGENIE for upcoming events to take advantage of the best deals!"
                    rate="4.5/5"
                  />
                </motion.div>
              </div>
              <div>
                <motion.div
                  // className="col-12 col-sm-10 col-md-6 col-lg-5 mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <CardsReviews
                    img={vivek} 
                    Name="Vivek"
                    title="Impressive Range of Services on AEROGENIE!"
                    des="I recently came across the AEROGENIE App and  Services I am thoroughly impressed with the variety of services available. The app is well-designed and user-friendly. I'm already planning my next movie night with AEROGENIE to enjoy their discounts and exclusive deals!"
                    rate="4.8/5"
                  />
                </motion.div>
              </div>
              {/* <div>
                <motion.div
                  // className="col-12 col-sm-10 col-md-6 col-lg-5 mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <CardsReviews
                    img="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                    Name="Vinay"
                    title="Excited About the Potential of AEROGENIE!"
                    des="I just downloaded the AEROGENIE App and Service, I'm excited about the possibilities. The app's interface is sleek and easy to navigate, with a wide range of entertainment options. I'm planning to use AEROGENIE for upcoming events to take advantage of the best deals!"
                  />
                </motion.div>
              </div>
              <div>
                <motion.div
                  // className="col-12 col-sm-10 col-md-6 col-lg-5 mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <CardsReviews
                    img={man}
                    Name="Vivek"
                    title="Impressive Range of Services on AEROGENIE!"
                    des="I recently came across the AEROGENIE App and  Services I am thoroughly impressed with the variety of services available. The app is well-designed and user-friendly. I'm already planning my next movie night with AEROGENIE to enjoy their discounts and exclusive deals!"
                  />
                </motion.div>
              </div> */}
           
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;

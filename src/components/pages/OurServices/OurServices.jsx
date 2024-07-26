import React from "react";
import MultiCards from "../../MultiCards";
import Education from "../../assets/educations.jpg";
import SecondCards from "../../SecondCards";
import Entertainment from "../../assets/enterainment.png";
import business from "../../assets/business.png";
import Nurse from "../../assets/nurses.jpg";
import Reviews from "../Reviews/Reviews";
import Ecommerce from "../../assets/ecommerce.jpg";
import { motion } from "framer-motion";

const OurServices = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: i * 0.5 },
    }),
  };

  return (
    <div className="container py-5">
      <div className="p-2">
        <motion.h1
          className="text-center mt-5 fw-bold"
          style={{ color: "rgba(78, 66, 80, 1)" }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          custom={0}
        >
          Our Services
        </motion.h1>
        <motion.div
          className="container mt-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          custom={1}
        >
          <MultiCards
            img={Education}
            title="Educational Service"
            des="At AEROGENIE, we believe in the Right to Education for all, ensuring every student has access to quality education. We help students secure free education opportunities, breaking down financial barriers to learning. Our platform facilitates mediation between schools and colleges, helping students find the best academic institutions. We provide resources and support to navigate the education system effectively. Our services aim to create a more equitable education landscape. By connecting students with scholarships and financial aid, we empower them to reach their full potential. AEROGENIE is dedicated to fostering educational growth and opportunities for all. Join us in making education accessible and achievable for every learner."
          />
        </motion.div>
        <motion.div
          className="container mt-5"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          custom={2}
        >
          <SecondCards
            img={Entertainment}
            title="Entertainment Service"
            des="AEROGENIE brings excitement to your life with a wide array of entertainment services. We have partnerships with multiple and other entities to offer exclusive deals and rewards. Our platform allows users to earn and redeem coins for various entertainment activities. Enjoy movies, events, and more with our seamless booking and reward system. We aim to make entertainment accessible and affordable for everyone. Our services include discounts on movie tickets, event passes, and more. AEROGENIE enhances your leisure time by providing curated entertainment experiences. Dive into a world of fun and relaxation with AEROGENIE, where entertainment meets convenience."
          />
        </motion.div>
        <motion.div
          className="container mt-5"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          custom={3}
        >
          <MultiCards
            img={business}
            title="Financial Service"
            des="AEROGENIE is committed to helping individuals achieve their financial goals through comprehensive support and resources. We offer job placement services to connect the unemployed with meaningful employment opportunities. Our platform provides tools and advice for financial planning and goal setting. We work with various partners to create job opportunities for everyone, regardless of their background. By promoting financial literacy, we empower individuals to make informed financial decisions. Our services include resume building, interview preparation, and job matching. AEROGENIE aims to reduce unemployment and promote economic stability within communities. Let us help you navigate your financial journey with confidence and success."
          />
        </motion.div>
        <motion.div
          className="container mt-5"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          custom={4}
        >
          <SecondCards
            img={Nurse}
            title="Medical Service"
            des="AEROGENIE brings well-being to your life with a comprehensive range of medical services. We have partnerships with various healthcare providers and other entities to offer exclusive deals and rewards. Our platform allows users to earn and redeem points for various medical services and products. Access doctors, clinics, and more with our seamless booking and reward system. We aim to make healthcare accessible and affordable for everyone. Our services include discounts on consultations, medical tests, and more. AEROGENIE enhances your healthcare experience by providing curated medical services. Dive into a world of health and wellness with AEROGENIE, where healthcare meets convenience."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;

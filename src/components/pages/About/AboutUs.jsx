import React from "react";
import About from "../../assets/aboutimage.png";
// import OurServices from "../OurServices/OurServices";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="container mt-5 p-1">
      <motion.h1
        className="text-center mt-5 fw-bold"
        style={{ color: "rgba(78, 66, 80, 1)" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h1>
      <motion.img
        src={About}
        alt="About Us"
        className="w-100 "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{borderRadius:"10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}
      />
      <div className="container mt-5 text-center">
        <motion.p
          className="mx-2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Welcome to AEROGENIE, your all-in-one platform for essential services
          in healthcare, education, finance, and entertainment. Our mission is
          to empower communities by making these services easily accessible and
          user-friendly.
        </motion.p>
        <motion.p
          className="mx-2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          AEROGENIE, part of AERO BEE STAR GLOBAL SOLUTIONS INDIA PRIVATE
          LIMITED, is dedicated to improving lives by bridging gaps in essential
          services. Our passionate team works tirelessly to bring you innovative
          solutions that simplify everyday life.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutUs;

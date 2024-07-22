import React from "react";
import Navbar from "../../Navbar/Navbar";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <>
      <div>
        <div className="container py-5">
          <div className="p-2">
            <motion.h1
              className="text-center mt-5 fw-bold"
              style={{ color: "rgba(78, 66, 80, 1)" }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Our Mission
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              At AEROGENIE, our mission is to empower individuals and
              communities by providing seamless access to essential services in
              healthcare, education, finance, and entertainment. We are
              dedicated to creating user-friendly solutions that simplify daily
              life and promote equality. By bridging the gaps in these vital
              areas, we aim to foster healthier, more educated, financially
              secure, and enriched lives for everyone.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Our dedicated team leverages technology and innovative approaches
              to ensure that these services are accessible, affordable, and
              efficient. We believe that enhancing access to these fundamental
              services drives positive change and creates a more inclusive
              society where everyone has the opportunity to thrive and reach
              their full potential.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Join us in our mission to transform lives, promote equality, and
              build a brighter future for all. Together, we can make a lasting
              impact and create a world where access to essential services is a
              right, not a privilege.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;

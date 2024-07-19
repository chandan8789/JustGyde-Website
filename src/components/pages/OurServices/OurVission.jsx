import React from "react";
import Navbar from "../../Navbar/Navbar";
import { motion } from "framer-motion";

const OurVision = () => {
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
              Our Vision
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              At Just Gyde, our vision is to create a world where access to
              essential services in healthcare, education, finance, and
              entertainment is seamless, universal, and equitable. We envision a
              future where individuals and communities are empowered through
              user-friendly solutions that simplify daily life and promote
              equality.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              We strive to bridge the gaps in these vital areas, fostering
              healthier, more educated, financially secure, and enriched lives
              for everyone. Our dedicated team leverages technology and
              innovative approaches to ensure these services are not only
              accessible but also affordable and efficient.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              We believe that enhancing access to these fundamental services
              will drive positive change and contribute to a more inclusive
              society. Our vision is to build a world where everyone has the
              opportunity to thrive and reach their full potential.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Join us in our vision to transform lives, promote equality, and
              create a brighter future for all. Together, we can make a lasting
              impact and ensure that access to essential services becomes a
              right, not a privilege.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurVision;

import React from "react";
import { motion } from "framer-motion";

import EcommerImage from "../../assets/ecommerce.jpg";

const Ecommerce = () => {
  return (
    <div className="container">
      <motion.div
        className="row align-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="col-md-5">
          <motion.img
            src={EcommerImage}
            alt="Ecommerce"
            className="w-100"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="col-md-7">
          <motion.div
            className="mt-3 p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="fw-bold" style={{ color: "rgba(78, 66, 80, 1)" }}>
              E-Commerce Service
            </h1>
            <p className="mt-4">
              Just Gyde is a versatile platform that caters to a wide range of
              services, including a robust E-commerce service dedicated to the
              sale of Fast-Moving Consumer Goods (FMCG). Our E-commerce service
              is designed to provide customers with a seamless and convenient
              shopping experience, offering a diverse array of high-quality FMCG
              products at competitive prices.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Ecommerce;

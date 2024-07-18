import React from "react";
import EcommerImage from "../../assets/ecommerce.jpg";

const Ecommerce = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-5">
          <img src={EcommerImage} alt="Ecommerce" className="w-100" />
        </div>
        <div className="col-md-7">
          <div className="mt-3 p-3">
            <h1 className="fw-bold" style={{ color: "rgba(78, 66, 80, 1)" }}>
              E-Commerce Service
            </h1>
            <p className="lead mt-4">
              Just Gyde is a versatile platform that caters to a wide range of
              services, including a robust E-commerce service dedicated to the
              sale of Fast-Moving Consumer Goods (FMCG). Our E-commerce service
              is designed to provide customers with a seamless and convenient
              shopping experience, offering a diverse array of high-quality FMCG
              products at competitive prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;

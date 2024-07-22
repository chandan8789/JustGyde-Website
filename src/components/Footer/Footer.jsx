import React from "react";
import logo from "../assets/justgydelogo.png";
import face from "../assets/Facebook.png";
import insta from "../assets/Instagram.png";
import link from "../assets/LinkedIn.png";
import Twit from "../assets/Twitter.png";
import you from "../assets/YouTube.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #000066, #1f3b90)",
        padding: "10px",
      }}
    >
      <div className="container mt-5">
        <div className="row">
          <motion.div
            className="col-md-3 mb-6 mb-md-0 mb-3"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* <img
              style={{
                height: "60px",
                width: "160px",
                objectFit: "contain",
              }}
              src={logo}
              alt="JustGyde Logo"
            /> */}
            <h1 className="fw-bold text-white">AEROGENIE</h1>
            <p className="mb-4 text-white">
              Dependable solutions, tailored to your needs, ensuring quality and
              consistency. Exceptional support, exceeding expectations with
              personalized and attentive care.{" "}
            </p>
            <div className="d-flex gap-3">
              <Link href="#" className="me-2">
                <img
                  src={face}
                  alt=""
                  style={{ height: "20px", width: "15px" }}
                />
              </Link>

              <a
                href="https://www.instagram.com/justgyde/"
                className="me-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={insta}
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
              </a>

              <a
                href="https://youtube.com/@justgyde?si=L-Orlf7SeBqMetqD"
                className="me-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={you}
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="col-md-3 mb-6 mb-md-0 mt-2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="font-weight-bold mb-4 text-white">Company</h3>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/refund-policy"
                  className="text-white text-decoration-none"
                >
                  Refund Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-white text-decoration-none"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-white text-decoration-none">
                  Reviews
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="col-md-3 mb-6 mb-md-0 mt-2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="font-weight-bold mb-4 text-white">Support</h3>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-white text-decoration-none"
                >
                  Terms and Condition
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-white text-decoration-none"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white text-decoration-none">
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="col-md-3 mt-2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="font-weight-bold mb-4 text-white">Contact Us</h3>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2 text-white gap-2">
                <i className="bi bi-envelope" />
                <a href="mailto:justgyde@gmail.com" className="text-white">
                  {" "}
                  justgyde@gmail.com
                </a>
              </li>

              <li className="d-flex text-white mt-4">
                <br />
                <i className="bi bi-geo-alt" />
                <span style={{ marginLeft: "5px" }}>
                  Forum DLF Cyber City, Phase III, DLF QE, Sector 24, Gurugram,
                  Haryana, 122002
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="container mt-8 border-top border-light pt-4 text-center small mt-5">
        <motion.p
          className="text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          All Rights Reserved |{" "}
          <Link
            to="/terms-and-conditions"
            className="text-white text-decoration-none"
          >
            Terms and Conditions
          </Link>{" "}
          |{" "}
          <Link
            to="/privacy-policy"
            className="text-white text-decoration-none"
          >
            Privacy Policy
          </Link>
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;

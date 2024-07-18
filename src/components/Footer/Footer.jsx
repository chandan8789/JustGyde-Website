import React from "react";
import logo from "../assets/justgydelogo.png";
import face from "../assets/Facebook.png";
import insta from "../assets/Instagram.png";
import link from "../assets/LinkedIn.png";
import Twit from "../assets/Twitter.png";
import you from "../assets/YouTube.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "rgba(78, 66, 80, 1)", padding: "10px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-6 mb-md-0 mb-3">
            <img
              style={{
                height: "60px",
                width: "160px",
                objectFit: "contain",
              }}
              src={logo}
              alt="JustGyde Logo"
            />
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
          </div>
          <div className="col-md-3 mb-6 mb-md-0 mt-2">
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
          </div>
          <div className="col-md-3 mb-6 mb-md-0 mt-2">
            <h3 className="font-weight-bold mb-4 text-white">Supports</h3>
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
          </div>
          <div className="col-md-3 mt-2">
            <h3 className="font-weight-bold mb-4 text-white">Contacts Us</h3>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2 text-white gap-2">
                <i class="bi bi-envelope" />
                <a href="mailto:justgyde@gmail.com" className="text-white">
                  {" "}
                  justgyde@gmail.com
                </a>
              </li>
              {/* <li className="d-flex align-items-center mb-2 text-white gap-2">
                <i class="bi bi-telephone" />
                (414) 687 - 5892
              </li> */}
              <li className="d-flex align-items-center text-white gap-2">
                <i class="bi bi-geo-alt" />
                Forum DLF Cyber City, Phase III, DLF QE, Sector 24, Gurugram,
                Haryana, 122002
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-8 border-top border-light pt-4 text-center small mt-5">
        <p className="text-white">
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
        </p>
      </div>
    </div>
  );
};

export default Footer;

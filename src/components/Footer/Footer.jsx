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
    <div style={{ backgroundColor: "rgba(78, 66, 80, 1)", padding: "50px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-6 mb-md-0 mb-3">
            <img
              style={{
                height: "60px",
                width: "170px",
                objectFit: "contain",
              }}
              src={logo}
              alt="JustGyde Logo"
            />
            <p className="mb-4 text-white">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            </p>
            <div className="d-flex gap-3">
              <Link href="#" className="me-2">
                <img
                  src={face}
                  alt=""
                  style={{ height: "20px", width: "15px" }}
                />
              </Link>
              <Link href="#" className="me-2">
                <img
                  src={Twit}
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
              </Link>
              <Link href="#" className="me-2">
                <img
                  src={insta}
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
              </Link>
              <Link href="#" className="me-2">
                <img
                  src={link}
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
              </Link>
              <Link href="#">
                <img
                  src={you}
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
              </Link>
            </div>
          </div>
          <div className="col-md-3 mb-6 mb-md-0 mt-2">
            <h3 className="font-weight-bold mb-4 text-white">Company</h3>
            <ul className="list-unstyled">
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-6 mb-md-0 mt-2">
            <h3 className="font-weight-bold mb-4 text-white">Support</h3>
            <ul className="list-unstyled">
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Getting started
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Help center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Server status
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Report a bug
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mt-2">
            <h3 className="font-weight-bold mb-4 text-white">Contacts Us</h3>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2 text-white gap-2">
                <i class="bi bi-envelope" />
                contact@Justgyde.com 
              </li>
              {/* <li className="d-flex align-items-center mb-2 text-white gap-2">
                <i class="bi bi-telephone" />
                (414) 687 - 5892
              </li> */}
              <li className="d-flex align-items-center text-white gap-2">
                <i class="bi bi-geo-alt" />
                Forum DLF Cyber City, Phase III, DLF QE, Sector 24, Gurugram, Haryana, 122002

              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-8 border-top border-light pt-4 text-center small mt-5">
        <p className="text-white">
          All Rights Reserved |{" "}
          <Link href="#" className="text-white text-decoration-none">
            Terms and Conditions
          </Link>{" "}
          |{" "}
          <Link href="#" className="text-white text-decoration-none">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;

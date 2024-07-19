import React, { useState } from "react";
import JustGydeLogo from "../assets/justgydelogo.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [useOverlay, setUseOverlay] = useState(false);
  const navigate = useNavigate();

  const onOverlay = () => {
    setUseOverlay(!useOverlay);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setUseOverlay(false);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{
          background: "linear-gradient(to right, #000066, #1f3b90)",
          top: 0,
          left: 0,
          right: 0,
          padding: "15px",
          paddingLeft: "15px",
        }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="">
            <img
              src={JustGydeLogo}
              alt=""
              style={{ width: "150px", objectFit: "contain" }}
            />
          </Link>
          <button
            className="btn navbar-toggler border-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            onClick={onOverlay}
            aria-label="Close"
          >
            <i className="bi bi-justify text-white"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item me-3">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link text-white" to="/our-mission">
                  Our Mission
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link text-white" to="/our-vission">
                  Our Vision
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link text-white" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link text-white" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link text-white" to="/reviews">
                  Reviews
                </Link>
              </li>
              {/* <li className="nav-item me-3">
                <Link className="nav-link text-white" to="/refund-policy">
                  Refund Policy
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* offcanvas */}
      <div
        className="offcanvas offcanvas-start bg-secondary"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <img
            src={JustGydeLogo}
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item me-3">
              <Link
                className="nav-link text-white"
                to="/"
                onClick={() => handleNavigation("/")}
                data-bs-dismiss="offcanvas"
              >
                Home
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link
                className="nav-link text-white"
                to="/our-mission"
                onClick={() => handleNavigation("/our-mission")}
                data-bs-dismiss="offcanvas"
              >
                Our Mission
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link
                className="nav-link text-white"
                to="/our-vission"
                onClick={() => handleNavigation("/our-vission")}
                data-bs-dismiss="offcanvas"
              >
                Our Vision
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link
                className="nav-link text-white"
                to="/about"
                onClick={() => handleNavigation("/about")}
                data-bs-dismiss="offcanvas"
              >
                About
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link
                className="nav-link text-white"
                to="/services"
                onClick={() => handleNavigation("/services")}
                data-bs-dismiss="offcanvas"
              >
                Services
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link
                className="nav-link text-white"
                to="/reviews"
                onClick={() => handleNavigation("/reviews")}
                data-bs-dismiss="offcanvas"
              >
                Reviews
              </Link>
            </li>
            {/* <li className="nav-item me-3">
              <Link
                className="nav-link"
                to="/refund-policy"
                onClick={() => handleNavigation("/refund-policy")}
                data-bs-dismiss="offcanvas"
              >
                Refund Policy
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

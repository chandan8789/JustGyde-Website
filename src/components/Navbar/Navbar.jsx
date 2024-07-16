import React, { useState } from "react";
import JustGydeLogo from "../assets/justgydelogo.png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [useOverlay, setUseOverlay] = useState(false);

  const onOverlay = () => {
    setUseOverlay(!useOverlay);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{
          background: "rgba(78, 66, 80, 1)",
          // position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: "10px",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={JustGydeLogo}
              alt=""
              style={{ width: "150px", objectFit: "contain" }}
            />
          </a>
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
              <li className="nav-item me-3">
                <Link className="nav-link text-white" to="/refund-policy">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* offcanvas */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h1 className="offcanvas-title fw-bold" id="offcanvasExampleLabel">
            JUSTGYDE
          </h1>
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
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link" to="/our-mission">
                Our Mission
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link" to="/our-vission">
                Our Vision
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link" to="/reviews">
                Reviews
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link" to="/refund-policy">
                Refund Policy
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

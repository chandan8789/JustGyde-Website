import React from "react";
import JustGydeLogo from "../assets/justgydelogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background:
          "linear-gradient(244.3deg, #000066 33.75%, #0000CC 109.08%)",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand mx-5" href="#">
          <img
            style={{
              height: "60px",
              width: "170px",
              objectFit: "contain",
            }}
            src={JustGydeLogo}
            alt="JustGyde Logo"
          />
        </Link>
        <button
          className="navbar-toggler border border-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav mx-5">
            <li className="nav-item me-5">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link text-white" href="#">
                About Us
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link text-white" href="#">
                Services
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link text-white" href="#">
                Reviews
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link text-white" href="#">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

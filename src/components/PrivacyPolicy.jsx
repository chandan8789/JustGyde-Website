import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="container py-5">
        <h2
          className="text-center mt-5 fw-bold"
          style={{ color: "rgba(78, 66, 80, 1)" }}
        >
          Privacy Policy
        </h2>{" "}
        <div>
          <h2 className="fw-bold" style={{ color: "rgba(78, 66, 80, 1)" }}>
            1. Introduction
          </h2>
          <p>
            This Privacy Policy explains how we collect, use, and disclose
            personal information when you use our software service.
          </p>
        </div>
        <div>
          <h2 className="fw-bold" style={{ color: "rgba(78, 66, 80, 1)" }}>
            2. Information We Collect
          </h2>
          <p>
            We collect various types of information for different purposes to
            provide and improve our service to you.
          </p>
        </div>
        <div>
          <h2 className="fw-bold" style={{ color: "rgba(78, 66, 80, 1)" }}>
            2.1 Personal Information
          </h2>
          <p>
            We may ask you to provide certain personally identifiable
            information that can be used to contact or identify you. This may
            include:
          </p>

          <p>Contact Information (e.g., email address)</p>
          <p>Usage Data (e.g., how you use the service)</p>
          <p>
            Cookies and Usage Data (please refer to our Cookie Policy for more
            details)
          </p>
        </div>
        <div>
          <h2 className="fw-bold" style={{ color: "rgba(78, 66, 80, 1)" }}>
            2.2 Usage Data
          </h2>
          <p>We may also collect information on how</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

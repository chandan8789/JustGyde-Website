import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="container py-5 p-4">
        <h2
          className="text-center mt-5 fw-bold"
          style={{ color: "rgba(78, 66, 80, 1)" }}
        >
          Privacy Policy
        </h2>{" "}
        <div>
          <h4 className="fw-bold" style={{ color: "rgba(78, 66, 80, 1)" }}>
            1. Introduction
          </h4>
          <p className="mx-4">
            This Privacy Policy explains how we collect, use, and disclose your
            information when you use our app. By using AEROGENIE, you agree to
            the collection and use of your information as described in this
            policy.
          </p>
        </div>
        <div>
          <h4 className="fw-bold" style={{ color: "rgba(78, 66, 80, 1)" }}>
            2. Information We Collect
          </h4>
          <p className="mx-4 m-1">
            <strong>Personal Data:</strong> We may collect your email address,
            name, phone number, and address to provide and improve our services.
          </p>
          <p className="mx-4 m-1">
            <strong>Usage Data:</strong> We automatically collect data such as
            IP address, browser type, and pages visited to analyze and improve
            our service.
          </p>
          <p className="mx-4 m-1">
            <strong>Mobile Data:</strong> When using our app, we may collect
            information like your mobile device ID, IP address, and operating
            system.
          </p>
          <p className="mx-4 m-1">
            <strong>Location and Media:</strong> With your permission, we may
            access your location and media files to enhance app features.
          </p>
        </div>
        <div>
          <h4 className="fw-bold" style={{ color: "rgba(78, 66, 80, 1)" }}>
            Cookies and Tracking
          </h4>
          <p className="mx-4 m-1">
            We use cookies and similar technologies to track activity and store
            information. You can control cookie settings through your browser.
          </p>
        </div>
        <div>
          <h4 className="fw-bold" style={{ color: "rgba(78, 66, 80, 1)" }}>
            Data Usage
          </h4>
          <p className="mx-4 m-1">We use your data to:</p>
          <ul>
            <li>Provide and maintain our service</li>
            <li>Manage your account</li>
            <li>Contact you with updates and offers</li>
            <li>Analyze usage for improvement</li>
          </ul>
        </div>
        <div>
          <h4 className="fw-bold" style={{ color: "rgba(78, 66, 80, 1)" }}>
            Data Sharing
          </h4>
          <p className="mx-4 m-1">We may share your data with:</p>
          <ul>
            <li>Service providers</li>
            <li>Affiliates</li>
            <li>Business partners</li>
            <li>In case of business transfers</li>
            <li>With your consent</li>
          </ul>
        </div>
        <div>
          <h4 className="fw-bold" style={{ color: "rgba(78, 66, 80, 1)" }}>
            Data Retention
          </h4>
          <p className="mx-4 m-1">
            We retain your data as long as necessary to provide services and
            comply with legal obligations.
          </p>
        </div>
        <div>
          <h4 className="fw-bold" style={{ color: "rgba(78, 66, 80, 1)" }}>
            Data Security
          </h4>
          <p className="mx-4 m-1">
            We prioritize the security of your data but cannot guarantee 100%
            security due to the nature of the internet.
          </p>
        </div>
        <div>
          <h4 className="fw-bold" style={{ color: "rgba(78, 66, 80, 1)" }}>
            Children's Privacy
          </h4>
          <p className="mx-4 m-1">
            We do not collect information from anyone under 13. If we discover
            such data, we will delete it promptly.
          </p>
        </div>
        <div>
          <h4 className="fw-bold" style={{ color: "rgba(78, 66, 80, 1)" }}>
            Changes to This Policy
          </h4>
          <p className="mx-4 m-1">
            We may update this policy and will notify you via email or app
            notice. Please review the policy periodically.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

import React from "react";

const RefundPolicy = () => {
  return (
    <div className="container py-5 p-3">
      <h1
        className="text-center mt-5 fw-bold"
        style={{ color: "rgba(78, 66, 80, 1)" }}
      >
        Refund Policy
      </h1>
      <p>
        At AEROGENIE, we are committed to providing our customers with the best
        experience possible. However, we understand that there may be
        circumstances where you may need a refund. This Refund Policy outlines
        the conditions under which refunds are issued.
      </p>

      <div>
        <h4 className="fw-bold">1. Eligibility for Refunds</h4>
        <p className="mx-4 mt-1">
          You may be eligible for a refund under the following conditions:
        </p>
        <p className="m-1 mx-4">
          <strong>Service Not Delivered:</strong> If a service you purchased was
          not delivered within the specified time frame.
        </p>

        <p className="m-1 mx-4">
          <strong>Defective Service:</strong> If the service delivered is not as
          described or is defective.
        </p>
        <p className="m-1 mx-4">
          <strong>Cancellation:</strong> If you cancel a service before it has
          been initiated or within the allowed cancellation period.
        </p>
      </div>

      <div className="mt-4">
        <h4 className="fw-bold">2. Non-Refundable Conditions</h4>
        <p className="mx-4 mt-1">
          Refunds will not be issued in the following scenarios:
        </p>
        <p className="m-1 mx-4">
          <strong>Change of Mind:</strong> If you simply change your mind after
          purchasing a service.
        </p>

        <p className="m-1 mx-4">
          <strong>Partial Usage:</strong>If you have partially used a service
          and then decide to cancel.
        </p>
        <p className="m-1 mx-4">
          <strong>Outside Refund Period:</strong> If the request for a refund is
          made after the allowed period.
        </p>
      </div>

      <div className="mt-4">
        <h4 className="fw-bold">3. Refund Request Process</h4>
        <p className="mx-4 mt-1">
          To request a refund, please follow these steps:
        </p>
        <p className="m-1 mx-4">
          <strong>Contact Customer Support:</strong> Email us at
          <a href="mailto:AEROGENIE@gmail.com"> AEROGENIE@gmail.com</a>
        </p>

        <p className="m-1 mx-4">
          <strong>Provide Necessary Information:</strong>Include your order
          number, details of the service purchased, and the reason for the
          refund request.
        </p>
        <p className="m-1 mx-4">
          <strong>Review Process:</strong> Our team will review your request and
          respond within 3-4 business days.
        </p>
      </div>

      <div className="mt-4">
        <h4 className="fw-bold">4. Refund Method</h4>
        <p className="mx-4 mt-1">
          Refunds will be processed using the original payment method. Depending
          on your payment provider, it may take 3-4 working days for the refund
          to appear in your account.
        </p>

        <h4 className="fw-bold">5. Disputes</h4>
        <p className="mx-4 mt-1">
          If you disagree with the outcome of your refund request, you can
          escalate the matter by contacting our customer service manager at
          <a href="mailto:AEROGENIE@gmail.com"> AEROGENIE@gmail.com</a>
        </p>

        <h4 className="fw-bold">6. Changes to This Policy</h4>
        <p className="mx-4 mt-1">
          AEROGENIE reserves the right to modify this Refund Policy at any time.
          Any changes will be posted on this page with an updated effective
          date.
        </p>

        <h4 className="fw-bold">7. Contact Information</h4>
        <p className="mx-4 mt-1">
          For any questions or concerns about this Refund Policy, please contact
          us at:
        </p>
        <p className="mt-1 mx-4">
          <strong>Email:</strong>{" "}
          <a href="mailto:AEROGENIE@gmail.com"> AEROGENIE@gmail.com</a>
        </p>
        <p className="m-1 mx-4">
          <strong>Address:</strong> Forum DLF Cyber City, Phase III, Sector 24,
          DLF QE, Gurgaon, Haryana, India, 122002
        </p>

        <p className="mt-4 mx-4">
          By using our services, you acknowledge that you have read and agree to
          our Refund Policy.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;

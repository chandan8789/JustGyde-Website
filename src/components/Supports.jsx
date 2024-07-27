import React from "react";

const Supports = () => {
  return (
    <div className="container py-5">
      <h1
        className="text-center mt-5 fw-bold"
        style={{ color: "rgba(78, 66, 80, 1)" }}
      >
        Frequently Ask Questions
      </h1>
      <div class="accordion mt-4" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How do I create an account?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                To create an account, click on the "Sign Up" button which is
                right below the login button in the just App.
              </p>
            </div>
          </div>
        </div>
        {/* <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Can I change my password?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                Yes, you can change your password by visiting the "Account
                Settings" section after logging in Just Gyde.
              </p>
            </div>
          </div>
        </div> */}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How do I contact customer support?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                You can contact our customer support team by emailing
                <a href="mailto:info@aerogenie.co"> info@aerogenie.co</a>
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Do you offer refunds?
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                Refund policies vary depending on the product or service. Please
                refer to our refund policy page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supports;

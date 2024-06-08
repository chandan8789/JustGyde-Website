import React from "react";
import About from "../../assets/Aboutus.png";

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-center fw-bold mt-4">About Us</h1>
      <img src={About} alt="About Us" className="w-100 mt-4" />
      <div className="container mt-5 text-center">
        <p style={{ color: " rgba(0, 0, 102, 1)" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p style={{ color: " rgba(0, 0, 102, 1)" }}>
          Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.
          Vitae et leo duis ut diam quam nulla. Commodo ullamcorper a lacus
          vestibulum sed arcu. Amet dictum sit amet justo. Ante in nibh mauris
          cursus mattis. Fermentum leo vel orci porta. Mauris a diam maecenas
          sed enim. Lacinia at quis risus sed vulputate odio. Volutpat blandit
          aliquam etiam erat velit. Elit ut aliquam purus sit amet luctus. Id
          diam vel quam elementum pulvinar etiam non quam lacus. Aliquam
          malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Quam
          vulputate dignissim suspendisse in est ante in nibh mauris. Non
          blandit massa enim nec dui nunc mattis. Quis enim lobortis scelerisque
          fermentum dui faucibus in ornare. Nec tincidunt praesent semper
          feugiat nibh sed pulvinar proin. Lacus luctus accumsan tortor posuere
          ac ut consequat semper.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

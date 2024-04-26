import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Your feet deserve the best and we're here to help you with our shoes.
          Your feet deserve the best and we're here to help you with our shoes
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secodary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Available Now</p>
          <div className="brand-icons">
            <img src="/src/assets/amazon.png" alt="amazon-logo" />
            <img src="/src/assets/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/src/assets/shoe_image.png" />
      </div>
    </main>
  );
};

export default HeroSection;

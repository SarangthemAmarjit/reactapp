// components/HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="hero-content">
              <h1 style={{ color: "#186411ff", fontFamily: "-moz-initial" }}>
                You are using free lite version of SaaSIntro
              </h1>
              <p>
                Please, purchase full version of the template to get all
                sections, elements and permission to remove footer credits.
              </p>
              <a href="#0" className="main-btn btn-hover">
                Buy Now
              </a>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="hero-image text-center text-lg-end">
              <img src="assets/images/hero/hero-image.svg" alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

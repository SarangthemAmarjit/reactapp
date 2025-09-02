// components/CtaSection.tsx
import React from "react";

const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="cta-section pt-130 pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-10">
            <div className="cta-content-wrapper">
              <div className="section-title">
                <h2 className="mb-20">
                  Quick & Easy to <br className="d-none d-lg-block" /> Use
                  Bootstrap Template
                </h2>
                <p className="mb-30">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  dinonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergre.
                </p>
                <a href="#0" className="main-btn btn-hover border-btn">
                  Try it Free
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cta-image text-lg-end">
              <img src="assets/images/cta/cta-image.svg" alt="CTA" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

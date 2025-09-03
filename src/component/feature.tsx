// components/FeatureSection.tsx
import React from "react";

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const FeatureSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: "lni lni-display",
      title: "SaaS Focused",
      description:
        "Lorem ipsum dolor amet, consetetur sadipscing elitr, diam nonu eirmod tem invidunt.",
    },
    {
      id: 2,
      icon: "lni lni-compass",
      title: "Awesome Design",
      description:
        "Lorem ipsum dolor amet, consetetur sadipscing elitr, diam nonu eirmod tem invidunt.",
    },
    {
      id: 3,
      icon: "lni lni-grid-alt",
      title: "Ready to Use",
      description:
        "Lorem ipsum dolor amet, consetetur sadipscing elitr, diam nonu eirmod tem invidunt.",
    },
    {
      id: 4,
      icon: "lni lni-layers",
      title: "Essential Sections",
      description:
        "Lorem ipsum dolor amet, consetetur sadipscing elitr, diam nonu eirmod tem invidunt.",
    },
  ];

  return (
    <section id="features" className="feature-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-10">
            <div className="section-title mb-60">
              <h2 className="mb-20">Modern design with Essential Features</h2>
              <p style={{ color: "#6c757d" }}>
                Lorem ipsum dolor amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod te invidunt, Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row">
              {features.map((feature) => (
                <div key={feature.id} className="col-lg-6 col-md-6">
                  <div className="single-feature">
                    {/* Icon + Title Row */}
                    {/* Icon + Title Row */}
                    <div className="d-flex justify-content-center align-items-center gap-4 me-4">
                      <div className="feature-icon">
                        <i className={feature.icon}></i>
                      </div>
                      <h4 style={{ color: "#144e01ff" }} className="mb-0 d-flex align-items-center">{feature.title}</h4>
                    </div>
                    {/* Description below */}
                    <div className="feature-content">
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

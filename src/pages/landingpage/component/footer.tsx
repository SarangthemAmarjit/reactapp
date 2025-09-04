// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer pt-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
            <div className="footer-widget">
              <div className="logo">
                <a href="index.html">
                  {" "}
                  <img src="assets/images/logo/logo.svg" alt="logo" />{" "}
                </a>
              </div>
              <p className="desc">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                dinonumy eirmod tempor invidunt.
              </p>
              <ul className="social-links">
                <li>
                  <a href="#0">
                    <i className="lni lni-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="lni lni-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="lni lni-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="lni lni-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 offset-xl-1">
            <div className="footer-widget">
              <h3>About Us</h3>
              <ul className="links">
                <li>
                  <a href="#0">Home</a>
                </li>
                <li>
                  <a href="#0">About</a>
                </li>
                <li>
                  <a href="#0">Features</a>
                </li>
                <li>
                  <a href="#0">Pricing</a>
                </li>
                <li>
                  <a href="#0">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
            <div className="footer-widget">
              <h3>Services</h3>
              <ul className="links">
                <li>
                  <a href="#0">SaaS Focused</a>
                </li>
                <li>
                  <a href="#0">Awesome Design</a>
                </li>
                <li>
                  <a href="#0">Ready to Use</a>
                </li>
                <li>
                  <a href="#0">Essential Selection</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-widget">
              <h3>Subscribe Newsletter</h3>
              <form action="#">
                <input type="email" placeholder="Email" />
                <button className="main-btn btn-hover">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

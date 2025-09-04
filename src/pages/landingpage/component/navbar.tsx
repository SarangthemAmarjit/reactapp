// components/Navbar.tsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


interface NavItem {
  id: number;
  label: string;
  href: string;
  isRoute?: boolean;
}
function scrollToSection(id: string) {
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
}
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedid, setselectedid] = useState(1);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { id: 1, label: "Home", href: "#home" },
    { id: 2, label: "About", href: "#about" },
    { id: 3, label: "Features", href: "#features" },
    { id: 4, label: "CTA", href: "#cta" },
    { id: 5, label: "Todo", href: "/todo", isRoute: true },
  ];

  function handleNavClick(item: NavItem) {
    setselectedid(item.id);
    setIsMenuOpen(false);

    if (item.isRoute) {
      scrollToTop();
      // Navigate normally
      navigate(item.href);

    } else {
      if (location.pathname !== "/") {
        // 👈 Go to home first, then scroll after navigation
        navigate("/", { replace: false });
        setTimeout(() => scrollToSection(item.href), 100);
      } else {
        // Already on home → just scroll
        scrollToSection(item.href);
      }
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div
        className="navbar-area"
        style={{ backgroundColor: "rgba(243, 250, 250, 0.8)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-14">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">
                  <img src="assets/images/logo/logo.svg" alt="Logo" />
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleMenu}
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div
                  className={`collapse navbar-collapse sub-menu-bar ${isMenuOpen ? "show" : ""
                    }`}
                  id="navbarSupportedContent"
                >
                  <div className="ms-auto">
                    <ul id="nav" className="navbar-nav ms-auto">
                      {navItems.map((item) => (
                        <li
                          key={item.id}
                          className={`nav-item ${selectedid === item.id ? "active-nav" : ""
                            }`}
                        >
                          <button
                            className={`page-scroll${selectedid === item.id ? " active" : ""
                              }`}
                            onClick={() => handleNavClick(item)}
                            style={
                              selectedid === item.id
                                ? {
                                  borderRadius: "5px",
                                  color: "#392303ff",

                                  backgroundColor: "#dceaa6ff",
                                }
                                : {}
                            }
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="header-btn">
                  <a href="#0" className="main-btn btn-hover">
                    Download
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

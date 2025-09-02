// components/ScrollTop.tsx
import React, { useEffect, useState } from "react";

const ScrollTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#"
      className={`scroll-top btn-hover ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <i className="lni lni-chevron-up"></i>
    </a>
  );
};

export default ScrollTop;

// components/Preloader.tsx
import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="preloader">
      <div className="loader">
        <div className="spinner">
          <div className="spinner-container">
            <div className="spinner-rotator">
              <div className="spinner-left">
                <div className="spinner-circle"></div>
              </div>
              <div className="spinner-right">
                <div className="spinner-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

import React from "react";
import "./LoadingScreen.scss";

const LoadingScreen = () => {
  return (
    <div className="portfolio-loader" role="status" aria-label="Loading page">
      <div className="portfolio-loader__content">
        <div className="portfolio-loader__symbol">
          <span className="portfolio-loader__ring" />
          <span className="portfolio-loader__dot" />
        </div>

        <p className="portfolio-loader__title">
          Loading<span className="portfolio-loader__ellipsis">...</span>
        </p>

        <p className="portfolio-loader__subtitle">Preparing your experience</p>

        <span className="portfolio-loader__progress">
          <span />
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;

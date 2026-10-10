import React from "react";
import { Tooltip } from "react-tooltip";
import Button from "react-bootstrap/Button";
import { useTheme } from "../Themes/ThemeProvider";
import {
  LINKED_IN,
  GITHUB,
  INSTAGRAM,
  YOUTUBE,
  EMAIL,
} from "../constants/urlConstants";
import "./PortfolioFooter.scss";

const PortfolioFooter = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    // Standard document scrolling.
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.body.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // Also handle apps that scroll inside a wrapper with overflow-y: auto/scroll.
    let parent = document.getElementById("FooterContainer")?.parentElement;

    while (parent && parent !== document.body && parent !== document.documentElement) {
      const styles = window.getComputedStyle(parent);
      const canScroll =
        /(auto|scroll|overlay)/.test(styles.overflowY) &&
        parent.scrollHeight > parent.clientHeight;

      if (canScroll) {
        parent.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }

      parent = parent.parentElement;
    }
  };

  return (
    <footer
      id="FooterContainer"
      className="portfolio-footer"
      data-theme={isDarkMode ? "dark" : "light"}
    >
      <div className="footer-glow footer-glow-teal" aria-hidden="true" />
      <div className="footer-glow footer-glow-blue" aria-hidden="true" />

      <div className="footer-main">
        <a className="footer-name" href="#home">
          Farhan Mahmood
        </a>

        <span className="footer-name-underline" aria-hidden="true" />

        <nav className="footer-socials" aria-label="Social media links">
          <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fab fa-youtube" aria-hidden="true" />
          </a>
          <a href={LINKED_IN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in" aria-hidden="true" />
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram" aria-hidden="true" />
          </a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github" aria-hidden="true" />
          </a>
          <a href={EMAIL} aria-label="Email">
            <i className="fas fa-envelope" aria-hidden="true" />
          </a>
        </nav>

        <p className="footer-tagline">
          Building ideas into meaningful digital experiences.
        </p>

        <p className="footer-copyright">
          © {currentYear} Farhan Mahmood. All rights reserved.
        </p>
      </div>

      <Button
        type="button"
        className="footer-back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
        data-tooltip-id="footer-tooltip"
        data-tooltip-content="Back to top"
        data-tooltip-place="left"
      >
        <i className="fas fa-arrow-up" aria-hidden="true" />
      </Button>

      <Tooltip id="footer-tooltip" />
    </footer>
  );
};

export default PortfolioFooter;

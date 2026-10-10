import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./PortfolioNavbar.scss";
import { useTheme } from "../Themes/ThemeProvider";

const PortfolioNavbar = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  const [activeNav, setActiveNav] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 20);

  const navbarRef = useRef(null);

  // Reveal navbar after scrolling; hide it again at the top.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the mobile menu when clicking outside.
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        expanded &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [expanded]);

  const handleNavClick = (section) => {
    setActiveNav(section);
    setExpanded(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();

    document.body.classList.toggle("light-mode", isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <Navbar
      ref={navbarRef}
      id="Nav"
      fixed="top"
      expand="md"
      variant="dark"
      expanded={expanded}
      onToggle={setExpanded}
      className={`animate-navbar nav-theme ${isScrolled ? "scrolled" : ""}`}
    >
      <Navbar.Brand href="#home" className="navbar-brand-custom">
        <span className="navbar-brand-mark">&lt;/&gt;</span>
        <span>
          Farhan<span className="navbar-brand-accent">.</span>
        </span>
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        aria-label="Toggle navigation"
      />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav id="NavbarElements">
          <Nav.Link
            href="#home"
            active={activeNav === "home"}
            onClick={() => handleNavClick("home")}
          >
            Home
          </Nav.Link>

          <Nav.Link
            href="#about"
            active={activeNav === "about"}
            onClick={() => handleNavClick("about")}
          >
            About
          </Nav.Link>

          <NavDropdown
            title="Skills"
            id="skills-dropdown"
            active={activeNav === "skills"}
          >
            <NavDropdown.Item
              href="#skills"
              onClick={() => handleNavClick("skills")}
            >
              IT Skills
            </NavDropdown.Item>

            <NavDropdown.Item
              href="#core-skills"
              onClick={() => handleNavClick("skills")}
            >
              ECE Expertise
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title="Projects"
            id="projects-dropdown"
            active={activeNav === "projects"}
          >
            <NavDropdown.Item
              href="#projects"
              onClick={() => handleNavClick("projects")}
            >
              IT Projects
            </NavDropdown.Item>

            <NavDropdown.Item
              href="#core-projects"
              onClick={() => handleNavClick("projects")}
            >
              ECE Projects
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link
            href="#Certificates"
            active={activeNav === "certifications"}
            onClick={() => handleNavClick("certifications")}
          >
            Certifications
          </Nav.Link>

          {/* <Nav.Link
            href="#contactLine"
            active={activeNav === "contact"}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </Nav.Link> */}
        </Nav>

        <a
          className="navbar-reach-out"
          href="#contactLine"
          onClick={() => handleNavClick("contact")}
        >
          Reach Out <span aria-hidden="true">↗</span>
        </a>
      </Navbar.Collapse>

      <div className="theme-switch-wrapper">
        <span className="theme-icon" aria-hidden="true">
          {isDarkMode ? "☾" : "☀"}
        </span>

        <label className="theme-switch">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={handleThemeToggle}
            aria-label="Toggle light and dark theme"
          />
          <span className="slider round" />
        </label>
      </div>
    </Navbar>
  );
};

export default PortfolioNavbar;

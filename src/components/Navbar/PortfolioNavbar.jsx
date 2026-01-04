import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Tooltip } from "react-tooltip";
import "./PortfolioNavbar.scss";
import { useTheme } from "../Themes/ThemeProvider";

const PortfolioNavbar = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  const [activeNav, setActiveNav] = useState("");
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  /* ===============================
     SCROLL EFFECT (ADD .scrolled)
  =============================== */
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("Nav");
      if (!nav) return;
      nav.classList.toggle("scrolled", window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===============================
     CLOSE NAVBAR ON OUTSIDE CLICK
  =============================== */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        expanded &&
        navbarRef.current &&
        !navbarRef.current.contains(e.target)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [expanded]);

  /* ===============================
     COMMON HANDLER
  =============================== */
  const handleNavClick = (section) => {
    setActiveNav(section);
    setExpanded(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
    document.body.classList.toggle("light-mode", !isDarkMode);
    document.body.classList.toggle("dark-mode", isDarkMode);
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
      className="animate-navbar nav-theme justify-content-between"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

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
              href="#it-skills"
              onClick={() => handleNavClick("skills")}
            >
              IT Skills
            </NavDropdown.Item>

            <NavDropdown.Item
              href="#core-skills"
              onClick={() => handleNavClick("skills")}
            >
              Core Skills
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title="Projects"
            id="projects-dropdown"
            active={activeNav === "projects"}
          >
            <NavDropdown.Item
              href="#it-projects"
              onClick={() => handleNavClick("projects")}
            >
              IT Projects
            </NavDropdown.Item>

            <NavDropdown.Item
              href="#core-projects"
              onClick={() => handleNavClick("projects")}
            >
              Core Projects
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link
            href="#Certificates"
            active={activeNav === "certifications"}
            onClick={() => handleNavClick("certifications")}
          >
            Certifications
          </Nav.Link>

          <Nav.Link
            href="#contactLine"
            active={activeNav === "contact"}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      {/* THEME SWITCH */}
      <div className="theme-switch-wrapper">
        <span>
          {isDarkMode ? (
            <i className="fas fa-moon" style={{ color: "white" }} />
          ) : (
            <i className="fas fa-sun" style={{ color: "white" }} />
          )}
        </span>
        <label className="theme-switch">
          <input type="checkbox" onChange={handleThemeToggle} />
          <div
            className="slider round"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={
              isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
          >
            <Tooltip id="my-tooltip" />
          </div>
        </label>
      </div>
    </Navbar>
  );
};

export default PortfolioNavbar;

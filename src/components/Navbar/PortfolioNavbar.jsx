import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Tooltip } from "react-tooltip";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./PortfolioNavbar.scss";
import { useTheme } from "../Themes/ThemeProvider";

const PortfolioNavbar = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  const [activeNav, setActiveNav] = React.useState("");

  function handleToggleTheme() {
    toggleTheme();
    document.body.classList.toggle("light-mode", !isDarkMode);
    document.body.classList.toggle("dark-mode", isDarkMode);
  }

  function handleScroll() {
    const navbar = document.getElementById("Nav");
    if (!navbar) return;

    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="md"
      variant="dark"
      className="animate-navbar nav-theme justify-content-between"
      id="Nav"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav id="NavbarElements">

          {/* -------- Home -------- */}
          <Nav.Link
            href="#home"
            className={activeNav === "home" ? "active" : ""}
            onClick={() => setActiveNav("home")}
          >
            Home
          </Nav.Link>

          {/* -------- About -------- */}
          <Nav.Link
            href="#about"
            className={activeNav === "about" ? "active" : ""}
            onClick={() => setActiveNav("about")}
          >
            About
          </Nav.Link>

          {/* -------- Skills Dropdown -------- */}
          <NavDropdown
            title="Skills"
            id="skills-dropdown"
            className={activeNav === "skills" ? "active" : ""}
          >
            <NavDropdown.Item
              href="#it-skills"
              onClick={() => setActiveNav("skills")}
            >
              IT Skills
            </NavDropdown.Item>

            <NavDropdown.Item
              href="#core-skills"
              onClick={() => setActiveNav("skills")}
            >
              Core Skills
            </NavDropdown.Item>
          </NavDropdown>

          {/* -------- Projects Dropdown -------- */}
          <NavDropdown
            title="Projects"
            id="projects-dropdown"
            className={activeNav === "projects" ? "active" : ""}
          >
            <NavDropdown.Item
              href="#it-projects"
              onClick={() => setActiveNav("projects")}
            >
              IT Projects
            </NavDropdown.Item>

            <NavDropdown.Item
              href="#core-projects"
              onClick={() => setActiveNav("projects")}
            >
              Core Projects
            </NavDropdown.Item>
          </NavDropdown>

          {/* -------- Certifications -------- */}
          <Nav.Link
            href="#Certificates"
            className={activeNav === "certifications" ? "active" : ""}
            onClick={() => setActiveNav("certifications")}
          >
            Certifications
          </Nav.Link>

          {/* -------- Contact -------- */}
          <Nav.Link
            href="#contactLine"
            className={activeNav === "contact" ? "active" : ""}
            onClick={() => setActiveNav("contact")}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      {/* -------- Theme Switch -------- */}
      <div className="theme-switch-wrapper">
        <span id="toggle-icon">
          {isDarkMode ? (
            <i className="fas fa-moon" style={{ color: "white" }} />
          ) : (
            <i className="fas fa-sun" style={{ color: "white" }} />
          )}
        </span>

        <label className="theme-switch">
          <input type="checkbox" onChange={handleToggleTheme} />
          <div
            className="slider round"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={
              isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
            data-tooltip-place="top"
          >
            <Tooltip id="my-tooltip" />
          </div>
        </label>
      </div>
    </Navbar>
  );
};

export default PortfolioNavbar;

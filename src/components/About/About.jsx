
import React from "react";
import Image from "../../assets/Images/About/about_image_1.png";
import Container from "react-bootstrap/Container";
import { useTheme } from "../Themes/ThemeProvider";
import { LINKED_IN, GITHUB } from "../constants/urlConstants";
import "./About.scss";

const technologies = [
  "Java",
  "Spring Boot",
  "React",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "LLMs",
  "RAG",
];

const PortfolioAbout = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="about"
      className={`about-section ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <Container>
        <div className="about-layout">
          {/* PROFILE IMAGE */}
          <div className="about-portrait-column">
            <div className="about-portrait-card">
              <img
                src={Image}
                alt="Farhan Mahmood"
                className="about-portrait"
                loading="lazy"
              />

              <div className="about-portrait-caption">
                <span className="about-status-dot" />
                Full-Stack Development · AI
              </div>
            </div>
          </div>

          {/* ABOUT CONTENT */}
          <div className="about-content">
            <span className="about-eyebrow">
              <span /> ABOUT ME
            </span>

            <h2 className="about-heading">
              Engineering meets
              <span> software.</span>
            </h2>

            <p className="about-intro">
              I'm <strong>Farhan Mahmood</strong>, an Electronics &
              Communication Engineering graduate focused on full-stack
              development and practical AI integration.
            </p>

            <p className="about-description">
              I build applications using Java, Spring Boot, React,
              PostgreSQL, and Python. My projects include an AI-powered
              pronunciation assessment platform and a natural-language-to-SQL
              application.
            </p>

            <p className="about-description">
              My engineering background also gives me a foundation in
              industrial automation, PLC/SCADA, and IoT. I enjoy connecting
              software engineering with practical, real-world problems.
            </p>

            {/* TECHNOLOGY CHIPS */}
            <div className="about-tech-stack" aria-label="Core technologies">
              {technologies.map((technology) => (
                <span className="about-tech-chip" key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="about-actions">
              <a
                className="about-button about-button-primary"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Resume <span aria-hidden="true">↗</span>
              </a>

              <a
                className="about-button"
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>

              <a
                className="about-button"
                href={LINKED_IN}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioAbout;

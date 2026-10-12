import React, { useEffect, useState } from "react";
import BootstrapCarousel from "react-bootstrap/Carousel";
import ScrollDown from "../ScrollDown/ScrollDown";
import { YOUTUBE } from "../constants/urlConstants";
import Image1 from "../../assets/Images/Carousel/image1.jpg";
import Image2 from "../../assets/Images/Carousel/image2.jpg";
import Image3 from "../../assets/Images/Carousel/image3.jpg";
import Image4 from "../../assets/Images/Carousel/image4.jpeg";
import Image5 from "../../assets/Images/Carousel/image5.jpg";
import Image6 from "../../assets/Images/Carousel/image6.jpg";

import { GITHUB, LINKED_IN } from "../constants/urlConstants";
import "./Carousel.scss";

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const roles = [
  "Full-Stack Developer | Java & AI",
  "Software Engineer",
  "AI Application Developer",
];

const PortfolioCarousel = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = deleting ? 35 : 75;

    if (!deleting && displayText === currentRole) {
      delay = 1800;
    } else if (deleting && displayText === "") {
      delay = 350;
    }

    const timer = window.setTimeout(() => {
      if (!deleting && displayText === currentRole) {
        setDeleting(true);
      } else if (deleting && displayText === "") {
        setDeleting(false);
        setRoleIndex((previous) => (previous + 1) % roles.length);
      } else if (deleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [displayText, deleting, roleIndex]);

  return (
    <section id="home" className="carousel-container">
      <BootstrapCarousel
        className="hero-background-carousel"
        controls={false}
        indicators={false}
        interval={6500}
        pause={false}
        fade
        slide={false}
        touch={false}
      >
        {images.map((image, index) => (
          <BootstrapCarousel.Item key={image}>
            <div className="carousel-image-wrapper">
              <img
                className="custom-img"
                src={image}
                alt=""
                aria-hidden="true"
                fetchpriority={index === 0 ? "high" : "auto"}
              />
            </div>
          </BootstrapCarousel.Item>
        ))}
      </BootstrapCarousel>

      <div className="carousel-overlay" />

      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-role" aria-label={displayText}>
            <span className="hero-role-dot" />
            <span aria-hidden="true">{displayText}</span>
            <span className="typewriter-cursor" aria-hidden="true" />
          </p>

          <p className="hero-greeting">Hello, I'm</p>

          <h1 className="hero-name">
            Farhan Mahmood<span>.</span>
          </h1>

          <h2 className="hero-tagline">
            I turn ideas into <span>applications.</span>
          </h2>

          <p className="hero-description">
            I build scalable web applications and practical AI-powered solutions
            using Java, Spring Boot, React, Python, and modern AI technologies.
          </p>

          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="#projects">
              View My Work <span aria-hidden="true">↗</span>
            </a>

            <a
              className="hero-button hero-button-secondary"
              href={YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
            >
              My YouTube Tutorials{" "}
              <span id="youtubeLink" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          {/*
          <div className="hero-socials">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span aria-hidden="true">/</span>
            <a href={LINKED_IN} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          */}
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-glow" />
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

          <div className="hero-core">
            <span className="hero-core-symbol">&lt;/&gt;</span>
            <span className="hero-core-label">BUILD · INTEGRATE · CREATE</span>
          </div>

          <div className="hero-tech-chip chip-java">Java</div>
          <div className="hero-tech-chip chip-react">React</div>
          <div className="hero-tech-chip chip-ai">AI + GenAI</div>
        </div>
      </div>

      <div className="hero-bottom-note">
        <span className="hero-bottom-line" />
        <span>SOFTWARE · AI · ENGINEERING</span>
      </div>

      <ScrollDown />
    </section>
  );
};

export default PortfolioCarousel;

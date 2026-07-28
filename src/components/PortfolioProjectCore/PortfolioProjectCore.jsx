import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { projectDataCore } from "./ProjectDataCore";
import detailsButtonIcon from "../../assets/Images/Projects/live_Dark.png";
import deatilsButtonIconDark from "../../assets/Images/Projects/live_Light.png";
import githubButtonIcon from "../../assets/Images/Projects/github_Light.png";
import githubButtonIconDark from "../../assets/Images/Projects/github_Dark.png";
import { useTheme } from "../Themes/ThemeProvider";

import "./PortfolioProjectCore.scss";

const PortfolioProjectCore = () => {
  const { isDarkMode } = useTheme();

  const [hoveredProject, setHoveredProject] = useState(null);
  const [clickedProject, setClickedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = (id) => {
    if (!isMobile) {
      setHoveredProject(id);
    }
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const handleProjectClick = (id) => {
    if (isMobile) {
      setClickedProject(clickedProject === id ? null : id);
    }
  };

  const handleDetailsButtonClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Container>
      <div
        className={`container mb-5 ${
          isDarkMode ? "dark-mode" : "light-mode"
        }`}
        id="core-projects"
      >
        <h1
          id="core-heading"
          className="text-center text-capitalize pt-4"
        >
          Electrical Engineering & Planning Projects
        </h1>

        <br />

        <div className="row">
          {projectDataCore.map((project) => (
            <div
              key={project.id}
              className={`col-lg-4 col-md-4 col-sm-6 col-12 mb-4 image-container ${
                hoveredProject === project.id ||
                clickedProject === project.id
                  ? "hovered"
                  : ""
              }`}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="image-container" id="ProjectImage">
                <img
                  src={project.image}
                  className="img-fluid"
                  alt={project.title}
                />

                {isMobile && clickedProject !== project.id && (
                  <div className="click-me-overlay">
                    <h3>{project.title}</h3>
                    <p id="moreDetails"><i>Explore Project</i></p>
                  </div>
                )}

                <div
                  className={`project-details ${
                    hoveredProject === project.id ||
                    clickedProject === project.id
                      ? "hovered"
                      : ""
                  } ${isDarkMode ? "dark-mode" : "light-mode"}`}
                >
                  <h3 id="titleOfImage">{project.title}</h3>

                  <p id="descriptionOfImage">
                    {project.description}
                  </p>

                  <div className="project-links">
                    <a
                      className="details-button"
                      href={project.Deploy_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleDetailsButtonClick}
                    >
                      {isDarkMode ? (
                        <img
                          id="deployImage"
                          src={deatilsButtonIconDark}
                          alt="Live Demo"
                        />
                      ) : (
                        <img
                          id="deployImage"
                          src={detailsButtonIcon}
                          alt="Live Demo"
                        />
                      )}
                    </a>

                    <a
                      className="details-button"
                      href={project.SourceCode_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleDetailsButtonClick}
                    >
                      {isDarkMode ? (
                        <img
                          id="gitHubImage"
                          src={githubButtonIconDark}
                          alt="GitHub"
                        />
                      ) : (
                        <img
                          id="gitHubImage"
                          src={githubButtonIcon}
                          alt="GitHub"
                        />
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PortfolioProjectCore;
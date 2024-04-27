import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { projectData } from "./projectData";
import detailsButtonIcon from "../../assets/Images/Projects/live_Dark.png";
import deatilsButtonIconDark from "../../assets/Images/Projects/live_Light.png";
import githubButtonIcon from "../../assets/Images/Projects/github_Light.png";
import githubButtonIconDark from "../../assets/Images/Projects/github_Dark.png";
import { useTheme } from "../Themes/ThemeProvider";

import "./PortfolioProjects.scss";

const PortfolioProjects = () => {
  const { isDarkMode } = useTheme();
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredProject(id);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const handleDetailsButtonClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Container>
      <div
        className={`container mb-5 ${isDarkMode ? "dark-mode" : "light-mode"}`}
        id="projects"
      >
        <h1 className="text-center text-capitalize pt-4">Projects</h1>
        <br />
        <div className="row">
          {projectData.map((project) => (
            <div
              key={project.id}
              className={`col-lg-4 col-md-4 col-sm-6 col-12 mb-4 image-container ${
                hoveredProject === project.id ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="image-container" id="ProjectImage">
                <img
                  src={project.image}
                  className="img-fluid"
                  alt={project.title}
                />
                <div
                  className={`project-details ${
                    hoveredProject === project.id ? "hovered" : ""
                  } ${isDarkMode ? "dark-mode" : "light-mode"}`}
                >
                  <h3 id="titleOfImage">{project.title}</h3>
                  <p id="descriptionOfImage">{project.description}</p>
                  <a
                    className="details-button"
                    href={project.Deploy_url}
                    target="_blank"
                    onClick={handleDetailsButtonClick}
                  >
                    {isDarkMode ? (
                      <img
                        id="deployImage"
                        src={deatilsButtonIconDark}
                        alt="details-button"
                      />
                    ) : (
                      <img
                        id="deployImage"
                        src={detailsButtonIcon}
                        alt="details-button"
                      />
                    )}
                  </a>
                  <a
                    className="details-button"
                    href={project.SourceCode_url}
                    target="_blank"
                    onClick={handleDetailsButtonClick}
                  >
                    {isDarkMode ? (
                      <img id="gitHubImage" src={githubButtonIconDark} alt="details-button" />
                    ) : (
                      <img id="gitHubImage" src={githubButtonIcon} alt="details-button" />
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PortfolioProjects;

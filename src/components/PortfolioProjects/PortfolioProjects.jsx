import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useTheme } from "../Themes/ThemeProvider";
import { projectData } from "./projectData";
import { Link } from "react-router-dom";
import "./PortfolioProjects.scss";

const PROJECT_TECH = {
  PronounceAI: ["React", "Java 21", "Spring Boot", "Azure AI"],
  "AI SQL Assistant": ["React", "Java 21", "PostgreSQL", "Groq / Llama"],
  "Diagnostic Healthcare Booking API": [
    "Java 21",
    "Spring Boot",
    "Spring Security",
    "PostgreSQL",
  ],
  "QuizGenius AI": ["React", "Spring Boot", "Groq AI"],
  "Text Utility App": ["React", "JavaScript"],
  "The Writer’s Diary": ["React", "JavaScript"],
  "Weather App": ["Node.js", "Express.js"],
  "QR Code Generator": ["React", "JavaScript"],
  "Infinity scroll": ["HTML", "CSS", "JavaScript"],
  Calculator: ["HTML", "CSS", "JavaScript"],
  "ToDo List": ["React", "JavaScript"],
};

function getProjectTech(project) {
  return (
    project.technologies ||
    project.techStack ||
    project.technologiesUsed ||
    PROJECT_TECH[project.title] ||
    PROJECT_TECH[project.title?.replace("’", "'")] ||
    []
  );
}

function ProjectCard({ project, index }) {
  const technologies = getProjectTech(project);
  const demoUrl = project.Deploy_url;
  const sourceUrl = project.SourceCode_url;

  return (
    <article
      className={`premium-project-card ${index === 0 ? "premium-project-card--featured" : ""}`}
    >
      <div className="premium-project-card__visual">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading={index === 0 ? "eager" : "lazy"}
          fetchpriority={index === 0 ? "high" : "auto"}
          decoding="async"
        />

        <div className="premium-project-card__category">
          {index === 0 ? "Featured Project" : "Selected Work"}
        </div>
        <div className="premium-project-card__actions">
          {demoUrl && demoUrl !== "#" && (
            <a
              className="premium-project-action"
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open live demo for ${project.title}`}
              title="Live demo"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 4h6v6M20 4 10 14" />
                <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
              </svg>
              <span>Live Demo</span>
            </a>
          )}
          {sourceUrl && sourceUrl !== "#" && (
            <a
              className="premium-project-action"
              href={sourceUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open source code for ${project.title}`}
              title="Source code"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1.2 15 3a13.2 13.2 0 0 0-7 0C5.5 1.2 4.3 1.5 4.3 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.7V22" />
              </svg>
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>

      <div className="premium-project-card__body">
        <div className="premium-project-card__heading">
          <h3>{project.title}</h3>
          <span className="premium-project-card__index">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <p className="premium-project-card__description">
          {project.description}
        </p>

        {technologies.length > 0 && (
          <div
            className="premium-project-card__tech"
            aria-label="Technologies used"
          >
            {technologies.map((technology) => (
              <span key={technology} className="premium-project-tech">
                {technology}
              </span>
            ))}
          </div>
        )}

        <Link
          to={`/projects/${project.title
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")}`}
          className="premium-project-card__footer"
          aria-label={`Explore ${project.title} project case study`}
        >
          <span className="premium-project-card__footer-label">
            EXPLORE PROJECT
          </span>

          <span
            className="premium-project-card__footer-mark"
            aria-hidden="true"
          >
            ↗
          </span>
        </Link>
      </div>
    </article>
  );
}

export default function PortfolioProjects() {
  const [showAll, setShowAll] = useState(false);
  const { theme } = useTheme();
  const visibleProjects = showAll ? projectData : projectData.slice(0, 3);
  const remainingCount = Math.max(projectData.length - 3, 0);

  return (
    <section
      className="premium-projects-section"
      id="projects"
      data-theme={theme}
    >
      <Container>
        <div className="premium-projects-header">
          <div className="premium-projects-heading-copy">
            <span className="premium-projects-eyebrow">
              <span className="premium-projects-eyebrow-dot" />
              SELECTED WORK
            </span>
            <h2>
              Projects<span className="premium-projects-period">.</span>
            </h2>
            <p>
              A selection of applications, tools, and experiments built with
              modern technologies.
            </p>
          </div>
          <div
            className="premium-projects-count"
            aria-label={`${projectData.length} projects`}
          >
            <span>{String(projectData.length).padStart(2, "0")}</span>
            <small>PROJECTS</small>
          </div>
        </div>

        <div
          className={`premium-projects-grid ${showAll ? "is-expanded" : ""}`}
        >
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id ?? project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {projectData.length > 3 && (
          <div className="premium-projects-more">
            <div className="premium-projects-more-line" />
            <button
              type="button"
              className="premium-projects-toggle"
              onClick={() => setShowAll((current) => !current)}
              aria-expanded={showAll}
            >
              <span>{showAll ? "Show Less" : "View All Projects"}</span>
              {!showAll && remainingCount > 0 && (
                <span className="premium-projects-toggle-count">
                  +{remainingCount}
                </span>
              )}
              <svg
                className={showAll ? "is-rotated" : ""}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
            <div className="premium-projects-more-line" />
          </div>
        )}
      </Container>
    </section>
  );
}

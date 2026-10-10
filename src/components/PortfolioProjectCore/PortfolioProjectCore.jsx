import React, { useMemo } from "react";
import Container from "react-bootstrap/Container";
import { projectDataCore } from "./ProjectDataCore";
import { useTheme } from "../Themes/ThemeProvider";
import "./PortfolioProjectCore.scss";

const TECH_BY_TITLE = {
  "Predictive Maintenance": ["Spring Boot", "FastAPI", "React", "Machine Learning", "Random Forest"],
  "Maintenance Dashboard": ["React", "JavaScript"],
  "Engineering Utility Tools Suite": ["React", "JavaScript"],
};

function getTechnologies(project) {
  return (
    project.technologies ||
    project.techStack ||
    project.technologiesUsed ||
    TECH_BY_TITLE[project.title?.trim()] ||
    []
  );
}

function ProjectAction({ href, label, type }) {
  if (!href || href === "#") return null;

  return (
    <a
      className="premium-core-action"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} for project`}
      title={label}
    >
      {type === "demo" ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 4h6v6M20 4 10 14" />
          <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1.2 15 3a13.2 13.2 0 0 0-7 0C5.5 1.2 4.3 1.5 4.3 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.7V22" />
        </svg>
      )}
      <span>{label}</span>
    </a>
  );
}

function CoreProjectCard({ project, index }) {
  const technologies = getTechnologies(project);
  const title = project.title?.trim() || "Project";

  return (
    <article className={`premium-core-card ${index === 0 ? "premium-core-card--featured" : ""}`}>
      <div className="premium-core-card__visual">
        <img src={project.image} alt={`${title} project preview`} loading="lazy" />
        <span className="premium-core-card__category">
          {index === 0 ? "Featured Project" : "Engineering Project"}
        </span>
        <div className="premium-core-card__actions">
          <ProjectAction href={project.Deploy_url} label="Live Demo" type="demo" />
          <ProjectAction href={project.SourceCode_url} label="Source Code" type="source" />
        </div>
      </div>

      <div className="premium-core-card__body">
        <div className="premium-core-card__heading">
          <h3>{title}</h3>
          <span className="premium-core-card__index">{String(index + 1).padStart(2, "0")}</span>
        </div>

        <p className="premium-core-card__description">{project.description}</p>

        {technologies.length > 0 && (
          <div className="premium-core-card__tech" aria-label="Technologies used">
            {technologies.map((technology) => (
              <span className="premium-core-tech" key={technology}>{technology}</span>
            ))}
          </div>
        )}

        <div className="premium-core-card__footer">
          <span className="premium-core-card__footer-label">ENGINEERING & PLANNING</span>
          <span className="premium-core-card__footer-mark" aria-hidden="true">↗</span>
        </div>
      </div>
    </article>
  );
}

export default function PortfolioProjectCore() {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? "dark" : "light";
  const projects = useMemo(() => projectDataCore || [], []);

  return (
    <section className="premium-core-section" id="core-projects" data-theme={theme}>
      <Container>
        <div className="premium-core-header">
          <div className="premium-core-heading-copy">
            <span className="premium-core-eyebrow">
              <span className="premium-core-eyebrow-dot" />
              ENGINEERING & PLANNING
            </span>
            <h2>Core Projects<span className="premium-core-period">.</span></h2>
            <p>Electrical engineering, planning tools, and software-driven engineering projects.</p>
          </div>
          <div className="premium-core-count" aria-label={`${projects.length} projects`}>
            <span>{String(projects.length).padStart(2, "0")}</span>
            <small>PROJECTS</small>
          </div>
        </div>

        <div className="premium-core-grid">
          {projects.map((project, index) => (
            <CoreProjectCard
              key={project.id ?? project.title ?? index}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

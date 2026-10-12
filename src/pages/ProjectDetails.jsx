import { Link, useParams } from "react-router-dom";
import { projectData } from "../components/PortfolioProjects/projectData";
import { projectDataCore } from "../components/PortfolioProjectCore/ProjectDataCore";
import "./ProjectDetails.scss";

const PROJECT_DETAILS = {
  pronounceai: {
    overview: "A pronunciation assessment platform built using React, Java 21, Spring Boot, and Azure AI Speech Services.",
    problem: "Pronunciation practice can be difficult without useful feedback on spoken language.",
    solution: "The application combines a React interface, Spring Boot backend, and Azure AI Speech Services for pronunciation assessment.",
    features: ["React-based user interface", "Spring Boot backend", "Azure AI Speech Services integration", "Pronunciation assessment workflow"],
    architecture: [
      { title: "Frontend", description: "React — user interface and interaction" },
      { title: "Backend", description: "Java 21 and Spring Boot — application services" },
      { title: "Speech AI", description: "Azure AI Speech Services — pronunciation assessment" },
    ],
  },
  "ai-sql-assistant": {
    overview: "A natural-language-to-SQL application built with React, Java 21, Spring Boot, PostgreSQL, and the Groq API.",
    problem: "Writing SQL queries can be challenging for users who are unfamiliar with database query syntax.",
    solution: "The application uses an LLM-powered workflow to help translate natural-language requests into SQL queries.",
    features: ["React frontend", "Spring Boot backend", "PostgreSQL database", "Groq API integration for LLM-powered query generation"],
    architecture: [
      { title: "Frontend", description: "React — user interface" },
      { title: "Backend", description: "Java 21 and Spring Boot — application logic" },
      { title: "Database", description: "PostgreSQL — relational data" },
      { title: "LLM", description: "Groq API — natural-language-to-SQL assistance" },
    ],
  },
  "diagnostic-healthcare-booking-api": {
    overview: "A healthcare booking API built using Java 21, Spring Boot, Spring Security, and PostgreSQL.",
    problem: "Healthcare booking workflows need structured APIs for managing requests and protecting application resources.",
    solution: "The project uses Spring Boot, Spring Security, and PostgreSQL to provide a backend foundation for healthcare booking.",
    features: ["REST API development", "Spring Security integration", "PostgreSQL persistence", "Java 21 and Spring Boot"],
    architecture: [
      { title: "API", description: "Spring Boot — REST endpoints and application logic" },
      { title: "Security", description: "Spring Security — application security" },
      { title: "Database", description: "PostgreSQL — persistent storage" },
    ],
  },
  "quizgenius-ai": {
    overview: "An AI-assisted quiz application built using React, Spring Boot, and the Groq AI API.",
    problem: "Creating quiz questions manually can take time when users need learning or practice material.",
    solution: "The application combines a React interface with a Spring Boot backend and Groq AI integration.",
    features: ["React frontend", "Spring Boot backend", "Groq AI integration", "AI-assisted quiz workflow"],
    architecture: [
      { title: "Frontend", description: "React — user interface" },
      { title: "Backend", description: "Spring Boot — application services" },
      { title: "AI", description: "Groq API — AI integration" },
    ],
  },
  "text-utility-app": {
    overview: "A text utility application built with React and JavaScript.",
    problem: "Common text operations can require repetitive manual editing.",
    solution: "The application provides a browser-based interface for text-related utilities.",
    features: ["React user interface", "JavaScript-based functionality", "Text utility workflows"],
    architecture: [
      { title: "Frontend", description: "React — interface and component structure" },
      { title: "Application logic", description: "JavaScript — text processing" },
    ],
  },
  "the-writer-s-diary": {
    overview: "A writing-focused web application built using React and JavaScript.",
    problem: "Writers need a convenient interface for working with their written content.",
    solution: "The project provides a web interface for writing-related interactions.",
    features: ["React frontend", "JavaScript application logic", "Writing-focused interface"],
    architecture: [
      { title: "Frontend", description: "React — interface and components" },
      { title: "Application logic", description: "JavaScript — client-side behavior" },
    ],
  },
  "weather-app": {
    overview: "A weather application project built using Node.js and Express.js.",
    problem: "Users need a convenient way to access weather information through an application.",
    solution: "The project uses a Node.js and Express.js backend for its weather application workflow.",
    features: ["Node.js backend", "Express.js application", "Weather application workflow"],
    architecture: [
      { title: "Runtime", description: "Node.js — server-side JavaScript" },
      { title: "Backend", description: "Express.js — HTTP application framework" },
    ],
  },
  "qr-code-generator": {
    overview: "A QR code generator project built with React and JavaScript.",
    problem: "Generating a QR code should be straightforward and accessible through a simple interface.",
    solution: "The project uses React and JavaScript to provide a QR-code-generation interface.",
    features: ["React frontend", "JavaScript functionality", "QR code generation workflow"],
    architecture: [
      { title: "Frontend", description: "React — user interface" },
      { title: "Application logic", description: "JavaScript — QR code workflow" },
    ],
  },
  "infinity-scroll": {
    overview: "An infinite-scrolling interface built using HTML, CSS, and JavaScript.",
    problem: "Long lists of content can require repeated manual navigation between sections or pages.",
    solution: "The project explores an interface that loads or displays content through an infinite-scrolling interaction.",
    features: ["HTML structure", "CSS styling", "JavaScript interaction", "Infinite-scrolling interface"],
    architecture: [
      { title: "Structure", description: "HTML — page markup" },
      { title: "Presentation", description: "CSS — layout and styling" },
      { title: "Interaction", description: "JavaScript — scrolling behavior" },
    ],
  },
  calculator: {
    overview: "A calculator project built using HTML, CSS, and JavaScript.",
    problem: "Basic arithmetic calculations need a simple and accessible interface.",
    solution: "The project provides a calculator interface implemented with standard web technologies.",
    features: ["HTML structure", "CSS styling", "JavaScript calculation logic"],
    architecture: [
      { title: "Structure", description: "HTML — interface markup" },
      { title: "Presentation", description: "CSS — visual layout" },
      { title: "Logic", description: "JavaScript — calculations" },
    ],
  },
  "todo-list": {
    overview: "A to-do list application built using React and JavaScript.",
    problem: "Keeping track of tasks is easier when they can be managed in one interface.",
    solution: "The project uses React to provide a task-list interface.",
    features: ["React frontend", "JavaScript application logic", "Task-list interface"],
    architecture: [
      { title: "Frontend", description: "React — interface and components" },
      { title: "Application logic", description: "JavaScript — task interactions" },
    ],
  },
  "predictive-maintenance": {
    overview: "A predictive-maintenance project combining a React dashboard, a Spring Boot service, and a Python FastAPI prediction service.",
    problem: "Equipment monitoring can benefit from a structured way to review sensor readings and explore maintenance predictions.",
    solution: "The project separates the dashboard, application service, and prediction service into distinct components.",
    features: ["React dashboard interface", "Spring Boot service", "Python FastAPI prediction service", "Machine-learning prediction workflow using Random Forest"],
    architecture: [
      { title: "Dashboard", description: "React — monitoring interface" },
      { title: "Application service", description: "Spring Boot — application and sensor-reading workflow" },
      { title: "Prediction service", description: "Python FastAPI — machine-learning prediction endpoint" },
    ],
  },
  "maintenance-dashboard": {
    overview: "A maintenance dashboard interface built with React and JavaScript.",
    problem: "Maintenance information benefits from a central interface where users can review relevant information.",
    solution: "This project focuses on a React-based dashboard UI for a maintenance workflow.",
    features: ["React user interface", "JavaScript application logic", "Maintenance-focused dashboard layout"],
    architecture: [
      { title: "Frontend", description: "React — dashboard interface and components" },
      { title: "Application logic", description: "JavaScript — client-side behavior" },
    ],
  },
  "engineering-utility-tools-suite": {
    overview: "A collection of engineering utility tools built as a React and JavaScript web application.",
    problem: "Engineering workflows can involve small utility tasks that are easier to access through a focused interface.",
    solution: "The project groups engineering-oriented utilities in a web interface built with React and JavaScript.",
    features: ["React interface", "JavaScript functionality", "Engineering utility-tool workflow"],
    architecture: [
      { title: "Frontend", description: "React — interface and components" },
      { title: "Application logic", description: "JavaScript — utility behavior" },
    ],
  },
};

function getSlug(title = "") {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const allProjects = [...(projectData || []), ...(projectDataCore || [])];
  const project = allProjects.find((item) => getSlug(item.title) === slug);

  if (!project) {
    return (
      <main className="project-details">
        <div className="project-details__container">
          <p className="project-details__eyebrow">PROJECT NOT FOUND</p>
          <h1>We couldn't find this project.</h1>
          <Link className="project-details__back" to="/">
            ← Back to portfolio
          </Link>
        </div>
      </main>
    );
  }

  const title = project.title.trim();
  const details = PROJECT_DETAILS[slug];
  const technologies = (project.description || "")
    .split(/[•|]/)
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <main className="project-details">
      <div className="project-details__container">
        <Link className="project-details__back" to="/">
          ← Back to portfolio
        </Link>

        <p className="project-details__eyebrow">PROJECT CASE STUDY</p>
        <h1>{title}</h1>
        <p className="project-details__subtitle">{project.description}</p>

        {project.image && (
          <div className="project-details__image">
            <img src={project.image} alt={`${title} preview`} />
          </div>
        )}

        <section className="project-details__section">
          <h2>Project overview</h2>
          <p>{details?.overview ?? `${title} — ${project.description}`}</p>
        </section>

        {details && (
          <>
            <section className="project-details__section">
              <h2>The problem</h2>
              <p>{details.problem}</p>
            </section>

            <section className="project-details__section">
              <h2>The solution</h2>
              <p>{details.solution}</p>
            </section>

            <section className="project-details__section">
              <h2>Key features</h2>
              <ul>
                {details.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>

            <section className="project-details__section">
              <h2>Architecture &amp; technology</h2>
              <div className="project-details__architecture">
                {details.architecture.map((item) => (
                  <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}

        {technologies.length > 0 && (
          <section className="project-details__section">
            <h2>Technologies</h2>
            <ul>
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </section>
        )}

        <div className="project-details__actions">
          {project.Deploy_url && project.Deploy_url !== "#" && (
            <a href={project.Deploy_url} target="_blank" rel="noopener noreferrer">
              Live Demo ↗
            </a>
          )}
          {project.SourceCode_url && project.SourceCode_url !== "#" && (
            <a href={project.SourceCode_url} target="_blank" rel="noopener noreferrer">
              Source Code ↗
            </a>
          )}
        </div>
      </div>
    </main>
  );
}

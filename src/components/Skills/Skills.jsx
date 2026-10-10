import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useTheme } from "../Themes/ThemeProvider";
import "./Skills.scss";

// Keep these paths aligned with the image assets in your existing project.
import L_HTML5 from "../../assets/Images/Skills/html.svg";
import L_CSS3 from "../../assets/Images/Skills/css.svg";
import L_JAVASCRIPT from "../../assets/Images/Skills/javascript.svg";
import L_REACT from "../../assets/Images/Skills/react.png";
import L_VITE from "../../assets/Images/Skills/vite.png";
import L_TAILWIND from "../../assets/Images/Skills/tailwind.png";
import L_JAVA from "../../assets/Images/Skills/java.svg";
import L_SPRING_BOOT from "../../assets/Images/Skills/spring_boot.png";
import L_SPRING_SECURITY from "../../assets/Images/Skills/spring_security.png";
import L_SPRING_DATA_JPA from "../../assets/Images/Skills/spring_data.png";
import L_HIBERNATE from "../../assets/Images/Skills/hibernate.png";
import L_REST_API from "../../assets/Images/Skills/rest_api.png";
import L_PYTHON from "../../assets/Images/Skills/python.png";
import L_FASTAPI from "../../assets/Images/Skills/fast_api.png";
import L_AI from "../../assets/Images/Skills/ai.svg";
import L_LLM from "../../assets/Images/Skills/llm.png";
import L_RAG from "../../assets/Images/Skills/rag.png";
import L_LANGCHAIN from "../../assets/Images/Skills/langchain.png";
import L_AI_AGENTS from "../../assets/Images/Skills/ai_agents.png";
import L_EMBEDDINGS from "../../assets/Images/Skills/embeddings.png";
import L_VECTOR_SEARCH from "../../assets/Images/Skills/vector_search.png";
import L_AZURE_AI from "../../assets/Images/Skills/azure_ai.png";
import L_GIT from "../../assets/Images/Skills/git.svg";
import L_GITHUB from "../../assets/Images/Skills/github.svg";
import L_MAVEN from "../../assets/Images/Skills/maven.png";
import L_POSTMAN from "../../assets/Images/Skills/postman.png";
import L_POSTGRESQL from "../../assets/Images/Skills/postgre_sql.png";
import L_SQL from "../../assets/Images/Skills/sql.svg";
import L_MongoDb from "../../assets/Images/Skills/mongodb.svg";
import L_DOCKER from "../../assets/Images/Skills/docker.png";
import L_GITHUB_ACTIONS from "../../assets/Images/Skills/github_actions.png";
import L_AWS from "../../assets/Images/Skills/aws.png";
import L_NETLIFY from "../../assets/Images/Skills/netlify.png";
import L_RAILWAY from "../../assets/Images/Skills/railway.png";

const skillGroups = [
  {
    title: "Frontend Engineering",
    icon: "⌘",
    description:
      "Building responsive, accessible interfaces with reusable components and a focus on clean user experiences.",
    skills: [
      ["React.js", L_REACT, "https://react.dev/"],
      ["HTML5", L_HTML5, "https://developer.mozilla.org/en-US/docs/Web/HTML"],
      ["CSS3", L_CSS3, "https://developer.mozilla.org/en-US/docs/Web/CSS"],
      ["JavaScript", L_JAVASCRIPT, "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
      ["Vite", L_VITE, "https://vite.dev/"],
      ["Tailwind CSS", L_TAILWIND, "https://tailwindcss.com/"],
    ],
  },
  {
    title: "Backend Development",
    icon: "⌘",
    description:
      "Developing REST APIs and backend services with Java, Spring technologies, and Python-based APIs.",
    skills: [
      ["Java", L_JAVA, "https://www.java.com/"],
      ["Spring Boot", L_SPRING_BOOT, "https://spring.io/projects/spring-boot"],
      ["Spring Security", L_SPRING_SECURITY, "https://spring.io/projects/spring-security"],
      ["Spring Data JPA", L_SPRING_DATA_JPA, "https://spring.io/projects/spring-data-jpa"],
      ["Hibernate", L_HIBERNATE, "https://hibernate.org/"],
      ["REST APIs", L_REST_API, "https://www.redhat.com/en/topics/api/what-is-a-rest-api"],
      ["Python", L_PYTHON, "https://www.python.org/"],
      ["FastAPI", L_FASTAPI, "https://fastapi.tiangolo.com/"],
    ],
  },
  {
    title: "Database Systems",
    icon: "▦",
    description:
      "Working with relational and document databases to store, query, and manage application data.",
    skills: [
      ["PostgreSQL", L_POSTGRESQL, "https://www.postgresql.org/"],
      ["SQL", L_SQL, "https://www.w3schools.com/sql/"],
      ["MongoDB", L_MongoDb, "https://www.mongodb.com/"],
    ],
  },
  {
    title: "AI & Generative AI",
    icon: "✳",
    description:
      "Building AI-powered applications with language models, retrieval workflows, and AI service integrations.",
    skills: [
      ["AI / ML", L_AI, null],
      ["LLMs", L_LLM, null],
      ["RAG", L_RAG, null],
      ["LangChain", L_LANGCHAIN, "https://www.langchain.com/"],
      ["AI Agents", L_AI_AGENTS, null],
      ["Embeddings", L_EMBEDDINGS, null],
      ["Vector Search", L_VECTOR_SEARCH, null],
      ["Azure AI", L_AZURE_AI, "https://azure.microsoft.com/en-us/products/ai-services"],
    ],
  },
  {
    title: "Development Tools",
    icon: "⚒",
    description:
      "Using version control, API testing, and build tools to support reliable development workflows.",
    skills: [
      ["Git", L_GIT, "https://git-scm.com/"],
      ["GitHub", L_GITHUB, "https://github.com/"],
      ["Maven", L_MAVEN, "https://maven.apache.org/"],
      ["Postman", L_POSTMAN, "https://www.postman.com/"],
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁",
    description:
      "Familiar with deployment platforms and automation tools used to ship and host applications.",
    skills: [
      ["Docker", L_DOCKER, "https://www.docker.com/"],
      ["GitHub Actions", L_GITHUB_ACTIONS, "https://github.com/features/actions"],
      ["AWS EC2", L_AWS, "https://aws.amazon.com/ec2/"],
      ["Netlify", L_NETLIFY, "https://www.netlify.com/"],
      ["Railway", L_RAILWAY, "https://railway.app/"],
    ],
  },
];

const coreGroups = [
  {
    title: "Electronics & VLSI",
    icon: "⌁",
    description: "Fundamentals of digital hardware and integrated circuit design.",
    skills: ["VLSI Design", "Verilog (HDL)", "Digital Logic Design", "CMOS Fundamentals"],
  },
  {
    title: "Embedded Systems",
    icon: "▣",
    description: "Core concepts for embedded hardware and processor-based systems.",
    skills: ["Microcontrollers & Embedded Systems", "Microprocessor Architecture"],
  },
  {
    title: "Maintenance & Planning",
    icon: "⚙",
    description: "Engineering maintenance practices and basic planning workflows.",
    skills: [
      "Primavera P6 (Basics)",
      "Preventive Maintenance Concepts",
      "Electrical Maintenance",
      "Planning & Scheduling",
    ],
  },
  {
    title: "Instrumentation & Control",
    icon: "⌁",
    description: "Industrial monitoring, automation, and control-system fundamentals.",
    skills: ["PLC", "SCADA", "HMI"],
  },
  {
    title: "Other Engineering Skills",
    icon: "◇",
    description: "Additional hands-on tools and foundational engineering concepts.",
    skills: ["IoT Fundamentals", "Arduino IDE", "EDA Tools – Xilinx (Vivado)"],
  },
];

function SkillCard({ group, index, showLogos = true }) {
  return (
    <Card className="portfolio-skill-card h-100" style={{ "--card-index": index }}>
      <Card.Body>
        <div className="skill-card-heading">
          <span className="skill-card-icon" aria-hidden="true">{group.icon}</span>
          <h3>{group.title}</h3>
        </div>
        <p className="skill-card-description">{group.description}</p>
        <div className="skill-tag-list">
          {group.skills.map((skill) => {
            const [name, logo, url] = Array.isArray(skill) ? skill : [skill, null, null];
            const content = (
              <>
                {showLogos && logo && (
                  <img src={logo} alt="" className="skill-tag-logo" loading="lazy" />
                )}
                <span>{name}</span>
              </>
            );

            return url ? (
              <a
                className="skill-tag"
                href={url}
                key={name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} documentation (opens in a new tab)`}
              >
                {content}
              </a>
            ) : (
              <span className="skill-tag" key={name}>{content}</span>
            );
          })}
        </div>
      </Card.Body>
    </Card>
  );
}

export default function PortfolioSkills() {
  const { isDarkMode } = useTheme();

  return (
    <Container
      fluid
      id="skills"
      className={`portfolio-skills-section ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="portfolio-skills-inner">
        <header className="skills-section-header">
          <p className="skills-eyebrow">WHAT I WORK WITH</p>
          <h2 id="TechHeading">Information Technology<span>.</span></h2>
          <span className="skills-heading-rule" />
          <p className="skills-section-intro">
            Technologies and tools I use to build full-stack applications and AI-powered products.
          </p>
        </header>

        <div className="skills-card-grid">
          {skillGroups.map((group, index) => (
            <SkillCard group={group} index={index} key={group.title} />
          ))}
        </div>

        <header className="skills-section-header core-skills-header">
          <p className="skills-eyebrow">ENGINEERING FOUNDATION</p>
          <h2 id="CoreHeading">Electronics & Communication Engineering <span>.</span></h2>
          <span className="skills-heading-rule" />
          <p className="skills-section-intro">
            Electronics, industrial automation, and engineering knowledge from my ECE background.
          </p>
        </header>

        <div className="skills-card-grid core-skills-grid" id="core-skills">
          {coreGroups.map((group, index) => (
            <SkillCard
              group={group}
              index={index}
              key={group.title}
              showLogos={false}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

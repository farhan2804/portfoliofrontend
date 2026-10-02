import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useTheme } from "../Themes/ThemeProvider";
import "./Skills.scss";

/* =========================================================
   EXISTING IT SKILL IMAGES
========================================================= */

import L_HTML5 from "../../assets/Images/Skills/html.svg";
import L_CSS3 from "../../assets/Images/Skills/css.svg";
import L_JAVASCRIPT from "../../assets/Images/Skills/javascript.svg";
import L_REACT from "../../assets/Images/Skills/react.png";
import L_JAVA from "../../assets/Images/Skills/java.svg";

import L_GIT from "../../assets/Images/Skills/git.svg";
import L_GITHUB from "../../assets/Images/Skills/github.svg";

import L_SQL from "../../assets/Images/Skills/sql.svg";
import L_MongoDb from "../../assets/Images/Skills/mongodb.svg";

import L_AI from "../../assets/Images/Skills/ai.svg";

/* =========================================================
   NEW FRONTEND SKILL IMAGES
========================================================= */

import L_VITE from "../../assets/Images/Skills/vite.png";
import L_TAILWIND from "../../assets/Images/Skills/tailwind.png";

/* =========================================================
   NEW BACKEND SKILL IMAGES
========================================================= */

import L_SPRING_BOOT from "../../assets/Images/Skills/spring_boot.png";
import L_SPRING_SECURITY from "../../assets/Images/Skills/spring_security.png";
import L_SPRING_DATA_JPA from "../../assets/Images/Skills/spring_data.png";
import L_HIBERNATE from "../../assets/Images/Skills/hibernate.png";
import L_REST_API from "../../assets/Images/Skills/rest_api.png";
import L_PYTHON from "../../assets/Images/Skills/python.png";
import L_FASTAPI from "../../assets/Images/Skills/fast_api.png";

/* =========================================================
   AI / GENAI SKILL IMAGES
========================================================= */

import L_LLM from "../../assets/Images/Skills/llm.png";
import L_RAG from "../../assets/Images/Skills/rag.png";
import L_LANGCHAIN from "../../assets/Images/Skills/langchain.png";
import L_AI_AGENTS from "../../assets/Images/Skills/ai_agents.png";
import L_EMBEDDINGS from "../../assets/Images/Skills/embeddings.png";
import L_VECTOR_SEARCH from "../../assets/Images/Skills/vector_search.png";
import L_AZURE_AI from "../../assets/Images/Skills/azure_ai.png";

/* =========================================================
   DATABASE SKILL IMAGES
========================================================= */

import L_POSTGRESQL from "../../assets/Images/Skills/postgre_sql.png";

/* =========================================================
   DEVOPS / CLOUD SKILL IMAGES
========================================================= */

import L_DOCKER from "../../assets/Images/Skills/docker.png";
import L_GITHUB_ACTIONS from "../../assets/Images/Skills/github_actions.png";
import L_AWS from "../../assets/Images/Skills/aws.png";
import L_NETLIFY from "../../assets/Images/Skills/netlify.png";
import L_RAILWAY from "../../assets/Images/Skills/railway.png";

/* =========================================================
   TOOLS
========================================================= */

import L_MAVEN from "../../assets/Images/Skills/maven.png";
import L_POSTMAN from "../../assets/Images/Skills/postman.png";

const PortfolioSkills = () => {
  const { isDarkMode } = useTheme();

  return (
    <Container
      id="it-skills"
      className={isDarkMode ? "dark-mode" : "light-mode"}
    >
      {/* =====================================================
          IT SKILLS
      ===================================================== */}

      <div className="container">
        <h1 className="text-center text-capitalize pt-4" id="TechHeading">
          IT Skills
        </h1>

        <div className="row text-center mb-5">
          {/* =================================================
              COLUMN 1
          ================================================= */}

          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            {/* ================= FRONTEND ================= */}

            <div id="SkillsContainer1">
              <Card.Body>
                <h2 id="TitleHeading1">Frontend</h2>

                <hr id="TitleLine1" />

                <div id="CardContents1">
                  <a
                    className="HTMLImage focus"
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_HTML5} className="img-fluid" alt="HTML5" />
                    <h4 className="HTMLHeading">HTML5</h4>
                  </a>

                  <a
                    className="CSSImage focus"
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_CSS3} className="img-fluid" alt="CSS3" />
                    <h4 className="CSSHeading">CSS3</h4>
                  </a>

                  <a
                    className="JavaScriptImage1 focus"
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={L_JAVASCRIPT}
                      className="img-fluid"
                      alt="JavaScript"
                    />
                    <h4 className="JavaScriptHeading">JavaScript</h4>
                  </a>

                  <a
                    className="ReactImage focus"
                    href="https://react.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_REACT} className="img-fluid" alt="React.js" />
                    <h4 className="ReactHeading">React.js</h4>
                  </a>

                  <a
                    className="SkillImage focus"
                    href="https://vite.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_VITE} className="img-fluid" alt="Vite" />
                    <h4 className="SkillHeading">Vite</h4>
                  </a>

                  <a
                    className="SkillImage focus"
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={L_TAILWIND}
                      className="img-fluid"
                      alt="Tailwind CSS"
                    />
                    <h4 className="SkillHeading">Tailwind CSS</h4>
                  </a>
                </div>
              </Card.Body>
            </div>

            {/* ================= BACKEND ================= */}

            <div id="SkillsContainer4">
              <Card.Body>
                <h2 id="TitleHeading4">Backend</h2>

                <hr id="TitleLine4" />

                <div id="CardContents4">
                  <a
                    className="JavaImage focus"
                    href="https://www.java.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_JAVA} className="img-fluid" alt="Java" />
                    <h4 className="JavaHeading">Java</h4>
                  </a>

                  <a
                    className="SkillImage focus"
                    href="https://spring.io/projects/spring-boot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={L_SPRING_BOOT}
                      className="img-fluid"
                      alt="Spring Boot"
                    />
                    <h4 className="SkillHeading">Spring Boot</h4>
                  </a>

                  <a
                    className="SkillImage focus"
                    href="https://spring.io/projects/spring-security"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={L_SPRING_SECURITY}
                      className="img-fluid"
                      alt="Spring Security"
                    />
                    <h4 className="SkillHeading">Spring Security</h4>
                  </a>

                  <a
                    className="SkillImage focus"
                    href="https://spring.io/projects/spring-data-jpa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={L_SPRING_DATA_JPA}
                      className="img-fluid"
                      alt="Spring Data JPA"
                    />
                    <h4 className="SkillHeading">Spring Data JPA</h4>
                  </a>

                  <a
                    className="SkillImage focus"
                    href="https://hibernate.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={L_HIBERNATE}
                      className="img-fluid"
                      alt="Hibernate"
                    />
                    <h4 className="SkillHeading">Hibernate</h4>
                  </a>

                  <a
                    className="SkillImage focus"
                    href="#rest-api"
                    onClick={(e) => e.preventDefault()}
                  >
                    <img
                      src={L_REST_API}
                      className="img-fluid"
                      alt="REST API"
                    />
                    <h4 className="SkillHeading">REST APIs</h4>
                  </a>

                  <a
                    className="SkillImage focus"
                    href="https://www.python.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_PYTHON} className="img-fluid" alt="Python" />
                    <h4 className="SkillHeading">Python</h4>
                  </a>

                  <a
                    className="SkillImage focus"
                    href="https://fastapi.tiangolo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_FASTAPI} className="img-fluid" alt="FastAPI" />
                    <h4 className="SkillHeading">FastAPI</h4>
                  </a>
                </div>
              </Card.Body>
            </div>
          </div>

          {/* =================================================
              COLUMN 2
          ================================================= */}

          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            {/* ============== PROGRAMMING LANGUAGES ============== */}

            <div id="SkillsContainer2">
              <Card.Body>
                <h2 id="TitleHeading2">
                  Programming
                  <p>Languages</p>
                </h2>

                <hr id="TitleLine2" />

                <div id="CardContents2">
                  <a
                    className="JavaScriptImage2 focus"
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={L_JAVASCRIPT}
                      className="img-fluid"
                      alt="JavaScript"
                    />
                    <h4 className="JavaScriptHeading">JavaScript</h4>
                  </a>

                  <a
                    className="JavaImage focus"
                    href="https://www.java.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_JAVA} className="img-fluid" alt="Java" />
                    <h4 className="JavaHeading">Java</h4>
                  </a>

                  <a
                    className="SkillImage focus"
                    href="https://www.python.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_PYTHON} className="img-fluid" alt="Python" />
                    <h4 className="SkillHeading">Python</h4>
                  </a>
                </div>
              </Card.Body>
            </div>

            {/* ================= AI & GENAI ================= */}

            <div id="SkillsContainer3">
              <Card.Body>
                <h2 id="TitleHeading3">AI & GenAI</h2>

                <hr id="TitleLine3" />

                <div id="CardContents2">
                  <a
                    className="SkillImage focus"
                    href="#ai-ml"
                    onClick={(e) => e.preventDefault()}
                  >
                    <img
                      src={L_AI}
                      className="img-fluid"
                      alt="AI and Machine Learning"
                    />
                    <h4 className="SkillHeading">AI / ML</h4>
                  </a>

                  <a
                    className="SkillImage focus"
                    href="#llm"
                    onClick={(e) => e.preventDefault()}
                  >
                    <img
                      src={L_LLM}
                      className="img-fluid"
                      alt="Large Language Models"
                    />
                    <h4 className="SkillHeading">LLMs</h4>
                  </a>

                  <a
                    className="SkillImage focus"
                    href="#rag"
                    onClick={(e) => e.preventDefault()}
                  >
                    <img src={L_RAG} className="img-fluid" alt="RAG" />
                    <h4 className="SkillHeading">RAG</h4>
                  </a>

                  {/* <a
                    className="SkillImage focus"
                    href="https://www.langchain.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={L_LANGCHAIN}
                      className="img-fluid"
                      alt="LangChain"
                    />
                    <h4 className="SkillHeading">LangChain</h4>
                  </a> */}

                  <a
                    className="SkillImage focus"
                    href="#ai-agents"
                    onClick={(e) => e.preventDefault()}
                  >
                    <img
                      src={L_AI_AGENTS}
                      className="img-fluid"
                      alt="AI Agents"
                    />
                    <h4 className="SkillHeading">AI Agents</h4>
                  </a>

                  {/* <a
                    className="SkillImage focus"
                    href="#embeddings"
                    onClick={(e) => e.preventDefault()}
                  >
                    <img
                      src={L_EMBEDDINGS}
                      className="img-fluid"
                      alt="Embeddings"
                    />
                    <h4 className="SkillHeading">Embeddings</h4>
                  </a> */}

                  {/* <a
                    className="SkillImage focus"
                    href="#vector-search"
                    onClick={(e) => e.preventDefault()}
                  >
                    <img
                      src={L_VECTOR_SEARCH}
                      className="img-fluid"
                      alt="Vector Search"
                    />
                    <h4 className="SkillHeading">Vector Search</h4>
                  </a> */}

                  <a
                    className="SkillImage focus"
                    href="https://azure.microsoft.com/en-us/products/ai-services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={L_AZURE_AI}
                      className="img-fluid"
                      alt="Azure AI"
                    />
                    <h4 className="SkillHeading">Azure AI</h4>
                  </a>
                </div>
              </Card.Body>
            </div>

            {/* ================= VERSION CONTROL & TOOLS ================= */}

            <div id="SkillsContainer3">
              <Card.Body>
                <h2 id="TitleHeading3">Version Control & Tools</h2>

                <hr id="TitleLine3" />

                <div id="CardContents2">
                  <a
                    className="GITImage focus"
                    href="https://git-scm.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_GIT} className="img-fluid" alt="Git" />
                    <h4 className="GITHeading">Git</h4>
                  </a>

                  <a
                    className="GITImage focus"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_GITHUB} className="img-fluid" alt="GitHub" />
                    <h4 className="GITHeading">GitHub</h4>
                  </a>

                  <a
                    className="SkillImage focus"
                    href="https://maven.apache.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_MAVEN} className="img-fluid" alt="Maven" />
                    <h4 className="SkillHeading">Maven</h4>
                  </a>

                  <a
                    className="SkillImage focus"
                    href="https://www.postman.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_POSTMAN} className="img-fluid" alt="Postman" />
                    <h4 className="SkillHeading">Postman</h4>
                  </a>
                </div>
              </Card.Body>
            </div>
          </div>

          {/* =================================================
              COLUMN 3
          ================================================= */}

          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            {/* ================= DATABASES ================= */}

            <div id="SkillsContainer4">
              <Card.Body>
                <h2 id="TitleHeading4">Databases</h2>

                <hr id="TitleLine4" />

                <div id="CardContents3">
                  <a
                    className="SQlImage focus"
                    href="https://www.postgresql.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={L_POSTGRESQL}
                      className="img-fluid"
                      alt="PostgreSQL"
                    />
                    <h4 className="SQLHeading">PostgreSQL</h4>
                  </a>

                  <a
                    className="SQlImage focus"
                    href="https://www.w3schools.com/sql/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_SQL} className="img-fluid" alt="SQL" />
                    <h4 className="SQLHeading">SQL</h4>
                  </a>

                  <a
                    className="mongodb focus"
                    href="https://www.mongodb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_MongoDb} className="img-fluid" alt="MongoDB" />
                    <h4 className="mongodbHeading">MongoDB</h4>
                  </a>
                </div>
              </Card.Body>
            </div>

            {/* ================= DEVOPS & CLOUD ================= */}

            <div id="SkillsContainer4">
              <Card.Body>
                <h2 id="TitleHeading4">DevOps & Cloud</h2>

                <hr id="TitleLine4" />

                <div id="CardContents3">
                  <a
                    className="SkillImage focus"
                    href="https://www.docker.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_DOCKER} className="img-fluid" alt="Docker" />
                    <h4 className="SkillHeading">Docker</h4>
                  </a>

                  <a
                    className="SkillImage focus"
                    href="https://github.com/features/actions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={L_GITHUB_ACTIONS}
                      className="img-fluid"
                      alt="GitHub Actions"
                    />
                    <h4 className="SkillHeading">GitHub Actions</h4>
                  </a>

                  <a
                    className="SkillImage focus"
                    href="https://aws.amazon.com/ec2/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_AWS} className="img-fluid" alt="AWS EC2" />
                    <h4 className="SkillHeading">AWS EC2</h4>
                  </a>

                  <a
                    className="SkillImage focus"
                    href="https://www.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_NETLIFY} className="img-fluid" alt="Netlify" />
                    <h4 className="SkillHeading">Netlify</h4>
                  </a>

                  <a
                    className="SkillImage focus"
                    href="https://railway.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={L_RAILWAY} className="img-fluid" alt="Railway" />
                    <h4 className="SkillHeading">Railway</h4>
                  </a>
                </div>
              </Card.Body>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          CORE SKILLS
          YOUR EXISTING CORE SECTION — UNCHANGED
      ========================================================= */}

      <div className="container" id="core-skills">
        <h1 className="text-center text-capitalize pt-4" id="CoreHeading">
          Core Skills
        </h1>

        <div className="row text-center mb-5">
          {/* -------- Electronics & VLSI -------- */}

          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div id="SkillsContainer1">
              <Card.Body>
                <h2 id="TitleHeading1">
                  Electronics & <p>VLSI</p>
                </h2>

                <hr id="TitleLine1" />

                <div id="CardContents1">
                  <div className="core-skill-pill">VLSI Design</div>

                  <div className="core-skill-pill">Verilog (HDL)</div>

                  <div className="core-skill-pill">Digital Logic Design</div>

                  <div className="core-skill-pill">CMOS Fundamentals</div>
                </div>
              </Card.Body>
            </div>

            {/* -------- Embedded Systems -------- */}

            <div id="SkillsContainer2">
              <Card.Body>
                <h2 id="TitleHeading2">Embedded Systems</h2>

                <hr id="TitleLine2" />

                <div id="CardContents2">
                  <div className="core-skill-pill">
                    Microcontrollers & Embedded Systems
                  </div>

                  <div className="core-skill-pill">
                    Microprocessor Architecture
                  </div>
                </div>
              </Card.Body>
            </div>
          </div>

          {/* -------- Maintenance & Planning -------- */}

          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div id="SkillsContainer1">
              <Card.Body>
                <h2 id="TitleHeading1">Maintenance & Planning</h2>

                <hr id="TitleLine1" />

                <div id="CardContents1">
                  <div className="core-skill-pill">Primavera P6 (Basics)</div>

                  <div className="core-skill-pill">
                    Preventive Maintenance Concepts
                  </div>

                  <div className="core-skill-pill">Electrical Maintenance</div>

                  <div className="core-skill-pill">Planning & Scheduling</div>
                </div>
              </Card.Body>
            </div>
          </div>

          {/* -------- Instrumentation & Control -------- */}

          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div id="SkillsContainer3">
              <Card.Body>
                <h2 id="instrumentHeading">Instrumentation & Control</h2>

                <hr id="TitleLine3" />

                <div id="CardContents2">
                  <div className="core-skill-pill">PLC</div>

                  <div className="core-skill-pill">SCADA</div>

                  <div className="core-skill-pill">HMI</div>
                </div>
              </Card.Body>
            </div>

            {/* -------- Other Skills -------- */}

            <div id="SkillsContainer4">
              <Card.Body>
                <h2 id="TitleHeading4">Other Skills</h2>

                <hr id="TitleLine4" />

                <div id="CardContents3">
                  <div className="core-skill-pill">IoT Fundamentals</div>

                  <div className="core-skill-pill">Arduino IDE</div>

                  <div className="core-skill-pill">
                    EDA Tools – Xilinx (Vivado)
                  </div>
                </div>
              </Card.Body>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PortfolioSkills;

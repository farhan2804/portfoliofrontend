import React from "react";
import Card from "react-bootstrap/Card";
import L_HTML5 from "../../assets/Images/Skills/html-5.svg";
import Container from "react-bootstrap/Container";
import L_CSS3 from "../../assets/Images/Skills/css3.svg";
import L_BOOTSTRAP from "../../assets/Images/Skills/bootstrap-4.svg";
import L_JAVASCRIPT from "../../assets/Images/Skills/javascript.svg";
import L_REACT from "../../assets/Images/Skills/react.svg";
import L_REACT_BOOTSTRAP from "../../assets/Images/Skills/react-bootstrap.svg";
import L_JAVA from "../../assets/Images/Skills/java.svg";
import L_GIT from "../../assets/Images/Skills/git-icon.svg";
import L_GITHUB_PAGES from "../../assets/Images/Skills/github.svg";
import L_Heroku from "../../assets/Images/Skills/heroku.svg";
import L_Netlify from "../../assets/Images/Skills/netlify.png";
import L_React_Router from "../../assets/Images/Skills/react-router.svg";
import L_Redux from "../../assets/Images/Skills/redux.svg";
import L_NodeJS from "../../assets/Images/Skills/nodeJS.png";
import L_ExpressJS from "../../assets/Images/Skills/expressJS.png";
import L_SQL from "../../assets/Images/Skills/sqlDataBase.png";
import L_MongoDb from "../../assets/Images/Skills/mongodb.svg";
import { useTheme } from "../Themes/ThemeProvider";
import "./Skills.scss";

const PortfolioSkills = () => {
  const { isDarkMode } = useTheme();
  return (
    <Container id="skills" className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <h1 className="text-center text-capitalize pt-4" id="TechHeading">
          Tech Skills
        </h1>
        <div className="row text-center mb-5">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12" id="Title1">
            <div id="SkillsContainer1">
              <Card.Body>
                <h2 id="TitleHeading1">Frontend</h2>
                <hr id="TitleLine1"></hr>
                <div id="CardContents1">
                  <a
                    className="HTMLImage focus"
                    href="https://en.wikipedia.org/wiki/HTML5"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_HTML5} className="img-fluid" />
                    <h5 className="HTMLHeading">HTML5</h5>
                  </a>
                  <a
                    className="CSSImage focus"
                    href="https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_CSS3} className="img-fluid" />
                    <h5 className="CSSHeading">CSS3</h5>
                  </a>
                  <a
                    className="BootStrapImage focus"
                    href="https://getbootstrap.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_BOOTSTRAP} className="img-fluid" />
                    <h5 className="BootstrapHeading ">Bootstrap5</h5>
                  </a>
                  <a
                    className="JavaScriptImage1 focus"
                    href="https://www.javascript.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_JAVASCRIPT} className="img-fluid" />
                    <h5 className="JavaScriptHeading">JavaScript</h5>
                  </a>
                  <a
                    className="ReactImage focus"
                    href="https://reactjs.org/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_REACT} className="img-fluid" />
                    <h5 className="ReactHeading">React.js</h5>
                  </a>
                  <a
                    className="ReactBootStrapImage focus"
                    href="https://react-bootstrap.github.io/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_REACT_BOOTSTRAP} className="img-fluid" />
                    <div id="ReactBootstrapHeadingContainer">
                      <h5 className="ReactBootStrapHeading">React Bootstrap</h5>
                    </div>
                  </a>
                  <a
                    className="ReactRedux focus"
                    href="https://react-redux.js.org/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_Redux} className="img-fluid" />
                    <div id="ReduxHeadingContainer">
                      <h5 className="ReduxHeading">Redux</h5>
                    </div>
                  </a>
                  <a
                    className="ReactRouter focus"
                    href="https://reactrouter.com/en/main"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_React_Router} className="img-fluid" />
                    <div id="ReactRouterHeadingContainer">
                      <h5 className="ReactRouterHeading">React Router</h5>
                    </div>
                  </a>
                </div>
              </Card.Body>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12" id="title2">
            <div id="SkillsContainer2">
              <Card.Body>
                <h2 id="TitleHeading2">
                  Programming <p>Languages</p>
                </h2>
                <hr id="TitleLine2"></hr>
                <div id="CardContents2">
                  <a
                    className="JavaScriptImage2 focus"
                    href="https://www.javascript.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_JAVASCRIPT} className="img-fluid" />
                    <h5 className="JavaScriptHeading">JavaScript</h5>
                  </a>
                  <a
                    className="JavaImage focus"
                    href="https://www.w3schools.com/java/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_JAVA} className="img-fluid" />
                    <h5 className="JavaHeading">Java</h5>
                  </a>
                </div>
              </Card.Body>
            </div>
            <div id="SkillsContainer3">
              <Card.Body>
                <h2 id="TitleHeading3">Version Control</h2>
                <hr id="TitleLine3"></hr>
                <div id="CardContents2">
                  <a
                    className="GITImage focus"
                    href="https://git-scm.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_GIT} className="img-fluid" />
                    <h5 className="GITHeading">GIT</h5>
                  </a>
                </div>
              </Card.Body>
            </div>
            <div id="SkillsContainer3">
              <Card.Body>
                <h2 id="TitleHeading3">Database</h2>
                <hr id="TitleLine3"></hr>
                <div id="CardContents2">
                  <a
                    className="SQlImage focus"
                    href="https://www.w3schools.com/sql/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_SQL} className="img-fluid" />
                    <h5 className="SQLHeading">SQL</h5>
                  </a>
                  <a
                    className="mongodb focus"
                    href="https://www.mongodb.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_MongoDb} className="img-fluid" />
                    <h5 className="mongodbHeading">MongoDB</h5>
                  </a>
                </div>
              </Card.Body>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12" id="title3">
            <div id="SkillsContainer4">
              <Card.Body>
                <h2 id="TitleHeading4">Hosting Platforms</h2>
                <hr id="TitleLine4"></hr>
                <div id="CardContents3">
                  <a
                    className="HerokuImage focus"
                    href="https://www.heroku.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_Heroku} className="img-fluid" />
                    <h5 className="HerokuHeading">Heroku</h5>
                  </a>
                  <a
                    className="GitHubImage focus"
                    href="https://pages.github.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_GITHUB_PAGES} className="img-fluid" />
                    <h5 className="GitHubHeading">GitHub Pages</h5>
                  </a>
                  <a
                    className="NetlifyImage focus"
                    href="https://www.netlify.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_Netlify} className="img-fluid" />
                    <h5 className="NetlifyHeading ">Netlify</h5>
                  </a>
                </div>
              </Card.Body>
            </div>
            <div id="SkillsContainer4">
              <Card.Body>
                <h2 id="TitleHeading4">Backend</h2>
                <hr id="TitleLine4"></hr>
                <div id="CardContents4">
                  <a
                    className="NodeJS focus"
                    href="https://nodejs.org/en"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_NodeJS} className="img-fluid" />
                    <h5 className="NodeJSHeading">Node.js</h5>
                  </a>
                  <a
                    className="ExpressJS focus"
                    href="https://expressjs.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_ExpressJS} className="img-fluid" />
                    <h5 className="ExpressJSHeading">Express.js</h5>
                  </a>
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

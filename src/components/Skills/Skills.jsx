import React from "react";
import Card from "react-bootstrap/Card";
import VlsiDesign from "../../assets/Images/Skills/vlsiDesign.png"
import hdl from "../../assets/Images/Skills/hdl.png"
import fpga from "../../assets/Images/Skills/fpga.png"
import analogDigital from "../../assets/Images/Skills/analogDigital.png"
import cmos from "../../assets/Images/Skills/cmos.png"
import microcontroller from "../../assets/Images/Skills/microcontroller.png"
import microprocessor from "../../assets/Images/Skills/microprocessor.png"
import plc from "../../assets/Images/Skills/plc.png"
import iot from "../../assets/Images/Skills/iot.png"
import arduino from "../../assets/Images/Skills/arduino.png"
import xilinx from "../../assets/Images/Skills/xilinx.png"
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
    <Container id="it-skills" className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <h1 className="text-center text-capitalize pt-4" id="TechHeading">
          IT Skills
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
                    <h4 className="HTMLHeading">HTML5</h4>
                  </a>
                  <a
                    className="CSSImage focus"
                    href="https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_CSS3} className="img-fluid" />
                    <h4 className="CSSHeading">CSS3</h4>
                  </a>
                  <a
                    className="BootStrapImage focus"
                    href="https://getbootstrap.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_BOOTSTRAP} className="img-fluid" />
                    <h4 className="BootstrapHeading ">Bootstrap5</h4>
                  </a>
                  <a
                    className="JavaScriptImage1 focus"
                    href="https://www.javascript.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_JAVASCRIPT} className="img-fluid" />
                    <h4 className="JavaScriptHeading">JavaScript</h4>
                  </a>
                  <a
                    className="ReactImage focus"
                    href="https://reactjs.org/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_REACT} className="img-fluid" />
                    <h4 className="ReactHeading">React.js</h4>
                  </a>
                  <a
                    className="ReactBootStrapImage focus"
                    href="https://react-bootstrap.github.io/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_REACT_BOOTSTRAP} className="img-fluid" />
                    <div id="ReactBootstrapHeadingContainer">
                      <h4 className="ReactBootStrapHeading">React Bootstrap</h4>
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
                      <h4 className="ReduxHeading">Redux</h4>
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
                      <h4 className="ReactRouterHeading">React Router</h4>
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
                    <h4 className="JavaScriptHeading">JavaScript</h4>
                  </a>
                  <a
                    className="JavaImage focus"
                    href="https://www.w3schools.com/java/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_JAVA} className="img-fluid" />
                    <h4 className="JavaHeading">Java</h4>
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
                    <h4 className="GITHeading">GIT</h4>
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
                    <h4 className="SQLHeading">SQL</h4>
                  </a>
                  <a
                    className="mongodb focus"
                    href="https://www.mongodb.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_MongoDb} className="img-fluid" />
                    <h4 className="mongodbHeading">MongoDB</h4>
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
                    <h4 className="HerokuHeading">Heroku</h4>
                  </a>
                  <a
                    className="GitHubImage focus"
                    href="https://pages.github.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_GITHUB_PAGES} className="img-fluid" />
                    <h4 className="GitHubHeading">GitHub Pages</h4>
                  </a>
                  <a
                    className="NetlifyImage focus"
                    href="https://www.netlify.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_Netlify} className="img-fluid" />
                    <h4 className="NetlifyHeading ">Netlify</h4>
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
                    <h4 className="NodeJSHeading">Node.js</h4>
                  </a>
                  <a
                    className="ExpressJS focus"
                    href="https://expressjs.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={L_ExpressJS} className="img-fluid" />
                    <h4 className="ExpressJSHeading">Express.js</h4>
                  </a>
                </div>
              </Card.Body>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="core-skills">
        <h1 className="text-center text-capitalize pt-4" id="CoreHeading">
          Core Skills
        </h1>
        <div className="row text-center mb-5">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12" id="Title1">
            <div id="SkillsContainer1">
              <Card.Body>
                <h2 id="TitleHeading1">Electronics & <p>VLSI</p></h2>
                <hr id="TitleLine1"></hr>
                <div id="CardContents1">
                  <a
                    className="vlsiDesign focus"
                    href="https://www.tutorialspoint.com/vlsi_design/index.htm"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={VlsiDesign} className="img-fluid" />
                    <h4 className="HTMLHeading">VLSI Design</h4>
                  </a>
                  <a
                    className="verilog focus"
                    href="https://www.javatpoint.com/verilog"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={hdl} className="img-fluid" />
                    <h4 className="CSSHeading">Verilog(HDL)</h4>
                  </a>
                  <a
                    className="fpga focus"
                    href="https://fpgatutorial.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={fpga} className="img-fluid" />
                    <h4 className="BootstrapHeading ">FPGA <p>Development</p></h4>
                  </a>
                  <a
                    className="digital focus"
                    href="https://www.geeksforgeeks.org/digital-electronics-logic-design-tutorials/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={analogDigital} className="img-fluid" />
                    <div id="ReactBootstrapHeadingContainer">
                      <h4 className="ReactBootStrapHeading">Digital & <p>Analog Electronic</p></h4>
                    </div>
                  </a>
                  <a
                    className="mosfet focus"
                    href="https://en.wikipedia.org/wiki/CMOS"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={cmos} className="img-fluid" />
                    <div id="ReduxHeadingContainer">
                      <h4 className="ReduxHeading">Mosfet/Cmos</h4>
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
                Embedded Systems
                </h2>
                <hr id="TitleLine2"></hr>
                <div id="CardContents2">
                  <a
                    className="microcontroller focus"
                    href="https://www.bharatacharyaeducation.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={microcontroller} className="img-fluid" />
                    <h4 className="microcontrollerHeading">Microcontrollers &<p>Embedded Systems</p></h4>
                  </a>
                  <a
                    className="microprocessor focus"
                    href="https://www.bharatacharyaeducation.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={microprocessor} className="img-fluid" />
                    <h4 className="microprocessorHeading">Microprocessor</h4>
                  </a>
                </div>
              </Card.Body>
            </div>
            <div id="SkillsContainer3">
              <Card.Body>
                <h2 id="instrumentHeading">Instrumentation & Control</h2>
                <hr id="TitleLine3"></hr>
                <div id="CardContents2">
                  <a
                    className="GITImage focus"
                    href="https://codeandcompile.com/"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={plc} className="img-fluid" />
                    <h4 className="GITHeading">PLC</h4>
                  </a>
                </div>
              </Card.Body>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12" id="title3">
            <div id="SkillsContainer4">
              <Card.Body>
                <h2 id="TitleHeading4">Other Skills</h2>
                <hr id="TitleLine4"></hr>
                <div id="CardContents3">
                  <a
                    className="iot focus"
                    href="https://www.youtube.com/@5MinutesEngineering"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={iot} className="img-fluid" />
                    <h4 className="HerokuHeading">IoT</h4>
                  </a>
                  <a
                    className="arduino focus"
                    href="https://www.youtube.com/playlist?list=PLGs0VKk2DiYw-L-RibttcvK-WBZm8WLEP"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={arduino} className="img-fluid" />
                    <h4 className="GitHubHeading">Arduino IDE</h4>
                  </a>
                  <a
                    className="eda focus"
                    href="https://www.synopsys.com/glossary/what-is-electronic-design-automation.html"
                    target="_blank"
                    alt="image not loaded"
                  >
                    <img src={xilinx} className="img-fluid" />
                    <h4 className="NetlifyHeading ">EDA Tool-Xilinx(Vivado)</h4>
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

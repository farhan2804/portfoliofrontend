import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -65px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: rgba(255, 255, 255, 0.63);
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => {
  return (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            Hi, I am
            <br />
            <span>
              <strong>Farhan Mahmood</strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "Programmer", "Youtube Educator", "Electrical Engineer" ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
        </div>
      </div>
    </MyTitleMessage>
  );
};

export default TitleMessage;

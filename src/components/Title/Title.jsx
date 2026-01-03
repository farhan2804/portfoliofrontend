import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const MyTitleMessage = styled.div`
  position: absolute;
  inset: 0;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  padding: 0 16px;

  .titleMessage {
    max-width: 100%;
  }

  .heading {
    color: rgba(255, 255, 255, 0.92);
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.45);
  }

  .main {
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.2;
  }

  strong {
    font-size: 1.15em;
    font-weight: 700;
  }

  .sub {
    margin-top: 10px;
    font-size: 1.4rem;
    letter-spacing: 1.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  /* =========================
     TABLET
  ========================= */
  @media (max-width: 768px) {
    .main {
      font-size: 2.4rem;
    }

    .sub {
      font-size: 1.15rem;
    }
  }

  /* =========================
     SMALL MOBILE (FIX ISSUE)
  ========================= */
  @media (max-width: 500px) {
    align-items: center;
    padding-top: 70px; /* clears navbar */

    .main {
      font-size: 1.9rem;
      line-height: 1.25;
    }

    .sub {
      font-size: 1.1rem;
      letter-spacing: 1px;
    }
  }
`;

const TitleMessage = () => {
  return (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main">
            Hi, I am
            <br />
            <strong>Farhan Mahmood</strong>
          </div>

          <div className="sub">
            <Typewriter
              options={{
                strings: [
                  "Electrical & Electronics Engineer",
                  "Full Stack Developer",
                  "Automation & Web Systems",
                  "YouTube Educator",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
        </div>
      </div>
    </MyTitleMessage>
  );
};

export default TitleMessage;

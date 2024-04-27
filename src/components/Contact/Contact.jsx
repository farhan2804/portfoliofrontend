import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useTheme } from "../Themes/ThemeProvider";
import Image from "../../assets/Images/Contact/image.svg";
import "./Contact.scss";

const PortfolioContact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };
//   const navigate = useNavigate();

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, message, } = data;

    if (!name || !email) {
      window.alert("Name and email are required.");
      return; // Prevent further execution if validation fails
    }
    try {
      const res = await fetch("https://portfoliobackend-xj5z.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      // const resData = await res.json();
      if (res.status === 201) {
        setData({ name: "", email: "", message: "" }); // Clear form on success
        window.alert("Message sent successfully");
        // navigate("/success"); // Assuming a success page route
      } else {
        window.alert("Message not sent,Either Invalid or Duplicate Email");
      }
    } catch (err) {
      console.error(err);
      window.alert("An error occurred. Please try again later.");
    }
  };

  const { isDarkMode } = useTheme();
  return (
    <div>
      <Container
        id="contact"
        className={isDarkMode ? "dark-mode" : "light-mode"}
      >
        <div id="contact" className="Contactcontainer">
          <div className="row mb-5">
            <div
              className="col-lg-6 col-md-6  col-sm-12 col-12"
              id="contactmeImageContainer"
            >
              <img
                id="contactmeImage"
                src={Image}
                alt="contact-image"
                width="400"
                height="auto"
              />
              <div id="ContactButtonContainer">
                <div className="MailButton">
                  <a
                    href="mailto:farhan.akp17el@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="danger" title="farhan.akp17el@gmail.com">
                      <i className="fas fa-envelope-square"></i> Email
                    </Button>
                  </a>
                </div>
                <div className="LinkedButton">
                  <a
                    href="https://www.linkedin.com/in/10-farhan-mahmood"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="info" title="Visit my LinkenIn">
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </Button>
                  </a>
                </div>
                <div className="GitButton">
                  <a
                    href="https://github.com/farhan2804"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="dark" title="My other projects">
                      <i className="fab fa-github-square"></i> GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 col-sm-12 col-12"
              id="formContainer"
            >
              <h1> Get in Touch</h1>
              <hr id="getinTouchHeading"></hr>
              <Form method="POST">
                <Form.Group id="formBasicText">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    id="textName"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={data.name}
                    onChange={handleInputs}
                    autoComplete="off"
                  />
                </Form.Group>
                <Form.Group id="formBasicText">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    id="textMail"
                    type="email"
                    name="email"
                    placeholder="johndoe@yahoo.com"
                    value={data.email}
                    onChange={handleInputs}
                    autoComplete="off"
                  />
                </Form.Group>
                <Form.Group id="formBasicTextArea">
                  <Form.Label>Message</Form.Label>
                  <div className="textarea-container">
                    <Form.Control
                      id="textMessage"
                      as="textarea"
                      rows="4"
                      placeholder="Your Message"
                      name="message"
                      value={data.message}
                      onChange={handleInputs}
                      autoComplete="off"
                    />
                  </div>
                </Form.Group>
                <Button
                  variant="danger"
                  id="submitButton"
                  type="submit"
                  value="message"
                  onClick={postData}
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default PortfolioContact;

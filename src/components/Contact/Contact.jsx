import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { FadeLoader } from "react-spinners";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useTheme } from "../Themes/ThemeProvider";
import "./Contact.scss";

const override = {
  display: "block",
  margin: "0 auto",
};

const PortfolioContact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { isDarkMode } = useTheme();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, message } = data;

    if (!name.trim() || !email.trim()) {
      toast.warn("Name and Email are required", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    try {
      setIsLoading(true);

      const res = await fetch("https://portfolio-versel.vercel.app/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (res.status === 201) {
        setData({
          name: "",
          email: "",
          message: "",
        });

        toast.success("Message sent successfully", {
          position: "top-center",
          autoClose: 5000,
          theme: "colored",
          transition: Bounce,
        });
      } else {
        toast.warn(
          "Message not sent. The email may be invalid or already registered.",
          {
            position: "top-center",
            autoClose: 5000,
            theme: "colored",
            transition: Bounce,
          },
        );
      }
    } catch (err) {
      console.error(err);

      toast.error("An error occurred. Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
        transition: Bounce,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="contact-section"
      data-theme={isDarkMode ? "dark" : "light"}
    >
      <ToastContainer />

      <Container className="contact-container">
        <header className="contact-header">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h1>
            Let's build <span>something great.</span>
          </h1>

          <p>
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </header>

        <div className="contact-grid">
          {/* Contact form */}
          <div className="contact-form-card">
            <Form onSubmit={postData}>
              <Form.Group className="contact-field" controlId="contactName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={data.name}
                  onChange={handleInputs}
                  autoComplete="name"
                  required
                  maxLength={100}
                />
              </Form.Group>

              <Form.Group className="contact-field" controlId="contactEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={data.email}
                  onChange={handleInputs}
                  autoComplete="email"
                  required
                  maxLength={254}
                />
              </Form.Group>

              <Form.Group
                className="contact-field contact-message-field"
                controlId="contactMessage"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Tell me about your project..."
                  value={data.message}
                  onChange={handleInputs}
                  maxLength={5000}
                />
              </Form.Group>

              <div className="contact-submit-wrap">
                <Button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  {!isLoading && (
                    <i className="fas fa-paper-plane" aria-hidden="true" />
                  )}
                </Button>

                {isLoading && (
                  <div className="contact-loader">
                    <FadeLoader
                      loading={isLoading}
                      color="#19D9BD"
                      cssOverride={override}
                      aria-label="Sending message"
                    />
                  </div>
                )}
              </div>
            </Form>
          </div>

          {/* Contact information */}
          <div className="contact-side">
            <div className="contact-info-card">
              <h2>Contact Information</h2>

              <a
                className="contact-info-item"
                href="mailto:farhanmahmood2804@gmail.com"
              >
                <span className="contact-info-icon">
                  <i className="fas fa-envelope" aria-hidden="true" />
                </span>

                <span className="contact-info-copy">
                  <span className="contact-info-label">Email</span>
                  <span className="contact-info-value">
                    johndoe@gmail.com
                  </span>
                </span>
              </a>

              <a
                className="contact-info-item"
                href="https://www.linkedin.com/in/10-farhan-mahmood"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-info-icon">
                  <i className="fab fa-linkedin-in" aria-hidden="true" />
                </span>

                <span className="contact-info-copy">
                  <span className="contact-info-label">LinkedIn</span>
                  <span className="contact-info-value">
                    Let's connect professionally
                  </span>
                </span>
              </a>

              <a
                className="contact-info-item"
                href="https://github.com/farhan2804"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-info-icon">
                  <i className="fab fa-github" aria-hidden="true" />
                </span>

                <span className="contact-info-copy">
                  <span className="contact-info-label">GitHub</span>
                  <span className="contact-info-value">
                    Explore my projects
                  </span>
                </span>
              </a>
            </div>

            <div className="contact-availability-card">
              <div className="availability-heading">
                <span className="availability-dot" />
                <h3>Open to Opportunities</h3>
              </div>

              <p>
                I'm interested in full-stack development roles and exciting
                projects involving Java, Spring Boot, React, and AI. Let's build
                something meaningful together!
              </p>

              <a
                className="availability-email"
                href="mailto:farhanmahmood2804@gmail.com"
              >
                Let's talk{" "}
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioContact;

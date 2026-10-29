import { useEffect, useRef, useState } from "react";
import "./Experience.scss";

const experiences = [
  {
    id: "grubweb",
    role: "Full-Stack Developer",
    organization: "Grubweb Service",
    period: "Apr 2023 – Present",
    type: "Professional Experience",
    points: [
      "Designed and developed an internal Project & Client Management System covering client and project management, employee assignments, task tracking, and the complete project lifecycle from onboarding to delivery.",
      "Built and shipped end-to-end web products for clients across real estate, healthcare, e-commerce, and consultancy using React.js, Next.js, Node.js, and TypeScript.",
      "Developed server-side rendered applications using Next.js App Router, focusing on fast load times and strong Core Web Vitals.",
      "Built RESTful APIs with JWT authentication and role-based access control (RBAC) for Admin, Manager, and Developer roles.",
      "Designed a normalized PostgreSQL database using Prisma ORM for clients, projects, tasks, feedback, and employee management.",
    ],
  },
];

export default function Experience() {
  const itemRefs = useRef([]);
  const [revealed, setRevealed] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean);

    if (!("IntersectionObserver" in window)) {
      setRevealed(experiences.map((item) => item.id));
      setProgress(100);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.dataset.experienceId;
          const index = Number(entry.target.dataset.experienceIndex);

          setRevealed((current) =>
            current.includes(id) ? current : [...current, id],
          );

          setProgress((current) =>
            Math.max(
              current,
              experiences.length <= 1
                ? 100
                : (index / (experiences.length - 1)) * 100,
            ),
          );

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="experience-section__inner">
        <header className="experience-section__header">
          <p className="experience-section__eyebrow">MY JOURNEY</p>
          <h2 className="experience-section__title" id="experience-title">
            Experience<span>.</span>
          </h2>
          <p className="experience-section__intro">
            The roles and hands-on training that have shaped my development
            journey.
          </p>
        </header>

        <div
          className="experience-timeline"
          style={{ "--experience-progress": `${progress}%` }}
        >
          <div className="experience-timeline__track" aria-hidden="true">
            <span className="experience-timeline__fill" />
          </div>

          {experiences.map((experience, index) => {
            const isRevealed = revealed.includes(experience.id);

            return (
              <article
                className={`experience-item${isRevealed ? " is-visible" : ""}`}
                key={experience.id}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                data-experience-id={experience.id}
                data-experience-index={index}
              >
                <span className="experience-item__marker" aria-hidden="true">
                  <span />
                </span>

                <div className="experience-item__content">
                  <div className="experience-item__meta">
                    <span className="experience-item__type">
                      {experience.type}
                    </span>
                    <span className="experience-item__period">
                      {experience.period}
                    </span>
                  </div>

                  <h3 className="experience-item__role">{experience.role}</h3>
                  <p className="experience-item__organization">
                    {experience.organization}
                  </p>

                  <ul className="experience-item__details">
                    {experience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useMemo, useRef, useState } from "react";
import "./Certifications.css";
import Certificate1 from "../../assets/Images/Certifications/cloud.png";
import Certificate2 from "../../assets/Images/Certifications/AI.png";
// import Certificate3 from "../../assets/Images/Certifications/primavera.png";
// import Certificate4 from "../../assets/Images/Certifications/kodnest.png";
import Certificate5 from "../../assets/Images/Certifications/sql.png";
import Certificate6 from "../../assets/Images/Certifications/react.png";
import Certificate7 from "../../assets/Images/Certifications/scada.png";
import Certificate8 from "../../assets/Images/Certifications/hmi.png";
import Certificate9 from "../../assets/Images/Certifications/plc.png";
import Certificate10 from "../../assets/Images/Certifications/vlsi.png";
// import Certificate11 from "../../assets/Images/Certifications/sikharthy.png";
import { useTheme } from "../Themes/ThemeProvider";

const certificates = [
  {
    image: Certificate1,
    title: "Cloud Certification",
    issuer: "Cloud / Microsoft",
    date: "",
    category: "Microsoft",
    tags: ["Cloud", "Microsoft", "Fundamentals"],
    downloadUrl: "",
    viewUrl: "",
  },
  {
    image: Certificate2,
    title: "AI Certification",
    issuer: "Artificial Intelligence",
    date: "",
    category: "AI",
    tags: ["AI", "Machine Learning"],
    downloadUrl: "",
    viewUrl: "",
  },
  {
    image: Certificate5,
    title: "SQL Certification",
    issuer: "SQL",
    date: "",
    category: "SQL",
    tags: ["SQL", "Database"],
    downloadUrl: "",
    viewUrl: "",
  },
  {
    image: Certificate6,
    title: "React Certification",
    issuer: "React",
    date: "",
    category: "React",
    tags: ["React", "Frontend"],
    downloadUrl: "",
    viewUrl: "",
  },
  {
    image: Certificate7,
    title: "SCADA Certification",
    issuer: "SCADA",
    date: "",
    category: "SCADA",
    tags: ["SCADA", "Automation"],
    downloadUrl: "",
    viewUrl: "",
  },
  {
    image: Certificate8,
    title: "HMI Certification",
    issuer: "HMI",
    date: "",
    category: "HMI",
    tags: ["HMI", "Automation"],
    downloadUrl: "",
    viewUrl: "",
  },
  {
    image: Certificate9,
    title: "PLC Certification",
    issuer: "PLC",
    date: "",
    category: "PLC",
    tags: ["PLC", "Automation"],
    downloadUrl: "",
    viewUrl: "",
  },
  {
    image: Certificate10,
    title: "VLSI Certification",
    issuer: "VLSI",
    date: "",
    category: "VLSI",
    tags: ["VLSI", "Electronics"],
    downloadUrl: "",
    viewUrl: "",
  },
];

const filters = [
  "All",
  "Microsoft",
  "AI",
  "SQL",
  "React",
  "SCADA",
  "HMI",
  "PLC",
  "VLSI",
];

const Certifications = () => {
  const sliderRef = useRef(null);
  const { isDarkMode } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleCertificates = useMemo(() => {
    if (activeFilter === "All") return certificates;
    return certificates.filter(
      (certificate) =>
        certificate.category === activeFilter ||
        certificate.tags.includes(activeFilter)
    );
  }, [activeFilter]);

  const slide = (direction) => {
    const track = sliderRef.current;
    if (!track) return;

    const firstCard = track.querySelector(".certificate-slide");
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap) || 24;
    const amount = firstCard
      ? firstCard.getBoundingClientRect().width + gap
      : track.clientWidth;

    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  const selectFilter = (filter) => {
    setActiveFilter(filter);
    if (sliderRef.current) sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
  };

  return (
    <section
      className="certifications-section"
      id="Certificates"
      data-theme={isDarkMode ? "dark" : "light"}
      aria-labelledby="certificateHeading"
    >
      <div className="certifications-container">
        <div className="certifications-kicker">
          <span className="certifications-kicker-dot" />
          CERTIFICATIONS
        </div>

        <h2 id="certificateHeading">
          Certification <span>Achievements</span>
        </h2>
        <p className="certifications-subtitle">
          Courses and certifications that validate my skills and continuous learning journey.
        </p>

        <div className="certification-filters" aria-label="Filter certificates">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={`certification-filter${activeFilter === filter ? " is-active" : ""}`}
              aria-pressed={activeFilter === filter}
              onClick={() => selectFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="certifications-carousel">
          <button
            className="certificate-slider-arrow certificate-slider-arrow-left"
            type="button"
            aria-label="Show previous certificates"
            onClick={() => slide(-1)}
          >
            <span aria-hidden="true">‹</span>
          </button>

          <div className="certifications-track" ref={sliderRef}>
            {visibleCertificates.map((certificate, index) => (
              <article className="certificate-slide" key={certificate.title}>
                <div className="certificate-card">
                  <div className="certificate-preview">
                    <img
                      src={certificate.image}
                      className="certificate-image"
                      alt={certificate.title}
                      loading="lazy"
                    />
                  </div>

                  <div className="certificate-details">
                    <h3>{certificate.title}</h3>
                    <p className="certificate-issuer">{certificate.issuer}</p>

                    <div className="certificate-tags">
                      {certificate.tags.map((tag) => (
                        <span className="certificate-tag" key={tag}>{tag}</span>
                      ))}
                    </div>

                    <div className="certificate-card-footer">
                      {certificate.date ? (
                        <span className="certificate-date">
                          <span aria-hidden="true">▦</span> {certificate.date}
                        </span>
                      ) : (
                        <span className="certificate-date certificate-date-empty" />
                      )}

                      <div className="certificate-actions">
                        <a
                          className="certificate-action"
                          href={certificate.downloadUrl || certificate.image}
                          download={!certificate.downloadUrl}
                          target={certificate.downloadUrl ? "_blank" : undefined}
                          rel={certificate.downloadUrl ? "noreferrer" : undefined}
                        >
                          <span aria-hidden="true">⇩</span> Download
                        </a>
                        <a
                          className="certificate-action certificate-view-action"
                          href={certificate.viewUrl || certificate.image}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            className="certificate-slider-arrow certificate-slider-arrow-right"
            type="button"
            aria-label="Show next certificates"
            onClick={() => slide(1)}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <div className="certifications-pagination" aria-hidden="true">
          <span className="certifications-pagination-line" />
          <span className="certifications-pagination-active" />
          {visibleCertificates.slice(1).map((certificate) => (
            <span className="certifications-pagination-dot" key={certificate.title} />
          ))}
          <span className="certifications-pagination-line" />
        </div>
      </div>
    </section>
  );
};

export default Certifications;

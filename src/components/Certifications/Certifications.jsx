import "./Certifications.css";
import Certificate1 from "../../assets/Images/Certifications/cloud.png";
import Certificate2 from "../../assets/Images/Certifications/AI.png";
import Certificate3 from "../../assets/Images/Certifications/primavera.png";
import Certificate4 from "../../assets/Images/Certifications/kodnest.png";
import Certificate5 from "../../assets/Images/Certifications/sql.png";
import Certificate6 from "../../assets/Images/Certifications/react.png";
import Certificate7 from "../../assets/Images/Certifications/scada.png";
import Certificate8 from "../../assets/Images/Certifications/hmi.png";
import Certificate9 from "../../assets/Images/Certifications/plc.png";
import Certificate10 from "../../assets/Images/Certifications/vlsi.png";
import Certificate11 from "../../assets/Images/Certifications/sikharthy.png";

const Certifications = () => {
  return (
    <div className="container" id="Certificates">
      <h1 id="certificateHeading" className="text-center">
        Certifications
      </h1>

      <div className="row justify-content-center">
        {[
          Certificate1,
          Certificate2,
          Certificate3,
          Certificate4,
          Certificate5,
          Certificate6,
          Certificate7,
          Certificate8,
          Certificate9,
          Certificate10,
          Certificate11
        ].map((cert, index) => (
          <div
            key={index}
            className="col-lg-6 col-md-6 col-sm-12 mb-4"
          >
            <div className="certificate-card">
              <img
                src={cert}
                className="img-fluid certificate-image"
                alt={`Certificate ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

import React from "react";
import "./Certifications.css";
import Certificate1 from "../../assets/Images/Certifications/Certificate1.png";
import Certificate2 from "../../assets/Images/Certifications/Certificate2.png";
import Certificate6 from "../../assets/Images/Certifications/Certificate3.png";
import Certificate10 from "../../assets/Images/Certifications/Certificate4.png";
import Certificate11 from "../../assets/Images/Certifications/Certificate5.png";
import Certificate3 from "../../assets/Images/Certifications/Certificate6.png";
import Certificate7 from "../../assets/Images/Certifications/Certificate7.png";
import Certificate8 from "../../assets/Images/Certifications/Certificate8.png";
import Certificate9 from "../../assets/Images/Certifications/Certificate9.png";
import Certificate4 from "../../assets/Images/Certifications/Certificate10.png";
import Certificate5 from "../../assets/Images/Certifications/Certificate11.png";

const Certifications = () => {
  return (
    <div className="container" id="Certificates">
      <h1 id="certificateHeading" className="text-center">Certifications</h1>
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
          <img
            src={Certificate1}
            className="img-fluid mx-auto d-block certificate-image"
            alt="Certificate 1"
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
          <img
            src={Certificate2}
            className="img-fluid mx-auto d-block certificate-image"
            alt="Certificate 2"
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
          <img
            src={Certificate3}
            className="img-fluid mx-auto d-block certificate-image"
            alt="Certificate 3"
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
          <img
            src={Certificate4}
            className="img-fluid mx-auto d-block certificate-image"
            alt="Certificate 4"
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
          <img
            src={Certificate5}
            className="img-fluid mx-auto d-block certificate-image"
            alt="Certificate 5"
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
          <img
            src={Certificate6}
            className="img-fluid mx-auto d-block certificate-image"
            alt="Certificate 6"
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
          <img
            src={Certificate7}
            className="img-fluid mx-auto d-block certificate-image"
            alt="Certificate 7"
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
          <img
            src={Certificate8}
            className="img-fluid mx-auto d-block certificate-image"
            alt="Certificate 8"
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
          <img
            src={Certificate9}
            className="img-fluid mx-auto d-block certificate-image"
            alt="Certificate 9"
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
          <img
            src={Certificate10}
            className="img-fluid mx-auto d-block certificate-image"
            alt="Certificate 10"
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
          <img
            src={Certificate11}
            className="img-fluid mx-auto d-block certificate-image"
            alt="Certificate 11"
          />
        </div>
      </div>
    </div>
  );
};

export default Certifications;

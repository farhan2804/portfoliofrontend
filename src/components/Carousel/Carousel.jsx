import React from "react";
import Image1 from "../../assets/Images/Carousel/new1.jpg";
import Image2 from "../../assets/Images/Carousel/new2.webp";
import Image3 from "../../assets/Images/Carousel/new3.png";
import Image4 from "../../assets/Images/Carousel/new4.jpg";
import Image5 from "../../assets/Images/Carousel/new5.webp";
import Image6 from "../../assets/Images/Carousel/new6.jpg";
import Carousel from "react-bootstrap/Carousel";
import ScrollDown from "../ScrollDown/ScrollDown";
import "./Carousel.scss";

const PortfolioCarousel = () => {
  return (
    <div id="home" className="carousel-container">
      <Carousel
        controls={false}
        indicators={false}
        interval={6500}   // ⬅ Slower, professional
        pause={false}
        fade              // ⬅ Smooth fade (no sliding)
      >
        {[Image1, Image2, Image3, Image4, Image5, Image6].map(
          (image, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-image-wrapper">
                <img
                  className="d-block w-100 custom-img"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
                <div className="carousel-overlay" />
              </div>
            </Carousel.Item>
          )
        )}
      </Carousel>

      <ScrollDown />
    </div>
  );
};

export default PortfolioCarousel;

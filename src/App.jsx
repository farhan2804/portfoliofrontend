import PortfolioCarousel from "./components/Carousel/Carousel.jsx";
import PortfolioAbout from "./components/About/About.jsx";
import PortfolioSkills from "./components/Skills/Skills.jsx";
import PortfolioProjects from "./components/PortfolioProjects/PortfolioProjects.jsx";
import PortfolioNavbar from "./components/Navbar/PortfolioNavbar.jsx";
import TitleMessage from "./components/Title/Title.jsx";
import PortfolioContact from "./components/Contact/Contact.jsx";
import PortfolioFooter from "./components/PortfolioFooter/PortfolioFooter.jsx";

import "./App.css";

const App = () => {
  return (
    <>
      <PortfolioNavbar />
      <PortfolioCarousel />
      <TitleMessage />
      <hr className="w-75 mx-auto pt-1" />
      <PortfolioAbout />
      <hr className="w-75 mx-auto pt-1" />
      <PortfolioSkills />
      <hr className="w-75 mx-auto pt-1" />
      <PortfolioProjects />
      <hr className="w-75 mx-auto pt-1" id="contactLine" />
      <PortfolioContact />
      <PortfolioFooter />
    </>
  );
};

export default App;

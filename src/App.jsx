import { lazy, Suspense } from "react";
import "./App.css";

const PortfolioCarousel = lazy(() =>
  import("./components/Carousel/Carousel.jsx")
);
const PortfolioAbout = lazy(() => import("./components/About/About.jsx"));
const PortfolioSkills = lazy(() => import("./components/Skills/Skills.jsx"));
const PortfolioProjects = lazy(() =>
  import("./components/PortfolioProjects/PortfolioProjects.jsx")
);
const PortfolioNavbar = lazy(() =>
  import("./components/Navbar/PortfolioNavbar.jsx")
);
const Certificates = lazy(() =>
  import("./components/Certifications/Certifications.jsx")
);
const TitleMessage = lazy(() => import("./components/Title/Title.jsx"));
const PortfolioContact = lazy(() => import("./components/Contact/Contact.jsx"));
const PortfolioFooter = lazy(() =>
  import("./components/PortfolioFooter/PortfolioFooter.jsx")
);

const App = () => {
  return (
    <>
      <PortfolioNavbar />
      <PortfolioCarousel />
      <Suspense fallback={<div>Loading Title Message...</div>}>
        <TitleMessage />
      </Suspense>
      <hr className="w-75 mx-auto pt-1" />
      <Suspense fallback={<div>Loading About...</div>}>
        <PortfolioAbout />
      </Suspense>
      <hr className="w-75 mx-auto pt-1" />
      <Suspense fallback={<div>Loading Skills...</div>}>
        <PortfolioSkills />
      </Suspense>
      <hr className="w-75 mx-auto pt-1" />
      <Suspense fallback={<div>Loading Projects...</div>}>
        <PortfolioProjects />
      </Suspense>
      <hr className="w-75 mx-auto pt-1" />
      <Suspense fallback={<div>Loading Certificates...</div>}>
        <Certificates />
      </Suspense>
      <hr className="w-75 mx-auto pt-1" id="contactLine" />
      <Suspense fallback={<div>Loading Contact...</div>}>
        <PortfolioContact />
      </Suspense>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <PortfolioFooter />
      </Suspense>
    </>
  );
};

export default App;

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/Loading/LoadingScreen.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import "./App.css";

import ProjectDetails from "./pages/ProjectDetails.jsx";

const PortfolioCarousel = lazy(
  () => import("./components/Carousel/Carousel.jsx"),
);

const PortfolioAbout = lazy(() => import("./components/About/About.jsx"));

const PortfolioSkills = lazy(() => import("./components/Skills/Skills.jsx"));

const PortfolioProjects = lazy(
  () => import("./components/PortfolioProjects/PortfolioProjects.jsx"),
);

const PortfolioExperience = lazy(
  () => import("./components/Experience/Experience.jsx"),
);

const PortfolioNavbar = lazy(
  () => import("./components/Navbar/PortfolioNavbar.jsx"),
);

const PortfolioProjectCore = lazy(
  () => import("./components/PortfolioProjectCore/PortfolioProjectCore.jsx"),
);

const Certificates = lazy(
  () => import("./components/Certifications/Certifications.jsx"),
);

const TitleMessage = lazy(() => import("./components/Title/Title.jsx"));

const PortfolioContact = lazy(() => import("./components/Contact/Contact.jsx"));

const PortfolioFooter = lazy(
  () => import("./components/PortfolioFooter/PortfolioFooter.jsx"),
);

function HomePage() {
  return (
    <>
      <PortfolioNavbar />

      <Suspense fallback={<LoadingScreen />}>
        <PortfolioCarousel />
        <TitleMessage />
        <hr className="w-75 mx-auto pt-1" />
        <PortfolioAbout />
        <PortfolioExperience />
        <hr className="w-75 mx-auto pt-1" />
        <PortfolioSkills />
        <hr className="w-75 mx-auto pt-1" />
        <PortfolioProjects />
        <PortfolioProjectCore />
        <hr className="w-75 mx-auto pt-1" />
        <Certificates />
        <hr className="w-75 mx-auto pt-1" id="contactLine" />
        <PortfolioContact />
        <PortfolioFooter />
      </Suspense>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/projects/:slug"
          element={
            <Suspense fallback={<div>Loading project details...</div>}>
              <ProjectDetails />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

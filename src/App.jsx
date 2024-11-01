import { BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";

// Lazy import de los componentes
const About = React.lazy(() => import("./components/About.jsx"));
const Contact = React.lazy(() => import("./components/Contact.jsx"));
const Experience = React.lazy(() => import("./components/Experience.jsx"));
const Feedbacks = React.lazy(() => import("./components/Feedbacks.jsx"));
const Hero = React.lazy(() => import("./components/Hero.jsx"));
const Navbar = React.lazy(() => import("./components/Navbar.jsx"));
const Tech = React.lazy(() => import("./components/Tech.jsx"));
const Works = React.lazy(() => import("./components/Works.jsx"));
const StarsCanvas = React.lazy(() => import("./components/canvas/Stars.jsx"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Works />
          <Experience />
          <Tech />
          {/* <Feedbacks /> */}
          <div className="relative z-0 bg-black">
            <Contact />
            <StarsCanvas />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;

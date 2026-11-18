import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureStrip from "./components/FeatureStrip";
import TopResources from "./components/ResourceFavorites";
import AboutSection from "./components/AboutSection";
// import ResourceFavorites from "./components/ResourceFavorites";
import WhatToExpect from "./components/WhatToExpect";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DataDeletion from "./components/DataDeletion";

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <FeatureStrip />
      <TopResources /> {/* Updated component tag */}
      <WhatToExpect />
      <AboutSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/data-deletion" element={<DataDeletion />} />
    </Routes>
  );
}

export default App;

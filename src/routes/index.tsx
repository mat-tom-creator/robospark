import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import PricingPage from "../pages/PricingPage";
import FAQPage from "../pages/FAQPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

import ProgramsPage from "../pages/ProgramsPage";
import ExplorersPage from "../pages/programs/ExplorersPage";
import InnovatorsPage from "../pages/programs/InnovatorsPage";
import EngineersPage from "../pages/programs/EngineersPage";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/explorers" element={<ExplorersPage />} />
        <Route path="/programs/innovators" element={<InnovatorsPage />} />
        <Route path="/programs/engineers" element={<EngineersPage />} />

        {/* Add a catch-all route for 404 */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

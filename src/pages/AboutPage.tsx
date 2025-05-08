import React from "react";
import MainLayout from "../components/layout/MainLayout.tsx";
import MissionSection from "../components/sections/about/MissionSection.tsx";
import TeamSection from "../components/sections/about/TeamSection.tsx";
import InceptionStorySection from "../components/sections/about/InceptionStorySection.tsx";

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-navy text-center mb-2">
            About RoboSpark
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Igniting curiosity and building tomorrow's innovators through
            engaging robotics education.
          </p>
        </div>
      </div>

      <MissionSection />
      <InceptionStorySection />
      <TeamSection />
    </MainLayout>
  );
};

export default AboutPage;

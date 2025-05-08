import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import ProgramsList from "../components/sections/programs/ProgramsList.tsx";
import { Cpu, Code, Monitor } from "lucide-react";

const ProgramsPage: React.FC = () => {
  const programs = [
    {
      title: "Spark Explorers",
      ageRange: "5-7 years",
      description:
        "An introduction to robotics fundamentals through play-based learning and screen-free coding activities.",
      icon: <Cpu size={24} className="text-white" />,
      image: "/assets/images/age-groups/explorers.png",
      color: "bg-secondary",
      href: "/programs/explorers",
    },
    {
      title: "Spark Innovators",
      ageRange: "8-12 years",
      description:
        "Develop core programming and engineering skills through engaging challenges and block-based coding.",
      icon: <Code size={24} className="text-white" />,
      image: "/assets/images/age-groups/innovators.png",
      color: "bg-primary",
      href: "/programs/innovators",
    },
    {
      title: "Spark Engineers",
      ageRange: "13-16 years",
      description:
        "Advanced robotics concepts and text-based programming for teens ready to tackle complex problems.",
      icon: <Monitor size={24} className="text-white" />,
      image: "/assets/images/age-groups/engineers.png",
      color: "bg-navy",
      href: "/programs/engineers",
    },
  ];

  return (
    <MainLayout>
      <div className="bg-background py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-navy text-center mb-3">
            Our Programs
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Age-appropriate robotics education designed to meet children where
            they are and help them grow.
          </p>

          <ProgramsList programs={programs} />

          <div className="mt-16 bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Not sure which program is right for your child?
            </h2>
            <p className="text-gray-600 mb-6">
              Take our quick assessment to find the perfect fit based on your
              child's age, experience level, and interests.
            </p>
            <Link
              to="/assessment"
              className="inline-block bg-primary text-white py-2 px-6 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Take the Assessment
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProgramsPage;

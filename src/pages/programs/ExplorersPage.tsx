import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import ProgramDetails from "../../components/sections/programs/ProgramDetails";

const ExplorersPage: React.FC = () => {
  const curriculumTopics = [
    "Introduction to Robots and How They Work",
    "Simple Machines and Mechanical Concepts",
    "Screen-Free Coding with Physical Blocks",
    "Storytelling with Robotics",
    "Basic Sensor Interactions",
    "Problem-Solving Through Play",
    "Collaborative Building Challenges",
  ];

  const learningOutcomes = [
    "Develop foundational understanding of robotics concepts",
    "Build fine motor skills through hands-on activities",
    "Foster creativity and imagination",
    "Introduce computational thinking principles",
    "Enhance communication and collaboration skills",
    "Build confidence with technology",
  ];

  const features = [
    "Monthly physical robotics kit",
    "Comprehensive activity guides",
    "Parent facilitation resources",
    "Community support forum",
  ];

  return (
    <MainLayout>
      <ProgramDetails
        title="Spark Explorers"
        ageRange="5-7"
        description="Our Explorers program introduces young children to the exciting world of robotics through play-based, hands-on activities that develop foundational STEM skills while sparking curiosity and creativity."
        color="bg-secondary"
        textColor="text-secondary"
        image="/assets/images/age-groups/explorers.png"
        learningOutcomes={learningOutcomes}
        curriculumTopics={curriculumTopics}
        features={features}
        ctaLink="/signup"
      />
    </MainLayout>
  );
};

export default ExplorersPage;

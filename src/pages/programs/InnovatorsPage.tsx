import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import ProgramDetails from "../../components/sections/programs/ProgramDetails";

const InnovatorsPage: React.FC = () => {
  const curriculumTopics = [
    "Block-Based Programming Fundamentals",
    "Robotics Design Principles",
    "Sensors and Environmental Interaction",
    "Loops, Conditions, and Variables",
    "Engineering Challenge Projects",
    "Basic Physics Concepts in Robotics",
    "Collaborative Problem-Solving",
  ];

  const learningOutcomes = [
    "Master foundational programming concepts",
    "Develop logical thinking and problem-solving skills",
    "Apply engineering design principles",
    "Enhance creativity through open-ended challenges",
    "Build teamwork and communication abilities",
    "Gain confidence in technical capabilities",
  ];

  const features = [
    "Monthly advanced robotics kit",
    "Interactive online programming platform",
    "Live virtual classes (2x monthly)",
    "Community challenges and projects",
    "Priority email & chat support",
  ];

  return (
    <MainLayout>
      <ProgramDetails
        title="Spark Innovators"
        ageRange="8-12"
        description="The Innovators program builds on basic concepts with block-based programming, engaging engineering challenges, and interactive projects that develop computational thinking and creative problem-solving skills."
        color="bg-primary"
        textColor="text-primary"
        image="/assets/images/age-groups/innovators.png"
        learningOutcomes={learningOutcomes}
        curriculumTopics={curriculumTopics}
        features={features}
        ctaLink="/signup"
      />
    </MainLayout>
  );
};

export default InnovatorsPage;

import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import ProgramDetails from "../../components/sections/programs/ProgramDetails";

const EngineersPage: React.FC = () => {
  const curriculumTopics = [
    "Text-Based Programming Languages",
    "Advanced Robotics Engineering",
    "Artificial Intelligence Fundamentals",
    "Sensor Arrays and Data Processing",
    "Complex Problem-Solving Challenges",
    "Competition Preparation",
    "Real-World Application Projects",
  ];

  const learningOutcomes = [
    "Master text-based programming languages",
    "Apply advanced engineering principles",
    "Develop sophisticated problem-solving abilities",
    "Build complex robotics systems",
    "Prepare for robotics competitions",
    "Create real-world impact projects",
    "Develop leadership and teamwork skills",
  ];

  const features = [
    "Professional-grade robotics kit",
    "Text-based programming platform",
    "Weekly live virtual classes",
    "Monthly 1-on-1 mentor sessions",
    "Competition preparation resources",
    "Priority 24/7 support",
  ];

  return (
    <MainLayout>
      <ProgramDetails
        title="Spark Engineers"
        ageRange="13-16"
        description="Our advanced Engineers program challenges teens with text-based programming, complex engineering concepts, and real-world problem-solving projects that prepare them for future STEM careers."
        color="bg-navy"
        textColor="text-navy"
        image="/assets/images/age-groups/engineers.png"
        learningOutcomes={learningOutcomes}
        curriculumTopics={curriculumTopics}
        features={features}
        ctaLink="/signup"
      />
    </MainLayout>
  );
};

export default EngineersPage;

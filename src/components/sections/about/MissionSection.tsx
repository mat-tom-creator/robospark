import React from "react";
import { Award, Target, Users } from "lucide-react";

const MissionSection: React.FC = () => {
  const values = [
    {
      title: "Experiential Learning",
      description:
        "We believe children learn best by doing. Our hands-on approach ensures concepts are deeply understood and retained.",
      icon: <Target size={24} className="text-primary" />,
    },
    {
      title: "Inclusive Education",
      description:
        "Technology education should be accessible to all children, regardless of background or prior experience.",
      icon: <Users size={24} className="text-primary" />,
    },
    {
      title: "Future-Ready Skills",
      description:
        "We prepare children not just for today's technology, but to become adaptable innovators ready for tomorrow's challenges.",
      icon: <Award size={24} className="text-primary" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img
              src="/assets/images/about/mission.png"
              alt="Children working with robots"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At RoboSpark, we're on a mission to transform how children
              interact with technology—from passive consumers to active
              creators. We believe every child deserves the opportunity to
              develop the technical fluency, creative problem-solving abilities,
              and collaborative mindset needed to thrive in an increasingly
              technology-driven world.
            </p>
            <p className="text-gray-600 mb-8">
              Founded by educators and engineers passionate about equitable STEM
              education, RoboSpark bridges the gap between play and learning
              through carefully designed robotics experiences that make complex
              concepts accessible and engaging for all children.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-background rounded-full">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-1">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

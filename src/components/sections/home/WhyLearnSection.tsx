// WhyLearnSection.tsx - Benefits of learning coding and robotics
import { Brain, BookOpen, Lightbulb, Award } from "lucide-react";
const WhyLearnSection = () => {
  const benefits = [
    {
      title: "Future-Ready Skills",
      description:
        "Prepare for careers that don't even exist yet by developing computational thinking and problem-solving abilities.",
      icon: <Brain className="w-10 h-10 text-primary" />,
    },
    {
      title: "STEM Foundation",
      description:
        "Build a strong foundation in science, technology, engineering, and mathematics through hands-on projects.",
      icon: <BookOpen className="w-10 h-10 text-primary" />,
    },
    {
      title: "Creativity & Innovation",
      description:
        "Merge artistic expression with technical skills to bring imaginative ideas to life.",
      icon: <Lightbulb className="w-10 h-10 text-primary" />,
    },
    {
      title: "Confidence Building",
      description:
        "Experience the pride of creating something that works and overcoming challenges along the way.",
      icon: <Award className="w-10 h-10 text-primary" />,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Why Learn Coding & Robotics?
          </h2>
          <p className="text-lg text-navy/80 max-w-2xl mx-auto">
            Beyond just building robots, children develop essential skills for
            the future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                {benefit.title}
              </h3>
              <p className="text-navy/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLearnSection;

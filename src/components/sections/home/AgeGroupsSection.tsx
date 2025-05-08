import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AgeGroupsSection: React.FC = () => {
  const ageGroups = [
    {
      title: "Spark Explorers",
      ageRange: "5-7 years",
      color: "bg-secondary",
      textColor: "text-secondary",
      features: [
        "Screen-free coding activities",
        "Foundational robotics concepts",
        "Interactive storytelling challenges",
        "Physical building activities",
      ],
      image: "/assets/images/age-groups/explorers.png",
      link: "/programs/explorers",
    },
    {
      title: "Spark Innovators",
      ageRange: "8-12 years",
      color: "bg-primary",
      textColor: "text-primary",
      features: [
        "Block-based programming",
        "Robot design challenges",
        "Sensor integration basics",
        "Collaborative STEM projects",
      ],
      image: "/assets/images/age-groups/innovators.png",
      link: "/programs/innovators",
    },
    {
      title: "Spark Engineers",
      ageRange: "13-16 years",
      color: "bg-navy",
      textColor: "text-navy",
      features: [
        "Text-based programming",
        "Advanced robotics concepts",
        "Real-world problem solving",
        "Competition preparation",
      ],
      image: "/assets/images/age-groups/engineers.png",
      link: "/programs/engineers",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">
            Programs for Every Age
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our age-appropriate curriculum ensures that every child receives the
            right level of challenge and support for their developmental stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ageGroups.map((group, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  src={group.image}
                  alt={group.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 opacity-20 ${group.color}`}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-xl font-bold text-white">
                    {group.title}
                  </h3>
                  <p className="text-white/80">{group.ageRange}</p>
                </div>
              </div>

              <div className="p-6 bg-white">
                <ul className="space-y-2 mb-6">
                  {group.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle
                        size={18}
                        className={`${group.textColor} mr-2 mt-0.5 flex-shrink-0`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={group.link}
                  className={`inline-block py-2 px-6 rounded-md text-white font-medium ${group.color} hover:opacity-90 transition-opacity`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeGroupsSection;

import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

interface ProgramDetailsProps {
  title: string;
  ageRange: string;
  description: string;
  color: string;
  textColor: string;
  image: string;
  learningOutcomes: string[];
  curriculumTopics: string[];
  features: string[];
  ctaLink: string;
}

const ProgramDetails: React.FC<ProgramDetailsProps> = ({
  title,
  ageRange,
  description,
  color,
  textColor,
  image,
  learningOutcomes,
  curriculumTopics,
  features,
  ctaLink,
}) => {
  return (
    <div>
      <div className={`${color}/10 py-16`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div
                className={`${textColor} uppercase font-bold tracking-wide mb-2`}
              >
                Ages {ageRange}
              </div>
              <h1 className="text-4xl font-bold text-navy mb-4">{title}</h1>
              <p className="text-gray-600 mb-6">{description}</p>
              <ul className="space-y-3 mb-8">
                {learningOutcomes.slice(0, 3).map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle
                      size={18}
                      className={`${textColor} mt-0.5 mr-2 flex-shrink-0`}
                    />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Link
                  to="/signup"
                  className={`${color} text-white py-2 px-6 rounded-md font-medium hover:${color}/90 transition-colors`}
                >
                  Start Free Trial
                </Link>
                <a
                  href="#curriculum"
                  className={`bg-white ${textColor} py-2 px-6 rounded-md font-medium border border-${textColor} hover:${color}/5 transition-colors`}
                >
                  View Curriculum
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={image}
                alt={`${title} Program`}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-16" id="curriculum">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-3">
            Curriculum Overview
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our age-appropriate curriculum provides engaging, hands-on learning
            experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-navy mb-4">
                What Students Will Learn
              </h3>
              <ul className="space-y-4">
                {curriculumTopics.map((topic, index) => (
                  <li
                    key={index}
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div
                      className={`${color}/10 ${textColor} font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0`}
                    >
                      {index + 1}
                    </div>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy mb-4">
                Learning Outcomes
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-3">
                  {learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle
                        size={18}
                        className={`${textColor} mt-0.5 mr-2 flex-shrink-0`}
                      />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-navy mb-4">
                  What's Included
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle
                          size={18}
                          className={`${textColor} mt-0.5 mr-2 flex-shrink-0`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">
              Ready to Begin Their Journey?
            </h2>
            <p className="text-gray-600 mb-8">
              Start your child's robotics adventure today with a 7-day free
              trial.
            </p>
            <Link
              to={ctaLink}
              className={`inline-flex items-center ${color} text-white py-3 px-8 rounded-md font-medium hover:${color}/90 transition-colors`}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetails;

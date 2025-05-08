import {
  Lightbulb,
  Rocket,
  Users,
  Award,
  Building,
  GraduationCap,
  Globe,
} from "lucide-react";

const InceptionStorySection = () => {
  const milestones = [
    {
      year: "2019",
      title: "The Spark",
      description:
        "While teaching robotics to underserved communities, our founder witnessed how children who engaged with technology as creators developed remarkable problem-solving abilities.",
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      color: "bg-accent",
      position: "right", // First milestone on right
    },
    {
      year: "2020",
      title: "First Pilot Program",
      description:
        "We launched our first pilot program with 50 students across 3 local schools, testing our curriculum and robotics kits with remarkable results.",
      icon: <Rocket className="w-8 h-8 text-white" />,
      color: "bg-secondary",
      position: "left", // Second milestone on left
    },
    {
      year: "2021",
      title: "Team Formation",
      description:
        "We assembled our core team of educators, engineers, and designers united by a passion for accessible robotics education.",
      icon: <Users className="w-8 h-8 text-white" />,
      color: "bg-primary",
      position: "right", // Third milestone on right
    },
    {
      year: "2022",
      title: "STEM.org Accreditation",
      description:
        "Our curriculum received STEM.org accreditation, validating our approach to integrating robotics with comprehensive STEM education.",
      icon: <Award className="w-8 h-8 text-white" />,
      color: "bg-navy",
      position: "left",
    },
    {
      year: "2023",
      title: "Headquarters Established",
      description:
        "We opened our main office and innovation lab, creating a space where we develop, test, and refine our educational technology.",
      icon: <Building className="w-8 h-8 text-white" />,
      color: "bg-secondary",
      position: "right",
    },
    {
      year: "2024",
      title: "10,000th Student",
      description:
        "We celebrated our 10,000th student, with participants now spanning 27 countries across 5 continents.",
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      color: "bg-primary",
      position: "left",
    },
    {
      year: "2025",
      title: "Global Expansion",
      description:
        "Today, RoboSpark reaches more than 25,000 students in 48 countries, with partnerships with educational institutions worldwide.",
      icon: <Globe className="w-8 h-8 text-white" />,
      color: "bg-accent",
      position: "right",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-6">Our Journey</h2>
          <p className="text-lg text-navy/80">
            From a single spark of inspiration to a global educational platform,
            the story of RoboSpark is one of passion, innovation, and impact.
          </p>
        </div>

        {/* Timeline Flowchart */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300"></div>

          {milestones.map((milestone, index) => (
            <div key={index} className="relative mb-32">
              {/* Year circle on the center line */}
              <div className="hidden md:flex absolute left-1/2 top-10 transform -translate-x-1/2 z-20 w-16 h-16 rounded-full bg-white border-2 border-gray-300 items-center justify-center">
                <span className="font-bold text-lg text-navy">
                  {milestone.year}
                </span>
              </div>

              {/* Content box layout with increased spacing */}
              <div className="flex items-start md:items-center justify-center">
                {/* Mobile year and title (only for mobile) */}
                <div className="md:hidden flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center mr-4">
                    <span className="font-bold text-navy">
                      {milestone.year}
                    </span>
                  </div>
                  <span className="font-bold text-xl text-navy">
                    {milestone.title}
                  </span>
                </div>

                {/* Left side content or empty space */}
                <div
                  className={`w-full md:w-1/2 md:pr-12 lg:pr-16 xl:pr-24 flex ${
                    milestone.position === "left"
                      ? "justify-end"
                      : "justify-end md:invisible"
                  }`}
                >
                  {milestone.position === "left" && (
                    <div className="w-full md:max-w-md bg-white p-6 rounded-xl shadow-md flex">
                      <div
                        className={`${milestone.color} rounded-full p-3 flex-shrink-0 mr-4`}
                      >
                        {milestone.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-navy/70">{milestone.description}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Center spacing to accommodate the timeline */}
                <div className="hidden md:block w-8"></div>

                {/* Right side content or empty space */}
                <div
                  className={`w-full md:w-1/2 md:pl-12 lg:pl-16 xl:pl-24 flex ${
                    milestone.position === "right"
                      ? "justify-start"
                      : "justify-start md:invisible"
                  }`}
                >
                  {milestone.position === "right" && (
                    <div className="w-full md:max-w-md bg-white p-6 rounded-xl shadow-md flex">
                      <div
                        className={`${milestone.color} rounded-full p-3 flex-shrink-0 mr-4`}
                      >
                        {milestone.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-navy/70">{milestone.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-navy mb-4">
            The Future Is Bright
          </h3>
          <p className="text-lg text-navy/80 mb-6">
            As we look ahead, our vision is to make robotics education
            accessible to every child worldwide, breaking barriers of geography,
            income, and background. We're constantly innovating our curriculum,
            building smarter tools, and forming partnerships to reach more young
            minds.
          </p>
          <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary italic">
            <p className="text-navy">
              "Our journey is just beginning. Every child has the potential to
              be an innovator, and our mission is to provide the spark that
              ignites their technological creativity."
            </p>
            <p className="text-navy font-medium mt-2">
              — Dr. Maya Rodriguez, Founder & CEO at RoboSpark
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InceptionStorySection;

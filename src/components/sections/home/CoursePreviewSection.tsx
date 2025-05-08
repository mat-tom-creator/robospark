import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";
import { Rocket, Code, Cpu } from "lucide-react";

const CoursePreviewSection = () => {
  const navigate = useNavigate();

  const courses = [
    {
      title: "Spark Explorers",
      ageRange: "5-7 years",
      description:
        "Playful introduction to robotics concepts through screen-free activities and simple building challenges.",
      color: "bg-secondary",
      icon: <Rocket className="w-6 h-6" />,
      path: "/programs/explorers",
    },
    {
      title: "Spark Innovators",
      ageRange: "8-12 years",
      description:
        "Block-based coding and robotics projects that teach fundamental engineering and programming concepts.",
      color: "bg-primary",
      icon: <Code className="w-6 h-6" />,
      path: "/programs/innovators",
    },
    {
      title: "Spark Engineers",
      ageRange: "13-16 years",
      description:
        "Advanced programming with Python and complex robotics challenges inspired by real-world problems.",
      color: "bg-navy",
      icon: <Cpu className="w-6 h-6" />,
      path: "/programs/engineers",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Programs for Every Age
          </h2>
          <p className="text-lg text-navy/80 max-w-2xl mx-auto">
            Our curriculum grows with your child, providing age-appropriate
            challenges and concepts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div
                className={`${course.color} p-4 text-white flex justify-between items-center`}
              >
                <h3 className="text-xl font-semibold">{course.title}</h3>
                {course.icon}
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-background text-navy/70 rounded-full text-sm mb-4">
                  Ages: {course.ageRange}
                </div>
                <p className="text-navy/80 mb-6">{course.description}</p>
                <Button
                  variant="outline"
                  className="py-1.5 px-3 text-sm"
                  onClick={() => navigate(course.path)}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="primary" onClick={() => navigate("/programs")}>
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursePreviewSection;

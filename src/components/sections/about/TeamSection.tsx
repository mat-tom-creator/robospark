import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Maya Rodriguez",
      role: "Founder & CEO",
      bio: "Former MIT robotics researcher with a passion for making technology accessible to children of all backgrounds.",
      image: "/assets/images/about/maya.jpeg",
      social: {
        linkedin: "https://linkedin.com/in/maya-rodriguez",
        email: "maya@robospark.example.com",
      },
    },
    {
      name: "Jamal Washington",
      role: "Head of Curriculum",
      bio: "20+ years in education with expertise in developing engaging STEM programs for elementary and middle school students.",
      image: "/assets/images/about/jamal.jpeg",
      social: {
        linkedin: "https://linkedin.com/in/jamal-washington",
        email: "jamal@robospark.example.com",
      },
    },
    {
      name: "Alex Chen",
      role: "Lead Engineer",
      bio: "Robotics engineer specializing in creating intuitive, durable educational robots for young learners.",
      image: "/assets/images/about/michael.jpeg",
      social: {
        linkedin: "https://linkedin.com/in/alex-chen",
        github: "https://github.com/alexchen",
        email: "alex@robospark.example.com",
      },
    },
    {
      name: "Dr. Priya Patel",
      role: "Educational Researcher",
      bio: "Child development expert focused on the intersection of play, technology, and learning outcomes.",
      image: "/assets/images/about/priya.jpeg",
      social: {
        linkedin: "https://linkedin.com/in/priya-patel",
        email: "priya@robospark.example.com",
      },
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-navy text-center mb-3">
          Meet Our Team
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Passionate educators, engineers, and innovators dedicated to inspiring
          the next generation of tech creators.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>

                <div className="flex space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-primary transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-navy hover:text-primary transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

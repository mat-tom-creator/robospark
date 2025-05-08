import React from "react";
import ProgramCard from "../../common/ProgramCard";

interface Program {
  title: string;
  ageRange: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  color: string;
  href: string;
}

interface ProgramsListProps {
  programs: Program[];
}

const ProgramsList: React.FC<ProgramsListProps> = ({ programs }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {programs.map((program, index) => (
        <ProgramCard
          key={index}
          title={program.title}
          ageRange={program.ageRange}
          description={program.description}
          icon={program.icon}
          image={program.image}
          color={program.color}
          href={program.href}
        />
      ))}
    </div>
  );
};

export default ProgramsList;

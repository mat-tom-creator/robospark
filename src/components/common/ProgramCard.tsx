import React from "react";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  ageRange: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  color: string;
  href: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  ageRange,
  description,
  icon,
  image,
  color,
  href,
}) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl bg-white">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className={`absolute top-4 right-4 p-2 rounded-full ${color}`}>
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy mb-1">{title}</h3>
        <p className="text-sm font-medium text-secondary mb-3">{ageRange}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={href}
          className="inline-flex items-center text-primary font-medium hover:underline"
        >
          Learn more <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ProgramCard;

import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col items-start p-6 transition-all duration-300 bg-white border rounded-lg shadow-sm hover:shadow-md border-gray-100">
      <div className="p-3 mb-4 text-white rounded-full bg-primary">
        <img
          src={`/assets/icons/${icon}.svg`}
          alt={title}
          className="w-6 h-6"
        />
      </div>
      <h3 className="mb-2 text-xl font-bold text-navy">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;

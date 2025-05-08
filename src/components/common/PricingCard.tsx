import React from "react";
import { CheckCircle } from "lucide-react";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: number;
  period: string;
  features: PricingFeature[];
  isPopular?: boolean;
  buttonText: string;
  onButtonClick: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  features,
  isPopular = false,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div
      className={`relative rounded-xl bg-white shadow-md p-6 ${
        isPopular ? "border-2 border-primary" : ""
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-white py-1 px-4 text-xs font-bold rounded-bl-lg rounded-tr-lg">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold text-navy">${price}</span>
        <span className="text-gray-500">/{period}</span>
      </div>
      <ul className="mb-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle
              size={18}
              className="text-secondary mt-0.5 mr-2 flex-shrink-0"
            />
            <span className="text-navy">{feature.text}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onButtonClick}
        className={`w-full py-2 rounded-md text-white font-medium transition-colors ${
          isPopular
            ? "bg-primary hover:bg-primary/90"
            : "bg-secondary hover:bg-secondary/90"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;

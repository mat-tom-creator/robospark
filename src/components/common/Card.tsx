import React from "react";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 transition-shadow hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

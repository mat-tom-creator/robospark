import React from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Cpu } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center mb-5">
            <Cpu size={24} className="text-primary mr-2" />
            <span className="text-xl font-bold text-navy">RoboSpark</span>
          </Link>
          <h1 className="text-2xl font-bold text-navy">{title}</h1>
          {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

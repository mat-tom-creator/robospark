import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Cpu, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Cpu size={24} className="text-primary mr-2" />
            <span className="text-xl font-bold text-navy">RoboSpark</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/programs"
              className="text-navy hover:text-primary transition-colors"
            >
              Programs
            </Link>
            <Link
              to="/pricing"
              className="text-navy hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-navy hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/faq"
              className="text-navy hover:text-primary transition-colors"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="text-navy hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-primary font-medium hover:underline"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-navy hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-md">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/programs"
                className="text-navy hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>
              <Link
                to="/pricing"
                className="text-navy hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-navy hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/faq"
                className="text-navy hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="text-navy hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex space-x-4 pt-2">
                <Link
                  to="/login"
                  className="text-primary font-medium hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-primary/90 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

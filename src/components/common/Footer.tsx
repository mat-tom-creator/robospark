import React from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <Cpu size={24} className="text-secondary mr-2" />
              <span className="text-xl font-bold">RoboSpark</span>
            </Link>
            <p className="text-white/80 mb-6">
              Igniting curiosity and building tomorrow's innovators through
              engaging robotics education for children ages 5–16.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-secondary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-secondary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-secondary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-secondary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/programs/explorers"
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  Spark Explorers (5–7)
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/innovators"
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  Spark Innovators (8–12)
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/engineers"
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  Spark Engineers (13–16)
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail
                  size={18}
                  className="text-secondary mt-0.5 mr-2 flex-shrink-0"
                />
                <a
                  href="mailto:info@robospark.example.com"
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  info@robospark.example.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone
                  size={18}
                  className="text-secondary mt-0.5 mr-2 flex-shrink-0"
                />
                <a
                  href="tel:+12025550157"
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  (202) 555-0157
                </a>
              </li>
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="text-secondary mt-0.5 mr-2 flex-shrink-0"
                />
                <span className="text-white/80">
                  123 Innovation Way
                  <br />
                  Boston, MA 02110
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RoboSpark. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/terms"
              className="text-white/60 text-sm hover:text-secondary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="text-white/60 text-sm hover:text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

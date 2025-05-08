import { Link } from "react-router-dom";
import Button from "../../common/Button";
import FeatureCard from "../../common/FeatureCard";
import { features } from "../../../utils/constants";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
            Why Choose RoboSpark?
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive platform blends hands-on robotics with interactive
            coding to create an engaging learning experience for children of all
            ages.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link to="/methodology">
            <Button variant="secondary">Learn About Our Methodology</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

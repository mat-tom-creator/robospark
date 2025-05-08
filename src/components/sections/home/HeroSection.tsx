import { Link } from "react-router-dom";
import Button from "../../common/Button";
import { socialProofs } from "../../../utils/constants";

const HeroSection = () => {
  return (
    <section className="py-16 bg-background md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center md:flex-row md:gap-12">
          {/* Text Content */}
          <div className="w-full mb-10 md:w-1/2 md:mb-0">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-navy md:text-5xl lg:text-6xl">
              Spark Your Child's Tech Journey With Robotics
            </h1>
            <p className="mb-8 text-lg text-gray-700">
              Empower your child with the skills of the future through our
              hands-on robotics and coding programs. Perfect for ages 5-16, with
              expert guidance and engaging curriculum.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link to="/signup">
                <Button variant="primary" className="w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" className="w-full sm:w-auto">
                  Explore Programs
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center mt-10 space-x-8">
              <div>
                <p className="text-2xl font-bold text-primary">
                  {socialProofs.userCount}
                </p>
                <p className="text-sm text-gray-600">Happy Students</p>
              </div>
              <div>
                <div className="flex items-center">
                  <p className="text-2xl font-bold text-primary">
                    {socialProofs.rating}
                  </p>
                  <div className="flex ml-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-5 h-5 ${
                          i < Math.floor(socialProofs.rating)
                            ? "text-accent"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  {socialProofs.reviewCount} Reviews
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/assets/images/hero-image.png"
              alt="Child engaging with a robot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

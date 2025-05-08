import React from "react";
import { CheckCircle, Gift, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const PricingPreviewSection: React.FC = () => {
  const plans = [
    {
      title: "Explorer Plan",
      price: 29,
      features: [
        "Access to Explorer curriculum",
        "Monthly physical robotics kit",
        "Online community access",
        "Email support",
      ],
      popular: false,
    },
    {
      title: "Innovator Plan",
      price: 59,
      features: [
        "Access to Explorer & Innovator curriculum",
        "Monthly physical robotics kit",
        "Live virtual classes (2x/month)",
        "Online community access",
        "Priority email & chat support",
      ],
      popular: true,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">
            Affordable Plans for Every Family
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose a plan that works for your child's learning journey with no
            long-term commitments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 ${
                plan.popular ? "border-2 border-primary relative" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white py-1 px-4 text-xs font-bold rounded-bl-lg rounded-tr-lg">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-xl font-bold text-navy mb-2">{plan.title}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-navy">
                  ${plan.price}
                </span>
                <span className="text-gray-500">/month</span>
              </div>

              <ul className="mb-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle
                      size={18}
                      className="text-secondary mt-0.5 mr-2 flex-shrink-0"
                    />
                    <span className="text-navy">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 rounded-md text-white font-medium transition-colors ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-secondary hover:bg-secondary/90"
                }`}
              >
                Start Free Trial
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/pricing"
            className="text-primary font-medium hover:underline inline-flex items-center"
          >
            View all pricing plans and special offers
          </Link>

          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <Gift size={20} className="text-accent mr-2" />
              <span className="text-sm">7-day free trial</span>
            </div>
            <div className="flex items-center">
              <Clock size={20} className="text-accent mr-2" />
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreviewSection;

import React from "react";
import PricingCard from "../../common/PricingCard";

const PricingPlans: React.FC = () => {
  const plans = [
    {
      title: "Explorer Plan",
      price: 29,
      period: "month",
      features: [
        { text: "Access to Explorer curriculum" },
        { text: "Monthly physical robotics kit" },
        { text: "Online community access" },
        { text: "Email support" },
        { text: "Quarterly progress reports" },
      ],
      isPopular: false,
      buttonText: "Start Free Trial",
    },
    {
      title: "Innovator Plan",
      price: 59,
      period: "month",
      features: [
        { text: "Access to Explorer & Innovator curriculum" },
        { text: "Monthly physical robotics kit" },
        { text: "Live virtual classes (2x/month)" },
        { text: "Online community access" },
        { text: "Priority email & chat support" },
        { text: "Monthly progress reports" },
      ],
      isPopular: true,
      buttonText: "Start Free Trial",
    },
    {
      title: "Engineer Plan",
      price: 99,
      period: "month",
      features: [
        { text: "Access to all curriculum levels" },
        { text: "Advanced monthly robotics kit" },
        { text: "Weekly live virtual classes" },
        { text: "1-on-1 mentor sessions (monthly)" },
        { text: "Competition preparation" },
        { text: "Priority 24/7 support" },
        { text: "Detailed weekly progress reports" },
      ],
      isPopular: false,
      buttonText: "Start Free Trial",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-navy text-center mb-3">
          Choose Your Plan
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Flexible subscription options to fit your child's learning journey.
          All plans include a 7-day free trial.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              isPopular={plan.isPopular}
              buttonText={plan.buttonText}
              onButtonClick={() => console.log(`Selected ${plan.title}`)}
            />
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-navy mb-3">
            All Plans Include:
          </h3>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              <span>No long-term commitment</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              <span>Free shipping of physical kits</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              <span>Curriculum updates</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              <span>Parent dashboard access</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              <span>Satisfaction guarantee</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              <span>STEM.org accredited content</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;

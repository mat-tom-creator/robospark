import React from "react";
import MainLayout from "../components/layout/MainLayout";
import PricingPlans from "../components/sections/pricing/PricingPlans";
import SpecialOffers from "../components/sections/pricing/SpecialOffers";
import FAQ from "../components/common/FAQ";

const PricingPage: React.FC = () => {
  const pricingFaqs = [
    {
      question: "Can I switch between plans?",
      answer:
        "Yes! You can upgrade or downgrade your subscription at any time. Changes will be applied to your next billing cycle, and kit shipments will adjust accordingly.",
    },
    {
      question: "Is there a commitment period?",
      answer:
        "No long-term commitment is required. All plans are month-to-month and can be canceled anytime. Annual subscriptions offer a 20% discount but can be refunded on a prorated basis if canceled early.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, all plans come with a 7-day free trial. You can explore the platform, access sample curriculum, and get a feel for the experience before being charged.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "If you're unsatisfied with your subscription for any reason, you can request a refund within 30 days of your first payment. For physical kits, they must be returned in their original condition.",
    },
  ];

  return (
    <MainLayout>
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-navy text-center mb-2">
            Pricing Plans
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Affordable subscriptions designed to grow with your child's robotics
            journey.
          </p>
        </div>
      </div>

      <PricingPlans />
      <SpecialOffers />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-navy text-center mb-8">
              Common Questions
            </h2>
            <FAQ faqs={pricingFaqs} />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PricingPage;

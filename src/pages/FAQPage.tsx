import React from "react";
import MainLayout from "../components/layout/MainLayout";
import FAQList from "../components/sections/faq/FAQList";

const FAQPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-navy text-center mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Find answers to common questions about our programs, subscriptions,
            and more.
          </p>
        </div>
      </div>

      <FAQList />
    </MainLayout>
  );
};

export default FAQPage;

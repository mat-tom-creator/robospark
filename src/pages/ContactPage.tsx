import React from "react";
import MainLayout from "../components/layout/MainLayout";
import ContactForm from "../components/sections/contact/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-navy text-center mb-2">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Have questions or feedback? We're here to help you on your robotics
            journey.
          </p>
        </div>
      </div>

      <ContactForm />
    </MainLayout>
  );
};

export default ContactPage;

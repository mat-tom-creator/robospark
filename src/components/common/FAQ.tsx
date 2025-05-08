import React from "react";
import Accordion from "./Accordion";

interface FAQProps {
  title?: string;
  faqs: {
    question: string;
    answer: React.ReactNode;
  }[];
}

const FAQ: React.FC<FAQProps> = ({ title, faqs }) => {
  const accordionItems = faqs.map((faq) => ({
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <div className="py-8">
      {title && (
        <h2 className="text-2xl font-bold text-navy mb-6 text-center">
          {title}
        </h2>
      )}
      <div className="max-w-3xl mx-auto">
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
};

export default FAQ;

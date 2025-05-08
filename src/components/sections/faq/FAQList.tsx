import React from "react";
import FAQ from "../../common/FAQ";
import { Mail } from "lucide-react";

const FAQList: React.FC = () => {
  const generalFaqs = [
    {
      question: "What age groups are RoboSpark programs designed for?",
      answer:
        "RoboSpark offers programs for children ages 5-16, divided into three age groups: Spark Explorers (5-7 years), Spark Innovators (8-12 years), and Spark Engineers (13-16 years). Each program is specifically designed for the developmental abilities and interests of these age ranges.",
    },
    {
      question:
        "Do I need to buy any special equipment or have prior experience?",
      answer:
        "No prior experience is needed! All necessary robotics kits and materials are included in your subscription and shipped directly to your door. Our curriculum starts from the very basics and gradually builds skills over time.",
    },
    {
      question: "How much parental involvement is required?",
      answer:
        "For Spark Explorers (5-7), we recommend some parental guidance, especially for the physical building components. For Innovators and Engineers (8+), most children can work independently, though we encourage parents to take an interest in their projects. We provide clear guidelines for parents with each activity.",
    },
    {
      question: "What if my child has never coded before?",
      answer:
        "Our curriculum is designed assuming no prior coding experience. We start with simple, visual programming concepts and gradually introduce more complex ideas as children progress. Every child moves at their own pace!",
    },
  ];

  const subscriptionFaqs = [
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
      question: "What happens to the robotics kits if I cancel?",
      answer:
        "All robotics kits that have been shipped to you remain yours to keep, even after cancellation. You'll retain access to basic instructions for these kits, but full curriculum access requires an active subscription.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. International shipping fees may apply depending on your location. Please check our shipping policy for details specific to your country.",
    },
  ];

  const technicalFaqs = [
    {
      question: "What devices are compatible with the RoboSpark platform?",
      answer:
        "Our platform works on most modern devices, including computers (Windows, Mac, Chromebook), tablets, and smartphones (iOS and Android). For the best experience, we recommend a device with a screen larger than 7 inches.",
    },
    {
      question: "Is internet access required?",
      answer:
        "Internet access is required for accessing the curriculum, virtual classes, and community features. However, once downloaded, many of our activities can be completed offline. All progress will sync when you reconnect.",
    },
    {
      question: "How do I get technical support if I need help?",
      answer:
        "Technical support is available via email, chat, and phone depending on your subscription level. All members have access to our comprehensive help center and community forums where questions are often answered quickly.",
    },
    {
      question: "Are the robotics kits reusable for multiple projects?",
      answer:
        "Yes! Our kits are designed to be modular and reusable. Each monthly kit builds on previous ones, allowing for increasingly complex projects and encouraging creative experimentation beyond the guided activities.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-navy text-center mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Find answers to common questions about RoboSpark programs,
          subscriptions, and technical details.
        </p>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-navy mb-4">
            General Questions
          </h3>
          <FAQ faqs={generalFaqs} />

          <h3 className="text-xl font-bold text-navy mt-12 mb-4">
            Subscription & Shipping
          </h3>
          <FAQ faqs={subscriptionFaqs} />

          <h3 className="text-xl font-bold text-navy mt-12 mb-4">
            Technical Details
          </h3>
          <FAQ faqs={technicalFaqs} />

          <div className="mt-12 bg-background p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold text-navy mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Our team is here to help with any questions not covered in our
              FAQ.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-primary text-white py-2 px-6 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail size={18} className="mr-2" /> Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQList;

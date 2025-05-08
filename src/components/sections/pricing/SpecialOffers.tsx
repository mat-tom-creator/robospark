import React from "react";
import { Gift, Users, Calendar } from "lucide-react";
import Card from "../../common/Card";

const SpecialOffers: React.FC = () => {
  const offers = [
    {
      title: "Family Discount",
      description:
        "Enroll multiple children and save 15% on each additional subscription.",
      icon: <Users size={24} className="text-primary" />,
      code: "FAMILY15",
    },
    {
      title: "Annual Subscription",
      description:
        "Save 20% when you prepay for a full year of any subscription plan.",
      icon: <Calendar size={24} className="text-primary" />,
      code: "ANNUAL20",
    },
    {
      title: "Educator Discount",
      description:
        "Teachers and education professionals receive 25% off any plan with verification.",
      icon: <Gift size={24} className="text-primary" />,
      code: "TEACH25",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-navy text-center mb-3">
          Special Offers
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Take advantage of these special discounts to make RoboSpark even more
          accessible.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <Card key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                {offer.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                {offer.title}
              </h3>
              <p className="text-gray-600 mb-4">{offer.description}</p>
              <div className="bg-background py-2 px-4 rounded-md inline-block">
                <span className="font-bold">Code: </span>
                {offer.code}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-accent/10 p-8 rounded-lg max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold text-navy mb-3">
            Scholarship Program
          </h3>
          <p className="text-gray-600 mb-4">
            We believe robotics education should be accessible to all children.
            Our scholarship program provides reduced-cost or free subscriptions
            to families in need.
          </p>
          <button className="bg-accent text-white py-2 px-6 rounded-md font-medium hover:bg-accent/90 transition-colors">
            Apply for Scholarship
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;

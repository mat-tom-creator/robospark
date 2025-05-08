import React from "react";
import TestimonialCard from "../../common/TestimonialCard";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "RoboSpark has completely transformed my son's interest in technology. The hands-on projects keep him engaged for hours, and I love seeing his confidence grow with each new skill.",
      name: "Sarah Johnson",
      title: "Parent of Alex, 9",
      image: "/assets/images/testimonials/testimonial1.jpeg",
      rating: 4.5,
    },
    {
      quote:
        "As an educator, I'm impressed by the curriculum's balance of fun and learning. My students look forward to our robotics sessions and are developing valuable problem-solving skills.",
      name: "Michael Chen",
      title: "Elementary STEM Teacher",
      image: "/assets/images/testimonials/testimonial2.jpeg",
      rating: 5,
    },
    {
      quote:
        "My daughter was initially hesitant about robotics, but the kid-friendly approach got her hooked. Now she's programming her own robots and considering engineering as a future career!",
      name: "Priya Patel",
      title: "Parent of Leela, 11",
      image: "/assets/images/testimonials/testimonial3.jpeg",
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            What Our Community Says
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Join thousands of families already experiencing the RoboSpark
            difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

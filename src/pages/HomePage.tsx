import React from "react";
import MainLayout from "../components/layout/MainLayout";
import HeroSection from "../components/sections/home/HeroSection";
import FeaturesSection from "../components/sections/home/FeaturesSection";
import PricingPreviewSection from "../components/sections/home/PricingPreviewSection";
import TestimonialsSection from "../components/sections/home/TestimonialSection";
import WhyLearnSection from "../components/sections/home/WhyLearnSection";
import StatisticsSection from "../components/sections/home/StatisticsSection";
import CoursePreviewSection from "../components/sections/home/CoursePreviewSection";
import InceptionStorySection from "../components/sections/home/InceptionStorySection";

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <WhyLearnSection />
      <StatisticsSection />

      {/* Features and testimonials sections */}
      <FeaturesSection />
      <CoursePreviewSection />
      <InceptionStorySection />

      {/* Age groups and testimonials sections */}
      <TestimonialsSection />
      <PricingPreviewSection />

      {/* Call-to-action section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Spark Your Child's Tech Journey?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of families already experiencing the RoboSpark
            difference with our 7-day free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-white text-primary py-3 px-8 rounded-md font-medium hover:bg-white/90 transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="/programs"
              className="bg-transparent text-white py-3 px-8 rounded-md font-medium border border-white hover:bg-white/10 transition-colors"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;

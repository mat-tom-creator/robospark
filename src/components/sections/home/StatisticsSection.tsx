// StatisticsSection.tsx - Student statistics and social proof
const StatisticsSection = () => {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          <div>
            <div className="text-4xl font-bold mb-2">25,000+</div>
            <div className="text-white/80">Students Worldwide</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">48</div>
            <div className="text-white/80">Countries Reached</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">4.8/5</div>
            <div className="text-white/80">Parent Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">89%</div>
            <div className="text-white/80">Continue to Advanced Courses</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

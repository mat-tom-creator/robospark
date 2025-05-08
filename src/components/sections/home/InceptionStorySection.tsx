import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";

const InceptionStorySection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">
            Our Journey Began With a Spark
          </h2>
          <p className="text-lg text-navy/80 mb-8">
            RoboSpark was born from a simple observation: children who engage
            with technology as creators, not just consumers, develop incredible
            problem-solving abilities. In 2019, our founder witnessed this
            firsthand when teaching robotics to underserved communities.
          </p>
          <p className="text-lg text-navy/80 mb-8">
            That single spark of inspiration has grown into a global platform
            dedicated to making robotics education accessible, engaging, and
            effective for all children.
          </p>
          <Button variant="outline" onClick={() => navigate("/about")}>
            Read Our Full Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InceptionStorySection;

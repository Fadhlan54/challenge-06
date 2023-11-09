import TestimonialHeader from "./TestimonialHeader";
import TestimonialContent from "./TestimonialContent";
import "./Testimonial.css";

const TestimonialSection = () => {
  return (
    <section className="testimonial my-5" id="testimonial-section">
      <TestimonialHeader />
      <TestimonialContent />
    </section>
  );
};

export default TestimonialSection;

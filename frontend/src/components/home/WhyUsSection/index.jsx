import WhyUsHeader from "./WhyUsHeader";
import WhyUsContent from "./WhyUsContent";
import "./WhyUsSection.css";

const WhyUsSection = () => {
  return (
    <>
      <section className="why-us my-5" id="why-us-section">
        <WhyUsHeader />
        <WhyUsContent />
      </section>
    </>
  );
};

export default WhyUsSection;

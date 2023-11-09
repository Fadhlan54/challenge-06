import ServicesImg from "./ServicesImg";
import ServicesText from "./SevicesText";
import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <section className="services-section pt-4 mb-5" id="services-section">
      <div className="container-md d-flex flex-wrap pe-0 mt-2">
        <div className="row">
          <ServicesImg />
          <ServicesText />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

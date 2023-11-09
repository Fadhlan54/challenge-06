import FaqDesc from "./FaqDesc";
import Accordion from "./Accordion";

const FaqSection = () => {
  return (
    <>
      <section className="faq" id="faq-section">
        <div className="container-fluid">
          <div className="row d-flex flex-wrap justify-content-center">
            <FaqDesc />
            <Accordion />
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;

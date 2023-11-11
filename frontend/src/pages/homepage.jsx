import Main from "../components/Home/MainSection/Index";
import Navbar from "../components/Home/Navbar/Index";
import "../App.css";
import ServicesSection from "../components/Home/ServicesSection";
import WhyUsSection from "../components/Home/WhyUsSection";
import TestimonialSection from "../components/Home/TestimonialSection";
import GettingStartedSection from "../components/Home/GettingStartedSection";
import FaqSection from "../components/Home/FaqSection";
import FooterSection from "../components/Home/FooterSection";

function HomePage() {
  return (
    <>
      <Navbar />
      <Main />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialSection />
      <GettingStartedSection />
      <FaqSection />
      <FooterSection />
    </>
  );
}

export default HomePage;

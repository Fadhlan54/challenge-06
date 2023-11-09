import Main from "../components/home/MainSection/Index";
import Navbar from "../components/home/Navbar/Index";
import "../App.css";
import ServicesSection from "../components/home/ServicesSection";
import WhyUsSection from "../components/home/WhyUsSection";
import TestimonialSection from "../components/home/TestimonialSection";
import GettingStartedSection from "../components/home/GettingStartedSection";
import FaqSection from "../components/home/FaqSection";
import FooterSection from "../components/home/FooterSection";

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

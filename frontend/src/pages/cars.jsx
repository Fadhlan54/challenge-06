import Navbar from "../components/Cars/Navbar";
import MainSection from "../components/Cars/MainSection";
import FilterCarData from "../components/Cars/FilterCarData";
import CarList from "../components/Cars/CarList";
import FooterSection from "../components/Cars/FooterSection";

const Cars = () => {
  return (
    <>
      <Navbar />
      <MainSection />
      <FilterCarData />
      <CarList />
      <FooterSection />
    </>
  );
};

export default Cars;

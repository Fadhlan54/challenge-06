import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Cars/Navbar";
import MainSection from "../components/Cars/MainSection";
import FilterCarData from "../components/Cars/FilterCarData";
import CarList from "../components/Cars/CarList";
import FooterSection from "../components/Cars/FooterSection";

const Cars = () => {
  const [tipeDriver, setTipeDriver] = useState(false);
  const [tanggal, setTanggal] = useState("");
  const [jamJemput, setJamJemput] = useState("");
  const [jumlahPenumpang, setJumlahPenumpang] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [cars, setCars] = useState([]);

  const handleTipeDriver = (e) => {
    setTipeDriver(e.target.value);
  };

  const handleTanggal = (e) => {
    setTanggal(e.target.value);
  };

  const handleJamJemput = (e) => {
    setJamJemput(e.target.value);
  };

  const handleJumlahPenumpang = (e) => {
    setJumlahPenumpang(e.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setIsDataLoaded(false);
        setIsLoading(true);
        const response = await axios.get(`http://localhost:3000/api/v1/cars`);
        setIsDataLoaded(true);
        const cars = response.data.data;
        setCars(cars);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleFilterDataMobil = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:3000/api/v1/cars/filter?tipeDriver=${tipeDriver}&tanggal=${tanggal}&jamJemput=${jamJemput}&jumlahPenumpang=${jumlahPenumpang}`
      );
      setIsDataLoaded(true);
      const cars = response.data.data;
      setCars(cars);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <MainSection />
      <FilterCarData
        onChangeTipeDriver={handleTipeDriver}
        onChangeTanggal={handleTanggal}
        onChangeJamJemput={handleJamJemput}
        onChangeJumlahPenumpang={handleJumlahPenumpang}
        onFilterDataMobil={handleFilterDataMobil}
      />
      <CarList cars={cars} isLoading={isLoading} isDataLoaded={isDataLoaded} />
      <FooterSection />
    </>
  );
};

export default Cars;

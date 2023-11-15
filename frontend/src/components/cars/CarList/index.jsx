import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const CarList = () => {
  const [dots, setDots] = useState("");
  const { cars, isLoading, isDataLoaded } = useSelector((state) => state.cars);

  useEffect(() => {}, [cars, isDataLoaded, isLoading]);
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 6 ? "" : prev + " ."));
    }, 500);

    return () => clearInterval(interval);
  }, []);
  const formatIdr = (jumlah) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    return formatter.format(jumlah);
  };
  return (
    <section className="daftar-mobil cari-mobil-page" id="daftar-mobil-section">
      <div className="container">
        <div className="row gy-5" id="daftar-mobil-row">
          {!isLoading &&
            cars.length > 0 &&
            cars.map((car) => (
              <div className="card-container col-lg-4 " key={car.id}>
                <div className="card">
                  <div className="car-pict-container">
                    <img
                      src={car.image}
                      className="card-img-top car-pict"
                      alt={car.manufacture}
                    />
                  </div>

                  <div className="card-body">
                    <p className="nama-mobil">
                      {car.manufacture} {car.model}
                    </p>
                    <h5 className="harga">
                      {formatIdr(car.rentPerDay)} / hari
                    </h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <div className="rent">
                      <img src="/img/fi_users.svg" alt="" />
                      <p>{car.capacity} Orang</p>
                    </div>
                    <div className="rent">
                      <img src="/img/fi_settings.svg" alt="" />
                      <p>{car.transmission}</p>
                    </div>
                    <div className="rent">
                      <img src="/img/fi_calendar.svg" alt="" />
                      <p>tahun {car.year}</p>
                    </div>
                    <a href="#" className="btn">
                      Pilih Mobil
                    </a>
                  </div>
                </div>
              </div>
            ))}
          {isLoading && (
            <div className="col-lg-8 text-center border border-2 rounded p-5 m-auto mb-5">
              <h1 className="fw-bold">Loading</h1>
              <p className="fs-5">Sedang mengambil data{dots}</p>
            </div>
          )}
          {isDataLoaded && !isLoading && cars.length === 0 && (
            <div className="text-center border border-2 rounded p-5 m-auto mb-5">
              <p className="fs-2 fw-semibold">Maaf, data tidak ditemukan </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CarList;

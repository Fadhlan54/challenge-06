import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTipeDriver,
  setTanggal,
  setJamJemput,
  setJumlahPenumpang,
  setIsLoading,
  setIsDataLoaded,
  setCars,
} from "../../../redux/car/carReducer";
import axios from "axios";

const FilterCarData = () => {
  const dispatch = useDispatch();
  const { tipeDriver, tanggal, jamJemput, jumlahPenumpang } = useSelector(
    (state) => state.cars
  );

  const handleTipeDriver = (e) => {
    dispatch(setTipeDriver(e.target.value));
  };

  const handleTanggal = (e) => {
    dispatch(setTanggal(e.target.value));
  };

  const handleJamJemput = (e) => {
    dispatch(setJamJemput(e.target.value));
  };

  const handleJumlahPenumpang = (e) => {
    dispatch(setJumlahPenumpang(e.target.value));
  };

  const [isFormFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(setIsDataLoaded(false));
        dispatch(setIsLoading(true));
        const response = await axios.get(`http://localhost:3000/api/v1/cars`);
        dispatch(setIsDataLoaded(true));
        const cars = response.data.data;
        dispatch(setCars(cars));
      } catch (err) {
        console.log(err.message);
      } finally {
        dispatch(setIsLoading(false));
      }
    }
    fetchData();
  }, []);

  const handleFilterDataMobil = async (e) => {
    e.preventDefault();
    try {
      dispatch(setIsDataLoaded(false));
      const response = await axios.get(
        `http://localhost:3000/api/v1/cars/filter?tipeDriver=${tipeDriver}&tanggal=${tanggal}&jamJemput=${jamJemput}&jumlahPenumpang=${jumlahPenumpang}`
      );
      dispatch(setIsDataLoaded(true));
      const cars = response.data.data;
      dispatch(setCars(cars));
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch(setIsLoading(false));
      handleBlur();
    }
  };

  return (
    <>
      <div className={`overlay ${isFormFocused ? "visible" : ""}`}></div>
      <section className="filter-data-mobil">
        <div className="container">
          <form
            onSubmit={(e) => handleFilterDataMobil(e)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <div className="input-container tipe-driver-container">
              <label htmlFor="tipe-driver">Tipe Driver</label>
              <div className="input-box selection">
                <select
                  name=""
                  className="select-box"
                  id="tipe-driver"
                  onChange={(e) => handleTipeDriver(e)}
                  required
                >
                  <option value="" hidden>
                    Pilih Tipe Driver
                  </option>
                  <option value="1">Dengan Supir</option>
                  <option value="0">Tanpa Supir (Lepas Kunci)</option>
                </select>
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="tanggal">Tanggal</label>
              <div className="date-container">
                <input
                  type="date"
                  id="tanggal"
                  onChange={(e) => handleTanggal(e)}
                  required
                />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="jam-jemput">Waktu Jemput</label>
              <div className="input-box waktu-jemput-container">
                <select
                  name=""
                  className="select-box"
                  id="jam-jemput"
                  onChange={(e) => handleJamJemput(e)}
                  required
                >
                  <option value="" hidden>
                    Pilih Waktu
                  </option>
                  <option value="8">08.00 WIB</option>
                  <option value="9">09.00 WIB</option>
                  <option value="10">10.00 WIB</option>
                  <option value="11">11.00 WIB</option>
                  <option value="12">12.00 WIB</option>
                </select>
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="jumlah-penumpang">
                Jumlah Penumpang (optional)
              </label>
              <div className="input-box jumlah-penumpang-container">
                <input
                  type="number"
                  name=""
                  id="jumlah-penumpang"
                  placeholder="Jumlah Penumpang"
                  onChange={(e) => handleJumlahPenumpang(e)}
                  required
                />
              </div>
            </div>

            <div className="input-container">
              <button type="submit" className="btn-custom" id="btn-cari-mobil">
                Cari Mobil
              </button>
            </div>
            <div className="clear"></div>
          </form>
        </div>
      </section>
    </>
  );
};

export default FilterCarData;

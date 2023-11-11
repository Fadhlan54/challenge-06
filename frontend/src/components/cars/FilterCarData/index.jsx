import { useState } from "react";

const FilterCarData = ({
  onChangeTipeDriver,
  onChangeTanggal,
  onChangeJamJemput,
  onChangeJumlahPenumpang,
  onFilterDataMobil,
}) => {
  const [isFormFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <div className={`overlay ${isFormFocused ? "visible" : ""}`}></div>
      <section className="filter-data-mobil">
        <div className="container">
          <form
            onSubmit={(e) => onFilterDataMobil(e)}
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
                  onChange={(e) => onChangeTipeDriver(e)}
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
                  onChange={(e) => onChangeTanggal(e)}
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
                  onChange={(e) => onChangeJamJemput(e)}
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
                  onChange={(e) => onChangeJumlahPenumpang(e)}
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

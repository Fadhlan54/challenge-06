// carActions.js
export const setTipeDriver = (tipeDriver) => ({
  type: "SET_TIPE_DRIVER",
  payload: tipeDriver,
});

export const setTanggal = (tanggal) => ({
  type: "SET_TANGGAL",
  payload: tanggal,
});

export const setJamJemput = (jamJemput) => ({
  type: "SET_JAM_JEMPUT",
  payload: jamJemput,
});

export const setJumlahPenumpang = (jumlahPenumpang) => ({
  type: "SET_JUMLAH_PENUMPANG",
  payload: jumlahPenumpang,
});

export const setIsLoading = (isLoading) => ({
  type: "SET_IS_LOADING",
  payload: isLoading,
});

export const setIsDataLoaded = (isDataLoaded) => ({
  type: "SET_IS_DATA_LOADED",
  payload: isDataLoaded,
});

export const setCars = (cars) => ({
  type: "SET_CARS",
  payload: cars,
});

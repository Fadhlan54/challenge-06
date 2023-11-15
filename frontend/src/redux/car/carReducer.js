import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    tipeDriver: false,
    tanggal: "",
    jamJemput: "",
    jumlahPenumpang: 0,
    isLoading: false,
    isDataLoaded: false,
    cars: [],
  },
  reducers: {
    setTipeDriver: (state, action) => {
      return { ...state, tipeDriver: action.payload };
    },
    setTanggal: (state, action) => {
      return { ...state, tanggal: action.payload };
    },
    setJamJemput: (state, action) => {
      return { ...state, jamJemput: action.payload };
    },
    setJumlahPenumpang: (state, action) => {
      return { ...state, jumlahPenumpang: action.payload };
    },
    setIsLoading: (state, action) => {
      return { ...state, isLoading: action.payload };
    },
    setCars: (state, action) => {
      return { ...state, cars: action.payload };
    },
    setIsDataLoaded: (state, action) => {
      return { ...state, isDataLoaded: action.payload };
    },
  },
});

export const {
  setTipeDriver,
  setTanggal,
  setJamJemput,
  setJumlahPenumpang,
  setIsLoading,
  setCars,
  setIsDataLoaded,
} = carSlice.actions;

export default carSlice.reducer;

const { Car } = require("../models");
const ApiError = require("../utils/ApiError");
const { Op } = require("sequelize");

const getAllCars = async (req, res, next) => {
  try {
    const cars = await Car.findAll();

    res.status(200).json({
      status: "success",
      data: cars,
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const getFilteredCar = async (req, res, next) => {
  try {
    const { tipeDriver, tanggal, jamJemput, jumlahPenumpang } = req.query;

    let totalPenumpang = Number(jumlahPenumpang) + Number(tipeDriver);

    const [tahun, bulan, hari] = tanggal.split("-");
    const waktuJemput = new Date(tahun, bulan - 1, hari, jamJemput);

    const filteredCars = await Car.findAll({
      where: {
        available: Boolean(Number(tipeDriver)),
        availableAt: {
          [Op.lte]: waktuJemput,
        },
        capacity: {
          [Op.gte]: totalPenumpang,
        },
      },
    });
    res.status(200).json({
      status: "success",
      data: filteredCars,
    });
  } catch (err) {
    console.log(err);
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  getAllCars,
  getFilteredCar,
};

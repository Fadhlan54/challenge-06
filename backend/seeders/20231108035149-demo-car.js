"use strict";

const axios = require("axios");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      );
      const cars = Object.values(response.data).map((car) => ({
        ...car,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
      await queryInterface.bulkInsert("Cars", cars, {});
    } catch (err) {
      console.log(err);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cars", null, {});
  },
};

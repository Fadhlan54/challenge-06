const router = require("express").Router();

const Car = require("../controllers/carController");

router.get("/", Car.getAllCars);
router.get("/filter", Car.getFilteredCar);

module.exports = router;

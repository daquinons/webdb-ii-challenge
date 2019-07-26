const express = require('express');

const router = express.Router();

const Cars = require('./model');

router.get('/', async (req, res, next) => {
  try {
    const cars = await Cars.findAll();
    res.json(cars);
  } catch (error) {
    next(new Error(error.message));
  }
});

router.post('/', async (req, res, next) => {
  try {
    const car = req.body;
    const response = await Cars.create(car);
    res.status(201).json(response);
  } catch (error) {
    next(new Error(error.message));
  }
});

module.exports = router;

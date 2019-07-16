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

router.post('/', (req, res, next) => {
  res.json({ message: 'Cars POST' });
});

module.exports = router;

const express = require('express');

const router = express.Router();

const carsRoute = require('./cars/routes');

router.use('/cars', carsRoute);

module.exports = router;

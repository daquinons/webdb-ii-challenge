const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ message: 'Cars GET' });
});

router.post('/', (req, res, next) => {
  res.json({ message: 'Cars POST' });
});

module.exports = router;

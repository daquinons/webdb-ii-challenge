const db = require('../../data');
const TABLE = 'cars';

exports.findAll = () => {
  return db(TABLE);
};

exports.create = car => {
  return db(TABLE).insert(car);
};

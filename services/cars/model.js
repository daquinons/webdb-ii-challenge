const db = require('../../data');
const TABLE = 'cars';

exports.findAll = () => {
  return db(TABLE);
};

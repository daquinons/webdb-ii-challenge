
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          id: 1,
          vin: '1HKK489FAN9',
          make: 'Ferrari',
          model: 'F50',
          mileage: 10000
        },
        {
          id: 2,
          vin: '5JGKAG947ND',
          make: 'Tesla',
          model: 'X',
          mileage: 49300
        }
      ]);
    });
};

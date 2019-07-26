exports.up = function(knex) {
  return knex.schema.createTable('sales', table => {
    table.increments();
    table
      .integer('car_id')
      .unsigned()
      .notNullable();
    table
      .foreign('car_id')
      .references('id')
      .inTable('cars');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};

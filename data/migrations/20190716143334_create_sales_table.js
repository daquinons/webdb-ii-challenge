exports.up = function(knex) {
  return knex.schema.createTable('sales', table => {
    table.increments();
    table
      .integer('car')
      .unsigned()
      .notNullable();
    table
      .foreign('car')
      .references('id')
      .inTable('cars');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};

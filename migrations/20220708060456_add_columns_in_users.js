/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable('users', function (table) {
    table.text('bio');
    table.date('birth_date').notNullable().defaultTo('1900-01-01');
    table.string('localization', 255);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable('users', function (table) {
    table.dropColumns(['bio', 'birth_date', 'localization']);
  });
};

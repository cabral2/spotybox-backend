/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('friends', function (table) {
    table.integer('user_id');
    table.integer('friend_id');
    table.integer('isBlock').defaultTo(0);
    table.primary(['user_id', 'friend_id']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('friends');
};

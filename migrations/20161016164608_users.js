'use strict';

exports.up = (knex) => knex.schema.dropTableIfExists(`users`).then(() => {
  return knex.schema.createTable(`users`, (table) => {
    table.increments();
    table.string(`google_id`).notNullable().unique();
    table.string(`displayName`).notNullable();
    table.string(`photos`).notNullable().defaultTo('');
  });
});

exports.down = (knex) => knex.schema.dropTable(`users`);

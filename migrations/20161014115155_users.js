'use strict';

exports.up = (knex, Promise) => knex.schema.dropTableIfExists(`users`).then(() => {
  return knex.schema.createTable(`users`, (table) => {
    table.increments();
    table.string(`googleId`);
  });
});

exports.down = (knex, Promise) => knex.schema.dropTable(`users`);

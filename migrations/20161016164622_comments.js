'use strict';

exports.up = (knex) => {
  return knex.schema.dropTableIfExists(`comments`).then(() => {
    return knex.schema.createTable(`comments`, (table) => {
      table.increments();
      table.integer(`userId`)
        .references(`users.id`)
        .onDelete(`cascade`)
        .index();
      table.integer(`postId`)
        .references(`posts.id`)
        .onDelete(`cascade`)
        .index();
      table.text(`content`).notNullable();
      table.timestamps(true, true);
    })
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable(`comments`);
};

'use strict';

exports.up = (knex) => {
  return knex.schema.dropTableIfExists(`comments`).then(() => {
    return knex.schema.createTable(`comments`, (table) => {
      table.increments();
      table.text(`content`).notNullable();
      // table.string(`userId`)
      //   .references(`users.id`)
      //   .onDelete(`cascade`)
      // table.integer(`postId`)
      //   .references(`posts.id`)
      //   .onDelete(`cascade`)
      table.timestamps(true, true);
    })
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable(`comments`);
};

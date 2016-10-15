
exports.up = (knex, Promise) => {
  return knex.schema.dropTableIfExists(`posts`).then(() => {
    return knex.schema.createTable(`posts`, (table) => {
      table.increments();
      table.string(`username`).notNullable();
      table.string(`title`).notNullable();
      table.string(`content`).notNullable();
      table.timestamps(true, true);
    });
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable(`posts`);
};

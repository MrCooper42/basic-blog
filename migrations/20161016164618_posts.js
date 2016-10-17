exports.up = (knex, Promise) => {
  return knex.schema.dropTableIfExists(`posts`).then(() => {
    return knex.schema.createTable(`posts`, (table) => {
      table.increments();
      table.string
      table.integer(`userId`)
        .references(`users.id`)
        .onDelete(`cascade`);
      table.string(`postTitle`)
        .notNullable();
      table.string(`image`)
        .defaultTo(``);
      table.text(`content`)
        .notNullable();
      table.timestamps(true, true);
    });
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable(`posts`);
};

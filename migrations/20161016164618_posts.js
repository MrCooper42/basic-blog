exports.up = (knex, Promise) => {
  return knex.schema.dropTableIfExists(`posts`).then(() => {
    return knex.schema.createTable(`posts`, (table) => {
      table.increments();
      table.string(`userId`)
        .references(`users.google_id`)
        .onDelete(`cascade`);
      table.text(`displayName`)
        .notNullable();
      table.string(`postTitle`)
        .notNullable();
      table.string(`image`)
        .defaultTo(`http://wallpoper.com/images/00/35/62/49/futurama-bender_00356249.png`);
      table.text(`content`)
        .notNullable();
      table.timestamps(true, true);
    });
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable(`posts`);
};

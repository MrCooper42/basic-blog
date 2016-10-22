'use strict';

exports.seed = (knex) => {
  return knex(`users`).del().then(() => {
    return knex(`users`).insert([
      {
        google_id: `117695093273028884308`,
        displayName: `matthew cooper`,
      }
    ]);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable(`users`);
};

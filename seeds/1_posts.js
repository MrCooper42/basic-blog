'use strict'

exports.seed = (knex, Promise) => {
  return knex(`posts`).del()
    .then(() => {
      return Promise.all([
        knex('posts').insert([{
          displayName: 'Bob Smith',
          postTitle: 'This is the first seed',
          content: 'Time will tell: This means that something will revealed or become clear over time'
        }, ]),
        knex('posts').insert([{
          displayName: 'Bob Smith',
          postTitle: 'This is the second seed',
          content: 'Time will tell: This means that something will revealed or become clear over time'
        }, ]),
        knex('posts').insert([{
          displayName: 'Bob Smith',
          postTitle: 'This is the third seed',
          content: 'Time will tell: This means that something will revealed or become clear over time'
        }]),
      ]);
    });
};

exports.down = (knex) => {
  return knex.schema.dropTable(`posts`);
};

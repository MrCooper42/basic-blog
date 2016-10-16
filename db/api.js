'use strict'

const knex = require(`./knex`);

const getUser = (username) => {
  return knex(`users`)
    .select()
    .where({
      googleId: profileId
    })
    .first();
};

const createUser = (username, token) => {
  return knex(`users`)
    .insert({
      googleId: profileId
    });
};

const editUser = (uersname, token) => {
  return knex(`users`)
    .where({
      googleId: profileId
    })
    .update(`token`, token);
};

const deleteUser = (username, token) => {
  return knex(`users`)
    .where({
      googleId: profileId
    })
};

module.exports = {
  getUser,
  createUser,
  editUser,
  deleteUser,
};

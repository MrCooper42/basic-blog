'use strict'

const knex = require(`./knex`);

const getUser = (profileId) => {
  console.log("profileId", profileId);
  return knex(`users`)
    .select()
    .where({
      google_id: profileId
    })
    .first();
};

const createUser = (profileId, name) => {
  return knex(`users`)
    .insert({
      google_id: profileId,
    });
};

const editUser = (profileId, name) => {
  return knex(`users`)
    .where({
      'google_id': profileId
    })
    .update(name, token);
};

const deleteUser = (profileId, token) => {
  return knex(`users`)
    .where('google_id', profileId)
};

module.exports = {
  getUser,
  createUser,
  editUser,
  deleteUser,
};

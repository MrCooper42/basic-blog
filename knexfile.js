'use strict'

module.exports = {
  development: {
    client: `pg`,
    connection: `posgres://localhost/blog`
  },
  production: {
    client: `pg`,
    connection: `${process.env.NODE_ENV}?ssl=true`
  }
};

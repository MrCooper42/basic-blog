'use strict'

module.exports = {
  development: {
    client: `pg`,
    connection: `posgres://localhost/blog`
  },
  production: {
    client: `pg`,
    connection: `${process.env.DATABASE_URL}?ssl=true`,
  }
};

'use strict'

module.exports = {
  development: {
    client: `pg`,
    connection: `posgres://localhost/blog`
  },
  production: {
    client: `postgresql`,
    connection: `${process.env.DATABASE_URL}?ssl=true`,
  }
};

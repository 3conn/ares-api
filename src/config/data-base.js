require('dotenv').config();

module.exports = {
  "development": {
    "username": "3conn",
    "password": "$2a$12$fDM90eiqN5gXQfJAAecPFOzplJnPnp5I9TgI174r2Rh3LYsoyJ4Hm",
    "database": "smart",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

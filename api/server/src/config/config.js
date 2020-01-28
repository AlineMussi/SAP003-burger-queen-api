module.exports = {
  "development": {
    "username": "postgres",
    "password": null,
    "database": "burgerqueen",
    "host": "db",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": "postgres",
    "password": null,
    "database": "burgerqueen_test",
    "host": "db",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": "postgres",
    "password": null,
    "database": "burgerqueen_production",
    "host": "db",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}

//docker-compose  run dev npx sequelize db create
//npx sequelize db create db
//mudar o host para db 
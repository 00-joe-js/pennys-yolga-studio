const Sequelize = require('sequelize');

const dbAddress = process.env.DATABASE_URL || 'postgres://joe-alves:buttons@localhost:5432/yolga';
const db = new Sequelize(dbAddress, {
  logging: false,
  dialectOptions: {
    ssl: {
      require: process.env.DATABASE_URL ? true : false,
      rejectUnauthorized: false
    }
  }
});

module.exports = db;

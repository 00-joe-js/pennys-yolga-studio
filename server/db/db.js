const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://joe-alves:buttons@localhost:5432/yolga', {
  logging: false,
  dialectOptions: {
    ssl: {
      require: process.env.DATABASE_URL ? true : false,
      rejectUnauthorized: false
    }
  }
});

module.exports = db;

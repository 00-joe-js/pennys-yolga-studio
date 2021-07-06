const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://joe-alves:buttons@localhost:5432/yolga', {
  logging: false
});

module.exports = db;

const Sequelize = require('sequelize').Sequelize

const sequelize = new Sequelize("node-complete", "root", "1314", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
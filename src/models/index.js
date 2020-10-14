const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL)

const models = {
  File: require('./file.js')(sequelize, Sequelize)
}

module.exports = {
  models,
  sequelize
}

const config = require('../configs/db.config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        port: config.PORT,
        dialect: config.dialect,
        opertorsAliases:0,
        pool: {
            max:config.pool.max,
            min:config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./user.model')(sequelize, Sequelize)

module.exports = db
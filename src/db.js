const sequelize = require('sequelize');
const database = new sequelize('pointfairdb','USUARIO','SENHA',{
    dialect: 'mysql', host:'localhost', port:3306
});
database.sync();
module.exports = database;

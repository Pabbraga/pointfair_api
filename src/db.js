const sequelize = require('sequelize');
const database = new sequelize('pointfairdb','USUARIO','SENHA',{
    dialect: 'mysql', host:'HOST', port:3306
});
database.sync();
module.exports = database;

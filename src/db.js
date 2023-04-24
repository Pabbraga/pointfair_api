const sequelize = require('sequelize');
const database = new sequelize('pointfairdb','root','Fire#15guarana',{
    dialect: 'mysql', host:'localhost', port:3306
});
database.sync();
module.exports = database;

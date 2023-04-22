const sequelize = require('sequelize');
const database = require('../src/db');
const schema = "";

class Feira extends sequelize.Model {}
    Feira.init({
        id:{
            type:sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nmFeira: {
            type: sequelize.STRING(50),
            allowNull: false
        },
    },
    {
        sequelize:database,modelName:'feiras', schema
    }
    )
    module.exports = Feira;
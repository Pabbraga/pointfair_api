const sequelize = require('sequelize');
const database = require('../src/db');
const schema = "";

class Endereco extends sequelize.Model {}
    Endereco.init({
        cdEndereco: {
            type:sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nmCidade: {
            type: sequelize.STRING(50),
            allowNull: false
        },
        nmBairro: {
            type: sequelize.STRING(50),
            allowNull: false
        },
        nmRua: {
            type: sequelize.STRING(50),
            allowNull: false
        },
        data_registro:{
            type:sequelize.DATE,
            allowNull:false,
            defaultValue:sequelize.NOW
        },
    },
    {
        sequelize:database,modelName:'enderecos',schema 
    }
    )

    module.exports = Endereco;
const sequelize = require('sequelize');
const database = require('../src/db');
const schema = "";
const Feira = require('./feira');

class Endereco extends sequelize.Model {}
    Endereco.init({
        id: {
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
        feiraId: {
            type:sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize:database,modelName:'enderecos',schema 
    })

    Endereco.belongsTo(Feira, {ForeingKey:'feiraId', allowNull: false})
    
    module.exports = Endereco;
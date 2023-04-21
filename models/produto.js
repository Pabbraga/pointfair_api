const sequelize = require('sequelize');
const database = require('../src/db');
const schema = "";

class Produto extends sequelize.Model {}
    Produto.init({
        cdProduto:{
            type:sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nmProduto: {
            type: sequelize.STRING(100),
            allowNull: false
        },
        descricao:{
            type:sequelize.TEXT('long'),
            allowNull:false
        }
    },
    {
        sequelize:database,modelName:'produtos',schema
    }
    )

    module.exports = Produto;
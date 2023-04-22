const sequelize = require('sequelize');
const database = require('../src/db');
const schema = "";
const Vendedor = require('./vendedor')

class Produto extends sequelize.Model {}
    Produto.init({
        id: {
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
        },
        vendedorId: {
            type:sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize:database,modelName:'produtos',schema
    }
    )
    Produto.belongsTo(Vendedor, {foreignKey: 'vendedorId', allowNull: false})

    module.exports = Produto;
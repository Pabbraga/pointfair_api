const sequelize = require('sequelize');
const database = require('../src/db');
const schema = "";

class Vendedor extends sequelize.Model {}
    Vendedor.init({
        cdVendedor: {
            type:sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nmVendedorCompleto: {
            type: sequelize.STRING(100),
            allowNull: false
        },
        nmUsuario: {
            type:sequelize.STRING(25),
            allowNull:false
        },
        cnpj: {
            type:sequelize.STRING(11),
            allowNull:false            
        },
        email:{
            type:sequelize.STRING(100),
            allowNull: false
        },
        senha:{
            type:sequelize.STRING(50),
            allowNull: false
        },
        data_registro:{
            type:sequelize.DATE,
            allowNull:false,
            defaultValue:sequelize.NOW
        }
    },
    {
        sequelize:database,modelName:'vendedor',schema
  
    }
    )

    
module.exports = Vendedor;
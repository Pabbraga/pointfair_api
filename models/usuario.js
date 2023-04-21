const sequelize = require('sequelize');
const database = require('../src/db');
const schema = "";

class Usuario extends sequelize.Model {}
    Usuario.init({
        cdUsuario:{
            type:sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nmUsuarioCompleto: {
            type: sequelize.STRING(100),
            allowNull: false
        },
        nmUsuario:{
            type:sequelize.STRING(25),
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
        },
    },
    {
        sequelize:database,modelName:'usuarios',schema
    }
    )

    module.exports = Usuario;
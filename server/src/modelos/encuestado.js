
const {DataTypes} = require('sequelize');

module.exports= (dataBase)=>{
    dataBase.define("Encuestado",{
       
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        celular:{
            type: DataTypes.BIGINT,
            allowNull: false
        },

        fecha: {
            type: DataTypes.DATE,
            defaultValue: dataBase.literal("CURRENT_TIMESTAMP"),
        },

        lenguaje:{
            type: DataTypes.STRING,
            allowNull: false
          },
        
        informante:{
            type: DataTypes.STRING,
            allowNull: false
        },

        confirmacion: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },

    }, {timestamps: false})
}
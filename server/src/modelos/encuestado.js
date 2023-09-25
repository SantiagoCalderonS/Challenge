
const {DataTypes} = require('sequelize');

module.exports= (dataBase)=>{
    dataBase.define("Encuestado",{
       
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        celular:{
            type: DataTypes.INTEGER,
            allowNull: false
        },

        fecha: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        },

        lenguajes:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
          },
        
        informante:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },

        confirmacion: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },

    }, {timestamps: false})
}
const {Sequelize} = require("sequelize");

require('dotenv').config();
const {user_en_pg,password_DB,host_del_DB,nombre_DB} = process.env

const Encuestado = require("./src/modelos/encuestado")

//creamos una nueva instancia de sequelize, le damos los datos necesarios para que opere en la tabla deseada de la base de datos

const dataBase= new Sequelize( `postgres://${user_en_pg}:${password_DB}@${host_del_DB}/${nombre_DB}`,
{
    logging: false
})

Encuestado(dataBase)

module.exports={
    dataBase,
    ...dataBase.models
}
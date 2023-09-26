const respuestas_router = require("express").Router();

const {get_respuestas} = require("../controladores/control_respuestas")

respuestas_router.get("/", get_respuestas)

module.exports = respuestas_router;
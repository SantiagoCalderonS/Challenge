const enviar_router = require("express").Router();
const control_enviar= require("../controladores/control_enviar")

enviar_router.get("/", control_enviar)

module.exports = enviar_router;
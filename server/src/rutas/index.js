const router = require("express").Router();
const respuestas_router = require("./respuestas");
const cliente_router = require("./cliente")
const enviar_router= require("./enviar")

router.use("/", enviar_router )

router.use("/respuestas", respuestas_router)

router.use("/client", cliente_router)

module.exports = router;
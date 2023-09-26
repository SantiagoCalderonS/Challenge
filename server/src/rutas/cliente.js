const cliente_router = require("express").Router();

const {post_client, put_client , get_client} = require("../controladores/control_cliente");

cliente_router.post("/", post_client )

cliente_router.get("/", get_client)

cliente_router.put("/", put_client)

module.exports = cliente_router;
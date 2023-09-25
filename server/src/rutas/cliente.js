const cliente_router = require("express").Router();

const {post_client} = require("../controladores/control_cliente");

cliente_router.post("/", post_client )

cliente_router.get("/", (req,res)=>{})

cliente_router.put("/",(req,res)=>{})

module.exports = cliente_router;
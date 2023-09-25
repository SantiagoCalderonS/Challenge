const archivo = require("./archivo.json")


const enviar_router = (req, res) => {
res.json(archivo)
} 

module.exports = enviar_router;
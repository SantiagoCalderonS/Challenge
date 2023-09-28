const archivo = require("./archivo.json")


const enviar_router = (req, res) => {

res.status(200).json(archivo)

} 

module.exports = enviar_router;
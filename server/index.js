const app = require("./src/app");
const {dataBase} = require("./base_datos")

const PORT= 3001; 

dataBase.sync({force:true}).then(()=>{
    app.listen( PORT , ()=>console.log("server montado"));
})
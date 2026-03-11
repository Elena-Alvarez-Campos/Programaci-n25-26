const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Importar rutas
try{
const peliroute=require('./routes/peliculas');
app.use('/peliculas',peliroute);

app.listen(3000,()=>{
    console.log("Escuchando en el puerto 3000")
})
} catch(error){
    console.log("Error, no se pudo encontrar")
}

//nodemon herramienta util que tienes que instalarlo en cada paquete
//NO interesa que sea global

//const datos=require("./datos.json")
//trabajar como cualquier archivo que recuperamos
//Para no volver a usar el fs
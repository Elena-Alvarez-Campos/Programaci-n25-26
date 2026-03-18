const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

try{
    //Importar rutas
    const cartaroute=require('./routes/carta');
    app.use('/carta',cartaroute);

    //Escuchar
    app.listen(3000,()=>{
        console.log("Escuchando en el puerto 3000")
    })
} catch(error){
    console.log("Error, no se pudo encontrar")
}
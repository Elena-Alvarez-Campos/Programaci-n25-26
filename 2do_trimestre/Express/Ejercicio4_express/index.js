
const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//ESPACIO PARA IMPOTAR MÓDULOS DE RUTAS

const homeroutes=require ('./routes/home');
app.use('/',homeroutes);//montar rutas
const productosroutes=require ('./routes/productos');
app.use('/productos',productosroutes);


app.listen(3000,()=>{
    console.log("Escuchando desde el puerto 3000")
});
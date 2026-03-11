const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Importar rutas
const pkmroute=require('./routes/pokemon');
app.use('/pokemon',pkmroute)
const combateroute=require('./routes/combate')
app.use('/combate',combateroute);

//Escuchar puerto
app.listen(3000,()=>{
    console.log("Escuchando en el puerto 3000")
})
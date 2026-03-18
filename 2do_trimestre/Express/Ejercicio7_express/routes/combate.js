const express=require('express');
const router=express.Router();

//leer json
const listapoke =require('./pokemonLista.json');

let combates =[
    {
        "id": 1,
        "pokemon1": {
            "nombre": "Pikachu",
            "vida": 100
        },
        "pokemon2": {
            "nombre": "Charmander",
            "vida": 100
        },
        "turno": 1,
        "ganador": null
    }
];
// GET /lista************************************************
router.get('/lista',(req,res)=>{
    let listaCombates={"combates":combates}
});
// GET /combate/estado***************************************
router.get('/estado:id',(req,res)=>{
    const id = parseInt(req.params.id);
    let combateEncontrado=false
    let posicion=0;
    for(let cada_combate of combates){
        if(cada_peli.id==id){
            peliEncontrada=true
            break;
        }
        posicion++
    }
    if(peliEncontrada==true){
        res.json(combates[posicion])
    }
    else{
        res.send("Combate no encontrado");
    }
});


module.exports=router;
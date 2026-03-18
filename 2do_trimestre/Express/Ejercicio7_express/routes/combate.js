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
// GET /estado***************************************
router.get('/estado:id',(req,res)=>{
    const id = parseInt(req.params.id);
    let combateEncontrado=false
    let posicion=0;
    for(let cada_combate of combates){
        if(cada_combate.id==id){
            combateEncontrado=true
            break;
        }
        posicion++
    }
    if(combateEncontrado==true){
        res.json(combates[posicion]);
    }
    else{
        res.send("Combate no encontrado");
    }
});
// POST /nuevo**********************************************
router.post('/nuevo',(req,res)=>{
    if(res.status(200)){
        let id=Date.now()
        let combateNuevo={id:id,pokemon1:req.body[0],pokemon2:req.body[1],turno:1,ganador:null};
        combates.push(combateNuevo);
        res.json({"combate":id});
    }else if(res.status(400)){
        res.send("Uno de los pokémon no exsiste");
    }else{
        res.send("Ha sucedido un error")
    }
});
//POST /ataque**********************************************
router.post('/ataque:id',(req,res)=>{
    const id = parseInt(req.params.id);
    let combateEncontrado=false
    let posicion=0;
    let pokemonATK="";
    let pokemonDEF="";
    for(let cada_combate of combates){
        if(cada_combate.id==id){
            combateEncontrado=true
            break;
        }
        posicion++
    }
    if(combateEncontrado==true){
        if(combates[posicion].turno%2!==0){
            pokemonATK=combates[posicion].pokemon1;
            pokemonDEF=combates[posicion].pokemon2;
        }
        else{
            pokemonATK=combates[posicion].pokemon2;
            pokemonDEF=combates[posicion].pokemon1;
        }
        let encontrado=false;
        for(let cada_pokemon of listapoke){
            if(pokemonATK.nombre==cada_pokemon.nombre){
                for(let cada_ataque of cada_pokemon){
                    if(cada_ataque.nombre==req.body.ataque){
                        encontrado=true;
                        pokemonDEF.vida-=cada_ataque.potencia;

                    }
                }
            }
        }
    }
    else{
        res.send("El combate no existe");
    }
});

module.exports=router;
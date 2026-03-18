const express=require('express');
const router=express.Router();

//leer json
const listapoke =require('./pokemonLista.json');
//console.log(listapoke)

//GET /lista**************************************************

router.get('/lista',(req,res)=>{
    let pkmnLista={"pokemons":[]};
    for (let cada_pokemon of listapoke){
        pkmnLista.pokemons.push(cada_pokemon.nombre)
    }
    console.log(pkmnLista)
    res.json(pkmnLista)
});

//POST /nuevo************************************************

router.post('/nuevo',(req,res)=>{
    //200: { "status": "ok" }
    //400: "faltan datos necesarios"
    if(res.status(200)){
        const nuevopkmn=/*{id:Date.now(),...*/req.body//}
        listapoke.push(nuevopkmn);
        res.json({"status":"ok"});
    }
    else if(res.status(400)){
        res.send("faltan datos necesarios")
    }
    else{
        console.log("error")
        res.send("error")
    }
});


module.exports=router;
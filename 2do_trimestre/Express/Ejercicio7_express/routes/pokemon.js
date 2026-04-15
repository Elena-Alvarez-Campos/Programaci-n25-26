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
    //console.log(pkmnLista)
    res.json(pkmnLista)
});

//POST /nuevo************************************************

router.post('/nuevo',(req,res)=>{
    //200: { "status": "ok" }
    //400: "faltan datos necesarios"
    if(res.status(200)){
        //const nuevopkmn=/*{id:Date.now(),...*/req.body//}
        try{
        if(req.body.nombre==null||req.body.tipo==null||req.body.ataques==null||req.body.defensa==null||req.body.vida==null){
            res.send("Faltan datos")
        }
        
        listapoke.push(req.body);
        res.json({"status":"ok"});
        
        }catch(e){console.log("Datos insuficientes")}
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
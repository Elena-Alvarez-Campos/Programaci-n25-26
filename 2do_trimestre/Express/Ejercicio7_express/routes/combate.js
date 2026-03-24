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
    res.json({listaCombates})
});
// GET /estado***************************************
router.get('/estado:id',(req,res)=>{
    const id = parseInt(req.params.id);//Pasar el id a parámetro tipo Int
    let combateEncontrado=false
    let posicion=0;
    //Analizar todos los combates de la lista
    for(let cada_combate of combates){
        if(cada_combate.id==id){
            combateEncontrado=true
            break;//Si encuentra el id no sigue buscando y marca que está entregado
        }
        posicion++
    }
    if(combateEncontrado==true){
        res.json(combates[posicion]);//Si se encuentra saca el combate con esa posición
    }
    else{
        res.send("Combate no encontrado");//Si no, dice que no lo encontró
    }
});
// POST /nuevo**********************************************
router.post('/nuevo',(req,res)=>{
    if(res.status(200)){
        let id=Date.now()//El id es la fecha actual (De esta forma va a ser unico)
        let combateNuevo={id:id,pokemon1:req.body[0],pokemon2:req.body[1],turno:1,ganador:null};
        //Los requisitos del primer pokemon está en la posición 0 del body y para el segundo están en la siguiente
        //El turno es automáticamente el primero y el ganador es null
        combates.push(combateNuevo);
        res.json({"combate":id});//Devuelve el combate nuevo
    }else if(res.status(400)){
        res.send("Uno de los pokémon no exsiste");
    }else{
        res.send("Ha sucedido un error")
    }
});
//POST /ataque**********************************************
router.post('/ataque:id',(req,res)=>{
    const id = parseInt(req.params.id);//Recibe id y lo pasa a variable
    //En el body recibe el nombre del ataque
    let combateEncontrado=false
    let posicion=0;
    let pokemonATK="";
    let pokemonDEF="";
    for(let cada_combate of combates){
        if(cada_combate.id==id){
            combateEncontrado=true
            break;
        }//Busca el combate como antes
        posicion++
    }
    //Encuentra el combate ejecta el código
    if(combateEncontrado==true){
        //Si el turno es impar, el pokemon atacante es el primero
        //Si es par, el pokeomn atacante es el segundo
        if(combates[posicion].turno%2!==0){
            pokemonATK=combates[posicion].pokemon1;
            pokemonDEF=combates[posicion].pokemon2;
        }
        else{
            pokemonATK=combates[posicion].pokemon2;
            pokemonDEF=combates[posicion].pokemon1;
        }
        let encontrado=false;
        let defensa=0;
        //Busca los pokemons en la lista de pokémon
        for(let i=0;i<2;i++){//Se recorre 2 veces, 1 para sacar el pkmn defensor y otra el atacante
            for(let cada_pokemon in listapoke){
                //Busca el pokemon en la lista
                if(pokemonDEF.nombre==cada_pokemon.nombre && i==0){//Solo se buscará el pokemon defensor si está en la primera vuelta
                    defensa=cada_pokemon.defensa;
                }
                if(pokemonATK.nombre==cada_pokemon.nombre && i==1){//Solo se buscará el pokemon atacante si está en la segunda vuelta
                    //Busca el ataque proporcionado en la lista
                    for(let cada_ataque of cada_pokemon){
                        //si encuentra el ataque deja de buscar en la lista de ataques
                        if(cada_ataque.nombre==req.body.ataque){
                            encontrado=true;//Encontró el ataque
                            let daño=Math.round(50*(cada_ataque.potencia/defensa)/**efectividad*/)//Calcula el daño del ataque redondeándolo
                            pokemonDEF.vida-=daño;
                            if(pokemonDEF.vida<=0){//Si el pokemon se quda sin vida
                                combates[posicion].ganador=pokemonATK;
                            }
                            combates[posicion].turno++

                            break;
                        }
                    }
                    break;//no hace falta que siga recorriendo la lista si ya encontró el pkmn
                }
            }
            if (encontrado==false){//No se encuentra el movimiento
                res.send("El movimiento no es compatible")
        }
        }
        
    }//Si no encuentra el combate dice que no existe
    else{
        res.send("El combate no existe");
    }
});

module.exports=router;
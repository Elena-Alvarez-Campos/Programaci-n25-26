const fs=require("fs");

const ataqueString = fs.readFileSync("./practica4/bulbasur.json");
let pokemonATK = JSON.parse(ataqueString);//determina que esta variable es el json del pokemon atacante
console.log("pokémon atacante: "+pokemonATK.nombre);
const defensaString = fs.readFileSync("./practica4/squirtle.json");
let pokemonDEF = JSON.parse(defensaString);
console.log("pokémon defensor: "+pokemonDEF.nombre)
let tipos=[
    {
        "tipo":"agua",
        "efectivo":["agua","fuego"],
        "neutral":[],
        "poco_efectivo":["planta","electrico"]
    },
    {
        "tipo":"fuego",
        "efectivo":["planta","fuego"],
        "neutral":["electrico"],
        "poco_efectivo":["agua"]
    },
    {
        "tipo":"planta",
        "efectivo":["agua","planta","electrico"],
        "neutral":[],
        "poco_efectivo":["fuego"]
    },
    {
        "tipo":"electrico",
        "efectivo":["electrico"],
        "neutral":["planta","agua","fuego"],
        "poco_efectivo":[]
    }
]

function funcionPokemon(pokemon_ataque,pokemon_def){
    let daño=0
    let efectividad=0
    for(let cada_tipo of tipos){
        if(cada_tipo.tipo==pokemon_ataque.tipo){
            for(let cada_efectividad in cada_tipo){
                for(let cada_tipo_efectividad of cada_tipo[cada_efectividad]){
                    if(cada_tipo_efectividad==pokemon_def.tipo){
                        console.log("El ataque ha sido "+cada_efectividad)
                        if(cada_efectividad=="efectivo"){
                            efectividad=2
                        }
                        else{
                            cada_efectividad=="poco_efectivo" ? efectividad=0.5 : efectividad=1
                        }
                    }
                }
            }
        }
    }
    daño=Math.round(50*(pokemon_ataque.ataque/pokemon_def.defensa)*efectividad)//Calcula el daño del ataque redondeándolo
    if(daño>=pokemonDEF.vida){
        console.log("debilitado")
        pokemonDEF.vida=0
    } 
    else{
        console.log(pokemonDEF.nombre+" ha recibido "+daño+ " de daño")
        pokemonDEF.vida=pokemonDEF.vida-daño
    }
    console.log(pokemonDEF.nombre+" tiene "+pokemonDEF.vida+"PS")
    //sumar pelea
    pokemonATK.peleas++
    pokemonDEF.peleas++
    //rescribir el JSON
    fs.writeFileSync("./practica4/bulbasur.json", JSON.stringify(pokemonATK));
    console.log(pokemonATK.peleas)
    fs.writeFileSync("./practica4/squirtle.json", JSON.stringify(pokemonDEF));
    console.log(pokemonDEF.peleas)
    return 
}
funcionPokemon(pokemonATK,pokemonDEF)
/*
const peticionApi = async () =>{

  const peticionGet = await fetch("https://pokeapi.co/api/v2/type/10") 
  const tipo_chart = await peticionGet.json()
  console.log(tipo_chart.damage_relations)
  let efeicacias={}
}
peticionApi()*/
const fs=require("fs");

const ataqueString = fs.readFileSync("./practica4/bulbasur.json");
let pokemonATK = JSON.parse(ataqueString);//determina que esta variable es el json del pokemon atacante
//console.log("pokémon atacante: "+pokemonATK.nombre);
const defensaString = fs.readFileSync("./practica4/squirtle.json");
let pokemonDEF = JSON.parse(defensaString);
//console.log("pokémon defensor: "+pokemonDEF.nombre)

function funcionPokemon(pokemon_ataque,pokemon_def){
    let daño=0
    let efectividad=0
    //efectividades
    let tipos=["normal","lucha","volador","veneno","tierra","roca","bicho","fantasma","hierro","fuego","agua","planta","electrico","psíquico","hielo","dragón","oscuro","hada"]
    let link_pokeapi=""
    for(let cada_tipo of tipos){
        if(cada_tipo==pokemon_ataque.tipo){
            //console.log(tipos.indexOf(cada_tipo))
            switch (tipos.indexOf(cada_tipo)){
                case 0:
                    link_pokeapi="https://pokeapi.co/api/v2/type/1"
                break;
                case 1:
                    link_pokeapi="https://pokeapi.co/api/v2/type/2"
                break
                case 2:
                    link_pokeapi="https://pokeapi.co/api/v2/type/3"
                break
                case 3:
                    link_pokeapi="https://pokeapi.co/api/v2/type/4"
                break;
                case 4:
                    link_pokeapi="https://pokeapi.co/api/v2/type/5"
                break
                case 5:
                    link_pokeapi="https://pokeapi.co/api/v2/type/6"
                break
                case 6:
                    link_pokeapi="https://pokeapi.co/api/v2/type/7"
                break;
                case 7:
                    link_pokeapi="https://pokeapi.co/api/v2/type/8"
                break
                case 8:
                    link_pokeapi="https://pokeapi.co/api/v2/type/9"
                break
                case 9:
                    link_pokeapi="https://pokeapi.co/api/v2/type/10"
                break;
                case 10:
                    link_pokeapi="https://pokeapi.co/api/v2/type/11"
                break
                case 11:
                    link_pokeapi="https://pokeapi.co/api/v2/type/12"
                break
                case 12:
                    link_pokeapi="https://pokeapi.co/api/v2/type/13"
                break;
                case 13:
                    link_pokeapi="https://pokeapi.co/api/v2/type/14"
                break
                case 14:
                    link_pokeapi="https://pokeapi.co/api/v2/type/15"
                break
                case 15:
                    link_pokeapi="https://pokeapi.co/api/v2/type/16"
                break;
                case 16:
                    link_pokeapi="https://pokeapi.co/api/v2/type/17"
                break
                case 17:
                    link_pokeapi="https://pokeapi.co/api/v2/type/18"
                break
            default:
                console.log("No se encuentra ese tipo en la lista")
            }
        }
    }
    const peticionApi = async () =>{
        
        const peticionGet = await fetch(link_pokeapi) 
        const tipo_chart = await peticionGet.json()
        //console.log(tipo_chart.damage_relations)
        //console.log(tipo_chart.name)
        let eficacias_especiales={
            "sueper_efectivo":[],
            "poco_efectivo":[]
        }
        for(let cada_supereficaz of tipo_chart.damage_relations.double_damage_to){
            eficacias_especiales.sueper_efectivo.push(cada_supereficaz.name)
        }
        for(let poco_efectivo of tipo_chart.damage_relations.half_damage_to){
            eficacias_especiales.poco_efectivo.push(poco_efectivo.name)
        }
        console.log(eficacias_especiales)
        
        return eficacias_especiales
    }
    peticionApi()

    daño=Math.round(50*(pokemon_ataque.ataque/pokemon_def.defensa)*efectividad)//Calcula el daño del ataque redondeándolo
    if(daño>=pokemonDEF.vida){
       // console.log("debilitado")
        pokemonDEF.vida=0
    } 
    else{
       // console.log(pokemonDEF.nombre+" ha recibido "+daño+ " de daño")
        pokemonDEF.vida=pokemonDEF.vida-daño
    }
    //console.log(pokemonDEF.nombre+" tiene "+pokemonDEF.vida+"PS")
    //sumar pelea
    pokemonATK.peleas++
    pokemonDEF.peleas++
    //rescribir el JSON
    //fs.writeFileSync("./practica4/bulbasur.json", JSON.stringify(pokemonATK));
    //console.log(pokemonATK.peleas)
    //fs.writeFileSync("./practica4/squirtle.json", JSON.stringify(pokemonDEF));
    //console.log(pokemonDEF.peleas)
    return 
}
funcionPokemon(pokemonATK,pokemonDEF)
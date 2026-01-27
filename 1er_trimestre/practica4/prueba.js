
const peticionApi = async () =>{

  const peticionGet = await fetch("https://pokeapi.co/api/v2/pokemon/scovillain") 
  const datosPokemonATK = await peticionGet.json()
  //console.log(datosPokemon.stats)
  for( let cada_stat of datosPokemonATK.stats){
    console.log(cada_stat.base_stat+" "+cada_stat.stat.name)
  }
  console.log("///////////////////////////////////////////////////////////////////")
  //console.log(datosPokemon.types)
  for(let cada_tipo of datosPokemonATK.types){
    console.log(cada_tipo.type.name)
  }

  ////////////////////////////////////////////////////////////////////////////////////
  //Función ej4
  const fs=require("fs");
  const ataqueString = fs.readFileSync("./practica4/pokemonATK.json");
  let pokemonATK = JSON.parse(ataqueString);//determina que esta variable es el json del pokemon atacante
  pokemonATK.nombre=datosPokemonATK.name
  console.log(pokemonATK)

}

peticionApi()
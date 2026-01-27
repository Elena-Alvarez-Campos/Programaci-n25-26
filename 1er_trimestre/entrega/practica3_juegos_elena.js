"use strict"

//Batallas Pokémon
/**
 * @param {string} tipo_ataque 
 * @param {string} tipo_def 
 * @param {number} ataque 
 * @param {number} defensa 
 * @return {number}
 */
console.log("Ejercicio 1: Batallas Pokémon")
function pokemon(tipo_ataque,tipo_def,ataque,defensa){
    let daño=0
    let efectividad=0
    //Si ambos pokemons son del mismo tipo será un ataque neutral, excepto en el tipo eléctrico que sería poco eficaz
    if(tipo_ataque==tipo_def){//Por lo tanto, si son iguales:
        tipo_ataque=="electrico" ? efectividad=0.5 : efectividad=1//si es de tipo electrico sera poco eficaz y si no será neutral
    }
    else{//Si los tipos son distintos entre ataquante y defensor
        if(tipo_ataque=="agua"){//ataque tipo agua
            if(tipo_def=="fuego"){//si el otro es de tipo fuego será supereficaz
            efectividad=2
            }else{//si no, será de tipo planta o electrico y en ambos casos sería poco eficaz
                efectividad=0.5
            }
        }
        if(tipo_ataque=="fuego"){//ataque tipo fuego
            if(tipo_def=="planta"){//si el otro es de tipo planta será supereficaz
                efectividad=2
            }else if(tipo_def=="agua"){//si es de tipo agua será poco eficaz
                efectividad=0.5
            }else{//si es de tipo electrico será neutro
                efectividad=1
            }
        }
        if(tipo_ataque=="planta"){//ataque tipo planta
            if(tipo_def=="fuego"){//Si el otro es de tipo fuego será poco eficaz
            efectividad=0.5
            }else{//si no, será de tipo agua o electrico y en ambos casos sería supereficaz
                efectividad=2
            }
        }
        if(tipo_ataque=="electrico"){
            if(tipo_def=="planta"){//Si el otro es de tipo planta será poco eficaz
                efectividad=0.5
            }else if(tipo_def=="agua"){//si es de tipo agua sera supereficaz
                efectividad=2
            }else{//si es de tipo fuego será neutral
                efectividad=1
            }
        }
    }
    //console.log('x'+efectividad) mostraría la efectividad
    daño=Math.round(50*(ataque/defensa)*efectividad)//Calcula el daño del ataque redondeándolo
    return daño
}
console.log(pokemon("electrico","agua",70,60))

//Los anillos de poder 1
/**
 * @param {Array} buenos
 * @param {Array} malos
 * @returns {string}
 */
console.log("Ejercicio 2: Los anillos de poder 1")
let razas_bondadosas={"pelosos":1, "sureños_buenos":2, "enanos":3, "numenoreanos":4, "elfos":5}
let razas_malvadas={"sureños_malos":2, "orcos":2, "goblins":2, "huargos":3, "trolls":5}

let ejrecito_bondadoso=["pelosos","pelosos","numenoreanos",]
let ejercito_malvado=["orcos","goblins","goblins"]

function anillos1 (buenos,malos){
    let total_malos=0
    let total_buenos=0
    for(let cada_bueno of buenos){//Primero se analizan los buenos
        total_buenos=total_buenos+razas_bondadosas[cada_bueno]//Se añade su fuerza al total de los buenos   
    }    
    for(let cada_malo of malos){//Después de analizan a los malos
        total_malos=total_malos+razas_malvadas[cada_malo]//Se añade su fuerza al total de los malos
    }
    if(total_buenos==total_malos){//Si sus fuerzas son iguales resulta en empate
        console.log("Empate")
    }
    else{//Si no, se mira si la fuerza total delos buenos es mayor a la de los malos
        //Si su fuerza es mayor ganan los buenos y si no ganan los malos
        total_buenos>total_malos ? console.log("Ganan los buenos") : console.log("Ganan los malos")
    }
    return 
}
anillos1(ejrecito_bondadoso,ejercito_malvado)

//Los anillos de poder 2
console.log("Ejercicio 3: Los anillos de poder 2")

let ejercito=[
    {"raza":"humanos", "cantidad":100, "armas":["espadas","escudos"]},
    {"raza":"elfos", "cantidad":200, "armas":["arcos", "espadas"]},
    {"raza":"enanos", "cantidad":150, "armas":["hachas","escudos"]},
    {"raza":"pelosos", "cantidad":50, "armas":["piedras"]},
    {"raza":"numenoreanos", "cantidad":300, "armas":["espadas","escudos","arcos"]},
]
/**
 * @param {{ejercito[]}} ejercito 
 * @param {string} arma 
 * @returns {object}
 */
function porArmas (ejercito, arma){
    let total=0
    for(let cada_soldado of ejercito){
        for(let cada_arma of cada_soldado.armas){//Recorre todas las armas de cada "soldado" (por falta de nombre mejor)
            if(cada_arma==arma){//Si coincide alguna conn la dada:
                total=total+cada_soldado.cantidad//suma la cantidad de "soldados" que la usan al total
            }
        }
    }
    let arma_cantidad={"arma":arma, "cantidad":total}//En un nuevo objeto se mete el total y el arma dada
    return arma_cantidad
}
console.log(porArmas(ejercito,"escudos"))

//Voladores y patudos
console.log("Ejercicio 4: Voladores y patudos")

let animales=[
    {"especie":"vaca", "patas":4, "vuela":false},
    {"especie":"paloma", "patas":2, "vuela":true},
    {"especie":"serpiente", "patas":0, "vuela":false},
    {"especie":"gato", "patas":4, "vuela":false},
    {"especie":"periquito", "patas":2, "vuela":true},
    {"especie":"mosquito", "patas":6, "vuela":true},
]
/**
 * @param {[object]} animales
 * @return {[object]}
 */
console.log("Función voladores")

function voladores(animales){
    let ani_voladores=[]//Array vacío en el que se meterán todos animales voladores
    for(let cada_animal of animales){
        if(cada_animal.vuela==true){//Si el animal vuela:
            ani_voladores.push(cada_animal)//Se añade a la lista
        }
    }
    return ani_voladores
}
console.log(voladores(animales))

console.log("Función porPatas")
/**
 * @param {object} animales 
 * @returns {object}
 */
function porPatas(animales){
    let lista_por_patas={}
    for(let cada_animal of animales){
        if(lista_por_patas[cada_animal.patas]===undefined){ //Si la categoría de ese número de patas no existe:
            lista_por_patas[cada_animal.patas]=[]//Se crea con array vacío
        }
        lista_por_patas[cada_animal.patas].push(cada_animal)//Se añade todo el objeto del animal en la categoría correspondiente a sus patas
    }
    return lista_por_patas//Devuelve la lita de animales ordenada por patas
}
console.log(porPatas(animales))
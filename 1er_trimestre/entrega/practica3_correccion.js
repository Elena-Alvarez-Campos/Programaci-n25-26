"use strict"
let tipos=[
    {
        "tipo":"agua",
        "efectivo":["planta","electrico"],
        "neutral":[],
        "poco_efectivo":["agua","fuego"]
    },
    {
        "tipo":"fuego",
        "efectivo":["agua"],
        "neutral":["electrico"],
        "poco_efectivo":["planta","fuego"]
    },
    {
        "tipo":"planta",
        "efectivo":["fuego"],
        "neutral":[],
        "poco_efectivo":["agua","planta","electrico"]
    },
    {
        "tipo":"electrico",
        "efectivo":[],
        "neutral":["planta","agua","fuego"],
        "poco_efectivo":["electrico"]
    }
]

function pokemon(tipo_ataque,tipo_def,ataque,defensa){
    let daño=0
    let efectividad=0
    for(let cada_tipo of tipos){
        if(cada_tipo.tipo==tipo_ataque){
            for(let cada_efectividad in cada_tipo){
                for(let cada_tipo_efectividad of cada_tipo[cada_efectividad]){
                    if(cada_tipo_efectividad==tipo_def){
                        console.log(cada_efectividad)
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
    console.log("x"+efectividad)
    daño=Math.round(50*(ataque/defensa)*efectividad)//Calcula el daño del ataque redondeándolo
    return daño
}
console.log(pokemon("agua","planta",70,60))
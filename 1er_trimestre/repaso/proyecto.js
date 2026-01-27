
let cartas=[
    {
        "personaje": "a",
        "atributo": "cute",
        "estrellas": 4,
        "grupo": "MMJ",
        "skill": "p",
        "mastery": 0
    },{
        "personaje": "a",
        "atributo": "a",
        "estrellas": 4,
        "grupo": "a",
        "skill": "a",
        "mastery": 0        
    }
]

function ClasificarCartas(lista,atributo,grupo){
    let clasificada={}
    for(let cada_carta of lista){
        if(cada_carta.grupo!==grupo){
            continue
        }
        let propiedad=cada_carta[atributo]
        if(clasificada[propiedad]===undefined){
            clasificada[propiedad]=[]//Porque es el primer elemento
        }
        clasificada[propiedad].push(cada_carta)        
    }

    return clasificada
}
console.log(ClasificarCartas(cartas,"cute","MMJ"))
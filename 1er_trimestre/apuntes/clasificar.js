
let objetos = [
{
"tipo": "baldosa",
"color": "verde",
"precio": 22
},
{
"tipo": "baldosa",
"color": "roja",
"precio": 30
},
{
"tipo": "pintura",
"color": "blanco",
"precio": 41
},
{
"tipo": "baldosa",
"color": "negra",
"precio": 30
},
{
"tipo": "pintura",
"color": "verde",
"precio": 41
},
{
"tipo": "tornillo",
"medida": 6,
"precio": 2
},
];

function ClasificarAtributo(lista,atributo){
    let clasificada={}
    for(let elemento of lista){
        let propiedad=elemento[atributo]
        if(clasificada[propiedad]===undefined){
            clasificada[propiedad]=[]//Porque es el primer elemento
        }
        clasificada[propiedad].push(elemento)        
    }

    return clasificada
}
console.log(ClasificarAtributo(objetos,"precio"))

//Ejercicio 10.1 (no hacer de momento)
/*Crea una función que reciba la lista y devuelva un objeto clasificando por marca:*/
/**
 * @param {[{marca:string, modelo:string, precio:number}]} moviles
 * @returns {[{string : [{marca:string, modelo:string, precio:number}]}]}
 */
console.log('Ejercicio 10.1')
function ordenmarca(moviles){/*
    let lista_marcas={//Se determina las marcas alas que van a pertenecer los objetos
        "Samsung":[],
        "Apple":[],
        "Xiaomi":[]
    }
    for (let cada_movil of moviles){
        //Se busca de que marca es cada movil
        if(cada_movil.marca=='Samsung'){
            lista_marcas.Samsung.push(cada_movil)//Una vez encontrada la marca, la añade la lista de marcas a la que pertenece
        }else if(cada_movil.marca=='Apple'){ //Lo mismo para Apple
            lista_marcas.Apple.push(cada_movil)
        }
        else{
            lista_marcas.Xiaomi.push(cada_movil)//el que queda es xiaomi
        }                
    }

    return lista_marcas*/
}
console.log(ordenmarca(moviles))
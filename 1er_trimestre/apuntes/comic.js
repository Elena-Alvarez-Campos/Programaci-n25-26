
//Crea una función que reciba una lista de cómics y devuelva el cómic más caro.
/** 
* @param {[{titulo: string, precio: number, publicacion: number}]} comic
* @return {[{titulo: string, precio: number, publicacion: number}]}
*/
let comic=[{
    titulo: 'Watchmen',
    precio: 24.99,
    publicacion: 1986
},
{
    titulo: 'Batman',
    precio: 30.40,
    publicacion: 2023
},
{
    titulo: 'linternaVerde',
    precio: 12.95,
    publicacion: 1959
}
]

//Ejercicio 1 (caro)

function CalculaCaro(comic){
    let total=0//Pon uno de los comics mejor
    for(let cada_comic of comic){
        if(cada_comic.precio>total){//poner el .precio con total al aplicar un comic antrior
            total=cada_comic.precio//y esto sobra
            final=cada_comic
        }
    }
    return final
}
console.log(CalculaCaro(comic))

// Ejercicio2

function CalculaAntiguo(comic){
    let antiguo=comic[0]
    for(let cada_comic of comic){
        if(cada_comic.publicacion<antiguo.publicacion){
            final2=cada_comic
        }
    }
    return final2
}
console.log(CalculaAntiguo(comic))

// Ejercicio 3

function CalculaLargo(comic){
    let masLargo=comic[0]
    for(let cada_comic of comic){
        if(cada_comic.titulo.length>masLargo.titulo.length){
            final3=cada_comic
        }
    }
    return final3
}
console.log(CalculaLargo(comic))
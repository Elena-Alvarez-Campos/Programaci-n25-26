
"use strict"
let videjuegos=[
    {
        "nombre":"Red Dead Redemption II",
        "plataformas":["PS4","Xbox One","PC"],
        "desarrolladora":"Rockstar Games",
        "lanzamiento":2018,
        "precio":59.99
    },{
        "nombre":"Animal Crossing New Horizonts",
        "plataformas":["Nintendo Switch"],
        "desarrolladora":"Nintendo",
        "lanzamiento":2020,
        "precio":59.99
    },{
        "nombre":"Project Diva MegaMix",
        "plataformas":["PS4","PC","Nintendo Switch"],
        "desarrolladora":"Sega",
        "lanzamiento":2020,
        "precio":39.39        
    },{
        "nombre":"Deltarune",
        "plataformas":["PS4","PC","Nintendo Switch","Xbox One"],
        "desarrolladora":"Toby Fox",
        "lanzamiento":2018,
        "precio":24.99
    },{
        "nombre":"Splatoon 3",
        "plataformas":["Nintendo Switch"],
        "desarrolladora":"Nintendo",
        "lanzamiento":2022,
        "precio":59.99
    },{
        "nombre":"Undertale",
        "plataformas":["PS4","PC","Nintendo Switch","Xbox One"],
        "desarrolladora":"Toby Fox",
        "lanzamiento":2016,
        "precio":24.99
    }
]
let clientes=[
    {
        "nombre":"Ada Lovelace",
        "cesta":["Animal Crossing New Horizonts","Red Dead Redemption II"],
        "comprados":["Project Diva MegaMix"]
    },{
        "nombre":"An Shiraishi",
        "cesta":["Project Diva MegaMix","Splatoon 3"],
        "comprados":["Animal Crossing New Horizonts","Red Dead Redemption II"]
    }
]

//Ejercicio 1
/*
Crea una función que reciba la lista de juegos y devuelva una lista con todas las
plataformas para las que hay juegos disponibles. Dejar para el final: que no se repitan
las plataformas en la lista.
Ejemplo: [PS5, XBox One, PC, Nintendo Switch, Game Boy Advance]*/
/**
 * @param {any} juegos
 * @return {string[]}
 */
console.log("Ejercicio 1")
function Ejercicio1(juegos){
    let lista_plataformas=[]
    for(let cada_juego of juegos){
        for(let cada_plataforma of cada_juego.plataformas){
            let repetido=false
            for(let cada_plataforma_lista of lista_plataformas){
                if(cada_plataforma_lista==cada_plataforma){
                    repetido=true
                }
            }
            if(repetido==false){
                lista_plataformas.push(cada_plataforma)
            }
        }
    }
    console.log()
    return lista_plataformas
}
console.log(Ejercicio1(videjuegos))

/*Ejercicio 2
Crea una función que reciba una plataforma {string} y la lista de videojuegos y
devuelva una lista con los objetos de videojuegos disponibles para esa plataforma.*/
/**
 * @param {string} plataforma
 * @param {any} juegos
 * @returns {any}
 */

console.log("Ejercicio 2")
function Ejercicio2 (plataforma,juegos){
    for(let cada_juego of juegos){
        for(let cada_plataforma of cada_juego.plataformas){
            if(cada_plataforma==plataforma){
                console.log(cada_juego)
            }
        }
    }
    return
}
Ejercicio2("PC",videjuegos)

//Ejercicio 3
/*Crea una función que reciba la lista de videojuegos y devuelva la desarrolladora
{string} que más videojuegos tenga en la tienda.*/
/**
 * @param {any} juegos
 * @returns {string}
 */
console.log("Ejercicio 3")

function Ejercicio3 (juegos){
    let lista_desarrolladoras={}//Crea un objeto vacío donde se van a meter las desarrolladoras con sus videojuegos
    for(let cada_juego of juegos){//Se recorre cada juego de la tienda
        if(lista_desarrolladoras[cada_juego.desarrolladora]===undefined){//Si la desarrolladora no está en el objeto de la lista de desarrolladoras:
            lista_desarrolladoras[cada_juego.desarrolladora]=0//Se crea una nueva catregoría que va a empezar en 0
        }
        lista_desarrolladoras[cada_juego.desarrolladora]++//Se suama 1 juego para pa categoría de la desarroyadora correspondiente
        
    }
    let mayor_desarrolladora=juegos[0].desarrolladora
    //console.log(lista_desarrolladoras) //Daría la lista de desarrolladoras y el número de videojuegos de estas
    for(let cada_desarrolladora in lista_desarrolladoras){//Para cada desarrolladora del objeto con todas las desarrolladoras
        //se compara su número de juegos con los de la mayor desarrolladora
        if(lista_desarrolladoras[cada_desarrolladora]>lista_desarrolladoras[mayor_desarrolladora]){//si tiene más que la mayor
            mayor_desarrolladora=cada_desarrolladora//esta desarroyadora se convierte en la mayor
        }
    }
      
    return mayor_desarrolladora
}
console.log(Ejercicio3(videjuegos))
//Ejercicio 4
/*Crea una función que reciba la lista de videojuegos y devuelva la plataforma {string}
para la que más videojuegos haya en la tienda.*/
/**
 * @param {any} juegos
 * @returns {string}
 */

console.log("Ejercicio 4")

function Ejercicio4 (juegos){
    let mayor_plataforma=juegos[0].plataformas[0]//El juego en más plataformas
    let lista_plataformas={}//listade plataformas que hay con sus juegos
    for(let cada_juego of juegos){//para cada juego
        for(let cada_plataforma of cada_juego.plataformas){
            if(lista_plataformas[cada_plataforma]===undefined){
                lista_plataformas[cada_plataforma]=0
            }
            lista_plataformas[cada_plataforma]++
        }
    }
    for(let plataforma in lista_plataformas){
       if(lista_plataformas[plataforma]>lista_plataformas[mayor_plataforma]){
            mayor_plataforma=plataforma//esta desarroyadora se convierte en la mayor
        }
    }
    
    return mayor_plataforma
}
console.log(Ejercicio4(videjuegos))

//Ejercicio 5
/*Crea una función que reciba la lista de videojuegos y devuelva un objeto que indique
la plataforma para la que más videojuegos haya en la tienda y el número de
videojuegos que tiene
{ plataforma: PC, videojuegos: 5}*/
/**
 * @param {any} videjuegos
 * @returns {object}
 */

console.log("Ejercicio 5")
function Ejercicio5 (juegos){
    let mayor_plataforma=""//El juego en más plataformas
    let juegos_mayor_plataforma=0//Los juegos que hay para esa plataforma
    let lista_plataformas={}//listade plataformas que hay con sus juegos
    for(let cada_juego of juegos){//para cada juego
        for(let cada_plataforma of cada_juego.plataformas){
            if(lista_plataformas[cada_plataforma]===undefined){
                lista_plataformas[cada_plataforma]=0
            }
                lista_plataformas[cada_plataforma]++
        }
    }
    for(let plataforma in lista_plataformas){
        if(lista_plataformas[plataforma]>juegos_mayor_plataforma){
            mayor_plataforma=plataforma
            juegos_mayor_plataforma=lista_plataformas[plataforma]
        }
    }
    let final={
        "plataforma":mayor_plataforma,
        "videojuegos":juegos_mayor_plataforma
    }
    return final
}
console.log(Ejercicio5(videjuegos))

//Ejercicio 6
/*Crea una función que devuelva el nombre {string} del videojuego más antiguo de la
tienda.*/
/**
 * @param {any} juegos
 * @returns {string}
 */
console.log("Ejercicio 6")

function Ejercicio6(juegos){
    let antiguo=''
    let año_antiguo=juegos[0].lanzamiento
    for(let cada_juego of juegos){
        if(cada_juego.lanzamiento<año_antiguo){
            antiguo=cada_juego.nombre
            año_antiguo=cada_juego.lanzamiento
        }
    }
    return antiguo
}
console.log(Ejercicio6(videjuegos))

//Ejercicio 7
/*Crea una función que reciba un cliente (el objeto de cliente entero), mueva los títulos
de la lista cesta a la lista comprados y devuelva el precio {number} que tiene que
pagar.*/
/**
 * @param {any} clientes
 * @return {number}
 */
console.log("Ejercicio 7")

function Ejercicio7 (clientes){
    for(let cada_cliente of clientes){
        let total=0
        while(cada_cliente.cesta.length>0){
            for(let cada_juego of videjuegos){
                if(cada_juego.nombre==cada_cliente.cesta[0]){
                    total=total+cada_juego.precio
                }
            }
            cada_cliente.comprados.push(cada_cliente.cesta[0])
            cada_cliente.cesta.splice(0,1)
            console.log(cada_cliente.comprados)
            //console.log(cada_cliente.cesta)
        }
        //console.log(cada_cliente.comprados) Daría la lista actualizada de juegos que ha comprado el cliente
        //console.log(cada_cliente.cesta) Daría la lista de la cesta vacía
        console.log(cada_cliente.nombre+" tiene que pagar "+total+"€")
    }
    return 
}
Ejercicio7(clientes)

//Ejercico 8
/*Supongamos que los videojuegos se devalúan con los años. Suponiendo que el precio
del videojuego se reduce un 15% cada año sobre el precio del año anterior, crea una
función que reciba el título de un juego y el año en el que se espera vender y que
devuelva el precio {number} que tendrá́.*/
/**
 * 
 * @param {string} juego
 * @returns {number}
 */

console.log("Ejercicio 8")
function Ejercicio8(juego,año_final){
    let fecha = new Date();
    let año = fecha.getFullYear();
    let precio=0
    let cada_año=año
    for(let cada_juego of videjuegos){
        if(cada_juego.nombre==juego){
            precio=cada_juego.precio
        }
    }
    console.log("precio original: "+precio)
    while(cada_año<año_final){
        precio=precio-(precio*0.15)
        cada_año++
    }
    precio=Number(precio.toFixed(2))
    

    return precio
}
console.log(Ejercicio8("Splatoon 3",2030))
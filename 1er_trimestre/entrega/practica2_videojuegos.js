
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
        "lanzamiento":2023,
        "precio":59.99
    },{
        "nombre":"Undertale",
        "plataformas":["PS4","PC","Nintendo Switch","Xbox One"],
        "desarrolladora":"Toby Fox",
        "lanzamiento":2016,
        "precio":24.99
    },{
        "nombre":"Miitopia",
        "plataformas":["Nintendo Switch"],
        "desarrolladora":"Ninitendo",
        "lanzamiento":2021,
        "precio":59.99
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
    },{
        "nombre":"Pepa Rodriguez",
        "cesta":["Project Diva MegaMix","Splatoon 3","Animal Crossing New Horizonts"],
        "comprados":["Undertale","Deltarune","Miitopia"]
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
    let lista_plataformas=[]//Lista de plataformas para las que hay videojuegos disponibles
    for(let cada_juego of juegos){//Para cada videojuego de la lista de juegos desponibles en la tienda:
        for(let cada_plataforma of cada_juego.plataformas){//Se recorre cada plataforma de cada juego de la tienda
            let repetido=false//Esta variable va a detectar si una plataforma va a ser repetida o no partiendo de que no se repite (faslse)
            for(let cada_plataforma_lista of lista_plataformas){//Se reccorre la lista de plataformas en las que hay videojuegos disponibles
                if(cada_plataforma_lista==cada_plataforma){//Si se la plataforma ya aparece en la lista de plataformas
                    repetido=true//se considera que está repetida, por lo que la variable cambia a true
                }
            }
            if(repetido===false){//Si la plataforma no está repetida (sería false)
                lista_plataformas.push(cada_plataforma)//Se añade la plataforma a la lista de plataformas
            }
        }
    }
    return lista_plataformas//Devuelve la lista de plataformas
}
console.log(Ejercicio1(videjuegos))//Muestra por pantalla la función

/*Ejercicio 2
Crea una función que reciba una plataforma {string} y la lista de videojuegos y
devuelva una lista con los objetos de videojuegos disponibles para esa plataforma.*/
/**
 * @param {string} plataforma
 * @param {any} juegos
 * @returns {object[]}
 */

console.log("Ejercicio 2")
function Ejercicio2 (plataforma,juegos){
    let lista_videojuegos=[]//Se determina la lista a la que se van a meter los videojuegos de la plataforma dada
    for(let cada_juego of juegos){//Se recorre cada juego de los disponibles en tienda
        for(let cada_plataforma of cada_juego.plataformas){//Se recorre cada plataforma a la que es disponible cada juego de la tienda
            if(cada_plataforma==plataforma){//Si alguna de las plataformas coincide 
                lista_videojuegos.push(cada_juego)//se añade el objeto entero del videojuego a la lista
            }
        }
    }
    return lista_videojuegos//Devuelve la lista de videojuegos compatiblese con la platforma dada
}
console.log(Ejercicio2("PC",videjuegos))//Se muestra por pantalla la función y se detrmina la plataforma que se va a filtrar

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
    let mayor_desarrolladora=juegos[0].desarrolladora//Determina que el nombre de la mayor desarroladora es el de la primera (para comparar)
    for(let cada_juego of juegos){//Se recorre cada juego de la tienda
        if(lista_desarrolladoras[cada_juego.desarrolladora]===undefined){//Si la desarrolladora no está en el objeto de la lista de desarrolladoras:
            lista_desarrolladoras[cada_juego.desarrolladora]=0//Se crea una nueva catregoría que va a empezar en 0
        }
        lista_desarrolladoras[cada_juego.desarrolladora]++//Se suama 1 juego para la categoría de la desarroyadora correspondiente
        
    }
    //console.log(lista_desarrolladoras) //Daría la lista de desarrolladoras y el número de videojuegos de estas
    for(let cada_desarrolladora in lista_desarrolladoras){//Para cada desarrolladora del objeto con todas las desarrolladoras
        //se compara su número de juegos con los de la mayor desarrolladora
        //Si la desarrolladora tiene más juegos que la mayor desarrolladora (ambas mirando en el objeto creado anteriormente):
        if(lista_desarrolladoras[cada_desarrolladora]>lista_desarrolladoras[mayor_desarrolladora]){
            mayor_desarrolladora=cada_desarrolladora//esta desarroyadora se convierte en la mayor
        }
    }
    return mayor_desarrolladora//Se devuelve la mayor desarroyadora
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
    let mayor_plataforma=juegos[0].plataformas[0]//Determina que el nombre de la mayor plataforma es la primera del primer juego (para comparar)
    let lista_plataformas={}//Crea un objeto vacío donde se van a meter las plataformas con sus videojuegos
    for(let cada_juego of juegos){//Se recorre cada juego de la tienda
        for(let cada_plataforma of cada_juego.plataformas){//Se recorre cada plataforma del videojuego
            if(lista_plataformas[cada_plataforma]===undefined){//Si la plataforma no está en el objeto de la lista de plataformas:
                lista_plataformas[cada_plataforma]=0//Se crea una nueva catregoría que va a empezar en 0
            }
            lista_plataformas[cada_plataforma]++//Se suama 1 juego parala categoría de la plataforma correspondiente
        }
    }
    //console.log(lista_plataformas) //Daría el objeto de las plataformas con el número de juegos que hay para cada una
    for(let plataforma in lista_plataformas){//Para cada plataforma del objeto con todas las plataformas
        //se compara su número de juegos con los de la mayor plataforma
        //Si la plataforma tiene más juegos que la mayor (ambas mirando en el objeto creado anteriormente):
       if(lista_plataformas[plataforma]>lista_plataformas[mayor_plataforma]){
            mayor_plataforma=plataforma//esta plataforma se convierte en la mayor
        }
    }
    
    return mayor_plataforma//Se devuelve la mayor plataforma
}
console.log(Ejercicio4(videjuegos))//Muestra por pamntalla la función

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
    let mayor_plataforma=juegos[0].plataformas[0]//Determina que el nombre de la mayor plataforma es la primera del primer juego (para comparar)
    let lista_plataformas={}//Crea un objeto vacío donde se van a meter las plataformas con sus videojuegos
    for(let cada_juego of juegos){//Se recorre cada juego de la tienda
        for(let cada_plataforma of cada_juego.plataformas){//Se recorre cada plataforma del videojuego
            if(lista_plataformas[cada_plataforma]===undefined){//Si la plataforma no está en el objeto de la lista de plataformas:
                lista_plataformas[cada_plataforma]=0//Se crea una nueva catregoría que va a empezar en 0
            }
            lista_plataformas[cada_plataforma]++//Se suama 1 juego parala categoría de la plataforma correspondiente
        }
    }
    //console.log(lista_plataformas) //Daría el objeto de las plataformas con el número de juegos que hay para cada una
    for(let plataforma in lista_plataformas){//Para cada plataforma del objeto con todas las plataformas
        //se compara su número de juegos con los de la mayor plataforma
        //Si la plataforma tiene más juegos que la mayor (ambas mirando en el objeto creado anteriormente):
       if(lista_plataformas[plataforma]>lista_plataformas[mayor_plataforma]){
            mayor_plataforma=plataforma//esta plataforma se convierte en la mayor
        }
    }
    let final={//Objeto final que va a devolver
        "plataforma":mayor_plataforma,//el nombre de la mayor plataforma
        "videojuegos":lista_plataformas[mayor_plataforma]//el número de juegos de la mayor plataforma
    }
    return final//Devuelve el objeto final
}
console.log(Ejercicio5(videjuegos))//MUestra por pantalla la función

//Ejercicio 6
/*Crea una función que devuelva el nombre {string} del videojuego más antiguo de la
tienda.*/
/**
 * @param {any} juegos
 * @returns {string}
 */
console.log("Ejercicio 6")

function Ejercicio6(juegos){
    let antiguo=''//Determina que el juego más antiguo es un string
    let año_antiguo=juegos[0].lanzamiento////Determina que el año del videojuego más antiguo es el del primer juego (para comparar)
    for(let cada_juego of juegos){//Se recorre cada juego de la tienda
        if(cada_juego.lanzamiento<año_antiguo){//Si el año de lanzamiento del juego es más antiguo al año del más antiguo:
            antiguo=cada_juego.nombre//El nombre del juego se convierte en el más antiguo
            año_antiguo=cada_juego.lanzamiento//y su año también
        }
    }
    return antiguo//Devuelve en nombre del videojuego más antiguo
}
console.log(Ejercicio6(videjuegos))//Se muestra por pantalla la función

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
    for(let cada_cliente of clientes){//Se recorre cada cliente de la lista
        let total=0//El total final que va a ser un number
        while(cada_cliente.cesta.length>0){//Mientras que la lista de juegos que tiene el cliente en la cesta no esté vacía:
            for(let cada_juego of videjuegos){//Se recorre cada juego de la lista de videojuegos de la tienda 
                if(cada_juego.nombre==cada_cliente.cesta[0]){//Y si el título del primero de la cesta coincide con uno de los de la tienda
                    total=total+cada_juego.precio//Al total se le suma el precio del juego
                    break//Una vez que se encuentra el juego y se suma su precio al total no hará falta analizar los demás
                    //NOTA: He probado a hacerlo sin el break y sale lo mismo, pero el ordenador tendría que analizar sin necesidad el
                    //resto de videojuegos, por este motivo he decidido ponerle un break
                }
                
            }
            //Al encontrar el juego y su precio precio:  
            cada_cliente.comprados.push(cada_cliente.cesta[0])//se añade el juego a los comprados
            cada_cliente.cesta.splice(0,1)//y se quita de la cesta
            
        }
        //console.log(cada_cliente.comprados)// Daría la lista actualizada de juegos que ha comprado el cliente
        //console.log(cada_cliente.cesta)// Daría la lista de la cesta vacía
        console.log(total)//Devuelve el total que debe pagar
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
    let fecha = new Date();//Se genera la fecha y tiempo de hoy
    let año = fecha.getFullYear();//Con la fecha ya establecida, se saca solo el año
    let precio=0//El precio final que va a adquirir el videojuego va a ser un number
    let cada_año=año//Se empieza con el año actual y se irá sumando más adelante hasta sea igual al año indicado
    for(let cada_juego of videjuegos){//Se recorre cada videojuego de los disponibles en la tienda
        if(cada_juego.nombre==juego){//Hasta que encuentre el nombre del videojuego que coincide con el dado
            precio=cada_juego.precio//y se selecciona su precio para poder trabajar con el
            break//Como ya encontró el videojuego, no tiene por que seguir buscando en la lista
            //NOTA:Igual que en el ejercicio 7, funciona sin el break pero considero más adecuqado implementarlo
        }
    }
    //console.log("precio original: "+precio) //Daría cunato valdría el juego actualmente
    while(cada_año<año_final){//Mientras que no se llegue al año dado:
        precio=precio-(precio*0.15)//Al precio se le resta el 15% de lo que valía el año anterior
        cada_año++//Al año analizado se le suma otro más
    }

    precio=Number(precio.toFixed(2))//Se redondea el precio a dos decimales
    //Number(variable.tofixed(2))
    return precio//Se devuelve el precio final
}
console.log(Ejercicio8("Splatoon 3",2030))//Se muestra la función por pantalla y se determina el videojuego y el año

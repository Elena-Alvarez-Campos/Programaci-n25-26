"use strict"
let cine={
    "nombre":"yelmo",
    "descuento_menores":30,
    "productos":[{
        "nombre":"entrada",
        "precio":5.5
    },{
        "nombre":"palomitas",
        "precio":2.25
    },{
        "nombre":"refresco",
        "precio":2.45
    }
]}
let taco={
    "nombre":"taco_bell",
    "descuento_menores":10,
    "productos":[{
        "nombre":"taco",
        "precio":1
    },{
        "nombre":"burrito",
        "precio":2
    }]
}
let cultura={
    "nombre":"fnac",
    "descuento_menores":40,
    "productos":[{
        "nombre":"CD",
        "precio":14
    },{
        "nombre":"peli",
        "precio":20
    },{
        "nombre":"libro",
        "precio":13
    }]
}
let tiendas=[cine,taco,cultura];

let cliente1={
    "nombre":"Peter Parker",
    "edad":17,
    "productos":{
        "yelmo":["entrada","entrada","palomitas"],
        "taco_bell":["taco","taco"],
        "fnac":["libro","libro","CD"]
    }
}
let cliente2={
    "nombre":"An",
    "edad":18,
    "productos":{
        "yelmo":["entrada","entrada","palomitas","refresco"],
        "taco_bell":["burrito","burrito","taco"],
        "fnac":["CD","CD","peli"]
    }
}
let cliente3={
    "nombre":"Pepe",
    "edad":30,
    "productos":{
        "yelmo":["entrada","entrada","palomitas"],
        "taco_bell":["taco","taco"],
        "fnac":["peli"]
    }
}
let clientes=[cliente1,cliente2,cliente3]
/**
* Función que recibe una lista de tiendas y un cliente y devuelve
* el precio a pagar por el cliente
*
* @param {[*]} tiendas
* @param {*} cliente
* @returns {string}
*/
function calculaPrecio(tiendas,clientes){
    
    for(let cada_cliente of clientes){
        let total=0
        for(let cada_tienda_cliente in cada_cliente.productos){
            for(let cada_tienda_vialia of tiendas){
                if(cada_tienda_vialia.nombre==cada_tienda_cliente){
                    for(let cada_producto_cliente of cada_cliente.productos[cada_tienda_cliente]){
                        for(let cada_producto_tienda of cada_tienda_vialia.productos){
                            if(cada_producto_cliente==cada_producto_tienda.nombre){
                                if(cada_cliente.edad<18){
                                    total=total+(cada_producto_tienda.precio-(cada_producto_tienda.precio*(cada_tienda_vialia.descuento_menores/100)))
                                }
                                else{
                                    total=total+cada_producto_tienda.precio
                                }
                            }
                        }
                    }
                    
                }
            }
        }
        //Investigué como podría redondear la cifra a 2 números decimales y encontré este comando
        total=Number(total.toFixed(2))
        console.log(cada_cliente.nombre+":"+total+"€")
    }
    return
}
calculaPrecio(tiendas,clientes)
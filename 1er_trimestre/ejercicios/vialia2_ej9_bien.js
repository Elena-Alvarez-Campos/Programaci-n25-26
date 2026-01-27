"use strict"
let tiendas=[{
    "cine":{
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
        }]
    }},{
    "taco":{
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
}]
        
let clientes=[{
    "cliente1":{
        "nombre":"Peter",
        "edad":17,
        "productos":{
            "yelmo":["entrada","entrada","palomitas"],
            "taco_bell":["taco","taco"]
        }
    }
},{
    "cliente2":{
        "nombre":"An",
        "edad":18,
        "productos":{
            "yelmo":["entrada","entrada","palomitas","refresco"],
            "taco_bell":["burrito","burrito","taco"]
        }
    }
},{
    "cliente3":{
        "nombre":"Pepe",
        "edad":30,
        "productos":{
            "yelmo":["entrada","entrada","palomitas"],
            "taco_bell":["taco","taco"]
        }
    }
}
]
/**
* Función que recibe una lista de tiendas y un cliente y devuelve
* el precio a pagar por el cliente
*
* @param {[*]} tiendas
* @param {*} cliente
* @returns {string}
*//*
function calculaPrecio(tiendas,clientes){
    
    for(let cliente of clientes){
        for(let cada_cliente in cliente){
            let total=0
            //cliente[cada_cliente] son los objetos de los clientes
            for(cada_tienda_cliente in cada_cliente.productos){
                for(let tienda of tiendas){
                    for(let cada_tienda_vialia in tienda){
                        //tienda[cada_tienda]) objetos de las tiendas
                        if(cada_tienda_vialia.nombre==cada_tienda_cliente){
                            for(let cada_producto_cliente of cliente[cada_cliente].productos[cada_tienda_cliente]){
                                
                            }
                        }
                    }
                }
            }
        }
    }
    return
}
calculaPrecio(tiendas,clientes)*/
//clientes es = 1 objeto, no muchos
function calculaPrecio(tiendas,clientes){
    let total=0
    for(let nombre_tienda in clientes.productos){//Recorre un objeto y sus listas de productos
        for(let tienda of tiendas){
            if(tienda.nombre==nombre_tienda){
                for(let cada_producto of clientes['productos'][nombre_tienda]){
                    for(let producto_tienda of tienda.productos){
                        if(clientes['edad']<18){
                            total=total-(producto_tienda.precio*tienda.descuento_menores/100)
                        }
                        if(cada_producto==producto_tienda.nombre){
                            total=total+producto_tienda.precio
                        }
                    }
                }
            }
        }
    }
    return (total)
}

console.log(calculaPrecio(tiendas,clientes))
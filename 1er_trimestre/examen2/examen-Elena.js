"use strict"

let tienda={
    nombre: "Primark",
    productos: [
        {nombre: "Pijama", precio: 10, unidades: 12},
        {nombre: "Calcetines", precio: 3, unidades: 35},
        ],
    total_vendido: 0
}

console.log("Ejercicio 1")
/*Crea la función masBarato(tienda) que recibe el objeto de la tienda y devuelve el objeto de
producto entero más barato de la tienda
Crea la función masCantidad(tienda) que recibe el objeto de la tienda y devuelve el objeto de
producto que más cantidad tiene en la tienda*/
/**
 * @param {object} tienda 
 * @returns {object}
 */
function masBarato(tienda){
    let barato=tienda.productos[0]//Se pone como ejemplo del más barato el primer producto de la tienda
    for( let cada_producto of tienda.productos){//Se recorren todos los productos de la tienda
        if(cada_producto.precio<barato.precio){//Se comprueba si el precio del producto es menor al del más barato
            barato=cada_producto//Si lo es, se convertirá en el nuevo barato
        }
    }
    return barato
}
console.log("Mas barato: ",masBarato(tienda))
/**
 * @param {object} tienda
 * @returns {object}
 */
function masCantidad(tienda){
    let muchos=tienda.productos[0]//Se pone como ejemplo del más abundadnte el primer producto de la tienda
    for( let cada_producto of tienda.productos){//Se recorren todos los productos de la tienda
        if(cada_producto.unidades>muchos.unidades){//Se comprueba si la cantidad del producto es mayor al del más abundante
            muchos=cada_producto//Si lo es, se convertirá en el nuevo de mayor cantidad
        }
    }
    return muchos
}
console.log("Mas cantidad: ",masCantidad(tienda))

console.log("Ejercico 2")
/*Crea la función calculaBeneficiosMaximos(tienda) que recibe un objeto tienda y devuelve la
cantidad de dinero que podría generar si vendiese todo su stock.*/
/**
 * @param {object} tienda
 * @returns {number}
 */
function calculaBeneficiosMaximos(tienda){
    let total=0
    for(let cada_producto of tienda.productos){//Se recorren todos los productos de la tienda
        //Al total se suma el propio total y lo que vale cada producto por la cantidad
        total+=cada_producto.precio*cada_producto.unidades
    }
    return total
}
console.log(calculaBeneficiosMaximos(tienda))

console.log("Ejercicio 3")
/*Crea una función venderProducto(tienda, nombre_producto, cantidad) que recibe la tienda, el
nombre de un producto y la cantidad y hará́ lo siguiente:
• Restar unidades correspondientes del producto (si se piden más de las que tiene, se
restarán hasta el máximo que dispongamos)
• Añadirá́ el valor total de la compra al atributo total_vendido de la tienda
• Devolverá mediante un return el valor de la compra {number}
• En caso de que un producto se quede sin stock mostrará el mensaje “Nos hemos
quedado sin stock del producto en la tienda” y borrará dicho producto*/
/**
 * @param {object} tienda
 * @param {string} producto_dado
 * @param {number} cantidad_dada
 * @return {number}
 */
function venderProducto(tienda,producto_dado,cantidad_dada){
    for(let cada_producto of tienda.productos){
        //Si el producto coincide y la cantidad que pide el usuario es menor al stock
        if(cada_producto.nombre==producto_dado && cada_producto.unidades>=cantidad_dada){
            //El total vendido se convierte en lo que cuesta cada producto por la cantidad que pide el usuario
            tienda.total_vendido=cada_producto.precio*cantidad_dada
        }
        //Si el producto coincide pero la cantidad que pide el usuario excede al stock
        if(cada_producto.nombre==producto_dado && cada_producto.unidades<cantidad_dada){
            //El total vendido se convierte en lo que cuesta cada producto por la cantidad que hay en stock
            tienda.total_vendido=cada_producto.unidades*cada_producto.precio
            console.log("Nos hemos quedado sin stock del producto en la tienda")
            //Para eliminar el producto de la tienda, se consigue la posición del producto mediante un indexOf
            //Con un splice, se pone la posición anterior y se borra 1 elemento, eliminando el producto agotado
            tienda.productos.splice(tienda.productos.indexOf(cada_producto),1)
            //console.log(tienda)// el objeto de tienda para asegurarse de que funciona
        }
    }
    return tienda.total_vendido//Se devuelve el total obtenido

}
console.log(venderProducto(tienda,"Calcetines",90))
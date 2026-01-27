"use strict"

let sacos=[
    {
        "fruta":"manzana",
        "precio_kg":3.20,
        "capacidad":15,
        "cantidad":9.75
    },{
        "fruta":"pera",
        "precio_kg":2.50,
        "capacidad":20,
        "cantidad":18.7
    },{
        "fruta":"kiwi",
        "precio_kg":5.20,
        "capacidad":10,
        "cantidad":5
    },{
        "fruta":"limon",
        "precio_kg":2.99,
        "capacidad":25,
        "cantidad":24
    },{
        "fruta":"cereza",
        "precio_kg":6.40,
        "capacidad":20,
        "cantidad":5.40
    }
]
//Ejercicio 1
console.log("Ejercicio 1")
/**
 * @param {[object]} sacos
 * @returns {string}
 */
function mayorFruta (sacos){
    let fruta_mayor_tipo=sacos[0].fruta//Se escoge una fruta para comparar
    let num_fruta_mayor=sacos[0].cantidad//También la cantidad de dicha fruta
    for(let cada_saco of sacos){
        if(num_fruta_mayor<cada_saco.cantidad){//Si la cantidad de la fruta es mayour a la mayor
            fruta_mayor_tipo=cada_saco.fruta//Se convierte en la nueva fruta mayor
            num_fruta_mayor=cada_saco.cantidad//Y su cantidad también
        }
    }
    return fruta_mayor_tipo
}
console.log(mayorFruta(sacos))

//Ejercicio 2
/**
 * @param {[object]} sacos
 * @param {string} fruta_compra
 * @param {number} cantidad_compra
 * @return {object}
 */
console.log("Ejercicio 2")
function comprarFruta(sacos, fruta_compra, cantidad_compra){
    let cantidad_final=0
    let posicion=0
    let precio_final=0
    for(let cada_saco of sacos){
        if(cada_saco.fruta===fruta_compra){
            if(cada_saco.cantidad-cantidad_compra<0){//Si hay mas fruta en la compra que en el saco
                cantidad_final=cada_saco.cantidad//La cantidad final es la misma que la del saco
                sacos.splice(posicion,1)//Se elimina en saco
                //console.log(sacos) //Muestra la lista de sacos en la que falta el saco de la fruta elegida
            }
            else{//Si hay mas fruta en el saco que en la compra
                cada_saco.cantidad=cada_saco.cantidad-cantidad_compra//Se resta la cantidad al saco
                cantidad_final=cantidad_compra//la cantidad final es la misma que la de la compra
                //console.log(cada_saco) //Muestra el saco original al que se le quitaron las frutas compradas
            }
            break//Se deja de recorrer los sacos de frutas
        }
        posicion++//Se determina la posicion que tiene en el array por cada vuelta saco que se recorre
    }
    precio_final=cantidad_final*sacos[posicion].precio_kg//Se multiplica la cantidad de frutas del saco nuevo por el precio por kg de la fruta
    precio_final=Number(precio_final.toFixed(2))//Se redondea el precio a dos decimales
    console.log(precio_final)//Se muestra el precio por pantalla
    let saco_final={
        "fruta":fruta_compra,
        "capacidad":cantidad_final,
        "cantidad":cantidad_final

    }
    return saco_final
}
console.log(comprarFruta(sacos,"kiwi",15))
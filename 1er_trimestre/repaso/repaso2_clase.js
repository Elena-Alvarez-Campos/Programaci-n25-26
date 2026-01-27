
//1. Crea una lista de números
//Ejemplo: [3, 4, 7, 2, 16, 29]

let lista_num=[3,4,7,2,16,29]
console.log(lista_num)

//2. Crea una función que reciba como parámetro una lista de números {number[]} e
//imprima solo los números que estén en una posición par en la lista.
//Ejemplo: 3, 7, 16

/**
 * @param {number[]} lista_num
 * @return {number}//no es exacto exacto
*/

function NumerosPosicionPar(lista){
    for( let i=0; i<=lista.length; i++){
        if(i%2==0){
            console.log(lista[i])
        }
    }
}
NumerosPosicionPar(lista_num)
//3. Crea una función que reciba como parámetro una lista de números {number[]} e
//imprima solo los números pares
//Ejemplo: 4, 2, 16

/**
 * @param {number[]} lista_num
 * @return {number}
*/

function NumerosPar(lista_num){

    for(let cada_num2 of lista_num){
        if(cada_num2%2==0){
            console.log(cada_num2)
        }
    }
    
}
NumerosPar(lista_num)
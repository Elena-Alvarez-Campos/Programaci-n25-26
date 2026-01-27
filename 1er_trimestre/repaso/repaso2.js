
//1. Crea una lista de números
//Ejemplo: [3, 4, 7, 2, 16, 29]

let lista_num=[3,4,7,2,16,29]
console.log(lista_num)

//2. Crea una función que reciba como parámetro una lista de números {number[]} e
//imprima solo los números que estén en una posición par en la lista.
//Ejemplo: 3, 7, 16

/**
 * @param {[number]}
 * @return {[number]}
*/
let lista_par=[]
let num=0
function NumerosPosicionPar(lista_num){
    for(cada_num of lista_num){
        if(num%2==0){
            lista_par.push(cada_num)
        }
        num++
    }
    return lista_par
}
console.log(NumerosPosicionPar(lista_num))

//3. Crea una función que reciba como parámetro una lista de números {number[]} e
//imprima solo los números pares
//Ejemplo: 4, 2, 16

/**
 * @param {[number]}
 * @return {[number]}
*/

function NumerosPar(lista_num){
    let lista_par2=[]
    for(cada_num2 of lista_num){
        if(cada_num2%2==0){
            lista_par2.push(cada_num2)
        }
    }
    return lista_par2
}
console.log(NumerosPar(lista_num))
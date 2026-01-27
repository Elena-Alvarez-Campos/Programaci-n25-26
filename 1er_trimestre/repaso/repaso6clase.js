
/*Ejercicio Repaso 6
Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci
empezando en 0.
La serie Fibonacci se compone por una sucesión de números en la que el siguiente
siempre es la suma de los dos anteriores.
0, 1, 1, 2, 3, 5, 8, 13...
Empezarás con una lista con los 2 primeros elementos:

let fibonacci = [0, 1];*/
/**
 * @param {number[]}
 * @return {number[]}
 */

let fibonacci=[0,1]

function Fibonacci(fibonacci){
for(let i=0; i<50; i++){
let ultimo=fibonacci[fibonacci.lengt-1]
let penultimo=fibonacci[fibonacci.lengt-2]
let nuevo=ultimo+penultimo

fibonacci.push(nuevo)
}
return fibonacci
}
console.log(Fibonacci(fibonacci))


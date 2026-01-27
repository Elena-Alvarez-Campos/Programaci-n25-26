
/*Ejercicio Repaso 6
Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci
empezando en 0.
La serie Fibonacci se compone por una sucesión de números en la que el siguiente
siempre es la suma de los dos anteriores.
0, 1, 1, 2, 3, 5, 8, 13...
Empezarás con una lista con los 2 primeros elementos:

let fibonacci = [0, 1];*/


let fibonacci=[0,1]
function Fibonacci(){
    for(i=1; i<50; i++){
        let posicion=i
        let num_nuevo= fibonacci[posicion]+fibonacci[posicion-1]
        fibonacci.push(num_nuevo)
    }
    console.log(fibonacci)
    return
}
Fibonacci()
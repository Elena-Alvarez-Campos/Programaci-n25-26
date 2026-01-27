

/*Ejercicio Repaso 4
Escribe una función que reciba dos palabras (string) y retorne verdadero o falso
(boolean) según sean o no bifrontes.
* El bifronte es una palabra o frase que permite un sentido leída de izquierda a derecha
y otro distinto leída de derecha a izquierda   (por ejemplo: rama, arroz, raro...)
* NO hace falta comprobar que ambas palabras existan.*/
/**
 * 
 * @param {string} palabra1 
 * @param {string} palabra2 
 * @returns {boolean}
 */
/*
*/
function esbifronte(palabra1,palabra2){
    let palabra1_invertida='';
    for(let i=palabra1.length-1; i>=0; i--){
        palabra1_invertida=palabra1_invertida+palabra1[i]
    }
    return (palabra1_invertida==palabra2)
}
console.log(esbifronte('amor','roma'))
console.log(esbifronte('arco','roma'))
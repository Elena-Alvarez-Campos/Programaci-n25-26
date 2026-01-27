
/*Eliminando caracteres
Crea una función que reciba dos cadenas de texto como parámetro (texto1 {string},
texto2 {string}) y devuelva un objeto con dos cadenas de texto como salida
return {
vuelta1: {string},
vuelta2: {string}
}
- vuelta1: contendrá́ todos los caracteres presentes en texto1 pero que NO están
presentes en texto2.
- vuelta2: contendrá́ todos los caracteres presentes en texto2 pero que NO están
presentes en texto1.*/
/**
 * @param {string} texto1
 * @param {string} texto2
 * @returns {vuelta1:{string} , vuelta2:{string}}
 */

function ejercicio6 (texto1,texto2){
    let vuelta1=texto1
    let vuelta2=texto2
    for(let cada_letra of texto1){
        texto2.indexOf(cada_letra)
        if(texto2.indexOf(cada_letra)>=0){
            vuelta1=vuelta1.replace(texto2.charAt(texto2.indexOf(cada_letra)) , '')
        }
    }
    for(let cada_letra of texto2){
        texto1.indexOf(cada_letra)
        if(texto1.indexOf(cada_letra)>=0){
            vuelta2=vuelta2.replace(texto1.charAt(texto1.indexOf(cada_letra)) , '')
        }
    }
    return {vuelta1,vuelta2}
}

console.log(ejercicio6('hola','adios'))

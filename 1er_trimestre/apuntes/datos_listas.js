/*
let numero = 23; // esto es un número, tipo {number}
let flotante = 3.14 // esto es un número, tipo {number}
let letra = "a"; // esto es un texto, tipo {string}
let palabra = "berberecho"; // esto es una texto, tipo {string}
let texto = "Yo soy Iron-Man"; // esto es un texto, tipo {string}
let nada = null;
let no_existe = undefined;
let tampoco_existe; // esto es lo mismo que poner undefined
*/

let lista_de_numeros = [2,3,8,1,67,22,12]
let numero = 23;

console.log("Voy a recorrer toda la lista de números y hacer una comprobación");

for(let cada_numero of lista_de_numeros) {
console.log("Comparando", cada_numero, "de la lista con", numero);
if(cada_numero == numero) {
console.log("Sí, son iguales");
} else {
console.log("No, no son iguales");
}
}
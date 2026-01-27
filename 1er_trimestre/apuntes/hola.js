
//comentario de línea
//esto es para comprobar por pantalla que funciona
console.log('Hola mundo');


/*esto es un comentario
multilínea*/


/*

let nombre;
let edad;

let nombre1="Elena";
let edad1=2;
console.log(typeof(edad1))

console.log(nombre1);
console.log('Hola '+ nombre1); //el elemnto de concatenación es el +

let numero=3.76; //número decimal que se va tener en cuenta al compararlo con un entero

let isOK=true; //buleano
let correcto=6>3; //como 6>3 es correcto, por lo tanto debuelve "true"
console.log(correcto);

let num='500';
console.log(typeof(num));

let num1=500;
console.log(typeof(num1));

console.log(typeof(nombre)); //cuando la variable es undefined quiere decir que no ha guardado nada

edad1='no quiero decir la edad' //se puede ir modificando a lo largo del código
console.log(edad1);
console.log(typeof(edad1));

// tanto 'let' como 'var' pueden sufrir cambios, pero 'const' no
let num2='1234'; //este es un string
console.log(typeof(num2));
let num3=parseInt(num2); //cambio a number
console.log(typeof(num3));

const daysInWeek=7; //constantes que simpre van a ser así y no van a sufrir cambios
const hoursday=24; 

*/

/*

//Operadores de asignación
let suma;
let resta;
let mult;
let div;
let resto;

//Muestra por pantalla en valor de cada una de estas operaciones entre los números 5 y 2

const num4=5;
const num5=2;

suma=num4+num5;
resta=num4-num5;
mult=num4*num5;
div=num4/num5;
resto=num4%num5;

console.log(suma);
console.log(resta);
console.log(mult);
console.log(div);
console.log(resto);

//Operadores de comparación

let pass=12345;
let pass1="12345";

console.log(pass==pass1);
console.log(typeof(pass));
console.log(typeof(pass1));
console.log(pass!=pass1);
console.log(pass===pass1);
console.log(pass!==pass1);

//num4=5 num5=2
console.log(num4<num5);
console.log(num4>=num5);

let x=3
console.log(x);
// x++; vale para cuando quieres trabajar con ella antes de añadirle nada
++x;
console.log(x);

console.log(true && true); //solo devuelve 'true' aqui (piensa en tener dinero y edad para ir a la disco)
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true); //piensa en tener cm o bach para hecer cs)
console.log(true || false);
console.log(false || true);
console.log(false || false);//solo devuelve false aqui

console.log(!false); //dará el contrario

*/

console.log('Hola '+'adios');

let persona=['Ana',27,true];
let numeros=new Array(6); // Número de elementos del Array(está vacío)
let char = new Array('Ana','Profesora','DAM'); //Describiendo cada elemento

console.log(persona); //devuelve TODO lo que le pones (incluido los corchetes)
console.log(persona[0]); //para que devuelva un elemento en concreto

/* Se pueden hacer Array de distintas formas
let lista=[a,b,c]
let lista=new Array(número de eelementos del Array)
let lista = new Array('a','b','c,')
let lista=[] //vacía
*/

let numero = 23; // esto es un número, tipo {number}
let flotante = 3.14 // esto es un número, tipo {number}
let letra = "a"; // esto es un texto, tipo {string}
let palabra = "berberecho"; // esto es una texto, tipo {string}
let texto = "Yo soy Iron-Man"; // esto es un texto, tipo {string}
let nada = null;
let no_existe = undefined;
let tampoco_existe; // esto es lo mismo que poner undefined

console.log("Voy a recorrer toda la lista de números y hacer una comprobación");
for(let cada_numero of lista_de_numeros) {
console.log("Comparando", cada_numero, "de la lista con", numero);
if(cada_numero == numero) {
console.log("Sí, son iguales");
} else {
console.log("No, no son iguales");
}
}
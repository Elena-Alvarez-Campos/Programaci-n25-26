"use strict";
/*Ejercicio 1
Crea una función que reciba como parámetro una lista de números {number[]} y devuelva
un objeto con los número positivos en una propiedad, negativos en otra, e iguales a 0 en
otra propiedad similar a este:
{
positivos: [11, 17],
negativos: [-9, -1, -5],
ceros: [0, 0]
}*/
/**
 * @param {number[]} numeros
 * @return {positivos: [number], negativos:[number], ceros:[number] }
 */
console.log('Ejercicio 1')
let numeros=[11,-9,0,17,-1,0,-5,8]//Lista de números que va a recibir la función

function FuncionEj1(numeros){
    let ordenanum={ //se crea el objeto en el que se van a ordenar los números
        //Se determina a cada elemento del objeto como array vacío para poder ir metiendo los números que corresponden
        "positivos": [], 
        "negativos": [],
        "ceros": []
    }
    for (cadanum of numeros){//Para cada número de la lista
        if (cadanum>0){//Si el número es mayor a 0 es positivo
            ordenanum.positivos.push(cadanum) //Se introduce el númro positivo en el objeto en "positivos"
        }else if(cadanum<0){ //Si el número es menor que 0 es negativo
            ordenanum.negativos.push(cadanum) //Se introduce el número negativo en el objeto en "negativos"
        }else{ //Si no es ninguno de los anteriores significa que el número es 0
            ordenanum.ceros.push(cadanum) //Se introduce el número en el objeto en "ceros"
        }
    }
    return ordenanum //Se devuelve el objeto al final
}
console.log(FuncionEj1(numeros))//Se muestra en pantalla la función

/*Ejercicio 2
Crea una función que reciba como parámetros una lista de números {number[]} y un
número {number} y devuelva un objeto con los mayores a ese número, los menores y los
iguales. Por ejemplo, si le pasamos el 15 como segundo parámetro deberá devolver lo
siguiente:
{
mayores: [25, 17, 19],
menores: [8, 12, -5],
iguales: [15, 15]
}*/
/**
 * @param {number[]} lista_num
 * @param {number} numbase
 * @return {mayores:[number], menores:[number], iguales[number] }
 */
console.log('Ejercicio 2')

let lista_num=[25,3,15,12,17,15,19,-5]//Lista de números que va a recibir la función
function FuncionEj2(lista_num,numbase){
    let comparacion={//se crea el objeto en el que se van a ordenar los números
        "mayores": [],
        "menores": [],
        "iguales": []
    }
    for (cadanum_lista of lista_num){//Para cada número de la lista:
        if (cadanum_lista>numbase){//Si el número es mayor al número dado
            comparacion.mayores.push(cadanum_lista) //Se introduce el número en el objeto en "mayores"
        }else if(cadanum_lista<numbase){ //Si el número es menor al número dado
            comparacion.menores.push(cadanum_lista) //Se introduce el número en el objeto en "menores"
        }else{ //Si no es ninguno de los anteriores significa que el número es igual al dado
            comparacion.iguales.push(cadanum_lista) //Se introduce el número en el objetp en "iguales"
        }
    }
    return comparacion//Devuelve el objeto
}
console.log(FuncionEj2(lista_num,15))//Se escribe por pantalla la función y se determina el número del parámetro

/*Ejercicio 3
Crea una función que reciba una lista de objetos persona como este:
{
nombre: "Peter Parker",
edad: 19
}
Tiene que devolver un objeto con los mayores de edad y con los menores de edad por
separado:
{
mayores: [
{ "nombre": "Tony Stark", "edad": 39 },
...
],
menores: [
{ "nombre": "Peter Parker", "edad": 17 },
...
]
}*/
/**
 * @param {[{nombre:string, edad:number}]} personas
 * @return {mayoeres: [{nombre:string, edad:number}]}
 */
console.log('Ejercicio 3')

let personas=[{
    "nombre": "Peter Parker",
    "edad": 17
},{
    "nombre": "Tony Stark",
    "edad": 39
},{
    "nombre": "Marisa",
    "edad": 15
},{
    "nombre": "Emilio",
    "edad": 52
},{
    "nombre": "Pepe",
    "edad": 18
}]

function FuncionEj3(personas){
    let comparaedad={//objeto y sus elementos vacíos a los que se van a añadir las personas
        mayores:[],
        menores:[]
    }
    for(cada_persona of personas){//Para cada persona del objeto
        //si su edad>=18 se añade ol objeto entero de esa persona en "mayores"
        //si no, se añade el objeto entero de la persona en "menores"
        cada_persona.edad>=18 ? comparaedad.mayores.push(cada_persona) : comparaedad.menores.push(cada_persona)
    }
    return comparaedad//devuelve el objeto
}
console.log(FuncionEj3(personas))//Se muestra por pantalla la función

//Ejercicio 4
/*Con la lista de personas del ejercicio anterior, crea una función que devuelva al de más
edad (objeto de persona entero), otra función que devuelva al de menos edad (objeto de
persona entero) y otra que devuelva la media de edad {number}.*/
/**
 * @param {[{nombre:string, edad:number}]} personas
 * @return {nombre:string, edad:number}
 */
console.log('Ejercicio 4')
console.log('Mayor edad')
function FuncionEj4mayor(personas){
    //se determina a una persona cualquiera como el de más edad para poder comparlo con el resto
    let masedad=personas[0]
    for(cada_persona of personas){//Para cada persona del objeto
        //si alguna persona tiene más edad que el que se determinó como mayor, esta se convierte
        //en el nuevo mayor
        if(cada_persona.edad>masedad.edad){
            masedad=cada_persona
        }
    }
    return masedad//devuelve el objeto entero del de mas edad
}
console.log(FuncionEj4mayor(personas))//Muestra por pantalla na función

/**
 * @param {[{nombre:string, edad:number}]} personas
 * @return {nombre:string, edad:number}
 */
console.log('Menor edad')
function FuncionEj4menor(personas){
    let menosedad=personas[0]//se determina a un objeto cualquiera como el de menos edad para poder comparlo con el resto
    for(cada_persona of personas){
        //si alguna persona tiene más edad que el que se determinó como menor, esta se convierte
        //en el nuevo menor       
        if(cada_persona.edad<menosedad.edad){
            menosedad=cada_persona
        }
    }    
    return menosedad//devuelve el objeto entero del de mas edad
}
console.log(FuncionEj4menor(personas))//Muestra por pantalla na función

/**
 * @param {[{nombre:string, edad:number}]} personas
 * @return {number}
 */
console.log('Media edad')
function FuncionEj4media(personas){
    let media=0//Se determina la media como un número
    //Para hacer la media es necesario saber la cantidad de números a la que se le aplica la media.
    //Para ello, se determina una variable que empieza siendo 0 y 
    //cada vez que se añade un número para la media se le suma 1.
    let cantidadnum=0
    //También es necesario saber la suma de las edades
    let media_suma=0
    for (cada_persona of personas){//Para cada persona del array de objetos
        media_suma=media_suma+cada_persona.edad//Se suman todas las edades anteriores y la nueva
        cantidadnum++//se añade una persona más en la cantidad de personas
    }
    return Math.round(media_suma/cantidadnum)//Devuelve un redondeo matemático de la suma de las edades entre la cantidad de personas
}
console.log(FuncionEj4media(personas))//Se devuelve por pantalla la función

//Ejercicio5
/*Crea una función que reciba dos números como parámetro (mayor y menor) y devuelva un
número aleatorio comprendido entre esos dos números (incluídos).*/
/**
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
console.log('Ejercicio 5')

function FuncionEj5(min,max){
    //Determina un número aleatorio del 0 al 1 gracias a la siguiente fórmula
    let num5= Math.random() * (max -min) + min
    return Math.round(num5)//Devuelve el número aleatorio
}
console.log(FuncionEj5(0,9))


//Ejercicio 6
/*Crea tres funciones que reciban una lista de números:
1. Una que imprima un número sí y otro no
2. Una que imprima un número de cada tres
3. Una que solo imprima los números impares
*/
console.log('Ejercicio 6')
let lista_num6=[1,3,2,4,5,6,7,8,9,10] //Lista de números para todo el ejercicio

//1. Imprime un número si y otro no
//En este caso sería [1,2,5,7,9]
/**
 * @param {num[]}
 * @returns {num[]}
 */
function numSiNumNo(lista){
    let lista_si=[]//lista en la que van a ir los números uno si y uno no

    //Se tiene que analizar cada posición, para ello se puede usar un
    //bucle for que empieza desde la posición 0 y termina al llegar a la posición
    //final de la lista yendo uno por uno
    for(let i=0; i<lista.length;i++){
        //Empezando desde la posición 0, las posiciones que se han de imprimir son las pares
        //Un número par es aquel que su resto al dividirlo entre 2 es 0
        if(i%2==0){//si el número de la posición cumple con esta condición
            lista_si.push(lista_num6[i])//se añade a la lista final
        }
    }
    return lista_si
}
console.log(numSiNumNo(lista_num6))

//imprimirá 1,4,7,10
/**
 * @param {num[]}
 * @returns {num[]}
 */
function numCada3(lista){
    let lista_cada3=[]
    for(let i=0;i<lista.length;i++){ 
        //Empezando desde la posición 0, las posiciones que se han de imprimir son los múltiplos de 3
        //Un número múltiplo de 3 es aquel que su resto al dividirlo entre 3 es 0
        if(i%3==0){//si el número de la posición cumple con esta condición
            lista_cada3.push(lista_num6[i])//se añade el número a la lista final
        }
    }
    return lista_cada3
}
console.log(numCada3(lista_num6))

//impares
/**
 * @param {num[]}
 * @returns {num[]}
 */
function numimpares(lista){
    let lista_impares=[]//lista en la que van a ir los números impares
    for(let cada_num of lista_num6){
        //Los números impares son aquellos que al dividirlos entre 2 su resto es 1
        if(cada_num%2==1){//si el número cumple con esta condición
            lista_impares.push(cada_num)//se añade el número la lista final
        }
    }
    return lista_impares
}
console.log(numimpares(lista_num6))

//Ejercicio 7
/*Crea una función que reciba tres parámetros. Una lista de números {number[]}, y dos
números numero1 {number}, numero2 {number}. Tiene que devolver una lista con los
números menores que numero1 y mayores que numero2.

let lista = [2, 3, 15, 9, 12, 5, 42, 17, 21];
let pasaron_el_filtro = filtraNumeros(lista, 4, 10);
console.log(pasaron_el_filtro);
// imprime: [2, 3, 15, 12, 42, 17, 21]*/
/**
 * @param {number[]} lista
 * @param {number} numero1
 * @param {number} numero2
 * @returns {num[]}
 */
console.log('Ejercicio 7')
let lista7=[2,3,15,9,12,5,42,17,21] //Lista denúmeros que va a tener en consideración
function MayoraMenora(lista, numero1, numero2){
    pasaron_filtro=[] //Array en el que se van a meter los números que cumplen las condiciones
    for(cada_num of lista){ //Para cada numero de la lista se va a investigar la condición
        if(cada_num<numero1 || cada_num>numero2){ // Si el número de la lista es mayor al primero o menor al segundo
            pasaron_filtro.push(cada_num) //Se añade el nímero a la lista final
        }
    }
    return pasaron_filtro //devuelve la lista final
}
console.log(MayoraMenora(lista7,4,10)) //se determina que números son los de la condición

//Ejercicio 8
/*Crea una función como la del ejercicio anterior, pero que en vez de devolver otra lista,
elimine los números que no pasan el filtro de la lista original.*/
/**
 * @param {number[]} lista
 * @param {number} numero1
 * @param {number} numero2
 * @returns {num[]}
 */
console.log("Ejercicio 8")
function no_filtro(lista, numero1, numero2){
    no_pasaron_filtro=[]
    for(cada_num of lista){
        //La condición que debe cumplir este apartado es justo la contraria al del ejercicio 7
        if(cada_num>numero1 && cada_num<numero2){ //Se filtran los numeros mayores al primero y a su vez menores al segundo
            no_pasaron_filtro.push(cada_num)
        }
    }
    return no_pasaron_filtro
}
console.log(no_filtro(lista7,4,10))

//Ejercicio 9
/*Crea una función que reciba una lista de números y devuelva la posición del mayor
let lista = [2, 3, 15, 9, 12, 5, 42, 17, 21];
let posicion_de_mayor = posicionDelMayor(lista);
console.log(posicion_del_mayor);
// imprime: 6*/
/**
 * @param {number[]} listanumeros
 * @return {number}
 */
console.log('Ejercicio 9')
let listanumeros=[2,3,15,9,120,5,42,17,21]

function ejercicio9(listanumeros){
    let mayornum=listanumeros[0] //Otrogarle un número al mayor número para comparar
    let posicionActual=0 //posición de cada número que empieza en 0 y se va acutualizando más adelante
    let posicionmayor=0//posición del mayor que es 0 porque el mayor número es el de la posición 0 hasta que se demuestre lo contrario
    for(let cada_num of listanumeros){//Por cada número da la lista

        if(cada_num>mayornum){//Si el número es mayor al mayornum
            mayornum=cada_num//Pasa a ser el número mayor
            posicionmayor=posicionActual//la posición del número mayor se actualiza a la del número actual
        }
        posicionActual++ //la posición suma 1 para pasar a la siguiente posición del siguiente número
    }
    console.log(mayornum)
    return posicionmayor
}
console.log(ejercicio9(listanumeros))

//Ejercicio  10
/*Crea una lista de objetos como este:
[
{ marca: "Samsung", modelo: "Galaxy S10", precio: 1000 },
{ marca: "Apple", modelo: "iPhone 11", precio: 1200 },
{ marca: "Xiaomi", modelo: "Mi 9", precio: 500 },
...
]*/
console.log('Ejercicio 10')

let moviles=[{
    "marca" : "Samsung",
    "modelo" : "Galaxy S10",
    "precio" : 1000
},{
    "marca" : "Apple",
    "modelo" : "iPhone 11",
    "precio" : 1200
},{
    "marca" : "Xiaomi",
    "modelo" : "Mi 9",
    "precio" : 500
},{
    "marca" : "Samsung",
    "modelo" : "Galaxy S9",
    "precio" : 900
},{
    "marca" : "Apple",
    "modelo" : "iPhone 8",
    "precio" : 800
},{
    "marca" : "Xiaomi",
    "modelo" : "Mi 8",
    "precio" : 300
}
]

//Ejercicio 10.1 (no hacer de momento)
/*Crea una función que reciba la lista y devuelva un objeto clasificando por marca:*/
/**
 * @param {[{marca:string, modelo:string, precio:number}]} moviles
 * @returns {any} //[{string : [{marca:string, modelo:string, precio:number}]}]
 */
console.log('Ejercicio 10.1')
function ordenmarca(moviles){
    let lista_marcas={}//Se crea un objeto vacío en el que se va a introducir las marcas con sus arrays
    for(let cada_movil of moviles){//Se van analizando cada móvil de la lista
        if(lista_marcas[cada_movil.marca]===undefined){//si la marca no tiene array
            lista_marcas[cada_movil.marca]=[]//se crea uno 
        }
        lista_marcas[cada_movil.marca].push(cada_movil)//Se añade el móvil en el array que corresponde con su marca
    }
    return lista_marcas//se devuelve el objeto con todos los móviles ordenados
}
console.log(ordenmarca(moviles))//Se muestra la función por pantalla
//Ejercicio 10.2
/*Crea una función que reciba la lista, un número {number} y un booleano {boolean}. Si el
booleano es true, deberá devolver los que tengan un precio superior al número recibido, si
es false los que tengan un precio inferior.*/
/**
 * @param {[{marca:string, modelo:string, precio:number}]} moviles
 * @param {number} precio10
 * @param {boolean} booleano
 * @returns {[{marca:string, modelo:string, precio:number}]}
 */
console.log('Ejercicio 10.2')
function precio_booleano (precio10, booleano){
    let lista_precio_booleano=[]
    for (cada_movil of moviles){
        //Lo primero es detectar si el booleano es true o false
        if (booleano==true){ //si es true se compara el precio con el parámetro
            if(cada_movil.precio>precio10){//si el precio del móvil es mayor al del parámetro
                lista_precio_booleano.push(cada_movil)//el objeto entero del móvil entra en la lista
            }
        }
        if (booleano==false){//si es false
            if(cada_movil.precio<precio10){//se compara para si el precio del móvil es menor al del parámetro
                lista_precio_booleano.push(cada_movil)//si lo es, le objeto del móvil entra en la lista
            }
        }        
    }
    return lista_precio_booleano//devuelve la lista con todos los objetos que cumplen las condiciones
}
console.log(precio_booleano(700, false))//Se muestra por pantalla y se determina el número en base al cual se comparan los precios y el booleano
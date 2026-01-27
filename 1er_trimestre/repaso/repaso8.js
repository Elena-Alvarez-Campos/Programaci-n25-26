
/*Ejercicio 1. Posición del mayor
Vamos a crear una función que reciba una lista de números {number[]} y devuelva la
posición del mayor de todos {number}.*/
/**
 * @param {number[]} lista_num1
 * @returns {number}
 */

let lista_num1=[3,56,8,23,74,5,9]
    let posicion1=0
    let mayor=lista_num1[0]
    let posicionMayor=0

function funcion1(lista_num){
    for (let cadanum of lista_num){
        if(cadanum>mayor){
            mayor=cadanum
            posicionMayor=posicion1
        }
        posicion1++
    }
    console.log(mayor)
    return posicionMayor
}
console.log(funcion1(lista_num1))

/*Ejercicio 2. Función que ordena una lista de mayor a menor
Vamos a crear una función que recibe una lista de números y devuelve una nueva lista
con los números ordenados de mayor a menor.
Para ello realizaremos la siguiente lógica:
1. Crearemos una nueva lista vacía
2. Mientras (que si traducimos a inglés se dice “while”) la lista original tenga
números, buscaremos su número mayor
3. Retiraremos este número de la lista original y lo guardaremos en la nueva
4. Una vez la lista original vacía, tendremos estos números ordenados en la nueva
lista*/
/**
 * @param {number[]} lista_num2
 * @returns {number[]}
 */
console.log('Ejercicio 2')
let lista_num2=[50,4,1,3,-5,6,5,2,9,8,7,0]

function funcion2(lista_num){
    let lista_orden=[]

    while (lista_num.length>0){
        let vuelta=0
        let mayorPosicion=0
        let num_mayor= lista_num[0]
        for(cada_num of lista_num){
            if(cada_num>num_mayor){
                num_mayor=cada_num
                mayorPosicion=vuelta
            }
            vuelta++
        }
        lista_orden.push(num_mayor)
        lista_num.splice(mayorPosicion,1)
    }
    return lista_orden
}
console.log(funcion2(lista_num2))

/*Ejercicio 3. Propiedad mayor
Vamos a crear una función que recibe tres parámetros: una lista de objetos {Object[]},
la propiedad en la que vamos a buscar {string} y el número de objetos que queremos
devolver {number}.
Esta función nos devolverá́ los “n” objetos con la mayor propiedad seleccionada
{object[]}.
Para ello tendremos la siguiente lista:*/

let lista_objetos=[{
    "a":1,
    "b":20
},{
    "a":10,
    "b":60
},{
    "a":34, 
    "b":4
},{
    "a":23,
    "b":15
},{
    "a":12,
    "b":15
},{
    "a":6,
    "b":9
}]
/**
 * @param {Object[]} lista
 * @param {string} propiedad
 * @param {number} n
 * @returns {Object[]}
 */

console.log('Ejercicio 3')
function select(lista,propiedad,n){
    let lista_mayores=[]
    vuelta3=0
    while(vuelta3<n){
        let mayor_objeto=lista[0]
        let posicion=0
        let posicionMayOb=0
        for( let cada_objeto of lista){
            if(cada_objeto[propiedad]>mayor_objeto[propiedad]){
                mayor_objeto=cada_objeto
                posicionMayOb=posicion
            }
            posicion++
        }
        
        lista_mayores.push(mayor_objeto)
        
        lista.splice(posicionMayOb,1)
        vuelta3++
    }
    return lista_mayores

}
console.log(select(lista_objetos,"b",3))

/*Ejercicio 4. Modifica el ejercicio 1 para que reciba una lista de objetos y devuelva la
posición del mayor con respecto a una propiedad.*/
console.log('Ejercicio 4')
//lista_num1=[3,56,8,23,74,5,9]
    let posicion4=0
    let mayor4=lista_num1[0]
    let posicionMayor4=0
//que sea par si norma==par o impar si al revés
function funcion1(lista_num,norma){
    for (let cadanum of lista_num){
        if(norma=="par"){
            if(cadanum%2==0){
                if(cadanum>mayor){
                    mayor=cadanum
                    posicionMayor=posicion1
                }
            }   
            posicion1++    
        }
        if(norma=="impar"){
            if(cadanum%2==1){
                if(cadanum>mayor){
                    mayor=cadanum
                    posicionMayor=posicion1
                }
            }
            posicion1++
        }
    }
    console.log(mayor)
    return posicionMayor
}
console.log(funcion1(lista_num1,"impar"))

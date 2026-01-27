

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

"use strict"
let ejercito=[
    {"raza": "humanos", "cantidad":100, "salario":30, "armas":["espadas","escudos"]},
    {"raza": "elfos", "cantidad":200, "salario":70, "armas":["arcos","espadas"]},
    {"raza": "enanos", "cantidad":150, "salario":15, "armas":["hachas","escudos"]},
    {"raza": "pelosos", "cantidad":50, "salario":5, "armas":["piedras"]},
    {"raza": "numenoreanos", "cantidad":300, "salario":60, "armas":["escudos","espadas","arcos"]},
]
console.log("Ejercicio 1")
/**
 * @param {[object]} ejercito
 * @returns {number}
 */
function funcion_total(ejercito){
    let total=0
    for(let cada_miembro of ejercito){
        total=total+cada_miembro.cantidad*cada_miembro.salario
    }
    return total
}
console.log(funcion_total(ejercito))
//Ejercicio 2
console.log("Ejercicio 2")
/**
 * @param {[object]} ejercicio
 * @param {string} arma_elegida
 * @return {string}
 */
function por_armas(ejercito, arma_elegida){
    let mayor_raza=""
    let mayor_cantidad=0
    let lista_miembros={}
    for(let cada_miembro of ejercito){
        for(let cada_arma of cada_miembro.armas){
            if(cada_arma===arma_elegida){//Solo entran en la lista los que tienen esa arma
                lista_miembros[cada_miembro.raza]=cada_miembro.cantidad
            }
        }
    }
    //console.log(lista_miembros) //Se muestra la lista de razas con sus cantidades
    for(let cada_raza in lista_miembros){//Comprobación mayor
        if(lista_miembros[cada_raza]>mayor_cantidad){
            mayor_raza=cada_raza
            mayor_cantidad=lista_miembros[cada_raza]
        }
    }
    return mayor_raza
}
console.log(por_armas(ejercito,"piedras"))

//ejercicio 3
console.log("Ejercicio 3")
/**
 * @param {[object]} ejercito
 * @return {object}
 */
function maxArmas(ejercito){
    let mayor_arma={"arma":"", "cantidad":0}
    let lista_armas={}
    for(let cada_miembro of ejercito){
        for(let cada_arma of cada_miembro.armas){
            if(lista_armas[cada_arma]===undefined){//si no está creada la categoría de esa arma se crea desde 0
                lista_armas[cada_arma]=0
            }
            lista_armas[cada_arma]=lista_armas[cada_arma]+cada_miembro.cantidad//se añade la cantidad a la categoría
        }
    }
    //console.log(lista_armas) //lista de armas con sus cantidades finales
    for(let cada_arma_lista in lista_armas){
        if(lista_armas[cada_arma_lista]>mayor_arma.cantidad){
            mayor_arma.arma=cada_arma_lista
            mayor_arma.cantidad=lista_armas[cada_arma_lista]
        }
    }
    return mayor_arma
}
console.log(maxArmas(ejercito))

//Ejercicio 4
//Mismo num efectivos y mismas armas
console.log("Ejercicio 4")
/**
 * @param {[object]} ejercito
 * @returns {[object]}
 */
function completar(ejercito){
    let ejercito_complementario=[]
    //cantidad mayor
    let mayor_cantidad=0
    let lista_miembros={}
    for(let cada_miembro of ejercito){
        lista_miembros[cada_miembro.raza]=cada_miembro.cantidad//se añade cada miembro y su cantidad a una lista
    }
    //console.log(lista_miembros) //muestra la lista de miembros con su cantidad
    for(let cada_raza in lista_miembros){
        if(lista_miembros[cada_raza]>mayor_cantidad){//se determina cual es la mayor comparando
            mayor_cantidad=lista_miembros[cada_raza]
        }
    }
    //console.log(mayor_cantidad)//la cantidad máxima que se debe llegar
    //armas totales
    let lista_armas_total=[]
    for(let cada_miembro of ejercito){
        for(let cada_arma_miembro of cada_miembro.armas){//se recorren todas las armas que posúe cada miembro
            let contador=0
            if(lista_armas_total.length==0){//Si la lista está vacía, se añade la primera arma para que el siguiente bucle funcione
                lista_armas_total.push(cada_arma_miembro)
            }
            for(let cada_arma_lista_total of lista_armas_total){//se recorren todas las armas de la lista de armas total
                if(cada_arma_lista_total===cada_arma_miembro){//si el aarma del miembro coincide con una de la lista
                    break//se deja de recorrer las armas de al lista
                }
                if(contador==lista_armas_total.length-1){//si el contador es igual al número de posiciones de la lista (menos 1)
                    //significa que ya recorió toda la lista de armas y no hay ninguna igual
                    lista_armas_total.push(cada_arma_miembro)//por lo que se añade el arma a la lista de armas totales
                }
                contador++//se suma al contador 1 antes de pasar a la siguiente arma
            }
        }
    }
    //console.log(lista_armas_total) //lista de armas que van a necesitar todos los miembros
    for(let cada_miembro of ejercito){
        let objeto_miembro={}//se crea el objeto de cada miembro que se va a reiniciar cada vez que se investiga un miembro nuevo
        //raza
        objeto_miembro.raza=cada_miembro.raza
        //cantidad
        objeto_miembro.cantidad=mayor_cantidad-cada_miembro.cantidad
        //salario
        objeto_miembro.salario=cada_miembro.salario
        //armas
        objeto_miembro.armas=[]
        for(let cada_arma_lista_total of lista_armas_total){//se recorre toda la lista de armas
            let arma_repetida=false//En principio se detrmina que no está la posee el miembro
            for(let cada_arma_miembro of cada_miembro.armas){//se recoren las armas que posuen os miembros
                if(cada_arma_lista_total==cada_arma_miembro){//si coincide una arma del miembro con una de la lista
                    arma_repetida=true//se marca que ya la posee, por lo que no se va a añadir
                }
            }
            if(arma_repetida==false){//si no la posee el miembro se añade al array de armas que tiene que tener
            objeto_miembro.armas.push(cada_arma_lista_total)
            }
        }
        ejercito_complementario.push(objeto_miembro)//se añade el objeto completo al array 
    }
    return ejercito_complementario
}
console.log(completar(ejercito))
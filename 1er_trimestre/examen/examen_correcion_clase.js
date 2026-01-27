"use strict"
/**
 * Declaración del ejercito
 * @type {{raza:string, cantidad:number, salario:number, armas:[string]}[]}
 */
let ejercito=[
    {"raza": "humanos", "cantidad":100, "salario":30, "armas":["espadas","escudos"]},
    {"raza": "elfos", "cantidad":200, "salario":70, "armas":["arcos","espadas"]},
    {"raza": "enanos", "cantidad":150, "salario":15, "armas":["hachas","escudos"]},
    {"raza": "pelosos", "cantidad":50, "salario":5, "armas":["piedras"]},
    {"raza": "numenoreanos", "cantidad":300, "salario":60, "armas":["escudos","espadas","arcos"]},
]
console.log("Ejercicio 1")
/**
 * Haz una función total({ejercito[]}) que reciba como único parámetro el ejército y devuelva un
 * número {number}: el salario total que habría que pagar en caso de acudir todo el ejército.
 * @param {{raza:string, cantidad:number, salario:number, armas:[string]}[]} ejercito
 * @returns {number}
 */
function funcion_total(ejercito){
    let total=0
    for(let cada_miembro of ejercito){
        total+=cada_miembro.cantidad*cada_miembro.salario
        //Al usar += se suma la propia variable + lo nuevo
    }
    return total
}
console.log(funcion_total(ejercito))
//Ejercicio 2
/*Función totalArmas({ejercito[]}, {string}) que recibe dos parámetros: el primer parámetro es el
array del ejército y el segundo es un arma. Esta función devuelve la raza {string} que indica cuál
es la raza que más dispone de ese tipo de arma. 
*/
console.log("Ejercicio 2")
/**
 * @param {{raza:string, cantidad:number, salario:number, armas:[string]}[]} ejercicio
 * @param {string} arma_elegida
 * @return {string}
 */
function por_armas(ejercito, arma_elegida){
    let raza={raza:"", cantidad:0}//Esto se puede hacer de otra manera
    for(let cada_miembro of ejercito){
        for(let cada_arma of cada_miembro.armas){
            if(cada_arma===arma_elegida && cada_miembro.cantidad>raza.cantidad){//Es mejor usar el && en este if
                raza=cada_miembro;

            }
        }
    }
    return raza.raza
}
console.log(por_armas(ejercito,"hachas"))

//ejercicio 3
console.log("Ejercicio 3")
/**
 * @param {{raza:string, cantidad:number, salario:number, armas:[string]}[]} ejercito
 * @return {arma:string,cantidad:number}
 */
function maxArmas(ejercito){
    let mayor_arma={"arma":"", "cantidad":0}
    let lista_armas={}
    for(let cada_miembro of ejercito){
        for(let cada_arma of cada_miembro.armas){
            if(lista_armas[cada_arma]===undefined){//si no está creada la categoría de esa arma se crea desde 0
                lista_armas[cada_arma]=0
            }
            lista_armas[cada_arma]+=cada_miembro.cantidad//se añade la cantidad a la categoría
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
 * @param {{raza:string, cantidad:number, salario:number, armas:[string]}[]} ejercito
 * @returns {{raza:string, cantidad:number, salario:number, armas:[string]}[]}
 */
function completar(ejercito){
    let armas=[]
    let mayor=ejercito[0]

    for(let cada_miembro of ejercito){
        if(cada_miembro.cantidad>mayor.cantidad){
            mayor=cada_miembro
        }
        for(let arma of cada_miembro.armas){        
        let existe=false
            for(let arma_guardada of armas){
                if(arma===arma_guardada){
                    existe=true
                    break
                }
            }
            if(!existe){
                armas.push(arma)
            }
        }
    }
    let cantidad=mayor.cantidad
    let complementario=[]
    for(let cada_miembro of ejercito){
        let faltan_armas=[]
        for(let arma of armas){
            let existe=false
            for(let cada_arma of cada_miembro.armas){
                if(arma===cada_arma){
                    existe=true
                    break
                }
            }
            if(!existe){
                faltan_armas.push(arma)
            }
        }
        
        complementario.push({
            raza: cada_miembro.raza,
            cantidad:cantidad-cada_miembro.cantidad,
            salario:cada_miembro.salario,
            armas: faltan_armas
        })
    }

    return complementario
}
console.log(completar(ejercito))
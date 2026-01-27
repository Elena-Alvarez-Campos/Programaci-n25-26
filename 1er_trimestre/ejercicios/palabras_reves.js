
let palabra1='audio'
function palabraRev(palabra){
    let reves=''
    for(let i=palabra.length-1; i>=0; i--){
        reves=reves+palabra[i]
    }
    return reves
}
console.log("Palabra al revés: "+palabraRev(palabra1))

function palabraDer(palabra){
    let derecho=''
    for (let i=0; i<palabra.length; i++){
        derecho=derecho+palabra[i]//si se cambia la posición de donde se guarda cada letra, la palabra estará al revés
    }
    return derecho
}
console.log("Palabra al derecho: "+palabraDer(palabra1))
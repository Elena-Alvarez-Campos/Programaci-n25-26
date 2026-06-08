//readline
/*
const readline=require('node:readline/promises')
const {stdin:input, stdout:output}=require('node:process')
const {error}=require('node:console');
const rl=readline.createInterface({input,output});
*/
//luxon
const { DateTime, Interval } = require("luxon");
//leer el json
const fs=require("fs");
const fechasString = fs.readFileSync("./bolis/almacen.json");
let listaFechas = JSON.parse(fechasString);//determina que esta variable es el json

function cantidadBoli(almacenbolis) {
    let listabolis={}
    for(let cada_boli of almacenbolis){
        if(listabolis[cada_boli.color]==undefined){
            listabolis[cada_boli.color]=0
        }
        listabolis[cada_boli.color]+=cada_boli.contenido
    }
    console.log(listabolis)
}
cantidadBoli(listaFechas);

function clasificaColor(almacenbolis) {
    let listabolis={}
    for(let cada_boli of almacenbolis){
        if(listabolis[cada_boli.color]==undefined){
            listabolis[cada_boli.color]=[]
        }
        listabolis[cada_boli.color].push(cada_boli)
    }
    console.log(listabolis)
}
clasificaColor(listaFechas);

function fabricaAntes(almacenbolis,fechaDada){
    fechaDada=DateTime.fromISO(fechaDada)
    let fechaslista={"antes":[],"despues":[],"igual":[]}
    for(let cada_caja of almacenbolis){
        if(DateTime.fromISO(cada_caja.fabricacion)<fechaDada){
            fechaslista.antes.push(cada_caja)
        }else if(DateTime.fromISO(cada_caja.fabricacion)>fechaDada){
            fechaslista.despues.push(cada_caja)
        }else{
            fechaslista.igual.push(cada_caja)
        }
    }
    console.log(fechaslista)
}
fabricaAntes(listaFechas,"2026-04-12T12:00:00.000Z")
console.log("Ejercicio 4 ****************************************")

function porFabricacion(almacenbolis) {
    let listaOrdenada={}
    for(let cada_caja of almacenbolis){
        let fechaAnoMes=DateTime.fromISO(cada_caja.fabricacion).toFormat("yyyy-MM")
        if(listaOrdenada[fechaAnoMes]==undefined){
            listaOrdenada[fechaAnoMes]=[]
        }
        listaOrdenada[fechaAnoMes].push(cada_caja)
    }
    console.log(listaOrdenada)
}
porFabricacion(listaFechas)

console.log("Ejercicio 5************************************************")

function reparteBolis(almacenbolis) {
    let totalBolis=0;
    let totalCajas=0;
    let bombonesExtra=0//si sobran
    for(let cada_caja of almacenbolis){
        totalCajas++
        totalBolis+=cada_caja.contenido
    }
    let a=true
    while (a) {
        //si no hay la misma cantidad de para todos, se mueve uno a los extra
        //se repite hasta que se pueden repartir de forma equitativa
        if((totalBolis/totalCajas)%2==0 || (totalBolis/totalCajas)%2==1){
            //El resto de un número entero entre 2 siempre va a ser 1 o 0, otro resultado indica que el número es decimal
            //si ya se pueden repartir la misma cantidad, sale del bucle
            a=false
            break
        }
        totalBolis--
        bombonesExtra++
        //console.log(totalBolis)
    }
    //console.log(totalBolis/totalCajas)
    //console.log(bombonesExtra)
    for(let cada_caja of almacenbolis){
        cada_caja.contenido=(totalBolis/totalCajas)
        if(bombonesExtra!=0){//si hay extra, añade 1 más
            cada_caja.contenido++
            bombonesExtra--//ese extra se quita de la cantidad de bombones exta
        }

    }
    console.log(almacenbolis)
}
reparteBolis(listaFechas)
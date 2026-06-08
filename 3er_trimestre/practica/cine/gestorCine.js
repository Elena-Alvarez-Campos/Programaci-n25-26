//readline
const readline=require('node:readline/promises')
const {stdin:input, stdout:output}=require('node:process')
const {error}=require('node:console');
const rl=readline.createInterface({input,output});
//luxon
const { DateTime, Interval } = require("luxon");
//leer el json
const fs=require("fs");
const fechasString = fs.readFileSync("./cine/almacenPelis.json");
let listaFechas = JSON.parse(fechasString);//determina que esta variable es el json

async function finalizaciones(listaPelis) {
    try {
        let pregunta="¿De que película quieres ver  cuando terminan suus sesiones\n"
        let num=1
        for(let cada_peli of listaPelis){
            pregunta+=num+". "+cada_peli.titulo+"\n"
            num++
        }
        let respuesta=await rl.question(pregunta)
        if(isNaN(respuesta) || respuesta>listaPelis.length){
            throw new Error("No es una opción compatible");
        }
        let opcion=parseInt(respuesta)-1
        let imprimir="Finalización*****************************************************\n"
        for(let cada_sesion of listaPelis[opcion].sesiones){
            let finPeli=DateTime.fromISO(cada_sesion).plus({minutes : listaPelis[opcion].duracion})
            imprimir+=finPeli.toFormat("dd-MM-yyyy hh:mm:ss")+"\n"
        }
        
        console.log(imprimir)
    }catch (error) {
        console.error(error.message)
    }
    MenuPrincipal()
}  

async function MenuPrincipal() {
    let programa=true
    while (programa) {
        try {
            let respuesta=await rl.question("Menú cine******************\n"+
            "1.Añadir Película\n"+
            "2.Añadir nueva sesión a película existente\n"+
            "3.Calcular hora de finalización de las sesiones\n"+
            "4.Salir\n")
            if(isNaN(respuesta)){
                throw new Error("La opción no es válida");
            }
            let opcion=parseInt(respuesta)
            switch (opcion) {
                case 1:
                    
                    break;
                case 2:
                    
                    break;
                case 3:
                    finalizaciones(listaFechas)
                    break;
                case 4:
                    programa=false
                    break;
            
                default:
                    throw new Error("La opción no es compatible");
                    break;
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    rl.close()
}

MenuPrincipal()

//5. salir
//readline
const readline=require('node:readline/promises')
const {stdin:input, stdout:output}=require('node:process')
const {error}=require('node:console');
//luxon
const { DateTime, Interval } = require("luxon");
//leer el json
const fs=require("fs");
const fechasString = fs.readFileSync("./practica9Elena/fechas.json");
let listaFechas = JSON.parse(fechasString);//determina que esta variable es el json

//Clase
class Agenda {
    constructor(listaFechas){
        this.listaFechas=listaFechas
    }
    nuevoEvento(params) {
        
    }
}

//Menú del main
async function MenuPrincipal() {
    let programa=true;
    const rl=readline.createInterface({input,output});
    while(programa==true){
        try{
       
            const respuesta=await rl.question("Menú Principal********************\n"+
            "1.Nuevo evento\n"+
            "2.Ver eventos de hoy\n"+
            "3.Buscar eventos por fecha\n"+
            "4.Borrar evento\n"+
            "5.Salir\n"
            )
            //guardar fechas en formato ISO
            let opcion=parseInt(respuesta)
            if(isNaN(opcion)){
                throw new Error("Error: no es un valor compatible")
            }else{
                switch (opcion) {
                    case 1:
                        let anoE=await rl.question("Año del evento\n")
                        let mesE=await rl.question("Mes del evento\n")
                        let diaE=await rl.question("Día del evento\n")
                        let horaE=await rl.question("Horas:\n")
                        let minE=await rl.question(horaE+":")
                        let fechaE=DateTime.fromObject({ year: anoE, month: mesE, day: diaE, hour:horaE ,minute: minE});
                        fechaE.toISO()
                        //console.log(fechaE)
                        let coincide=false
                        for(let cadaFecha of listaFechas){
                            let dtFin=DateTime.fromISO(cadaFecha.fecha)
                            dtFin=dtFin.plus({minutes: cadaFecha.duracion})
                            let intervalo=Interval.fromDateTimes(DateTime.fromISO(cadaFecha.fecha), dtFin)
                            if(intervalo.contains(fechaE)){
                                console.log("Coincide con el evento: "+cadaFecha.titulo)
                                coincide=true
                                break
                            }
                        }
                        if(fechaE.isValid==true&&coincide==false){
                            let tituloE=await rl.question("Escribe el título del evento\n")
                            let duracionString=await rl.question("Escribe la duracion del evento\n")
                            let duracionE=parseInt(duracionString)
                            if(isNaN(duracionE)){
                                console.log("No es una duración válida, tiene qeu ser un número")
                            }else{
                                let eventoNuevo={
                                    "fecha": fechaE,
                                    "titulo": tituloE,
                                    "duracion": duracionE
                                }
                                listaFechas.push(eventoNuevo)
                                fs.writeFileSync("./practica9Elena/fechas.json", JSON.stringify(listaFechas))
                                console.log("Se ha añadido el evento a la agenda")
                            }
                        }else{
                            if(fechaE.isValid==false){
                                console.log("Esta fecha es inexistente")
                            }
                            console.log("Esta fecha no se puede usar\n")
                        }
                        break;
                    case 2:
                        let hoy=DateTime.now()
                        for(let cadaFecha of listaFechas){
                            let fechaEvento
                            console.log(DateTime.fromISO(cadaFecha.fecha).day)
                        }
                        break;
                    case 3:
                        
                        break;
                    case 4:
                        
                        break;
                    case 5:
                        programa=false
                        break;
                    default:
                        console.log("Esta opción no es compatible")
                        break;
                }
            }
        }catch(error){
            console.error(error.message)
        }
    }
    //va a cerrar la interfaz al finalizar la función
    rl.close()
}
//creación de clase con en json
const agenda1 = new Agenda(listaFechas);
MenuPrincipal()
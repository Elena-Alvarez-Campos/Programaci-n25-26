
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
    eventosHoy(){
        //console.log(DateTime.now().day)
        let encontrado=false
        let listaEventos=""
        let listaEvOrdenados=quicksort(listaFechas)
        for(let cadaFecha of listaEvOrdenados){
            //console.log(DateTime.fromISO(cadaFecha.fecha).day)
            if(DateTime.fromISO(cadaFecha.fecha).day==DateTime.now().day){
                encontrado=true;
                listaEventos+=cadaFecha.titulo+"\nEmpieza: "+(DateTime.fromISO(cadaFecha.fecha).toFormat("yyyy-MM-dd HH:mm:ss")+"\nAcaba: "+DateTime.fromISO(cadaFecha.fecha).plus({minutes: cadaFecha.duracion}).toFormat("yyyy-MM-dd HH:mm:ss")+"\n")
            }
        }
        if(encontrado==false){
            console.log("No se ha encontrado ningún evento para hoy")
        }else{
            console.log(listaEventos)
        }
    }
    eventosFecha(fechaPedida){
        let encontrado=false
        let listaEventos=""
        let listaEvOrdenados=quicksort(listaFechas)
        for(let cadaFecha of listaEvOrdenados){
            //console.log(DateTime.fromISO(cadaFecha.fecha).day)
            if(DateTime.fromISO(cadaFecha.fecha).day==fechaPedida.day){
                encontrado=true;
                listaEventos+=cadaFecha.titulo+"\nEmpieza: "+(DateTime.fromISO(cadaFecha.fecha).toFormat("yyyy-MM-dd HH:mm:ss")+"\nAcaba: "+DateTime.fromISO(cadaFecha.fecha).plus({minutes: cadaFecha.duracion}).toFormat("yyyy-MM-dd HH:mm:ss")+"\n")
            }
        }
        if(encontrado==false){
            console.log("No se ha encontrado ningún evento para hoy")
        }else{
            console.log(listaEventos)
        }
    }
    eliminaEvento(opcion){
        listaFechas.splice(opcion,1)
        console.log("Se ha eliminado el evento a la agenda")
        fs.writeFileSync("./practica9Elena/fechas.json", JSON.stringify(listaFechas))
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
                        //agenda1.nuevoEvento()
                        
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
                        agenda1.eventosHoy()
                        break;
                    case 3:
                        let anoEvento=await rl.question("Año del evento\n")
                        let mesEvento=await rl.question("Mes del evento\n")
                        let diaEvento=await rl.question("Día del evento\n")
                        let fechaEvento=DateTime.fromObject({ year: anoEvento, month: mesEvento, day: diaEvento});
                        fechaEvento.toISO()
                        agenda1.eventosFecha(fechaEvento)
                        break;
                    case 4:
                        let menu=""
                        let opcion=1
                        console.log("Selecciona el evento que quieres eliminar")
                        for(let cadaFecha of listaFechas){
                            menu+=opcion+"."+cadaFecha.titulo+"\n"
                            opcion++
                        }
                        menu+=(listaFechas.length+1)+".Salir\n"
                        let opcionNueva=await rl.question(menu+"Elige una opción\n")
                        try {
                            num=parseInt(opcionNueva);
                            if (opcionNueva<=listaFechas.length && opcionNueva>0) {
                                agenda1.eliminaEvento()
                            }else if(opcionNueva==listaFechas.length+1){
                                console.log("Volviendo al menú principal")
                            }else{
                                console.log("Opción no válida")
                            }
                            agenda1.eliminaEvento(num)
                        } catch (error) {
                            console.log("No es un número de la lista")
                        }
                        break;
                    case 5:
                        programa=false
                        break;
                    case 6:
                        let fecha1=toString({
                            "fecha": "2026-06-12T18:10:00.000+02:00",
                            "titulo": "Cumpleaños Paco",
                            "duracion": 30
                        })
                        console.log(listaFechas.indexOf(fecha1))
                        break
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

//Quicksort
function quicksort(lista) {
    for(let i=0;i<lista.length;i++){//Ubicación del pivote
        let pivote=lista[i]
        //let pivote=lista[i]//El pivote es el número en la posición marcada
        let listaMayores=[]//números mayores al pivote
        let listaMenores=[]//números menores al pivote
        for(let cadaFecha of lista){
            //console.log(DateTime.fromISO(cadaFecha.fecha).hour)
            if(DateTime.fromISO(cadaFecha.fecha).hour>DateTime.fromISO(pivote.fecha).hour){//si el numero es mayor al pivote se mete en la lista de mayores
                listaMayores.push(cadaFecha)
            }else if(DateTime.fromISO(cadaFecha.fecha).hour<DateTime.fromISO(pivote.fecha).hour){//lo mismo pero para números menores
                listaMenores.push(cadaFecha)
            }else{
                continue//Si se encuentra a si mismo lo ignora
            }
        }
        
        lista=[]
        for(let cadaFecha of listaMenores){
            lista.push(cadaFecha)
        }
        lista.push(pivote)
        for(let cadaFecha of listaMayores){
            lista.push(cadaFecha)
        }
        
        for(let a=i+1;a<lista.length;a++){
            if(DateTime.fromISO(lista[a].fecha.hour)<DateTime.fromISO(pivote.fecha).hour){
                //en caso de que haya uno más pequeño se sigue en la misa posición 
                i--
                break
            }
        }
    }
    //console.log(lista)
    return lista;
}
//crear clase y llamar la función
const agenda1 = new Agenda(listaFechas);
MenuPrincipal()
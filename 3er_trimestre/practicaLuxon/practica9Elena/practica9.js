
//5. salir
//readline
const readline=require('node:readline/promises')
const {stdin:input, stdout:output}=require('node:process')
const {error}=require('node:console');
const rl=readline.createInterface({input,output});
//luxon
const { DateTime, Interval } = require("luxon");
//leer el json
const fs=require("fs");
const fechasString = fs.readFileSync("./practica9Elena/fechas.json");
let listaFechas = JSON.parse(fechasString);//determina que esta variable es el json

//DateTime.fromObject({ year: anoE, month: mesE, day: diaE, hour:horaE ,minute: minE})
//fechaE.toISO()
//DateTime.fromISO(cadaFecha.fecha).toFormat("yyyy-MM-dd HH:mm")
//Interval.fromDateTimes(DateTime.fromISO(cadaFecha.fecha), dtFin)
//dtFin.plus({minutes: cadaFecha.duracion})
//i.length()

//Clase
class Agenda {
    async eventoNuevo(){
        try{
            let anoE=await rl.question("Año del evento\n")
            let mesE=await rl.question("Mes del evento\n")
            let diaE=await rl.question("Día del evento\n")
            let horaE=await rl.question("Hora del evento (pulsa enter para poner los minutos):\n")
            let minE=await rl.question(horaE+":")
            //se añaden todos los datos a la vecha del evento nuevo
            let fechaE=DateTime.fromObject({ year: anoE, month: mesE, day: diaE, hour:horaE ,minute: minE});
            fechaE.toISO()
            let coincide=false
            for(let cadaFecha of listaFechas){
                let dtFin=DateTime.fromISO(cadaFecha.fecha)//a al fecha del final del evento se suma los minutos qeu sura
                dtFin=dtFin.plus({minutes: cadaFecha.duracion})
                let intervalo=Interval.fromDateTimes(DateTime.fromISO(cadaFecha.fecha), dtFin)//se crea un intervalo de tiempo desde que empieza el evento hasta que se acaba
                if(intervalo.contains(fechaE)){//si en el intervalo se incluye la fecha, marca qeu coincide con un evento que existía previamente
                    console.log("Coincide con el evento: "+cadaFecha.titulo)
                    coincide=true
                    break
                }
            }
            if(fechaE.isValid==true&&coincide==false){//si el fecha es válida y no cincide con otro evento
                let tituloE=await rl.question("Escribe el título del evento:\n")
                let duracionString=await rl.question("Escribe la duracion del evento en minutos:\n")
                let duracionE=parseInt(duracionString)
                if(isNaN(duracionE)){//en caso de que no se escriba un número
                    console.log("No es una duración válida, tiene que ser un número")
                }else{
                    let eventoNuevo={
                        "fecha": fechaE.toString(),//la fecha se pasa a string
                        "titulo": tituloE,
                        "duracion": duracionE
                    }
                    listaFechas.push(eventoNuevo)//se añade a la variable
                    fs.writeFileSync("./practica9Elena/fechas.json", JSON.stringify(listaFechas))//pasar los datos al json
                    console.log("Se ha añadido el evento a la agenda")
                }
            }else{
                if(fechaE.isValid==false){//si la fecha es inválida
                    console.log("Esta fecha es inexistente")
                }
                //si la fecha no 
                console.log("Esta fecha no se puede usar\n")
            }
        }catch(error){
            console.log("El valor no es compatible")
        }finally{//siempre se vuelve al menú principal pase lo que pase
            MenuPrincipal()
        }
    }
    eventosHoy(){
        //console.log(DateTime.now().day)
        let encontrado=false
        let listaEventos=""
        let listaEvFecha=[]//eventos para hoy
        for(let cadaFecha of listaFechas){//si se encuentra un día que coincide con hoy se añade a al lista y se marca como encontrado
            if(DateTime.fromISO(cadaFecha.fecha).day==DateTime.now().day){
                encontrado=true
                listaEvFecha.push(cadaFecha)
            }
        }

        let listaEvOrdenados=quicksort(listaFechas)//se ordena mediante quicksort los eventos que coinciden con el día de hoy
        for(let cadaFecha of listaEvOrdenados){//se incorpora en la variable el nombre, fecha de inicio y fecha de  fin del evento
            listaEventos+=cadaFecha.titulo+"\nEmpieza: "+(DateTime.fromISO(cadaFecha.fecha).toFormat("yyyy-MM-dd HH:mm")+"\nAcaba: "+DateTime.fromISO(cadaFecha.fecha).plus({minutes: cadaFecha.duracion}).toFormat("yyyy-MM-dd HH:mm")+"\n")
            
        }
        if(encontrado==false){//si no hay ninún evento para hoy
            console.log("No se ha encontrado ningún evento para hoy")
        }else{
            console.log(listaEventos)
        }
    }
    async eventosFecha(){
        let anoEvento=await rl.question("Año del evento\n")
        let mesEvento=await rl.question("Mes del evento\n")
        let diaEvento=await rl.question("Día del evento\n")
        try{
            let fechaEvento=DateTime.fromObject({ year: anoEvento, month: mesEvento, day: diaEvento});//día pedido
            fechaEvento.toISO()

            let encontrado=false
            let listaEventos=""
            let listaEvFecha=[]
            for(let cadaFecha of listaFechas){//buscar los eventos que coinciden con el día pedido
                if(DateTime.fromISO(cadaFecha.fecha).day==fechaEvento.day){
                    encontrado=true
                    listaEvFecha.push(cadaFecha)
                }
            }
            let listaEvOrdenados=quicksort(listaEvFecha)//ordenar los eventos para ese  día
            for(let cadaFecha of listaEvOrdenados){//se incorpora en la variable el nombre, fecha de inicio y fecha de  fin del evento
                listaEventos+=cadaFecha.titulo+"\nEmpieza: "+(DateTime.fromISO(cadaFecha.fecha).toFormat("yyyy-MM-dd HH:mm")+"\nAcaba: "+DateTime.fromISO(cadaFecha.fecha).plus({minutes: cadaFecha.duracion}).toFormat("yyyy-MM-dd HH:mm")+"\n");
            }
            if(encontrado==false){//no hay ningún evento para ese día
                console.log("No se ha encontrado ningún evento para ese día")
            }else{
                console.log(listaEventos)
            }
        }catch(error){
            console.log("El valor es incompatible")
        }finally{//se vuelve al menú principal
            MenuPrincipal()
        }
    }
    async eliminaEvento(opcion){//se pide la posición por el menú principal para eliminer el evento
        listaFechas.splice(opcion,1)
        console.log("Se ha eliminado el evento a la agenda")
        fs.writeFileSync("./practica9Elena/fechas.json", JSON.stringify(listaFechas))//se reescribe el json con la variable
        
    }
}

//Menú del main
async function MenuPrincipal() {
    let programa=true;
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
                        agenda1.eventoNuevo()
                        break;
                    case 2:
                        agenda1.eventosHoy()
                        break;
                    case 3:
                        agenda1.eventosFecha()
                        break;
                    case 4:
                        let menu=""
                        let opcion=1
                        console.log("Selecciona el evento que quieres eliminar")
                        for(let cadaFecha of listaFechas){//Se crea una opciín nueva por cada evento
                            menu+=opcion+"."+cadaFecha.titulo+"\n"
                            opcion++
                        }
                        menu+=(listaFechas.length+1)+".Salir\n"//El botón de salir es lo que mide ell array más 1 por qeu se empieza desde 1 y no desde 0
                        let opcionNueva=await rl.question(menu+"Elige una opción\n")
                        try {
                            num=parseInt(opcionNueva)-1;//a la opción se le resta 1 porque la posición en el array es 1 menos
                            if (num<listaFechas.length && num>=0) {//si la opción se incluye en el array
                                agenda1.eliminaEvento(num)//esa opción se usa para eliminar el evento
                            }else if(num==listaFechas.length){//si es la última opción no hace nada
                                console.log("Volviendo al menú principal")
                            }else{
                                console.log("Opción no válida")
                            }
                        } catch (error) {
                            console.log("No es un número de la lista")
                        }
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
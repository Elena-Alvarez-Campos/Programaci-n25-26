//readline
const readline=require('node:readline/promises')
const {stdin:input, stdout:output}=require('node:process')
const {error}=require('node:console');
const rl=readline.createInterface({input,output});
//luxon
const { DateTime, Interval } = require("luxon");
//leer el json
const fs=require("fs");
const console = require('node:console');
const cultivosString = fs.readFileSync("./cultivos.json");
let cultivos = JSON.parse(cultivosString);//determina que esta variable es el json

//Estados de cada cultivo
//regado
//seco
//recolectado
//muerto
//listo
class DatosHuerta {
    constructor() {
        this.huerta=[]
        this.recolectados=[]
    }
    recuento(){
        if(this.huerta==[]){
                return//no hace las comprobaciones
            }
        for(let cada_cultivo of this.huerta){
            
            if(cada_cultivo.estado=="regado"){
                this.huerta[this.huerta.indexOf(cada_cultivo)].tiempo_recoleccion--
                if(this.huerta[this.huerta.indexOf(cada_cultivo)].tiempo_recoleccion==this.huerta[this.huerta.indexOf(cada_cultivo)].proximoRegado){
                    this.huerta[this.huerta.indexOf(cada_cultivo)].estado="seco"
                    console.log("¡¡EMERGENCIA!! El cultivo "+cada_cultivo.nombre+" está seco, riégalo D:")
                }
                if(this.huerta[this.huerta.indexOf(cada_cultivo)].tiempo_recoleccion==0){
                    this.huerta[this.huerta.indexOf(cada_cultivo)].estado="listo"
                    console.log("¡¡VIVA!! El cultivo "+cada_cultivo.nombre+" ya está listo para recolectar")
                }
                continue
                //console.log(this.huerta[this.huerta.indexOf(cada_cultivo)].tiempo_recoleccion)
            }else if(cada_cultivo.estado=="seco" || cada_cultivo.estado=="listo"){
                //si pasan 2 cilcos, el cultivo acaba marchitándose y muriéndose, tanto si está seco como si tiene frutos
                this.huerta[this.huerta.indexOf(cada_cultivo)].tiempo_regado--
                if(this.huerta[this.huerta.indexOf(cada_cultivo)].tiempo_regado==0){
                    this.huerta[this.huerta.indexOf(cada_cultivo)].estado="muerto"
                    console.log("¡¡EMERGENCIA!! El cultivo "+cada_cultivo.nombre+" está se ha muerto :(")
                }
                continue
                //console.log(this.huerta[this.huerta.indexOf(cada_cultivo)].tiempo_regado)
            }else if(cada_cultivo.estado=="muerto"){
                continue//no se hace nada porque ya está ,muerto
            }
        }
    }
    async plantar() {
        console.clear()
        let elegir=true
        let pregunta="¿Que cultivo quieres plantar?\n"
        for(let cada_cultivo of cultivos){
            pregunta+=(cultivos.indexOf(cada_cultivo)+1)+". "+cada_cultivo.nombre+"\n"
        }
        pregunta+=(cultivos.length+1)+". Salir\n"
        while(elegir==true){
            try {
                let respuesta=await rl.question(pregunta)
                //fuera de opción
                if(isNaN(respuesta)||respuesta<=0||respuesta>cultivos.length+1){
                    throw new Error("Elige una opción compatible");
                }
                let opcion=parseInt(respuesta)-1
                //salir
                if(opcion==cultivos.length){
                    elegir=false
                    console.clear()
                }else{
                //compatible
                    let cultivo={
                        nombre: cultivos[opcion].nombre+"_"+(this.huerta.length+1),
                        tipo: cultivos[opcion].nombre,
                        fecha_regado: DateTime.now(),
                        estado: "regado",
                        tiempo_regado: cultivos[opcion].tiempo_regado*2,//timepo que puede pasar antes de que se regue otra vez
                        //se duplica porque puede pasar 2 ciclos seco antes de que se muera
                        tiempo_recoleccion: cultivos[opcion].tiempo_recoleccion,
                        proximoRegado: (cultivos[opcion].tiempo_recoleccion)-(cultivos[opcion].tiempo_regado)//la próxima vez que va a ser regado

                    }
                    console.clear()
                    console.log("Se ha plantado el cultivo "+cultivo.nombre+" :D")
                    this.huerta.push(cultivo)
                }
            } catch (error) {
                console.clear()
                console.error(error.message)
            }
        }
        MenuPrincipal()
    }
    //escribe el requisito del estado para buscar
    //si quiere una lista general, el estado es null
    //si tiene que dar info extra, no solo el ID/nombre, extra=true
    listar(lista_huerta,estado,extra){
        try {
            console.clear()
            let contador=1
            let imprimir="Lista de cultivos "
            estado==null ? imprimir+="\n" : imprimir+=estado+"s\n"
            let lista_cultivos=[]
            let encontrado=false
            if(lista_huerta.length<=0 && estado==null){
                throw new Error("No tienes ningún cultivo en la huerta");
            }else if(lista_huerta.length<=0){
                throw new Error("No tienes ningún cultivo "+estado);
            }
            //hay cultivos
            for(let cada_cultivo of lista_huerta){
                if(estado==null && extra==false){
                    imprimir+=contador+". "+cada_cultivo.nombre+" Estado: "+cada_cultivo.estado+"\n"
                    lista_cultivos.push(cada_cultivo)
                    encontrado=true
                    contador++
                }else if(estado==cada_cultivo.estado){
                    imprimir+=contador+". "+cada_cultivo.nombre+" Estado: "+cada_cultivo.estado+"\n"
                    lista_cultivos.push(cada_cultivo)
                    encontrado=true
                    contador++
                }else if(estado==null && extra==true){
                    imprimir+=contador+". "+cada_cultivo.nombre+" Estado: "+cada_cultivo.estado+" Tipo: "+cada_cultivo.tipo+"\n"
                    imprimir+="     ¿Cuanto falta para volver a regar el cultivo?: "+Math.round((cada_cultivo.tiempo_recoleccion-cada_cultivo.proximoRegado)*0.25)+"s\n"
                    imprimir+="     Tiempo para poder recolectarlo: "+Math.round((cada_cultivo.tiempo_recoleccion)*0.25)+"s\n"
                    //cada ciclo son 250 milisegundos, lo cual son 0,25 segundos
                    lista_cultivos.push(cada_cultivo)
                    encontrado=true
                    contador++

                }
            }
            if (encontrado==false) {
                console.clear()
                throw new Error("No tienes ningún cultivo "+estado);
            }
            console.log(imprimir)
            return (lista_cultivos)
        } catch (error) {
            console.error(error.message)
            return (false)
        }
        
    }
    async regar(){
        try {
            let lista=this.listar(this.huerta,"seco",false)
            if(lista==false){
                //no ejecuta el resto del código
                throw new Error("Volviendo al menú principal")
            }
            let respuesta=await rl.question("¿Cuál quieres regar?\n")
            if(isNaN(respuesta) || respuesta>lista.length || respuesta<=0){
                throw new Error("No es una opción compatible");
            }
            let opcion=parseInt(respuesta)-1
            let cultivoModificacion =lista[opcion]//cultivo de la huerta
            //cultivo que va a remplazar el de la huerta
            cultivoModificacion.estado="regado"
            for(let cada_tipo of cultivos){
                if (cada_tipo.nombre==cultivoModificacion.tipo) {
                    cultivoModificacion.tiempo_regado=cada_tipo.tiempo_regado*2
                    cultivoModificacion.proximoRegado=cultivoModificacion.tiempo_recoleccion-cada_tipo.tiempo_regado
                }
            }
            cultivoModificacion.fecha_regado=DateTime.now()
            this.huerta[this.huerta.indexOf(lista[opcion])]=cultivoModificacion
            console.clear()
            console.log("Cultivo regado :)")

        } catch (error) {
            console.error(error.message)
        }
        finally{
            MenuPrincipal()
        }
        
    }
    async eliminar(){
        try {
            let lista=this.listar(this.huerta,null,false)
            if(lista==false){
                //no ejecuta el resto del código
                throw new Error("Volviendo al menú principal")
            }
            let respuesta=await rl.question("¿Cuál quieres eliminar?\n")
            if(isNaN(respuesta) || respuesta>lista.length || respuesta<=0){
                throw new Error("No es una opción compatible");
            }
            let opcion=parseInt(respuesta)-1
            this.huerta.splice(this.huerta.indexOf(lista[opcion]),1)
            console.clear()
            console.log("Cultivo eliminado :(")

        } catch (error) {
            console.error(error.message)
        }
        finally{
            MenuPrincipal()
        }
    }
    async recolectar(){
        try {
            let lista=this.listar(this.huerta,"listo",false)
            if(lista==false){
                //no ejecuta el resto del código
                throw new Error("Volviendo al menú principal")
            }
            let respuesta=await rl.question("¿Cuál quieres recolectar?\n")
            if(isNaN(respuesta) || respuesta>lista.length || respuesta<=0){
                throw new Error("No es una opción compatible");
            }
            let opcion=parseInt(respuesta)-1
            let cultivoRecolectado=lista[opcion]//cultivo de la huerta
            cultivoRecolectado.estado="recolectado"
            this.recolectados.push(cultivoRecolectado)
            this.huerta.splice(this.huerta.indexOf(lista[opcion]),1)
            console.clear()
            console.log("Cultivo recolectado :D")

        } catch (error) {
            console.error(error.message)
        }
        finally{
            MenuPrincipal()
        }
    }
}

/*
async function estadoCultivo(cultivo) {
    
}*/
//Introdución
//Menú principal
let DatosHuerta1= new DatosHuerta()
let timerId = setInterval(() => DatosHuerta1.recuento(), 250);
console.log("Esta es tu huerta :D")
async function MenuPrincipal() {
    let programa=true;
    while (programa==true) {
        try {
            let respuesta=await rl.question('¿Que quieres hacer?*****************\n'+
                '1.Plantar cultivo\n'+
                '2.Regar cultivo\n'+
                '3.Recolectar cultivo\n'+
                '4.Listar cultivos\n'+
                '5.Eliminar cultivo\n'+
                '6.Consultar cultivos recolectados\n'+
                '7.Salir del juego\n'
            )
            if (isNaN(respuesta)) {
                throw new Error("Esa no es una opción válida :(");
            }
            let opcion=parseInt(respuesta)
            switch (opcion) {
                case 1:
                    DatosHuerta1.plantar()
                    break;
                case 2:
                    DatosHuerta1.regar()
                    break;
                case 3:
                    DatosHuerta1.recolectar()
                    break;
                case 4:
                    DatosHuerta1.listar(DatosHuerta1.huerta,null,true)
                    break;
                case 5:
                    DatosHuerta1.eliminar()
                    break;
                case 6:
                    DatosHuerta1.listar(DatosHuerta1.recolectados,null,false)
                    break;
                case 7:
                    let veredictoFinal=await rl.question('¿De verdad que quieres salir?:( (s/n) ')
                    veredictoFinal=veredictoFinal.toLowerCase()
                    if(veredictoFinal=='s'){
                        console.log("OK...")
                        programa=false
                    }
                    break;
            
                default:

                    throw new Error("Esa no es una opción válida :(");
                    break;
            }

        } catch (error) {
            console.error(error.message)
        }
    }
    rl.close()
    clearInterval(timerId)
}
MenuPrincipal()
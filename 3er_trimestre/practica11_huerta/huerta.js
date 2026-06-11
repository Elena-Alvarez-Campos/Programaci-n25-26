//readline
const readline=require('node:readline/promises')
const {stdin:input, stdout:output}=require('node:process')
const {error}=require('node:console');
const rl=readline.createInterface({input,output});
//luxon
const { DateTime, Interval } = require("luxon");
//leer el json
const fs=require("fs");
const cultivosString = fs.readFileSync("./cultivos.json");
let cultivos = JSON.parse(cultivosString);//determina que esta variable es el json

//Estados de cada cultivo
//regado
//seco
//recolectado
//muerto

class DatosHuerta {
    constructor() {
        this.huerta=[]
        this.recolectados=[]
    }
    async plantar() {
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
                }else{
                //compatible
                    let cultivo={
                        nombre: cultivos[opcion].nombre+"_"+(this.huerta.length+1),
                        fecha_regado: DateTime.now(),
                        estado: "regado"
                    }
                    console.log(cultivo)
                    this.huerta.push(cultivo)
                }
            } catch (error) {
                console.error(error.message)
            }
        }
        MenuPrincipal()
    }
    //escribe el requisito del estado para buscar
    //si quiere una lista general, el estado es null
    listar(lista_huerta,estado){
        try {
            let imprimir="Lista de cultivos "
            estado==null ? imprimir+="\n" : imprimir+=estado+"s\n"
            let lista_cultivos=[]
            if(lista_huerta.length<=0 && estado=="recolectado"){
                throw new Error("Todavía no hay cultivos en la huerta");
            }else if(lista_huerta.length<=0 && estado=="seco"){
                throw new Error("No tienes ningún cultivo seco :D");
            }else if(lista_huerta.length<=0 && estado=="muerto"){
                throw new Error("No tienes ningún cultivo seco:D");
            }else if(lista_huerta.length<=0){
                throw new Error("Todavía no hay cultivos en la huerta");
            }
            //hay cultivos
            for(let cada_cultivo of lista_huerta){
                if(estado==null){
                    imprimir+=cada_cultivo.nombre+"\n"
                    lista_cultivos.push(cada_cultivo)
                }else if(estado==cada_cultivo.estado){

                }
            }
            console.log(imprimir)
        } catch (error) {
            console.error(error.message)
        }

    }

}
/*
async function estadoCultivo(cultivo) {
    
}*/
//Introdución
//Menú principal
let DatosHuerta1= new DatosHuerta()
async function MenuPrincipal() {
    console.log("Esta es tu huerta :D")
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
                    setTimeout(() => console.log('Hola'), 1000);
                    DatosHuerta1.plantar()
                    break;
                case 2:
                    
                    break;
                case 3:
                    
                    break;
                case 4:
                    DatosHuerta1.listar(DatosHuerta1.huerta,null)
                    break;
                case 5:
                    
                    break;
                case 6:
                    DatosHuerta1.listar(DatosHuerta1.recolectados,null)
                    break;
                case 7:
                    let veredictoFinal=await rl.question('¿De verdad qeu quieres salir?:( (s/n) ')
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
}
MenuPrincipal()
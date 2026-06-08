//readline
const readline=require('node:readline/promises')
const {stdin:input, stdout:output}=require('node:process')
const {error}=require('node:console');
const rl=readline.createInterface({input,output});
//luxon
const { DateTime, Interval } = require("luxon");
//leer el json
const fs=require("fs");
const clienteString = fs.readFileSync("./clientes.json");
let listaClientes = JSON.parse(clienteString);//determina que esta variable es el json
class clientes {
    constructor(listaClientes) {
        this.listaClientes=listaClientes
    }
    muestraCliente(){
        let imprimir="Clientes********************\n"
        for(let cada_cliente of this.listaClientes){
            imprimir+="ID:"+cada_cliente.id+", "+cada_cliente.nombre+", "+cada_cliente.edad+" años\n"+
            ", "+cada_cliente.total_gastado+"€ gastados en total"
        }
        console.log(imprimir)
    }
    async sumarGasto(){
        try {
            let idString=await rl.question("Escribe el ID del cliente:\n")
            if(isNaN(idString)){//si no es número dá error
                throw new Error("Este ID no es válido");
            }
            let idCliente=parseInt(idString)
            let encontrado=false
            for(let cada_cliente of this.listaClientes){
                if (cada_cliente.id==idCliente) {//si el ID no es válido no pregunta nada más y vuelve al inicio
                    let gastadoString=await rl.question("Escribe el importe gastado\n")
                    if(isNaN(gastadoString)){
                        throw new Error("Este ID no es válido");
                    }
                    let gastadoCliente=parseInt(gastadoString)
                    cada_cliente.total_gastado+=gastadoCliente
                    encontrado=true
                    //console.log(cada_cliente.total_gastado)
                    console.log("Se ha actuelizado el gasto")
                    break
                }
            }
            if(encontrado==false){
                throw new Error("Este ID no es válido")
            }
        } catch (error) {
            console.error(error.message)
        }
        MenuClientes()
    }
    async anadirVisita(){
        try {
            let idString=await rl.question("Escribe el ID del cliente:\n")
            if(isNaN(idString)){
                throw new Error("Este ID no es válido");
            }
            let idCliente=parseInt(idString)
            let encontrado=false
            for(let cada_cliente of this.listaClientes){
                if (cada_cliente.id==idCliente) {
                    let duracionString=await rl.question("Escribe la duración en minutos dela visita:\n")
                    if(isNaN(duracionString)){
                        throw new Error("Este ID no es válido");
                    }
                    let duracionVisita=parseInt(duracionString)
                    let visitaNueva={
                        "entrada":DateTime.now().minus({minutes : duracionVisita}).toString(),//se resta la duración en minutos y se pasa a String para poder guardarlo
                        "salida":DateTime.now().toString()
                    }
                    cada_cliente.visitas.push(visitaNueva)
                    encontrado=true
                    fs.writeFileSync("./clientes.json", JSON.stringify(this.listaClientes))//pasar los datos al json
                    console.log(cada_cliente)
                    console.log("Se han actualizado las visitas del cliente")
                    break
                }
            }
            if(encontrado==false){
                throw new Error("Este ID no es válido")
            }
        } catch (error) {
            console.error(error.message)
        }
        MenuClientes()
    }
}

let clientes1=new clientes(listaClientes);
async function MenuClientes() {
    let programa=true
    while(programa==true){
        try{
            let respuesta=await rl.question("Menú clientes***************\n"+
                "1.Mostrar cliente\n"+
                "2.Sumar gasto a un cliente\n"+
                "3.Añadir visita a un cliente\n"+
                "4.Salir\n"
            )
            if(isNaN(respuesta)){
                throw new Error("No es un valor compatible");
            }
            let opcion=parseInt(respuesta)
            switch (opcion) {
                case 1:
                    clientes1.muestraCliente()
                    break;
                case 2:
                    clientes1.sumarGasto()
                    break;
                case 3:
                    clientes1.anadirVisita()
                    break;
                case 4:
                    programa=false
                    break;
                default:
                    throw new Error("No es un valor compatible");
                    break;
            }
        }catch(error){
            console.error(error.message)
        }
    }
    rl.close()
}
MenuClientes()
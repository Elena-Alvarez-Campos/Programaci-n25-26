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
//cantidad
//true=hay muchos elementos y se hace una lista
//false=Solo hay 1 elemento
//mayorMenor
//<0 => busca menor
//>0 => busca mayor
//=0 => otros
//numero flase
//es false cunado quiere medir el tiempo (no tierne que comparar números, si no fechas) (cualidad qeu solo hacel los puntos 6, 7 y 10)
function listadoAmigable(lista,cantidad,mayorMenor,filtro,numero){
    let imprimir="";
    let respuesta=[lista[0]]//por defecto, la lista ya tiene el primer valor de la lista dentro
    let anadidos=[]//datos que se añaden a los que piden listas
    let veces=0//puede representar las veces que alguien entró o el tiempo total que pasó dentro
    if(cantidad==true){respuesta=[]}//si pide una lista, se vacía el valor por defecto
    for(let cada_elemento of lista){//cada_cliente+-
        let tiempoElemento=0//acaba con el tiempo total que ha pasado en la tienda
        let fechaProxima=""//por defecto es la primera entrada
        if(filtro=="visitas"){let fechaProxima=cada_elemento[filtro][0].entrada}
        if(numero==false){//pide algo relacionado con una fecha
            let encontrado=false
            for(let cada_visita of cada_elemento[filtro]){//mira cada visita que hizo el cliente
                tiempoElemento+=Interval.fromDateTimes(DateTime.fromISO(cada_visita.entrada),DateTime.fromISO(cada_visita.salida)).length('minutes')
                //tiempo total que ha pasado el cliente en la tienda
                if(cantidad==true, numero==false, mayorMenor>0){
                    //cantidad: busca 1 lista
                    //numero: no opera con números al principio, si no con fechas
                    //mayorMenor: no busca parámetros en concretos (distinción del 7 que tien un 0 porque busca medias) 
                    //calcula mediante las entradas a la tienda, no las salidas
                    if(DateTime.fromISO(cada_visita.entrada)>(DateTime.now().minus({days : mayorMenor}))){
                        encontrado=true
                        if(fechaProxima<DateTime.fromISO(cada_visita.entrada)){
                            fechaProxima=DateTime.fromISO(cada_visita.entrada)
                        }
                    }
                }
            }
            if(encontrado==true) {
                respuesta.push(cada_elemento)
                anadidos.push(DateTime.fromISO(fechaProxima).toFormat('dd/MM/yyyy'))
                //console.log(anadidos)
                continue
            }
            if(tiempoElemento>veces){//si es mayor que el denominado mayor
                //En el caso de la lista, veces simpre va a ser 0, por lo que se añade siempre
                if(cantidad==false){//solo pide 1 elemento
                    respuesta[0]=cada_elemento//se convierte en el más grande
                    veces=tiempoElemento//también se actualiza las veces que va a la tienda (se pone el del mayor)
                }else if(mayorMenor==0){//en caso de que no pida lista
                    respuesta.push(cada_elemento)//a la repuesta final se le añade el elemento 
                    anadidos.push(tiempoElemento/cada_elemento[filtro].length)//A los añadidos para imprimir la información extra se le añaden 
                    //la media del tiempo
                }
                
            }
            continue
        }
        if(cantidad==false && ((mayorMenor<0 && cada_elemento[filtro]<respuesta[0][filtro]) || (mayorMenor>0 && cada_elemento[filtro]>respuesta[0][filtro])) ){
            //cambia la respuesta si busca pequeños y es más pequeño o si busca grandes y es más grande
            respuesta[0]=cada_elemento
            if(filtro=="visitas"){veces=cada_elemento[filtro].length}
        }
    }
    for(let cada_respuesta of respuesta){
        imprimir+="ID:"+cada_respuesta.id+", "+cada_respuesta.nombre+", "+cada_respuesta.edad+" años"
        if(filtro=="total_gastado"){imprimir+=", Gastado: "+cada_respuesta.total_gastado}
        else if(filtro=="visitas" && numero==true){imprimir+=", Veces: "+veces}
        else if(filtro=="visitas" && numero==false && cantidad==false){imprimir+=", Tiempo total: "+veces+" minutos"}
        else if(filtro=="visitas" && numero==false && cantidad==true && mayorMenor==0){imprimir+=", Tiempo medio: "+Math.floor(anadidos[respuesta.indexOf(cada_respuesta)])+" minutos"}
        else if(filtro=="visitas" && numero==false && cantidad==true && mayorMenor!=0){imprimir+=", Última visita: "+anadidos[respuesta.indexOf(cada_respuesta)]}
        imprimir+="\n"
    }
    console.log(imprimir)
}
//resultado
//true= total
//flase = cantidad
function medias(lista,filtro,resultado) {
    let total=0
    let numElementos=0
    for(let cada_elemento of lista){//cada cliente de la lista
        if(filtro=="visitas"){
            let total_visitas=0
            let num_visitas=0
            if(resultado==true){//tiempo de las visitas (no cantidad de visitas)
                for(let cada_visita of cada_elemento[filtro]){//filtra todas las visitas
                    total_visitas+=Interval.fromDateTimes(DateTime.fromISO(cada_visita.entrada),DateTime.fromISO(cada_visita.salida)).length('minutes')
                    //console.log(total_visitas)
                    num_visitas++
                }
                total=total_visitas/num_visitas
            }else{//numero de visitas
                total+=cada_elemento[filtro].length//visitas de cada cliente(4visitas+2visitas)
            }
            
        }else{
            total+=cada_elemento[filtro]
        }
        numElementos++
    }
    return total/numElementos
    
}
listadoAmigable(listaClientes,false,-1,"edad",true)
async function MenuEstadisticas() {
    let programa=true
    while(programa==true){
        try{
            let respuesta=await rl.question("Menú clientes***************\n"+
                "1.Cliente más joven\n"+
                "2.Media de edad delos clientes\n"+
                "3.Cliente con más gasto\n"+
                "4.Media de gasto de todos los clientes\n"+
                "5.Cliente que más veces ha visitado la tienda\n"+
                "6.Cliente que más tiempo ha estado en la tienda\n"+
                "7.Tiempo medio de cada cliente en la tienda\n"+
                "8.Tiempo medio de visita global\n"+
                "9.Media de visitas a la tienda\n"+
                "10.Media de visitas a la tienda\n"+
                "11.Salir\n"
            )
            if(isNaN(respuesta)){
                throw new Error("No es un valor compatible");
            }
            let opcion=parseInt(respuesta)
            switch (opcion) {
                case 1:
                    listadoAmigable(listaClientes,false,-1,"edad",true)
                    break;
                case 2:
                    console.log("Edad media: "+medias(listaClientes,"edad",true))
                    break;
                case 3:
                    listadoAmigable(listaClientes,false,1,"total_gastado",true)
                    break;
                case 4:
                    console.log("Media de todos los gastos de los clientes: "+medias(listaClientes,"total_gastado",true))
                    break;
                case 5:
                    listadoAmigable(listaClientes,false,1,"visitas",true)
                    break;
                case 6:
                    listadoAmigable(listaClientes,false,1,"visitas",false)
                    break;
                case 7:
                    listadoAmigable(listaClientes,true,0,"visitas",false)
                    break;
                case 8:
                    console.log("Tiempo medio de los clientes en la tienda: "+Math.floor(medias(listaClientes,"visitas",true))+" minutos")
                    break;
                case 9:
                    console.log("Media de las visitas de todos los clientes: "+medias(listaClientes,"visitas",false)+" visitas")
                    break;
                case 10:
                    listadoAmigable(listaClientes,true,7,"visitas",false)//se pone 7 para indicar los días previos que se quieren buscar
                    //en este caso, 1 semana (si se quiere buscar en el mes anterior, po ejemplo, solo habría qeu cambiar el número a 30)
                    break;
                case 11:
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
MenuEstadisticas()
DateTime.now().minus({days:7})

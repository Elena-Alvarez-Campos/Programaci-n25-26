//PROMESAS****************************************************
//EVITAR QUE EL PROGRAMA SE BLOQUÉ
//El programa se sigue ejecutando hasta tener el dato que necesita
//por timepos (si no contesta en x tiuempo no se ejecuta)
//por validaciones (si no es correxcto y tarda mucho tiempo cierra el programa)


//Código sincrono
/*
console.log("1.pido pizza")
function cocinarSincrona(){
    const ini=Date.now();
    while(Date.now()-ini<3000*//**Está en milisegundos automáticamente *//*){
        return "pizza lista"
    }
}
const resultado=cocinarSincrona();
console.log(resultado)
console.log("2. pido la cuenta")

//código asíncrono
//Definir la tarea pesada como una promesa (te prometo que lo voy a hacer)
/*
const cocinarPizza=()=>{
    return new Promise((resolve)=>{
        //Tiempo fuera
        //vaa sevolveer el resolve cuando se acaba el tiempo
        setTimeout(()=> resolve("Pizza lista"),3000)
    })
}
async function prepararCena() {
    console.log("1.Pedir pizza")
    const pizza=cocinarPizza();
    console.log("2.pedir cuenta")
    //await avisa cuando la promesa esté lista
    const resultado=await pizza;
    console.log(resultado)
}

prepararCena();

async function obtenerUsuario() {
    try {
        console.log("1.Consultando la base de datos...")
        //fetch (obtiene resultados y los captura) asincrónico que pide datos y libera el sistema
        const respuesta=await fetch("http://typrcode")//NO VA A FUNCIONAR
        //convertir a JSON si se recupera de manera correcta
        const usario=await respuesta.json();
        return "Hola "+usario.name;
    } catch (error) {
        return "Hubo un error en el servidor"
    }
    //finally es por si algo no se ha ejecutado poir cualquier razón
    finally{
        console.log("tarea terminada")
    }
}
console.log("abriendo app")
obtenerUsuario().then(mensaje =>{console.log("resultado de la bbdd "+mensaje)})

const { rejects } = require("assert");
*/
//readline es el encargado de leer por terminal
/*
const readline=require("readline");
//1.Creamos una interfaz de lexctura
const rl=readline.createInterface({
    input:process.stdin,
    ouput:process.standout
})
const validarPassword=()=>{
    return new Promise((resolve,reject)=>{
        //2.Pedir datos al usuario
        //muestra una pregunta y guarda lo que haga esa pregunta en la variable
        rl.question("Introduce tu contraseña",(respuesta)=>{
            //3.La promesa depende de lo que el usuario escriba
            if(respuesta=="1234"){
                resolve("Acceso concedido");
            }else{
                reject("Error: Contraseña incorrecta")
            }
        //IMPORTANTE: CERRRAR LA INTERFAZ
        //cerramos la interfaz
        rl.close();
        })
    })
}

//4.Utilización de la promesa
console.log("Iniciando sistema")
validarPassword()
//mensaje que viene del resolve
.then((mensaje)=> console.log(mensaje))
.catch((error)=> console.error(error))
*/
//MÉTODO NUEVO***********************************************
//importar versión de readline con promesas
const readline=require('node:readline/promises')
const {stdin:input,stdout:output}=require('node:process');
const { error } = require('node:console');
async function Validar(){
    //1.Creamos la interfaz
    //Interfaz basada en promesas
    const rl=readline.createInterface({input,output})
    console.log("sistema seguridad")
    try {
        //2.Usar el await para esperar la respuesta
        const respuesta=await rl.question('introduduce la clave')
        //3.Aplicamos la lógica de validación 
        if(respuesta=="1234"){
            console.log("Acceso concedido: Bienvenido")
        }else{
            throw new Error('Error: contraseña incorrecta')
        }
    } catch (error) {
        //Error de sistema que no tiene nada que ver con la validación
        console.error(error.message)
    }
    finally{
        //pase lo que pase siempre se ejecuta
        //4.Cerramos la interfaz
        rl.close()
    }
}
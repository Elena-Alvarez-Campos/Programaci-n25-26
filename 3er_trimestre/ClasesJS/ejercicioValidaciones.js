//PREGUNTAR SI EL USUARIO ES MAYOR DE EDAD
//Los datos recuperados siempre son string, por lo que hay que pasarlosa números
//Importar módulo
const readline=require('node:readline/promises')
const {stdin:input, stdout:output}=require('node:process')
const {error}=require('node:console');
async function Validar() {
    //1.Crear interfaz
    const rl=readline.createInterface({input,output})
    console.log('Validar edad')
    try{
        //2.Await (esperar respuesta)
        const respuesta=await rl.question('¿Cuantos años tienes?\n')
        let edad=parseInt(respuesta)
        if(isNaN(edad)){
            throw new Error('Error: no es un valor compatible')
        }
        if(edad>=18){
            console.log("Disfruta la película")
        }else{
            console.log("Lo siento, no puedes acceder")
        }
    }catch(error){
        console.error(error.message)
    }finally{
        //4.Cerrar la interfaz
        rl.close()
    }
}
Validar()
//EJERCICIO 2*************************************************

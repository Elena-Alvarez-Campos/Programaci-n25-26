//readline

const readline=require('node:readline/promises')
const {stdin:input, stdout:output}=require('node:process')
const {error}=require('node:console');
const rl=readline.createInterface({input,output});

//Introdución
console.log("Bienvenidx a tu huerta :D")
//Menú principal
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
                '7.Salir del juego'
            )
            if (isNaN(respuesta)) {
                throw new Error("Esa no es una opción válida :(");
            }
            let opcion=parseInt(respuesta)
            switch (opcion) {
                case 1:
                    
                    break;
                case 2:
                    
                    break;
                case 3:
                    
                    break;
                case 4:
                    
                    break;
                case 5:
                    
                    break;
                case 6:
                    
                    break;
                case 7:
                    let veredictoFinal=await rl.question('¿De verdad qeu quieres salir?:( (s/n) ')
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
            console.error(error.mesage)
        }
    }
    rl.close()
}
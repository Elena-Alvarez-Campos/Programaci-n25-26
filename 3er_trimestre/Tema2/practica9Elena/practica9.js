
//5. salir
//readline
const readline=require('node:readline/promises')
const {stdin:input, stdout:output}=require('node:process')
const {error}=require('node:console');
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
    try{
        while(programa==true){
            const respuesta=await rl.question("Menú Principal********************+\n"+
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
                        let horaE=await rl.question("Horas del evento\n")
                        let minE=await rl.question("Minutos del evento\n")
                        let fechaE=DateTime.fromObject({ year: anoE, month: mesE, day: diaE ,minute: minE});
                        console.log(fechaE.isValid)
                        break;
                    case 2:
                        
                        break;
                    case 3:
                        
                        break;
                    case 4:
                        
                        break;
                    case 5:
                        programa=false
                        break;
                    default:
                        console.error(error.message)
                        break;
                }
            }
        }
    }catch(error){
        console.error(error.message)
    }finally{
        rl.close()
    }
}
//creación de clase con en json
const agenda1 = new Agenda(listaFechas);
MenuPrincipal()
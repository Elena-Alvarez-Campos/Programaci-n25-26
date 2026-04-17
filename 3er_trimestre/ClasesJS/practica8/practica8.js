
//Importar json
const fs=require("fs");
let cartaString = fs.readFileSync("./carta.json");
let Carta = JSON.parse(cartaString);
//readline
const readline=require('node:readline/promises')
const {stdin:input, stdout:output}=require('node:process')
const {error}=require('node:console');
//clase mesa
class Mesa{
    constructor(){
        this.consumiciones=[];
        this.libre=true;//La mesa está libre cuando es true
    }
    async pedirConsumicion(){
        let cartaConsumiciones="Carta**********************\n"+"Escribe el número del plato\n\n"+"Preimeros----------------\n";
        for(let i=0; i<3; i++){
            if(i==1){cartaConsumiciones+="\nSegundos-----------------\n"}
            if(i==2){cartaConsumiciones+="\nPostre-------------------\n"}
            for(let cada_plato of Carta){
                if(cada_plato.tipo=="primero"&&i==0){
                    cartaConsumiciones+=cada_plato.id+"."+cada_plato.nombre+"....."+cada_plato.precio+"€"+"\n"
                }
                else if(cada_plato.tipo=="segundo"&&i==1){
                    cartaConsumiciones+=cada_plato.id+"."+cada_plato.nombre+"....."+cada_plato.precio+"€"+"\n"
                }else if(cada_plato.tipo=="postre"&&i==2){
                    cartaConsumiciones+=cada_plato.id+"."+cada_plato.nombre+"....."+cada_plato.precio+"€"+"\n"
                }
                
            }
        }
        const rl=readline.createInterface({input,output})
        const respuesta=await rl.question(cartaConsumiciones)    
        try{
             let opcion=parseInt(respuesta)
            let encontrado=false;
            for(let cada_plato of Carta){
                if(cada_plato.id==opcion){
                    encontrado=true;
                    this.consumiciones.push(cada_plato.nombre)
                    let pedido=("Tu pedidio***********\n")
                    for(let cada_consumicion of this.consumiciones){
                        pedido+=cada_consumicion+"\n"
                    }
                    console.log(pedido);
                }
            }
        } catch (error) {
            console.error(error.message)
        }finally{
            rl.close()
        }
    }
}
class Restaurante{
    //En el enunciado no mpone que pide el número de mesas
    constructor(listaMesas,numMesas,carta,precioMenuDia){
        this.listaMesas=listaMesas
        this.numMesas=numMesas;
        //importar JSON con el nombre proporcionado
        let cartaString = fs.readFileSync(carta);
        let Carta = JSON.parse(cartaString);
        this.carta=Carta;
        this.precioMenuDia=precioMenuDia;
    }
    mostrarMesas(){
        let posicion=0
        let mesasOcupadas="Mesas ocupadas********************\n"
        for(let cadaMesa of this.listaMesas){
            
            if(cadaMesa.libre==false){//Quiere decir que está ocupada
                mesasOcupadas+="Mesa "+posicion+"\n"
                for(let cada_pedido of cadaMesa.consumiciones){
                    for(let cada_plato of Carta){
                        if(cada_plato.id==cada_pedido.id){
                            mesasOcupadas+=cada_plato.tipo+": "+cada_plato.nombre+"\n";
                            break
                        }
                    }
                }
            }
            posicion++
        }
        return console.log(mesasOcupadas)
    }
    async buscarMesaVacia(){
        let mesasV="Mesas Vacías******************\n";
        let mesaEncontrada=false;
        for(let cada_mesa of this.listaMesas){
            if(cada_mesa.libre==true){
                mesaEncontrada=true
                mesasV+="Mesa "+this.listaMesas.indexOf(cada_mesa)+"\n"
            }
        }
        if(mesaEncontrada==true){
            try {
                const rl=readline.createInterface({input,output})
                const respuesta=await rl.question(mesasV);
                let opcion=parseInt(respuesta)
            } catch (error) {
                
            }
        }
        if(mesaEncontrada==false){
            console.log("No hay mesas libres")
        }
        console.log(mesasV)
    }
    seleccionarMesa(){

    }
}
//añadir mesas

let mesas=new Array(5)
mesas[0]=new Mesa();
mesas[1]=new Mesa();
mesas[2]=new Mesa();
mesas[3]=new Mesa();
mesas[4]=new Mesa();

//Añadir Restaurante
let restaurante1=new Restaurante(mesas,5,"./carta.json",10)

//Menu mesas************************************************************************************
async function MenuMesa() {
    let prog=true
    const rl=readline.createInterface({input,output})
    while(prog==true){
        const respuesta=await rl.question("Menú principal**********************\n"+
            "1.Pedir consumición\n"+
            "2.Pedir cuenta\n"+
            "3.Volver al menú principal\n"
        )
        
        try {
            let opcion=parseInt(respuesta)
            
            if(isNaN(opcion)){
                throw new Error('Error: no es un valor compatible')
            }
            else{
                switch (opcion) {
                    case 1:
                        restaurante1.mostrarMesas();
                        break;
                    case 2:
                        
                        break;
                    case 3:
                        
                        break;
                    case 4:
                        prog=false
                        break;
                    default:
                        console.error(error.message)
                        break;
                }
            }
            
        } catch (error) {
            console.error(error.message)
        }finally{
            rl.close()
        }
    }
}

//Menú principal***********************************************************************************************

let programa=true;
async function MenuPrincipal() {
    const rl=readline.createInterface({input,output})
    while(programa==true){
        const respuesta=await rl.question("Menú principal**********************\n"+
            "1.Mostrar mesas\n"+
            "2.Buscar mesas vacías\n"+
            "3.Seleccionar mesa\n"+
            "4.Salir\n"
        )
        
        try {
            let opcion=parseInt(respuesta)
            
            if(isNaN(opcion)){
                throw new Error('Error: no es un valor compatible')
            }
            else{
                switch (opcion) {
                    case 1:
                        restaurante1.mostrarMesas();
                        break;
                    case 2:
                        restaurante1.buscarMesaVacia()
                        break;
                    case 3:
                        
                        break;
                    case 4:
                        programa=false
                        break;
                    default:
                        console.error(error.message)
                        break;
                }
            }
            
        } catch (error) {
            console.error(error.message)
        }finally{
            rl.close()
        }
    }
}
MenuPrincipal()


//Importar json
//const fs=require("fs");
/*
let cartaString = fs.readFileSync("./carta.json");
let Carta = JSON.parse(cartaString);*/
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
        //Permite crear la carta de manera organizada por la categoría del plato
        let cartaConsumiciones="Carta**********************\n"+"Escribe el número del plato\n\n"+"Preimeros----------------\n";
        for(let i=0; i<4; i++){
            if(i==1){cartaConsumiciones+="\nSegundos-----------------\n"}
            if(i==2){cartaConsumiciones+="\nPostre-------------------\n"}
            if(i==3){cartaConsumiciones+="\nBebidas-------------------\n"}
            for(let cada_plato of restaurante1.carta){
                if(cada_plato.tipo=="primero"&&i==0){
                    cartaConsumiciones+=cada_plato.id+"."+cada_plato.nombre+"....."+cada_plato.precio+"€"+"\n"
                }
                else if(cada_plato.tipo=="segundo"&&i==1){
                    cartaConsumiciones+=cada_plato.id+"."+cada_plato.nombre+"....."+cada_plato.precio+"€"+"\n"
                }else if(cada_plato.tipo=="postre"&&i==2){
                    cartaConsumiciones+=cada_plato.id+"."+cada_plato.nombre+"....."+cada_plato.precio+"€"+"\n"
                }else if(cada_plato.tipo=="bebida"&&i==3){
                    cartaConsumiciones+=cada_plato.id+"."+cada_plato.nombre+"....."+cada_plato.precio+"€"+"\n"
                }
                
            }
        }
        //Investiga la opción
        const rl=readline.createInterface({input,output})
            
        try{
            const respuesta=await rl.question(cartaConsumiciones)
            let opcion=parseInt(respuesta)
            let encontrado=false;
            for(let cada_plato of restaurante1.carta){
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
            rl.close()
            if(encontrado==true){
                MenuMesa(this)
            }
            else{
                console.log("No se ha encontrado el plato")
                MenuMesa(this)
            }
        } catch (error) {
            rl.close()
            console.error(error.message)
        }
    }
    async pedirCuenta(){
        this.libre=true;//la mesa va a estar libre a partir de ahora
        let primeros=0
        let segundos=0
        let postres=0
        let bebidas=0
        let precioTotal=0
        for(let cada_consumicion of this.consumiciones){
            for(let cada_plato of restaurante1.carta){
                if(cada_consumicion==cada_plato.nombre){
                    if(cada_plato.tipo=="primero"){
                        primeros++
                    }else if(cada_plato.tipo=="segundo"){
                        segundos++
                    }else if(cada_plato.tipo=="postre"){
                        postres++
                    }else if(cada_plato.tipo=="bebida"){
                        bebidas++
                    }
                    break;
                }
            }
        }
        let buscador=true
        while(buscador==true){
            if(primeros>0 && segundos>0 && postres>0 && bebidas>0){
                //console.log("primeros: "+primeros+"\nsegundos: "+segundos+"\npostres: "+postres+"\nbebidas: "+bebidas)
                primeros-=1
                segundos-=1
                postres-=1
                bebidas-=1
                precioTotal+=restaurante1.precioMenuDia
                for(let i=0; i<4;i++){
                    let posicion=-1;
                    let tipoN=""
                    if(i==0){tipoN="primero"}
                    else if(i==1){tipoN="segundo"}
                    else if(i==2){tipoN="postre"}
                    else if(i==3){tipoN="bebida"}
                    for(let cada_plato of restaurante1.carta){
                        if(posicion>=0){
                            break
                        }
                        for(let cada_consumicion of this.consumiciones){
                            if(cada_consumicion==cada_plato.nombre && cada_plato.tipo==tipoN){
                                posicion=this.consumiciones.indexOf(cada_consumicion)
                                break
                            }
                        }
                    }
                    this.consumiciones.splice(posicion,1)
                }
            }else{
                buscador=false
            }
        }
        for(let cada_consumicion of this.consumiciones){
            for(let cada_plato of restaurante1.carta){
                if(cada_consumicion==cada_plato.nombre){
                    precioTotal+=cada_plato.precio
                }
            }
        }
        this.consumiciones=[]//vacía las consumiciones
        console.log("Precio total a pagar: "+precioTotal+"€")
    }
}
class Restaurante{
    //En el enunciado no mpone que pide el número de mesas
    constructor(numMesas,carta,precioMenuDia){
        this.numMesas=numMesas;
        this.listaMesas=[]
        for(let i=0;i<numMesas;i++){
            this.listaMesas[i]=new Mesa();
        }
        //importar JSON con el nombre proporcionado
        const fs=require("fs");
        let cartaString = fs.readFileSync(carta);
        let Carta = JSON.parse(cartaString);
        this.carta=Carta;
        this.precioMenuDia=precioMenuDia;
    }
    mostrarMesas(){
        let posicion=0
        let mesasOcupadas="Mesas ocupadas********************\n"
        let encontrada=false;
        for(let cadaMesa of this.listaMesas){
            if(cadaMesa.libre==false){//Quiere decir que está ocupada
                mesasOcupadas+="Mesa "+posicion+"\n"
                encontrada=true
                for(let cada_pedido of this.listaMesas[posicion].consumiciones){
                    for(let cada_plato of this.carta){
                        if(cada_plato.nombre==cada_pedido){
                            mesasOcupadas+="-"+cada_plato.tipo+": "+cada_plato.nombre+"\n";

                            break
                        }
                    }
                }
            }
            posicion++
        }
        if(encontrada==false){
            console.log("Todas las mesas están libres")
        }else{
            console.log(mesasOcupadas)
        }
    }
    async buscarMesaVacia(){
        
        let mesasV="Mesas Vacías******************\nSelecciona una mesa:\n";
        let mesaEncontrada=false;
        let mesasDisponibles=[]
        for(let cada_mesa of this.listaMesas){
            if(cada_mesa.libre==true){
                mesaEncontrada=true
                mesasV+="Mesa "+this.listaMesas.indexOf(cada_mesa)+"\n"
                mesasDisponibles.push(this.listaMesas.indexOf(cada_mesa))
            }
        }
        if(mesaEncontrada==true){
            const rl=readline.createInterface({input,output})
            try {
                
                const respuesta=await rl.question(mesasV);
                let opcion=parseInt(respuesta)
                rl.close()
                let disponible=false
                for(let cadaMesa of mesasDisponibles){
                    if(opcion==cadaMesa){
                        disponible=true
                    }
                }
                if(disponible==true){
                    this.listaMesas[opcion].libre=false
                    MenuMesa(this.listaMesas[opcion])
                    if(isNaN(opcion)){
                        throw new Error('Error: no es un valor compatible')
                    }
                }else{
                    console.log("Mesa no disponible")
                    MenuPrincipal()
                }
                

                if(isNaN(opcion)){
                    throw new Error('Error: no es un valor compatible')
                    
                }
                
            } catch (error) {
                rl.close()
                console.error(error.message)
                
            }
        }
        else{
            
            console.log("No hay mesas libres")
            MenuPrincipal()
        }
        
    }
    async seleccionarMesa(){
        let mesasV="Mesas Ocupadas******************\nSelecciona una mesa:\n";
        let mesaEncontrada=false;
        let mesasDisponibles=[]
        for(let cada_mesa of this.listaMesas){
            if(cada_mesa.libre==false){
                mesaEncontrada=true
                mesasV+="Mesa "+this.listaMesas.indexOf(cada_mesa)+"\n"
                mesasDisponibles.push(this.listaMesas.indexOf(cada_mesa))
            }
        }
        //coderunner run in terminal
        if(mesaEncontrada==true){
            const rl=readline.createInterface({input,output})
            try {
                
                const respuesta=await rl.question(mesasV);
                let opcion=parseInt(respuesta)
                rl.close()
                let disponible=false
                for(let cadaMesa of mesasDisponibles){
                    if(opcion==cadaMesa){
                        disponible=true
                    }
                }
                if(disponible==true){
                    MenuMesa(this.listaMesas[opcion])
                    if(isNaN(opcion)){
                        throw new Error('Error: no es un valor compatible')
                    }
                }else{
                    console.log("Mesa no disponible")
                    MenuPrincipal()
                }
            } catch (error) {
                rl.close()
                console.error(error.message)
                MenuPrincipal()
                
            }
        }
        else{
            console.log("No hay mesas ocupadas")
            MenuPrincipal()
        }

    }
}

//Menu mesas*****************************************************************************************************
async function MenuMesa(mesa) {
    let prog=true
    while(prog==true){
        const rl=readline.createInterface({input,output})
        const respuesta=await rl.question("Menú de mesa**********************\n"+
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
                        rl.close()
                        mesa.pedirConsumicion()
                        prog=false
                        break;
                    case 2:
                        rl.close()
                        mesa.pedirCuenta()
                        prog=false
                        MenuPrincipal()
                        break;
                    case 3:
                        rl.close()
                        prog=false
                        MenuPrincipal()
                        break;
                    default:
                        rl.close()
                        console.log("Escoge un valor compatile")
                        break;
                }
            }
            
        } catch (error) {
            console.error(error.message)
            rl.close()
        }
    }
}

//Menú principal***********************************************************************************************


async function MenuPrincipal() {
    let programa=true;
    while(programa==true){
        const rl=readline.createInterface({input,output})
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
                        rl.close()
                        break;
                    case 2:
                        rl.close()
                        restaurante1.buscarMesaVacia()
                        programa=false;
                        
                        break;
                    case 3:
                        rl.close()
                        restaurante1.seleccionarMesa()
                        programa=false;
                        break;
                    case 4:
                        programa=false
                        rl.close()
                        break;
                    default:
                        console.log("Escoge un valor compatile")
                        rl.close()
                        break;
                }
            }
            
        } catch (error) {
            console.error(error.message)
            rl.close()
        }
    }
}
//Añadir Restaurante
let restaurante1=new Restaurante(3,"./carta.json",10)
MenuPrincipal()

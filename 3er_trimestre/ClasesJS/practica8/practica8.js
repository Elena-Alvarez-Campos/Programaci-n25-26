//clase mesa
class Mesa{
    constructor(){
        this.consumiciones=[];
        this.libre=true;//La mesa está libre cuando es true
    }
}
class Restaurante{
    constructor(listaMesas,numMesas,carta,precioMenuDia){
        this.listaMesas=listaMesas
        this.numMesas=numMesas;
        this.carta=carta;
        this.precioMenuDia=precioMenuDia;
    }
    mostrarMesas(){
        posicion=0
        let mesasOcupadas="Mesas ocupadas********************\n"
        for(let cadaMesa of this.listaMesas){
            if(cadaMesa.libre==false){//Quere decir que está ocupada
                mesasOcupadas+="Mesa "+posicion+"\n"
                for(let cada_pedido of consumiciones){
                    for(let cada_plato of carta){//Falta vincular con el JSON
                        if(cada_plato.id==cada_pedido.id){
                            mesasOcupadas+=cada_plato.tipo+": "+cada_plato.nombre
                        }
                    }
                }
            }
        }
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
let restaurante1=new Restaurante(mesas,5,carta,10)
//Menú principal
const readline=require('node:readline/promises')
const {stdin:input, stdout:output}=require('node:process')
const {error}=require('node:console');
let programa=true;
async function MenuPrincipal() {
    const rl=readline.createInterface({input,output})
    while(programa==true){
        const respuesta=await rl.question("Menú principal**********************\n"+
            "1.Mostrar mesas\n"+
            "2.Buscar mesas vacías\n"+
            "3.Seleccionar mesa\n"+
            "4.Salir\n----------"
        )
        programa=false
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
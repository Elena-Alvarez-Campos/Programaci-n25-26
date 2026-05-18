//redline
const readline=require('node:readline/promises')
const {stdin:input, stdout:output}=require('node:process')
const {error}=require('node:console');
const rl=readline.createInterface({input,output});
//fs para manejar el JSON

const fs=require("fs");
const articulosString = fs.readFileSync("./articulos.json");
let articulos = JSON.parse(articulosString);//determina que esta variable es el json

class GestionAriculos {
    constructor(listaArticulos) {
        this.listaArticulos=articulos//los artículos de JSON
        this.cesta=[]//cesta donde guardar los artículos
    }
    articulosDescuento(){/////////////////////////////////////////////////////////////////////
        let mensaje="Artículos con descuento********************\n"
        let listaDescuentos=[]
        for(let cadaArticulo of this.listaArticulos){
            if(cadaArticulo.descuento!=0){//solo se añaden artículos con descuentos
                listaDescuentos.push(cadaArticulo)
            }
        }
        for(let i=0;i<listaDescuentos.length;i++){//Ubicación del pivote
            let pivote=listaDescuentos[i]//El pivote es el artículo en la posición marcada
            let listaMayores=[]//artículos mayores al pivote
            let listaMenores=[]//artículos menores al pivote
            for(let cadaArticulo of listaDescuentos){
                if(cadaArticulo.descuento>pivote.descuento){//si el numero es mayor al pivote se mete en la lista de mayores
                    listaMayores.push(cadaArticulo)
                }else if(cadaArticulo.descuento<pivote.descuento){//lo mismo pero para artículos menores
                    listaMenores.push(cadaArticulo)
                }else{
                    continue//Si se encuentra a si mismo lo ignora
                }
            }
            listaDescuentos=[]//se vacía la lista para añadir los valores nuevos
            //primero los grandes, luego el pivote y finalmente los pequeños
            for(let cadaArticulo of listaMayores){
                listaDescuentos.push(cadaArticulo)
            }
            listaDescuentos.push(pivote)
            for(let cadaArticulo of listaMenores){
                listaDescuentos.push(cadaArticulo)
            }
            for(let a=i+1;a<listaDescuentos.length;a++){
                if(listaDescuentos[a].descuento>pivote.descuento){
                    //en caso de que haya uno más grande se sigue en la misa posición 
                    i--
                    break
                }
            }
        }
        for(let cadaArticulo of listaDescuentos){//se añade el ID y descuento al mensaje final
            mensaje+="ID:"+cadaArticulo.id+" Descuento: "+cadaArticulo.descuento+"\n"
        }
        return(mensaje)
    }
    listaPortatiles(){//////////////////////////////////////////////////////////////////////////
        let lista="Lista de portátiles********************\n"
        for(let cadaArticulo of this.listaArticulos){
            if(cadaArticulo.tipo=="portátil"){
                lista+="ID:"+cadaArticulo.id+", precio:"+cadaArticulo.precio+", ram:"+cadaArticulo.ram+", disco:"+cadaArticulo.disco+", pulgadas:"+cadaArticulo.pulgadas+"\n"
            }
        }
        return(lista)
    }
    listaSobremesas(){////////////////////////////////////////////////////////////////////////////
        let lista="Lista de sobremesas********************\n"
        for(let cadaArticulo of this.listaArticulos){
            if(cadaArticulo.tipo=="sobremesa"){
                lista+="ID:"+cadaArticulo.id+", precio:"+cadaArticulo.precio+", ram:"+cadaArticulo.ram+", disco:"+cadaArticulo.disco+"\n"
            }
        }
        return(lista)
    }
    listaPantallas(){/////////////////////////////////////////////////////////////////////////////
        let lista="Lista de pantallas********************\n"
        for(let cadaArticulo of this.listaArticulos){
            if(cadaArticulo.tipo=="pantalla"){
                lista+="ID:"+cadaArticulo.id+", precio:"+cadaArticulo.precio+", pulgadas:"+cadaArticulo.pulgadas+"\n"
            }
        }
        return(lista)
    }
    async seleccionarProducto(){//////////////////////////////////////////////////////////////////////
        let pregunta="Lista de artículos*******************\nEscribe su ID\n"
        for(let cadaArticulo of this.listaArticulos){//Muestra los IDs de los productos y el tipo de producto entre paréntesis
            pregunta+="ID:"+cadaArticulo.id+" ("+cadaArticulo.tipo+")\n"
        }
        const respuesta=await rl.question(pregunta)//pide la selección
        try {
            if(isNaN(respuesta)){//si no es un número hay error
                throw new Error("No es una opción válida");
            }
            else{
                let opcion=parseInt(respuesta);//la opción se pasa a string
                let encontrado=false;
                for(let cadaArticulo of this.listaArticulos){
                    if(cadaArticulo.id==opcion){//si se encuentra la opción
                        encontrado=true
                        this.cesta.push(cadaArticulo)//se añade a la cesta
                        console.log("Artículo encontrado")
                    }
                }
                if(encontrado==false){//si no lo encuentra, ese número no es un ID válido
                    console.log("No se puede encontrar el artículo de ese ID")
                }
            }
        } catch (error) {//si hay un problema muestra el error
            console.error(error.message)
        } finally{//siempre va a volver al submenú
            SubmenuPedidos()
        }
    }
    muestraCesta(){///////////////////////////////////////////////////////////////////////////////
        let lista="Pedido en curso********************\n"
        if(this.cesta.length<=0){//si la lista está vacía vuelve al menú
            return("La cesta está vacía")
        }
        else{
            for(let cadaArticulo of this.cesta){//si no, añade cada producto al mensaje que va a imprimir
                lista+="ID:"+cadaArticulo.id+"\n"
            }
            return(lista)
        }
    }
    pagar(){////////////////////////////////////////////////////////////////////////////
        let numSobremesas=0
        let numPantallas=0
        let total=0
        if(this.cesta.length<=0){//mismo qu eantes
            console.log("La cesta está vacía")
            return
        }
        for(let cadaArticulo of this.cesta){//se mira la cantidad de sobremesas y pantallas de la cesta
            if(cadaArticulo.tipo=="sobremesa"){
                numSobremesas++
            }else if(cadaArticulo.tipo=="pantalla"){
                numPantallas++
            }
        }
        //console.log("pantallas:"+numPantallas+" sobremesas:"+numSobremesas)
        if(numPantallas==numSobremesas){//sigue el pago si hay el mismo número de sobremesas y pantallas
            for(let cadaArticulo of this.cesta){//se calcula el precio final aplicando los descuentos
                total+=cadaArticulo.precio-((cadaArticulo.descuento/100)*cadaArticulo.precio)
                let posicion=this.listaArticulos.indexOf(cadaArticulo)//guarda la posición del artículo
                this.listaArticulos.splice(posicion,1)//para luego eliminarla en la lista original
            }
            this.cesta=[]//la cesta se vacía
            console.log("Total a pagar:"+total)//muestra el precio final
            fs.writeFileSync("./articulos.json", JSON.stringify(this.listaArticulos))//pasar los datos al json                
            MenuPrincipal()
        }else{//En caso contrario  no realiza el pago y dá una breve explicación
            console.log("Por cada pantalla en la cesta tiene qeu haber una sobremesa y viceversa\n"+
                    "No se pudo completar tu pedido\n")
        }
    }
    suerte(){
        let portatilEncontrado=false
        let total=0
        let artMasBarato={}
        let vuelta=0
        //la compra más barata es la de un portatil solo
        for(let cadaArticulo of this.listaArticulos){
            if(cadaArticulo.tipo=="portátil"){
                if(portatilEncontrado==false){//significa que este es el primer portátil
                    artMasBarato=cadaArticulo
                }else if(artMasBarato.precio>cadaArticulo.precio){//compara el precio con el más barato
                    artMasBarato=cadaArticulo
                }
                portatilEncontrado=true
            }
        }
        if(portatilEncontrado==true){//si hay portátiles
            this.listaArticulos.splice(this.listaArticulos.indexOf(artMasBarato),1)//se elimina de la lista original
            console.log("Tu pedido cuesta: "+(artMasBarato.precio-((artMasBarato.descuento/100)*artMasBarato.precio))+"€")
            this.cesta=[]//vacía la cesta
            fs.writeFileSync("./articulos.json", JSON.stringify(this.listaArticulos))//pasar los datos al json                
            MenuPrincipal()
            
        }
        else{//si no, hay que seleccionar una pantalla y una sobremesa
            let sobremesaBarata={}
            let pantallaBarata={}
            let sobreEncontrada=false
            let pantallaEncontrada=false
            for(let cadaArticulo of this.listaArticulos){//hace lo mismo que el portátil
                if(cadaArticulo.tipo=="sobremesa"){
                    if(sobreEncontrada==false){//primer sobremensa
                        sobremesaBarata=cadaArticulo
                    }else if(sobremesaBarata.precio>cadaArticulo.precio){
                        sobremesaBarata=cadaArticulo
                    }
                    sobreEncontrada=true
                }
                else if(cadaArticulo.tipo=="pantalla"){
                    if(pantallaEncontrada==false){//primer sobremensa
                        pantallaBarata=cadaArticulo
                    }else if(pantallaBarata.precio>cadaArticulo.precio){
                        pantallaBarata=cadaArticulo
                    }
                    pantallaEncontrada=true
                }
            }
            if(sobreEncontrada==true && pantallaEncontrada==true){//si hay existencias de ambas
                this.listaArticulos.splice(this.listaArticulos.indexOf(sobremesaBarata),1)
                this.listaArticulos.splice(this.listaArticulos.indexOf(pantallaBarata),1)
                total=(sobremesaBarata.precio-((sobremesaBarata.descuento/100)*sobremesaBarata.precio))+(pantallaBarata.precio-((pantallaBarata.descuento/100)*pantallaBarata.precio))
                console.log("Tu pedido cuesta: "+total+"€")
                this.cesta=[]
                fs.writeFileSync("./articulos.json", JSON.stringify(this.listaArticulos))//pasar los datos al json                
                MenuPrincipal()
            
            }else{//si no, no puede hacer el trámite
                console.log("No hay suficientes artículos para ejecutar la función")
            }
        }
    }
}
let gestor=new GestionAriculos()
//MENÚ PRINCIPAL****************************************************************************************
async function MenuPrincipal() {
    let programa=true
    try{
        while(programa==true){
            const respuesta=await rl.question("Menú principal*******************\n"+
                "1.Nuevo pedido\n"+
                "2.Mostrar artículos con descuento\n"+
                "3.Salir\n"
            )
            try {
                if(isNaN(respuesta)){
                    throw new Error("No es un valor compatible");
                }
                else{
                    let opcion=parseInt(respuesta);
                    switch (opcion) {
                        case 1:
                            SubmenuPedidos()
                            break;
                        case 2:
                            console.log(gestor.articulosDescuento())
                            break; 
                        case 3:
                            programa=false;
                            break;
                        default:
                            break;
                    }
                }
            } catch (error) {
                console.error(error.message)
            }
        }
    }
    catch(error){
        console.error(error.message)
    }finally{
        rl.close()
    }
}

MenuPrincipal()

//Submenú pedidos
//MENÚ PRINCIPAL****************************************************************************************
async function SubmenuPedidos() {
    let programa=true
    try{
        while(programa==true){
            const respuesta=await rl.question("Menú principal*******************\n"+
                "1.Listar portátiles\n"+
                "2.Listar sobremesas\n"+
                "3.Listar Pantallas\n"+
                "4.Seleccioner producto\n"+
                "5.Ver pedido en curso\n"+
                "6.Pagar\n"+
                "7.Voy a tener suerte\n"+
                "8.Cancelar pedido y volver al menú principal\n"
            )
            try {
                if(isNaN(respuesta)){
                    throw new Error("No es un valor compatible");
                }
                else{
                    let opcion=parseInt(respuesta);
                    switch (opcion) {
                        case 1:
                            console.log(gestor.listaPortatiles())
                            break;
                        case 2:
                            console.log(gestor.listaSobremesas())
                            break; 
                        case 3:
                            console.log(gestor.listaPantallas())
                            break;
                        case 4:
                            gestor.seleccionarProducto()
                            break;
                        case 5:
                            console.log(gestor.muestraCesta())
                            break;
                        case 6:
                            gestor.pagar()
                            break;
                        case 7:
                            gestor.suerte()
                            break; 
                        case 8:
                            console.log("Se ha cancelado el pedido")
                            programa=false
                            gestor.cesta=[]//vaciar la cesta porque canceló el pedido
                            MenuPrincipal()
                            break;   
                        default:
                            break;
                    }
                }
            } catch (error) {
                console.error(error.message)
            }
        }
    }
    catch(error){
        console.error(error.message)
    }
}
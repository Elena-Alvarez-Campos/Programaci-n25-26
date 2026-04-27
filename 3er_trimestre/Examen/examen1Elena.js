//readline
const readline=require('node:readline/promises')
const {stdin:input, stdout:output}=require('node:process')
const {error}=require('node:console');
//clase nueva
class Cine {
    //productos: json
    constructor(productos,precioEntrada) {
        const fs=require("fs");
        let productosString = fs.readFileSync(productos);
        let productosJSON = JSON.parse(productosString);
        this.productos=productosJSON
        this.precioEntrada=this.precioEntrada;
    }
    nuevoProducto(nombreNuevo,tipoNuevo,precioNuevo,descuentoNuevo){
        let nuevo={
            "nombre":nombreNuevo,
            "tipo":tipoNuevo,
            "precio":precioNuevo,
            "descuento":descuentoNuevo
        }
        this.productos.push(nuevo)
        console.log("Artículo añadido")
    }
    calcularPrecio(cesta){//NO FUNCIONAN LOS COMBOS NI LOS DESCUENTOS
        let total=0
        let bebidas=0
        let comestibles=0
        /*
        for(let cada_articulo of cesta){
            console.log(cada_articulo)
            for(let cada_producto of this.productos){
                if(cada_articulo==cada_producto.nombre){
                    if(cada_producto.tipo=="bebida"){bebidas++}
                    if(cada_producto.tipo=="comestible"){comestibles++}
                }
                break;
            }
        }
        let buscador=true
        let combos=0//Precios de todos los combos
        console.log("Bebidas:"+bebidas)
        while (buscador==true) {
            let precioCombo=0
            if(bebidas>0 && comestibles>0){//Hay descuento
                bebidas-1
                comestibles-1
                let posicion=-1
                let tipoN=""
                let oferta=0
                for(let i=0;i<2;i++){
                    if(i==0){tipoN="bebida"}
                    else if(i==1){tipoN="comestible"}
                    for(let cada_producto of this.productos){
                        if(posicion>=0){//De esta forma se saldrá del bucle al encontrar el primer plato que cuente con el tipò
                            break
                        }
                        for(let cada_articulo of cesta){//si no, lño busca en la lista de consumiciones
                            if(cada_articulo==cada_producto.nombre && cada_producto.tipo==tipoN){
                                posicion=this.productos.indexOf(cada_articulo)
                                precioCombo+=cada_producto.precio
                                break
                            }
                        }
                    }
                    cesta.splice(posicion,1)
                }
                precioCombo=precioCombo-precioCombo*0.2
                total+=precioCombo
            }else{
                buscador=false;
            }
        }*/
        for(let cada_articulo of cesta){//Si quedan ma´s artículos, se cobrarán por separado
            for(let cada_producto of this.productos){
                if(cada_articulo==cada_producto.nombre){
                    if(cada_producto.descuento==0){
                        total+=cada_producto.precio
                    }else{
                        total+=cada_producto.precio-cada_producto.precio*(cada_producto.descuento*100)
                    }
                }
            }
        }
        cesta=[]//vacía las consumiciones
        console.log("Precio total a pagar: "+total+"€")

        return total
    }
    getProductos(tipoPeticion){
        let lista="";
        let posicionMenu=1;
        let tipoEncontrado=false
        let prodEncontrado=false
        if(tipoPeticion==null){
            for(let cada_producto of productos){
                lista+=posicionMenu+"."+cada_producto.nombre+"\n"
                posicionMenu++
            }
        }
        else{
            for(let cada_producto of this.productos){
                if(cada_producto.tipo==tipoPeticion){
                    tipoEncontrado=true
                    lista+=posicionMenu+"."+cada_producto.nombre+"\n"
                    posicionMenu++
                }
            }
            if(tipoEncontrado==false){//Significa que no es un tipo, si no el nombre de un productio
                for(let cada_producto of this.productos){
                    if(cada_producto.nombre==tipoPeticion){
                        return(true)
                    }
                }
                return(false)
            }else{
                console.log(lista)//solo mostrará la lista si es un artículo
            }
        }
    }
}
let cine1=new Cine('./productos.json',10)



//Menú principal*************************************************************************
async function MenuPrincipal() {
    let programa=true;
    while (programa==true) {
        const rl=readline.createInterface({input,output});
        const respuesta=await rl.question("Menú Principal********************+\n"+
            "1.Añadir un nuevo producto\n"+
            "2.Comprar\n"+
            "3.Salir\n"
        )
        try {
            if(isNaN(respuesta)){
                throw new Error("La opción no es compatible")
            }
            else{
                let opcion=parseInt(respuesta)
                switch (opcion) {
                    case 1:
                        rl.close()
                        let nombre=""
                        let tipo="";
                        let precio=0;
                        let descuento=0
                        for(let i=0;i<4;i++){
                            if(i==0){
                                const rl=readline.createInterface({input,output});
                                let elemento=await rl.question("Escribe el nombre del artículo\n")
                                nombre=elemento
                                rl.close()
                            }
                            if(i==1){
                                const rl=readline.createInterface({input,output});
                                let elemento=await rl.question("Escribe el tipo de artículo\n")
                                tipo=elemento
                                rl.close()
                            }
                            if(i==2){
                                const rl=readline.createInterface({input,output});
                                let elemento=await rl.question("Escribe el precio del artículo\n")
                                let num=parseFloat(elemento)
                                precio=num
                                rl.close()
                            }
                            if(i==3){
                                const rl=readline.createInterface({input,output});
                                let elemento=await rl.question("Escribe el descuento si lo hay\n")
                                let num=parseInt(elemento)
                                num=elemento
                                rl.close()
                            }
                        }
                        cine1.nuevoProducto(nombre,tipo,precio,descuento)
                        break;
                    case 2:
                        rl.close()
                        programa=false;
                        MenuSecundario()
                        break;
                    case 3:
                        rl.close()
                        programa=false
                        break;
                    default:
                        rl.close()
                        console.log("opción incompatible")
                    break;
                }
            }
            

        } catch (error) {
            rl.close()
            console.error(error.message)
        }
    }
}
//Menú secundario*******************************************************************************
async function MenuSecundario(){
    let prog=true;
    while (prog==true) {
        const rl=readline.createInterface({input,output});
        const respuesta=await rl.question("Menú tienda********************+\n"+
            "1.Listar bebidas\n"+
            "2.Listar comestibles\n"+
            "3.Listar películas\n"+
            "4.Seleccionar producto\n"+
            "5.Pagar\n"+
            "6.Volver al menú principal\n"
        )
        try {
            let opcion=parseInt(respuesta)
            if(isNaN(respuesta)){
                throw new Error("La opción no es compatible")
            }
            else{
                switch (opcion) {
                    case 1:
                        console.log("Lista de bebidas----------------")
                        cine1.getProductos("bebida")
                        
                        break;
                    case 2:
                        
                        console.log("Lista de comestibles----------------")
                        cine1.getProductos("comestible")
                        //rl.close();
                        break;
                    case 3:
                        console.log("Lista de películas----------------")
                        cine1.getProductos("película")
                        console.log(cestaUsuario)
                        //rl.close();
                        break;
                    case 4://Seleccionar un producto
                        
                        //const rl=readline.createInterface({input,output});
                        let respuesta=await rl.question("¿Que producto quieres comprar?\n")
                        let prodComprado=cine1.getProductos(respuesta)
                        if(prodComprado==true){
                            cestaUsuario.push(respuesta)
                            console.log("Se ha añadido el artículo en la cesta")
                        }
                        else{
                            console.log("No se ha encontrado el artículo")
                            }
                        break;
                    case 5:
                        cine1.calcularPrecio(cestaUsuario)
                        break;
                    case 6:
                        prog=false;
                        MenuPrincipal()
                        break;
                    default:
                        console.log("opción incompatible")
                    break;
                }
            }
        } catch (error) {
            rl.close()
            console.error(error.message)
        }finally{
            rl.close()
        }
    }
}
let cestaUsuario=[]
MenuPrincipal()
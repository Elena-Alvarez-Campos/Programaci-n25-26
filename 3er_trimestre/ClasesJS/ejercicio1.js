class piedra{
    constructor(masa,volumen){
        this.masa=masa;
        this.volumen=volumen;
    }
    //método
    calcula_densidad(){
        return this.masa/this.volumen;
    }
}
let oro=new piedra(194,10);
//console.log("El oro tiene de densidad: "+oro.calcula_densidad());

//Ejercicio "Simulador de entrenamiento"
class corredor{
    constructor(distancia,tiempo){
        this.distancia=distancia;
        this.tiempo=tiempo;
    }
    /*velocidad(){
        return this.distancia/this.tiempo;
    }*/
    //setter
    set distancia(valor){
        if(valor>0){
            this._distancia=valor;//que mno se confunda el valor con el método
            //Al contenidop se le añade un guión bajo, al set no
        }else{
            console.log("Error: la distancia tiene que ser mayor que 0");
        }
    }
    set tiempo(valor){
        if(valor>0){
            this._tiempo=valor;
        }else{
            console.log("Error: tiempo tiene que ser mayor que 0")
        }
    }
    //getter
    get velocidadcorredor(){
        return this._distancia/this.tiempo;
    }
}
let maratonista=new corredor(1000,200);
//console.log("Velocidad del corredor: "+maratonista.velocidad()+"m/s")
//console.log("Velocidad del corredor: "+maratonista.velocidadcorredor+"m/s")
//maratonista.tiempo=-10;
//Ejercicio 2
function cuenta(titular,saldo){
    this.titular=titular;
    this.saldo=saldo;
    this.ingresar=function(valor){
        if(valor>0){
            this.saldo+=valor;
        }else{
            console.log("Cantidad incompatible")
        }
    }
    this.retirar=function(valor){
        if(valor<=this.saldo){
            this.saldo-=valor;
        }else{
            console.log("No hay suficiente dinero para retirar esa cantidad")
        }
    }
}
let cue1=new cuenta("Pepe",0)/*
console.log(cue1.saldo)
cue1.ingresar(1000);
console.log(cue1.saldo)
cue1.retirar(100);
console.log(cue1.saldo)*/

class runner{
    //declaración de los elementos de forma privada
    #distancia;
    #tiempo;

    constructor(distancia,tiempo){
        this.distancia=distancia;
        this.tiempo=tiempo;
    }
    //setters
    set distancia(valor){
        if(valor>0){
            this.#distancia=valor;
        }else{
            console.log("Error: La distancia tiene que ser mayor que 0")
        }
    }
    set tiempo(valor){
        if(valor>0){
            this.#tiempo=valor;
        }else{
            console("Error: El tiempo tiene que ser mayor que 0")
        }
    }
    //getters
    get velocidad(){
        return this.#distancia/this.#tiempo;
    }
}
const corredora= new runner(1000,200);
/*console.log("Velocidad: "+corredora.velocidad+"m/s");
console.log(corredora.distancia)//Es undefined porque necesita acceder por los métodos
*/
//EJERCICIO 3*******************************************
console.log("Ejercicio 3")
class ficha{
    constructor(nombre){
        this.nombre=nombre;
        this.sesiones=[];
        this.numsesiones=0;
    }
    set anotar(km){
        if(km>0){  
            this.numsesiones++;
            this.sesiones.push(km);
        }else{
            console.log("Tiene que recorrer mínimo 1km para que la sesión cuente")
        }
    }
    get media(){
        let total=0
        for(let cada_sesion of this.sesiones){
            total+=cada_sesion;
        }
        return total/this.numsesiones;
    }
}
let per1=new ficha("Ana")
per1.anotar=2;
per1.anotar=4;
per1.anotar=3;
console.log("Km en sesiones: "+per1.sesiones);
console.log("Número de sesiones: "+per1.numsesiones)
console.log("Media: "+per1.media)

//EJERCICIO 4*************************************************
class bus{
    constructor(capacidad,conductor){
        this.capacidad=capacidad;
        this.pasajeros=0;
        this.conductor=conductor;
    }
    set subir(personas){
        let tope=this.capacidad-this.pasajeros;
        //this.pasajeros+personas<=this.capacidad
        //ej: 25dentro 40limite=> tope:15
        if(this.pasajeros>=tope){
            console.log("Capacidad máxima, no se puede subir nadie")
        }else{
            if((this.pasajeros+personas)<=this.capacidad){
                this.pasajeros+=personas
                console.log("Han entrado "+personas+" personas")
            }
            else{
                //ej: 35per tope:15 => entra el tope
                //this.pasajeros=this.capacidad
                this.pasajeros+=tope
                console.log("Han entrado "+tope+" personas")
                
            }
        }
    }
    bajar(personas){
        if(this.pasajeros<=this.pasajeros){
            this.pasajeros-=personas;
            console.log("Han bajado "+personas+" personas")
        }else{
            //Esta forma es mucho más corta y cómoda
            this.pasajeros=0
        }
    }
}
class Conductor{
    constructor(nombre, licencia){
        this.nombre=nombre;
        this.licencia=licencia;
    }
}
let consductor1=new Conductor("Ana",123546)
let bus1=new bus (50,consductor1)
console.log("El conductor es: "+bus1.conductor.nombre)
bus1.subir=20;
bus1.subir=50;
bus1.bajar(20)
console.log("Pasajeros al bajar: "+bus1.pasajeros)

//EJERCICIO 5*********************************************
console.log("Ejercicio 5*******************")
class Articulo{
    constructor(nombre, proveedor, precio){
        this.nombre=nombre;
        this.proveedor=proveedor;
        this.precio=precio;
    }
    telefono(){
        let datos_prev={"nombre":this.proveedor.nombre,"teléfono":this.proveedor.telefono};
        return datos_prev
    }

}
class Proveedor{
    constructor(nombre,email,telefono){
        this.nombre=nombre;
        this.email=email;
        this.telefono=telefono;
    }
}
let prov1=new Proveedor("TecnoShop","tcn@tecno.com",1234567);
let art1=new Articulo("monitor",prov1,200)
console.log(art1.telefono())

//EJERCICIO 6************************************************
console.log("Ejercicio 6****************")
class Alumno{
    constructor(nombre, matricula){
        this.nombre=nombre;
        this.matricula=matricula;
        this.calificacion=0;
    }
    calificar(nota){
        this.calificacion=nota
    }
}
//listaAlumnos[0]=new Alumno("Juan",124)
//listaAlumnos[0].calificar(5)
let alumno1=new Alumno("Juan",124);
let alumno2=new Alumno("Ana",365)
let alumno3=new Alumno("Pepe",578);
let alumno4=new Alumno("Antía",456)
alumno1.calificar(5)
alumno2.calificar(4)
alumno3.calificar(8)
alumno4.calificar(10)
let listaAlumnos=[alumno1,alumno2,alumno3,alumno4]
for(let cada_alumno of listaAlumnos){
    console.log(cada_alumno.nombre+": "+cada_alumno.calificacion)
}
//EJERCICIO 7**********************************************
console.log("Ejercicio 7****************")

class Cliente{
    //añadir lista_clientes
    //this.cliente=listaClientes[idCliente]
    constructor(nombre, email, telefono){
        this.nombre=nombre;
        this.email=email;
        this.telefono=telefono;
    }
}
class Factura{
    constructor(total){
        //Otra forma sería hacer que pida el id y qeu se lo dea a parte en el constructor
        this.idCliente=0
        this.total=total
        this.estado="pendiente"
    }
    cobrar(){
        this.estado="pagada"
    }
    imprimir(){
        console.log("La factura de "+this.total+"€ está "+this.estado)
    }
}
let posicion=0
let cliente1=new Cliente("Juan","juan@mail.com",3456718)
let cliente2=new Cliente("Marisa","marisa@mail.com",555556123)
let cliente3=new Cliente("Luis","luis@mail.com",2354322)
let listaClientes=[cliente1,cliente2,cliente3]
let listaFacturas=new Array(listaClientes.length)
//factura1= new Factura(1,300,clientes)
listaFacturas[0]=new Factura(300)
listaFacturas[1]=new Factura(200)
listaFacturas[2]=new Factura(100)
for(let cada_factura of listaFacturas){
    listaFacturas[posicion].idCliente=posicion
    posicion++
}
listaFacturas[0].imprimir()
listaFacturas[0].cobrar()
listaFacturas[0].imprimir()
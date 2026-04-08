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
    constructor(capacidad,pasajeros,conductor){
        this.capacidad=capacidad;
        this.pasajeros=pasajeros;
        this.conductor=conductor;
    }
    set subir(personas){
        let tope=this.capacidad-this.pasajeros;
        //ej: 25dentro 40limite=> tope:15
        if(personas<=tope){
            if((this.pasajeros+personas)<=capacidad){
                this.pasajeros+=personas
                console.log("Han entrado "+personas+" personas")
            }
            else{
                //ej: 35per tope:15 => entra el tope
                this.pasajeros+=tope
                console.log("Han entrado "+tope+" personas")

            suben=this.capacidad+parsonas
            }
        }else{
            console.log("Capacidad máxima, no se puede subir nadie")
        }
    }
}
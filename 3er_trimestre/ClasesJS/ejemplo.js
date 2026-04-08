//Se declaraban las clases como funciones (manera antigua)
//Constructor
function objetoClase(color, nombre){
    this.color=color;
    this.nombre=nombre;
}

let objeto=new objetoClase("azul","ana");
console.log(objeto.color); 
console.log(objeto.nombre);
//NOMENCLATURA ACTUALIZADA
//No se crean los atributos como java (es decir, fuera del constructor)
//Clase nombrada
//Hay que hacer referencia a la clase directamante
class Rectangulo{
    constructor(alto,ancho,nombre){
        this.alto=alto;
        this.ancho=ancho;
        this.nombre=nombre;
    }
    //Setters
    set nuevonombre(nuevo){
        if(nuevo.length>0){
            this.nombre=this.nombre;
        }else{
            console.log("El nombre no puede estar vacío");
        }
    }

    //getter
    //Son menos necesarios porque ya se pueden acceder a los datos sin ellos
    get area(){
        return this.calcula_area();
    }
    get ObtenNombre(){
        return this.nombre.toUpperCase();
    }
    //método
    calcula_area(){
        return this.alto*this.ancho;
    }

}

const cuadrado=new Rectangulo(10,10,"qubby");
/*
console.log(cuadrado.area);
console.log(cuadrado.ObtenNombre);
console.log(cuadrado.nombre);
console.log(cuadrado.alto);
console.log(cuadrado.ancho);*/
//ya hace referencia al setter
cuadrado.nombre="cubo";//Hace referencia directamente al setter
//console.log(cuadrado.nombre)
//Clases anónimas
//Hay que referenciar al objeto con su atributo
let rectangulo=class{
    constructor(alto,ancho){
        this.alto=alto;
        this.ancho=ancho;
    }
}

//Hacer los atributos privados, oblibando a usar setters y getters

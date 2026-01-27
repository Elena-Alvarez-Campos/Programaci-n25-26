
/*
function cuadrado (num){
    return num*num;
}

let respuesta;
respuesta= cuadrado(5);
console.log(respuesta);
*/

//1. Crea una función llamada numeroMayor() que toma tres números como entrada y
//retornar el numero mayor de ellos, si son iguales devolver un String «son iguales».

let resultado //determina la variable con la que vamos a llamar el resultado
function numeroMayor(num1,num2,num3){
    if (num1==num2&&num1==num3){//si todos los números son iguales
        resultado='son iguales'
    }
    else if(num1>num2){//si el primero es mayor que el segundo se compara con el tercero
        num1>num3 ? resultado=num1+' es el número más grande' : resultado=num3+' es el número más grande'
    }
    else{//si el segundo es mayor que el primero se compara con el tercero
        num2>num3 ? resultado=num2+' es el número más grande' : resultado=num3+' es el número más grande'
    }
    return resultado
}
final= numeroMayor(2,15,15)//escribe el resultado
console.log(final);

/*2. Escribir el código de una función a la que se pasa como parámetro un
número entero y devuelve como resultado una cadena de texto que indica si el
número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

let result2
function ParImpar(num4){
    num4%2==0 ? result2='par' : result2='impar';
    return result2
}
final2= ParImpar(2);
console.log('El número es '+final2);

/*3.Crea una función que reciba un número decimal {number} y lo devuelva
(return) en binario {number | string} sin utilizar funciones propias del lenguaje
que lo hagan directamente.*/

let binario=''
function decimal2binario(num5){
    while(num5>=2){//mientas el número sea >=2 dividiré e iré sacando el resto
        binario=parseInt(num5%2)+binario//calcular el resto y añadirlo al string por el principio(así lor resultados van de atras a delante)
        num5=num5/2
    }
    if (num5){
        binario=parseInt(num5)+''+binario
    }
    return binario
}
let decimal=250
console.log('El número decimal '+ decimal+' en binario es '+decimal2binario(decimal));


/*4. Crea una función que reciba 4 parámetros:
- días {number}
- horas {number}
- minutos {number}
- segundos {number}
Esta función devolverá (return {number}) los milisegundos equivalentes a todo
ese tiempo.*/

function tiempo(dias,horas,min,seg){
   let dias_seg=dias*86400
   let horas_seg=horas*3600
   let min_seg=min*60
   seg_total=dias_seg+horas_seg+min_seg+seg
   let milisegundos=seg_total*1000
    return milisegundos
}
console.log ('Los milisegundos totales de todo este tiempo es igual a '+tiempo(2,10,30,10)+' milisegundos')
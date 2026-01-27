
//1.Completar las condiciones de los if del siguiente script para que los
//mensajes de los console.log se muestren siempre de forma correcta:
let numero1 = 5;
let numero2 = 8;
if(numero1<=numero2) {
console.log('numero1 no es mayor que numero2');
}
if(numero2>=0) {
console.log('numero2 es positivo');
}
if(numero1<0 || numero1!=0) {
console.log('numero1 es negativo o distinto de cero');
}
if(numero1<numero2) {
console.log('Incrementar en 1 unidad el valor de numero1 no lo hacemayor o igual que numero2');
}

/*2.El cálculo de la letra del DNI es un proceso matemático sencillo que se
basa en obtener el resto de la división entera del número de 
DNI y el número 23. A partir del resto de la división, se obtiene la letra
seleccionándola dentro de un array de letras.*/

let letras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

let numDNI=39497513
let letraDNI='G'//se puede cmbiar todo a myúsculas con UpperCase

if(numDNI<=0 || numDNI>=99999999){
    console.log("El número no es válido")
}
else{
    let numLetra=numDNI%23//cálculo
    console.log(letras[numLetra])//Selecciona la letra
    console.log(letraDNI===letras[numLetra] ? "Has puesto la letra bien" :"Has puesto la letra mal")
}

//3.Devuelve el valor de lo que cuesta el Kg en función al valor que tenga la variable fruta.

/*a. Naranjas  0.59 €/kg
b. Manzanas  0.32 €/kg
c. Plátanos  0.48€/kg
d. Cerezas  3.00€/kg
e. Mangos y papayas  2.79€/kg
f. Cualquier otra fruta muestra un mensaje de que esa fruta no está
disponible.*/

const valor='papayas'
switch(valor){
    case 'naranjas':
        console.log("El kilogramo de naranjas cuesta 0.59€")
        break;
    case 'manzanas':
        console.log("El kilogramo de manzanas cuesta 0.32€")
        break
    case 'platanos':
        console.log("El kilogramo de plátanos cuesta 0.48€")
        break
    case 'cerezas':
        console.log("El kilogramo de cerezas cuesta 3.00€")
        break
    case 'mangos':
        console.log("El kilogramo de mangos cuesta 2.79€")
        break
    case 'papayas':
        console.log("El kilogramo de papayas cuesta 2.79€")
        break
    default:
        console.log("Esa fruta no está disponiible")
}

//4.Introduce una edad y muestra el siguiente mensaje en función al número introducido
/*
a. 0-12 Niño.
b. 13-26 Joven.
c. 27-60 Adulto.
d. &gt;60 Jubilado.
e. También debes comprobar que el número dado no sea menor
que 0.
*/

let edad=8

//Método if...else
if(edad<0){
    console.log("La edad debe ser mayor que 0")
}
else if(edad>=0 && edad<=12){
    console.log("Niño")
} else if(edad>=13 && edad<=26){
    console.log("Joven")
    } else if(edad>=27 && edad<=60){
        console.log("Adulto")
    } else if(edad>60){
        console.log("Jubilado")
    } else{
        console.log("Tienes que introducir un número")
    }

//Método switch

let persona
/*
if(edad<0){
    persona='0'
}
else if(edad>=0 && edad<=12){
    persona='1'
} else if(edad>=13 && edad<=26){
    persona='2'
    } else if(edad>=27 && edad<=60){
        persona='3'
    }  if(edad>60){
        persona='4'
    } else{
        persona='5'
    }
//Escritura con switch
switch(persona){
    case '1':
        console.log("Niño")
        break;
    case '2':
        console.log("Joven")
        break
    case '3':
        console.log("Adulto")
        break
    case '0':
        console.log('Es imposible que sea menor de 0 años')
        break
    case'5':
        console.log('Introduce un número')
    default:
        console.log("Jubilado")
}
*/
switch(true){
    case edad>0 && edad<=12:
        console.log("Niño")
        break;
    case edad>12 && edad<=26:
        console.log("Joven")
        break
    case edad>26 && edad<=60:
        console.log("Adulto")
        break
    case edad>60:
        console.log('jubilado')
        break
    case edad<0:
        console.log('La edad tiene que ser mayoer que 0')
    default:
        console.log("Introduce un número")
}
edad
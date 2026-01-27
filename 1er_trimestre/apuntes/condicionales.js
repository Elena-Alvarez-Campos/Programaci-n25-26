
/*let edad=20

if(edad>18){
    console.log("Es mayor de edad")
}

else{
    console.log("es menor de edad")
}
*/
/*
let nota=7
let calificacion;

if(nota<5){
    calificacion="insuficiente"
}

else if(nota<7){
    calificacion="suficiente"
    }else if(nota<9){
     calificacion="notable"
    }else{
        calificacion="sobresaliente"
        }

console.log("Has obtenido un "+ calificacion)
*/

//si tengo más de 18 años y tengo un coche devuelvo el mensaje "ENhorabuena puedes conducir" y si no comruebo
//si no tengo 18, le digo "Aun te faltan unos años" y si lo que no cumple es que no tiene coche devuevuelvo
//"ahorra para comprarte un coche" y si no cumple ninguna devuelvo, "SIGUE SOÑANDO"

let edad=19
let coche=false
let final

if(edad>=18 && coche===true){ //poner coche
    final="Enhorabuena, puedes cunducir"
}
else if (edad<18 && !coche){ //poner !coche
    final="Aun te faltan unos años"
    } else if(edad>=18 && !coche){
        final="Ahorra a comrarte un cohe"
        } else{
            final="Sigue soñando"
        }
console.log(final)

//Operador terminario
console.log(edad>=18 ? "Puedes votar" :"No puedes votar")

//Switch

const valor='2'
switch(valor){
    case '1':
        console.log("Estás en la opción 1")
        break;
    case '2':
        console.log("Estás en la opción 2")
        break
    case '3':
        console.log("Estás en la opción 3")
        break
    default:
        console.log("no has marcado ninguna opción válida")
}


/*Ejercicio Repaso 4
Escribe una función que reciba dos palabras (string) y retorne verdadero o falso
(boolean) según sean o no bifrontes.
* El bifronte es una palabra o frase que permite un sentido leída de izquierda a derecha
y otro distinto leída de derecha a izquierda   (por ejemplo: rama, arroz, raro...)
* NO hace falta comprobar que ambas palabras existan.*/

function bifronte (palabra1,palabra2){
    let letras1=[]
    let letras2=[]
    for(let cada_letra1 of palabra1){
        letras1.push(cada_letra1)
    }
    for(let cada_letra2 of palabra2){
        letras2.push(cada_letra2)        
    }

    let posicion2=letras2.length-1
    let num_iguales=0
    let final
    for( i=0; i<letras1.length; i++){
        
        if(letras1[i]==letras2[posicion2]){
            num_iguales++
        }
        posicion2--
        num_iguales==letras1.length ? final=true : final=false
    }
return final
}

console.log(bifronte('amar','rama'))
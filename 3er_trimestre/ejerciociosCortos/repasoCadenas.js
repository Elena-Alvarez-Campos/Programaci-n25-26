const cadena='aaadfdddddfffcccccccccclaaaaajjaaaa';
/*Letra que más veces aparece (en este caso la “a” con 12).*/
console.log('Ejercicio 1')
function letraNumerosa(cadena) {
    let mayorLetra=cadena[0]
    let letras={}
    for(let cadaLetra of cadena){
        let encontrado=false
        for(let letrasArray in letras){
            if(cadaLetra==letrasArray){
                encontrado=true
                letras[cadaLetra]=letras[cadaLetra]+1
                break
            }
        }//si ninguna coincide
        if(encontrado==false){
            letras[cadaLetra]=1
        }
    }
    for(let cadaLetra in letras){
        if(letras[cadaLetra]>letras[mayorLetra]){
            mayorLetra=cadaLetra
        }
    }
    return(mayorLetra)
}
console.log('La letra que aparece más veces es: '+letraNumerosa(cadena))
/*Grupo de letras iguales consecutivas más largo (en este caso “cccccccccc”)*/
console.log('Ejercico 2')
function cadenaLarga(cadena){
    let mayorCadena='';
    let cadenaNueva=''
    let listaCAdenas=[]
    let posicion=0
    for(let cadaLetra of cadena){
        if(cadena.indexOf(cadaLetra)==0 || cadena[posicion-1]==cadaLetra){
            cadenaNueva+=cadaLetra;
        }
        else{
            listaCAdenas.push(cadenaNueva)
            cadenaNueva=cadaLetra
        }
        posicion++
    }
    for(let cadaCadena of listaCAdenas){
        if(cadaCadena.length>mayorCadena.length){
            mayorCadena=cadaCadena
        }
    }
    console.log(listaCAdenas)
    return(mayorCadena)
}


console.log('La cadena más larga es: '+cadenaLarga(cadena))
//Apuntes 
/*
setInterval
let timerId = asetInterval
set timeout solo se ejecuta 1 vez
lleva:
-código que se tiene qwue ejecutar (funcion)
-retraso(delay en ms)
-argumentos
-ick (se repite cada vez que pasa ese tiempo)
*/
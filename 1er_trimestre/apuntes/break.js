
let lista=[2, 3, 15, 9, 12, 5, 42, 17, 21];
/* 
for(let cada_elemento of lista){
    if(cada_elemento<10){
        continue
    }
    console.log('probando número')
    if(cada_elemento>20){
        break //si el numero es mayor de 20, no hace el último console.log
    }
    console.log(cada_elemento)
}
*/

//10 primeros numeros, cuando llegue a 7 rompe el bucle.
//Que pase de los pares y escriba los impares

for(let i=0; i<=10; i++){
    if(i%2==0){
        continue;
    }

    if(i==7){
        console.log('Lo encontré')
        break
    }
    console.log(i)
}

//recorre la lista (imprimiendo cada num) hasta que encuentre un valor superior a vente
//usar while
/*
vueltas=0
while (lista[vueltas]<20){
    console.log(lista[vueltas])
    vueltas++
}*/
let i=0
while (lista[i]<20 && i<=lista.length-1){//Hay que ponerle esta última condición para que sepa donde parar
    console.log(lista[i])
    i++
}
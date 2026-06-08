
function quicksort(lista) {
    for(let i=0;i<lista.length;i++){//Ubicación del pivote
        let pivote=lista[i]//El pivote es el número en la posición marcada
        let listaMayores=[]//números mayores al pivote
        let listaMenores=[]//números menores al pivote
        for(let cada_num of lista){
            if(cada_num>pivote){//si el numero es mayor al pivote se mete en la lista de mayores
                listaMayores.push(cada_num)
            }else if(cada_num<pivote){//lo mismo pero para números menores
                listaMenores.push(cada_num)
            }else{
                continue//Si se encuentra a si mismo lo ignora
            }
        }
        lista=[]//se vacía la lista paraañadir los valores nuevos
        //primero los pequeños, luego el pivote y finalmente el mayor
        for(let cada_num of listaMenores){
            lista.push(cada_num)
        }
        lista.push(pivote)
        for(let cada_num of listaMayores){
            lista.push(cada_num)
        }
        //Una vez se tiene la lista con los valores se determina si se cambia la posición del pivote o no
        //Determina que el número actualmente situado en el pivote es el más pequeño de la misma 
        //(sin contar los que están situados antes de la ubi del pivote)
        //Ej: 3,1,5,7 (la posición es la del 3, pero el 1 es más pequeño que el 3)
        for(let a=i+1;a<lista.length;a++){
            if(lista[a]<pivote){
                //en caso de que haya uno más pequeño se sigue en la misa posición 
                i--
                break
            }
        }
    }
    return lista;
}
let lista=[7,3,10,9,2,4,8,5,1,6]
//console.log(quicksort([7,3,9,2,4,8,0,5,1,6]))
function comparar(a,b){
    return a-b
}
console.log(lista.sort(comparar))
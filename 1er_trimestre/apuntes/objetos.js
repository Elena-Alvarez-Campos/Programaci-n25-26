
let objeto={
    'propiedad1' : 'esto es un string',
    'propiedad2' : 31,
    'propiedad3' :[]
}

console.log(objeto.propiedad1);
console.log(objeto['propiedad1']);// se puede poner de las dos formas

//posición de la lista en la que voy a trabajar
let meses=['enero','febrero','marzo','noviembre','octubre','mayo'];
console.log(meses)
//vamos a eliminar noviembre
meses.splice(3,1)//elimina la posición 3 (la tres) y solo un elemento (el 1)
console.log(meses)

meses.splice(2,0,'abril')//añade un mes nuevo pero no quita ninguno
console.log(meses)

meses.splice(5,0,'junio','julio','agosto')//las incluye a todas en esa posición empezando por la primera
console.log(meses) 
lista.slice


    for (let cadanum of lista_num){
        if(cadanum>mayor){
            mayor=cadanum
            posicionMayor=posicion1
        }
        posicion1++
    }

let lista=[];
lista.push(3);//añadir final
console.log(lista);
lista.push(27)
console.log(lista);
lista.pop();//borrar últio
console.log(lista);
lista.unshift(33);//añadir inicio
console.log(lista);
console.log(lista.length);//posiciones

//método de filtrado que genera un nuevo array con los elementos que cumplen la condición
lista.push(44);
lista.push(3);
function esmayora(elemento){
    return elemento>=10;
}
let lista_resultado=lista.filter(esmayora);
console.log(lista_resultado)

let lista_resultado2=lista.filter(elemento => elemento>=10);
console.log(lista_resultado2)

//crea un nuevo array usando la función indicada a todos los elementos del array (método map)
function multiplicax4(elemento){
    return elemento*4
}
let lista_resultadomap=lista.map(multiplicax4)
console.log(lista_resultadomap)
let lista_resultadomap2=lista.map(elemento => elemento*4);
console.log(lista_resultadomap2)
//función acumulador: reduce (menos utilizada)
let lista_reduce=lista.reduce((a,b)=>a+b)
console.log(lista_reduce);

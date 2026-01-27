
//1.Cine Vialia
/*Vamos a simular las funciones de una aplicación que calcule el precio final a un cliente
de los cines del centro comercial Vialia.*/
let productos_cine=[{
    nombre:'entrada',
    precio:5.5
},
{
    nombre:'palomitas',
    precio:2.25
},{
    nombre:'refresco',
    precio:2.45
}
]

//clientes
let cliente1={
    nombre:'Roi',
    productos:['entrada','entrada','refresco']
}

//entradas
function entradas(elementoE){
    return elementoE=='entrada';
}
let lista_entradas=cliente1.productos.filter(entradas);
let valor_entradas=lista_entradas.length*5.5
console.log(valor_entradas)

//palomitas
function palomitas(elementoP){
    return elementoP=='palomitas';
}
let lista_palomitas=cliente1.productos.filter(palomitas);
let valor_palomitas=lista_palomitas.length*2.25
console.log(valor_palomitas)


//refrescos



console.log(cliente1.nombre+' ha comprado '+lista_entradas.length+' entradas, un total de '+valor_entradas+'€')

console.log(cliente1.nombre+' ha comprado '+lista_palomitas.length+' palomitas, un total de '+valor_palomitas+'€')


let str = "JavaScript";
let result = str.substring(4, 10);

console.log(result); // "Script"
console.log(str)
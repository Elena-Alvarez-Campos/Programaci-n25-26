/**
* Función que recibe una lista de productos y un cliente y devuelve
* el precio a pagar por el cliente
*
* @param {[{nombre: string, precio: number}]} productos

* @param {{nombre: string, productos: [string]}} cliente
* @returns {number}
*/


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

function CalculaPrecio(productos, cliente){
    let total=0
    for(let cada_producto of cliente.productos){
        console.log(cada_producto)
        for(let cada_producto_cine of productos){
            console.log(cada_producto_cine)//quitar
            console.log(cada_producto_cine.nombre)//quitar
            if(cada_producto==cada_producto_cine.nombre){
                total=total+cada_producto_cine.precio
                console.log(total)
            }
        }
    }
    return total
}
console.log(CalculaPrecio(productos_cine.cliente1))

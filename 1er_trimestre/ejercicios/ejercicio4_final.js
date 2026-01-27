
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
let clientes=[{
    nombre:'Roi',
    productos:['entrada','entrada','refresco']
},
{
    nombre: 'Pepe',
    productos: ['entrada','palomitas','refresco','refresco']
},
{
    nombre: 'Ana',
    productos: ['entrada','palomitas','palomitas']
},
{
    nombre: 'Rin',
    productos: ['entrada','entrada','palomitas','palomitas','refresco','refresco']
}
]
//entradas
function entradas(elementoE){
    return elementoE=='entrada';
}
//palomitas
function palomitas(elementoP){
    return elementoP=='palomitas';
}
//refrescos
function refresco(elementoR){
    return elementoR=='refresco';
}

let vuelta=0
let num_clientes=clientes.length
while(num_clientes>0){
    //entradas cliente 
    let lista_entradas1=clientes[vuelta].productos.filter(entradas);
    let valor_entradas1=lista_entradas1.length*productos_cine[0].precio

    //imprimirá el plural o singular de entradas y no imprimirá nada si no hay entradas
    let num_entradas1=''
    if(lista_entradas1.length==1){
        num_entradas1=lista_entradas1.length+' entrada'
    }else if(lista_entradas1.length==0){
        num_entradas1=''
    }else{
        num_entradas1=lista_entradas1.length+' entradas'
    }

    //palomitas
    let lista_palomitas1=clientes[vuelta].productos.filter(palomitas);
    let valor_palomitas1=lista_palomitas1.length*productos_cine[1].precio

    //para 'palomitas', al ser = en plural que en singular, se puede usar un operador termario porque solo hay que hacer una comprobación
    //con una única línea de código, si hay palomitas se escribirá y si no no
    let num_palomitas1=''
    lista_palomitas1.length==0 ? num_palomitas1='' : num_palomitas1=lista_palomitas1.length+' de palomitas'

    //refrescos cliente 
    let lista_refresco1=clientes[vuelta].productos.filter(refresco);
    let valor_refresco1=lista_refresco1.length*productos_cine[2].precio
    //igual que las entradas
    let num_refresco1=''
    if(lista_refresco1.length==1){
        num_refresco1=lista_refresco1.length+' refresco'
    }else if(lista_refresco1.length==0){
        num_refresco1=''
    }else{
        num_refresco1=lista_refresco1.length+' refrescos'
    }

    //suma todos los precios
    valor_total1=valor_entradas1+valor_palomitas1+valor_refresco1

    let num_final1
    if (num_entradas1===''){
        num_palomitas1==='' ? num_final1=num_refresco1 : num_final1=num_palomitas1+' y '+num_refresco1
    }else if(num_palomitas1===''){
        num_refresco1==='' ? num_final1=num_entradas1 : num_final1=num_entradas1+' y '+num_refresco1
    }   else if(num_refresco1===''){
         num_entradas1==='' ? num_final1=num_palomitas1 : num_final1=num_entradas1+' y '+num_palomitas1
        }else{
            num_final1=num_entradas1+', '+num_palomitas1+' y '+num_refresco1
        }
    //Lo que devuelve
    console.log(clientes[vuelta].nombre+' ha comprado '+num_final1+' por un total de '+valor_total1+'€')

    vuelta++
    num_clientes=num_clientes-1
}
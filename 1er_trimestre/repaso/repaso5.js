
/*Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y
retornar el área de un polígono. Esta función recibirá como parámetro un objeto
polígono con la siguiente estructura:
{
    tipo: &quot;triángulo&quot;,
    lados: [3, 5] // base y altura, el orden da igual
}
{
    tipo: &quot;cuadrado&quot;,
    lados: [2]
}
{
    tipo: &quot;rectángulo&quot;,
    lados: [4, 2]
}
 - La función recibirá por parámetro sólo UN polígono a la vez.
 - Los polígonos soportados serán &quot;triángulo&quot;, &quot;cuadrado&quot; y &quot;rectángulo&quot;.
 - Imprime el cálculo del área de un polígono de cada tipo.*/

let poligono=[{
    "tipo":"triangulo",
    "lados":[3,5]
},{
    "tipo":"cuadrado",
    "lados":[4]
},{
    "tipo":"rectangulo",
    "lados":[4,2]
}
]

function area(poligonos){
    //triángulo
    console.log('Área del trángulo: '+(poligono[0].lados[0]*poligono[0].lados[1])/2)
    //cuadrado
    console.log('Área del cuadrado: '+poligono[1].lados*poligono[1].lados)
    //rectángulo
    console.log('Área del rectángulo: '+poligono[2].lados[0]*poligono[2].lados[1])
    return
}
area(poligono)
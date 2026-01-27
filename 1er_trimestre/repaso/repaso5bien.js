
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

/**
 * @param {[{tipo: string, lados:number[] }]} poligonos
 * @return {string}
*/

function area(poligonos){
    let resultado=''
    if(poligonos=='triangulo'){
        resultado='Área del triángulo: '+ (poligono[0].lados[0]*poligono[0].lados[1])/2
    }
    else if(poligonos=='cuadrado'){
    resultado='Área del cuadrado: '+ poligono[1].lados*poligono[1].lados
    }
    else if(poligonos=='rectangulo'){
     resultado='Área del rectángulo: '+poligono[2].lados[0]*poligono[2].lados[1]
    }
    else{
        resultado='Figura incompatible'
    }
    return resultado
}
console.log(area('triangulo'))
console.log(area('cuadrado'))
console.log(area('rectangulo'))
console.log(area('circulo'))
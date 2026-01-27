
/*
function getRandomArbitrary(min, max) {
    let num=0
    num= Math.random() * (max - min) + min;
    console.log(Math.round({num}))
    return Math.round({num})
}
console.log(getRandomArbitrary(1,9))*/

/**
 * @param {number} min 
 * @param {number} max 
 * @returns {number[]} 
 */
function NumeroRandom(min,max){
    let listagana=[]
    for (let i=1; i<=5; i++){
        num= Math.random() * (max -min) + min
        listagana.push(Math.round(num))
    }
    return listagana
}
let premiadorandom=NumeroRandom(0,9)
console.log(premiadorandom)
let premiadoprueba=[4,8,1,6,3]
console.log('Número prueba: '+premiadoprueba)

let personas=[{
    nombre : "Hurley",
    numeros : [4,8,1,6,1],//1
    premio : '',
    comprobado : false
},{
    nombre : "Rin",
    numeros : [1,2,6,5,2],//2
    premio : '',
    comprobado : false
},{
    nombre : "Eva",
    numeros : [2,6,4,5,3],//3
    premio : '',
    comprobado : false    
},{
    nombre : "Emilio",
    numeros : [2,6,4,5,7],//7
    premio : '',
    comprobado : false     
}
]
/**
 * @param {number[]} premiado 
 * @param {[{nombre:string , numeros:number[], permio:string, comprobado:boolean}]} personas 
 * @returns 
 */
function CompruebaNum (premiado,personas){
    for (cada_persona of personas){
        for( let i=0; i<=5; i++){
            if(cada_persona.numeros[i]==premiado[i]){
                cada_persona.premio='ganador'
            }
            if(cada_persona.numeros[i]!==premiado[i]){
                cada_persona.premio='perdedor'
                break
            }
        }
        if(cada_persona.premio=='perdedor'){
            if(cada_persona.numeros[4]==premiado[4]){
                cada_persona.premio='reintegro'
            }
        }
        cada_persona.comprobado= true
        console.log(cada_persona)
    }
    return 
}

CompruebaNum(premiadorandom,personas)
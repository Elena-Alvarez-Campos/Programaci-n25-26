
let personas=[{
    nombre: 'Ana',
    edad: 19,
    profesion: 'arquitecto'
},{
    nombre: 'Miguel',
    edad: 43,
    profesion: 'carnicero'
},{
    nombre: 'Rin',
    edad: 18,
    profesion: 'programador'
},{
    nombre: 'Eva',
    edad: 23,
    profesion: 'farmaceutico'
},{
    nombre: 'Pili',
    edad: 33,
    profesion: 'programador'
}
]

let profesiones=['arquitecto','carnicero','programador','farmaceutico','peluquero','abogado']

//1.Crear una función que reciba como parámetro una lista de personas e imprima el
//nombre de los mayores de 20.
/** 
* @param {[{nombre: string, edad: number, profesion: string}]} personas
* @return {[string]}
*/

function mayores(personas){
    let lista_nombres=[]
    for(let cada_persona of personas){
        if(cada_persona.edad>20){
            lista_nombres.push(cada_persona.nombre)//añadir final 
        }
    }
    return lista_nombres
}
console.log(mayores(personas))

//2. Crear una función que reciba como primer parámetro una lista de personas y como
//segundo parámetro un número e imprima los objetos enteros de las personas que
//tengan más edad que ese número.
/** 
* @param {[{nombre: string, edad: number, profesion: string}]} personas
* @param {number} num
* @return {[{nombre: string, edad: number, profesion: string}]}
*/

function MasEdad(personas,num){
    let lista_personas=[]
    for(let cada_persona of personas){
        if(cada_persona.edad>num){
            lista_personas.push(cada_persona)//añadir final
        }
    }
    return lista_personas
}
console.log(MasEdad(personas,30))

//3.Crear una función que reciba como primer parámetro la lista de personas y como
//segundo parámetro la lista de profesiones. Tiene que recorrer la lista de profesiones e
//imprimir por terminal los nombres de las personas de cada profesión.

/** 
* @param {[{nombre: string, edad: number, profesion: string}]} personas
* @param {[string]} profesiones
* @return {[string]}
*/

function NombresPorProfesion(personas,profesiones){
    let profesiones_nombres=[]
    for(let cada_profesion of profesiones){
        profesiones_nombres.push(cada_profesion+':')
        for(let cada_personas of personas){
            if(cada_personas.profesion==cada_profesion){
                profesiones_nombres.push(cada_personas.nombre)
            }
        }
    }
    return profesiones_nombres
}
console.log(NombresPorProfesion(personas,profesiones))

//4. Una función como la del ejercicio 2, pero en vez de imprimir las personas, devuelva
//una nueva lista con los objetos de las personas mayores al número facilitado.

/** 
* @param {[{nombre: string, edad: number, profesion: string}]} personas
* @param {number} num
* @return {[{nombre: string, edad: number, profesion: string}]}
*/

function MasEdad2(personas,num2){
    let lista_personas2=[]
    for(let cada_persona2 of personas){
        if(cada_persona2.edad>num2){
            lista_personas2.push(cada_persona2)//añadir final
        }
    }
    return lista_personas2
}
console.log(MasEdad2(personas,30))
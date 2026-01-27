
//Escribe un programa que muestre por consola (con un console.log) los números de 1 a
//100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los
//siguientes:
//- Múltiplos de 3 por la palabra "Fizz";.
//- Múltiplos de 5 por la palabra Buzz;.
//- Múltiplos de 3 y de 5 a la vez por la palabra FizzBuzz.
let num
function numeros(){
    for(i=1; i<=100; i++){
        if((i%3==0) && (i%5==0)){
            num='FizzBuzz'
        }
        else if(i%3==0){
            num='Fizz'
        }else if(i%5==0){
            num='Buzz'
        }else{
            num=i
        }
    console.log(num)
    }
}
numeros()
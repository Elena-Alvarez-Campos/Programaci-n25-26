
//Parte1

let meses=['Enero','Febrero','Marzo','Abril','Mayo','Jnio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

for(let cada_mes of meses){
    console.log(cada_mes);
}

//Parte2
let valores=[true,5,false,'hola','adios',2];

//Apartado a)
console.log('¿Es el primer elemento mayor que el segundo?')
console.log(valores[3]>valores[4]);
console.log('Por lo tanto el primer elemento es mayor que el segundo')

//Apartado b)
console.log(valores[0] && valores[0]);//true
console.log(valores[2] || valores[2]);//false

//Apartado c)
console.log(valores[1]+valores[5]);//suma
console.log(valores[1]-valores[5]);//resta
console.log(valores[1]*valores[5]);//multiplicación
console.log(valores[1]/valores[5]);//división
console.log(valores[1]%valores[5]);//resto

let edad=20

if(edad>18){
    console.log("Es mayor de edad")
}

else{
    console.log("es menor de edad")
}
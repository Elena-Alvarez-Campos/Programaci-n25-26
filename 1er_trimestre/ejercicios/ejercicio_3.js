//las instrucuiones detalladas se encuentran en el apartado 2 (usando while)

//usando for
console.log('apartado 1')

let hora2=9
let min2=0

for (let i=0;i<26;i++){//eleborar bucle hasta que la hora sea menor o igual a 21 (engloba 21:30)
    console.log('son las',hora2,':',min2);
    if(min2>=30){
        hora2=hora2+1
        min2=min2-30
    }
    else{
        min2=min2+30
    }
}

//usando while
console.log('apartado 2')

let hora=9
let min=0

while(hora<=21){ //eleborar bucle hasta que la hora sea menor o igual a 21 (engloba 21:30)
    console.log('son las',hora,':',min); //muestra el tiempo en la pantalla
    if(min>=30){ //si los minutos son 30
        hora=hora+1 //se añade 1h más
        min=min-30 //y se reinician los minutos a 0
    }
    else{ //si los minutos son 0
        min=min+30 //se añaden 30min más, pero no se toca la hora
    }
}

//(usando do...while)
console.log('apartado 3')

let hora3=9
let min3=0

do{ 
    console.log('son las',hora3,':',min3);
        if(min3>=30){
            hora3=hora3+1
            min3=min3-30
        }
        else{
            min3=min3+30
        }
} while(hora3<=21) //termina el bucle cuando la hora es igual a 21 (engloba 21:30)
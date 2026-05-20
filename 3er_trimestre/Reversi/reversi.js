
//readline

const readline=require('node:readline/promises')
const {stdin:input, stdout:output}=require('node:process')
const {error}=require('node:console');
const rl=readline.createInterface({input,output});

//Crear talero
//i=columna
//j=fila
let tablero=[]
for (let i=0;i<8;i++) {
    tablero[i]=[]//crea una fila
    for (let j=0;j<8;j++) {
        tablero[i][j]=null;//cada casilla está vacía
    }
}
tablero[3][3]='X';
tablero[4][3]='O';
tablero[4][4]='X';
tablero[3][4]='O';
//representación tablero
let letras=['A','B','C','D','E','F','G','H']
function mostrar(){
    let imprime='   A  B  C  D  E  F  G  H\n';//línea arriba
    for (let i=0;i<8;i++) {
        imprime+=(i+1)+' |'//columna izquierda
        for (let j=0;j<8;j++) {
            if(tablero[i][j]=='X'){
                imprime+=tablero[i][j]+' |';
            }
            else if(tablero[i][j]=='O'){
                imprime+=tablero[i][j]+' |';
            }
            else{
                imprime+=(tablero[i][j] || '  ')+'|';
            }
            
        }
        imprime+='\n'
    }
    console.log(imprime)
}
mostrar()

let juego=true;
let ronda=0;//si es par es el truno del J1 (O), si es impar es el turno del J2(X)

async function turno(ficha,rival) {
    let respuesta=await rl.question("Escribe coordenadas\n")
    console.log(respuesta)
    mostrar()
}

//distribuidor turnos y victorias
//while(juego==true){
for(let x=0;x<4;x++){
    let vacio=false;
    if(ronda%2==0){
        console.log('Turno del jugador 1 (O)')
        turno('X','O')
    }
    else{
        console.log('Turno del jugador 2 (X)')
        turno('O','X')
    }
    
    for (let i=0;i<8;i++) {
        if(vacio==true){break}
        for (let j=0;j<8;j++) {
            if(tablero[i][j]==null){
                vacio=true;
            }
        }
    }
    ronda++
    if(vacio==false){
        juego==false
        rl.close();
    }
    
}
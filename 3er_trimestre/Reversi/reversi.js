
//readline

const readline=require('node:readline/promises')
const {stdin:input, stdout:output}=require('node:process')
const {error}=require('node:console');
const rl=readline.createInterface({input,output});

//Crear tablero
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
//Determina si la jugada es válida
function turno(jugador,rival,letra,num) {
    let i=num-1//numero
    let j=letras.indexOf(letra)//letra
    console.log(''+i+' '+j)
    if(tablero[i][j]==null){
        let casillaAntes=tablero[i][j]
        tablero[i][j]=jugador
        let rodear=buscaRival(i,j,rival,jugador)
        if(rodear==false){
            tablero[i][j]=casillaAntes
            return false
        }
        mostrar()
        return true
    }
    else{
        return false
    }
}
// abajo: i+1
// arriba: i-1
// derecha: j+1
// izquierda: j-1
function buscaRival(i,j,rival,jugador){//buscar si hay un rival en general
    //i y j representan la posición de la pieza nueva
    let encontrado=false;
    try{
        if(tablero[i-1][j]==rival){//ariba
            volteaFicha(i-1,j,rival,jugador,-1,0)
            encontrado=true
        }
    }catch(error){}
    try {
        if(tablero[i][j-1]==rival){//izquierda
            volteaFicha(i,j-1,rival,jugador,0,-1)
            encontrado=true
        }
    } catch (error) {}
    try {
        if(tablero[i][j+1]==rival){//derecha
            volteaFicha(i,j+1,rival,jugador,0,1)
            encontrado=true
        }
    } catch (error) {}
    try {
        if(tablero[i+1][j]==rival){//abajo
            volteaFicha(i+1,j,rival,jugador,1,0)
            encontrado=true
        }
    } catch (error) {}
    
    if(encontrado==false){
        return false
    }else{
        return true
    }
}
function volteaFicha(i,j,rival,jugador,suma_i,suma_j){
    let x=i
    let y=j
    let voltear=false
    for (let z = 0; z < 2; z++){
        i=x
        j=y
        if(voltear==false && z==1){//no hace alta que vuelva a recorrer el bucle si no hay ninguna ficha del jugador
            break
        }
        while (i>=0&&i<tablero.length&&j>= 0 && j < tablero[i].length) {
            if(tablero[i][j]==jugador){
                voltear=true
                
                break
            }else if(tablero[i][j]==null){
                break
            }
            if(voltear==true){
                tablero[i][j]=jugador
            }
            i+=suma_i
            j+=suma_j
        }
        
    }
}
//Función del juego
async function Juego() {
    let jugador=''
    let rival=''
    let ganador=''
    let ronda=0;
    let fin=false
    while(fin==false){
        let hayNUll=false
        if(ronda%2==0){
            console.log('Turno del jugador 1 (X)')
            jugador='X'
            rival='O'
        }
        else{
            console.log('Turno del jugador 2 (O)')
            jugador='O'
            rival='X'
        }
        let correcto=false;//si las cordenadas que dá son erroneas no pasa al turno del siguiente
        while (correcto==false){
            let letra=await rl.question("Esctibe la cordenada horizontal (A-H)")
            let num=await rl.question("Esctibe la cordenada vertical (1-8)")
            try {
                //filtra número
                if(isNaN(num)||num>8||num<1) {
                    throw new Error("Valor horizontal incorrecto");
                }
                //filtra letra (solo si se filtró bien el número)
                else{
                    let letra_encontrada=false
                    let numero=parseInt(num)
                    letra=letra.toUpperCase()
                    for(let cadaletra of letras){
                        if(cadaletra==letra){//se filtraron bien ambas
                            letra_encontrada=true
                            let valorTurno=turno(jugador,rival,letra,numero)
                            //console.log(valorTurno)
                            if(valorTurno==true){
                                correcto=true
                            }
                        }
                    }
                    if(letra_encontrada==false){
                        throw new Error("Valor vertical incorrecto");
                    }else if(correcto==false){
                        throw new Error("No puedes poner una ficha en esa casilla");
                    }
                }
            } catch (error) {
                console.error(error.message)
            }
        }
        ronda++
        for(let i=0; i<8; i++){
            for(let j=0; j<8;j++){
                if(tablero[i][j]==null){
                    hayNUll=true
                }
            }
        }
        if(hayNUll==false){
            fin=true
            console.log("FIN")
            let jugador1=0
            let jugador2=0
            for(let i=0; i<8; i++){
                for(let j=0; j<8;j++){
                    if(tablero[i][j]=='X'){
                        jugador1++
                    }else{
                        jugador2++
                    }
                }
            }
            if(jugador1>jugador2){
                ganador='Jugador 1'
            }else{
                ganador='Jugador 2'
            }
            console.log("Fichas jugador 1 (X): "+jugador1+'\nFichas jugador 2 (O): '+jugador2+
                '\nEl ganador es '+ganador+'!!!')
        }
    }
    rl.close()
}
Juego()

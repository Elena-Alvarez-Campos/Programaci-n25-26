
//readline

const readline=require('node:readline/promises')
const {stdin:input, stdout:output}=require('node:process')
const {error}=require('node:console');
const rl=readline.createInterface({input,output});

//Crear tablero
//i=columna
//j=fila
let tablero=[]//se va a usar a lo largo del ejercicio
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
function turno(jugador,rival,letra,num) {///////////////////////////////////////////////////////////////////////////////////////////////////////
    let i=num-1//numero
    let j=letras.indexOf(letra)//letra
    //console.log(''+i+' '+j)
    if(tablero[i][j]==null){
        let casillaAntes=tablero[i][j]//no puede ser null porque puede que el jugador haya introducido las coordenadas de otra ficha
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
function buscaRival(i,j,rival,jugador){//buscar si hay un rival en general////////////////////////////////////////////////////////////////////
    //i y j representan la posición de la pieza nueva
    
    let encontrado=false;
    let validez=false;
    try{
        if(tablero[i-1][j]==rival){//ariba
            if(volteaFicha(i-1,j,rival,jugador,-1,0)==true){
                validez=true
            }
            encontrado=true
        }
    }catch(error){}
    try {
        if(tablero[i][j-1]==rival){//izquierda
            if(volteaFicha(i,j-1,rival,jugador,0,-1)==true){
                validez=true
            }
            encontrado=true
        }
    } catch (error) {}
    try {
        if(tablero[i][j+1]==rival){//derecha
            if(volteaFicha(i,j+1,rival,jugador,0,1)==true){
                validez=true
            }
            encontrado=true
        }
    } catch (error) {}
    try {
        if(tablero[i+1][j]==rival){//abajo
            if(volteaFicha(i+1,j,rival,jugador,1,0)==true){
                validez=true
            }
            encontrado=true
        }
    } catch (error) {}
    
    if(encontrado==false){
        return false
    }else if(validez==true){
        return true
    }else{
        return false
    }
}
function volteaFicha(i,j,rival,jugador,suma_i,suma_j){////////////////////////////////////////////////////////////////////////////////////////
    let x=i//posición inicial de la ficha qeu se va a querer voltear
    let y=j// " " " " 
    let voltear=false//determina si se van a voltear las fichas
    for (let z = 0; z < 2; z++){//se recorre 2 veces: 1 pasa determinar si se voltean las fichas y otra para voltearlas
        i=x//posición inicial
        j=y// " " " "
        if(voltear==false && z==1){//no hace falta que vuelva a recorrer el bucle si no hay ninguna ficha del jugador
            //es decir, si no hay que voltear nada no recorre nada
            break
        }
        while (i>=0&&i<tablero.length&&j>= 0 && j < tablero[i].length) {
            //i tiene que ser mayor o igal que 0 para no salirse del array
            //a su vez no puede ser mayor que el array por el mismo motiva
            //a la J le pasa igual pero dentro de su columna
            if(tablero[i][j]==jugador){//VÁLIDO!!!
                //si encuentra un jugador, volteará las fichas y se saldrá del bucle
                voltear=true
                break
            }else if(tablero[i][j]==null){//NO VÁLIDO!!!
                //si está vacía la casilla, no volteará nada y saldrá del bucle
                break
            }
            if(voltear==true){
                tablero[i][j]=jugador
            }
            //se van sumando lo que se tiene qeu sumar
            i+=suma_i
            j+=suma_j
        }
        
    }
    if(voltear==false){
        return false
    }else{
        return true
    }
}
//Función del juego***************************************************************************************************************************
async function Juego() {
    let jugador=''//determina quien es el jugador en ese turno
    let rival=''//determina quien es el rivalen ese turno
    let ronda=0;//determina la ronda
    let fin=false
    let rondaPaso1=0
    let paso1=false;
    let paso2=false
    let jugador1=0
    let jugador2=0
    while(fin==false){//si la partida no llega al final se sigue jugando
        let hayNUll=false//determina se hay alguna casilla vacía (se reinica cada vez que se coloca una casilla nueva)
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
            let letra=await rl.question("Si quieres pasar el turno escribe 'paso'\n"+"Esctibe la cordenada horizontal (A-H): ")
            letra=letra.toUpperCase()
            if(letra=='PASO' && paso1==false){
                paso1=true
                rondaPaso1=ronda
                console.log(paso1)
                break
            }else if(letra=='PASO' && paso1==true){
                paso2=true
                break
            }
            let num=await rl.question("Esctibe la cordenada vertical (1-8): ")
            try {
                
                //filtra número
                
                if(isNaN(num)||num>8||num<1) {
                    throw new Error("Valor horizontal incorrecto");
                }
                //filtra letra (solo si se filtró bien el número)
                else{
                    let letra_encontrada=false
                    let numero=parseInt(num)
                    
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
        if(paso1==true && paso2==false &rondaPaso1%2==ronda%2){
            paso1=false
        }
        if(paso1==true && paso2==true){
            fin=true
        }

        if(hayNUll==false){
            fin=true
            console.log("FIN")
            for(let i=0; i<8; i++){
                for(let j=0; j<8;j++){
                    if(tablero[i][j]=='X'){
                        jugador1++
                    }else{
                        jugador2++
                    }
                }
            }
            //
            
        }
        if(fin==true){
            console.log("Fichas jugador 1 (X): "+jugador1+'\nFichas jugador 2 (O): '+jugador2)
            if(jugador1>jugador2){
                console.log('\nEl ganador es el jugador 1!!!')
            }else if(jugador2>jugador1){
                console.log('\nEl ganador es el jugador 2!!!')
            }else{
                console.log('Empate···')
            }
        }
    }
    rl.close()
}
Juego()

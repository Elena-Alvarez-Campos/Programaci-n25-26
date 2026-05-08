
function tableroAjedrez(){
    let letras=["A","B","C","D","E","F","G","H"]
    let tablero=[[],[],[],[],[],[],[],[],[]];
    for(let i=0;i<=8;i++){
        for(let j=0;j<=8;j++){
            if(j==0 && i==0){
                tablero[i][j]=0+"  "
            }
            else if(j==0){
                tablero[i][j]=letras[i-1]
            }else if(i==0){
                tablero[i][j]=j+"  "
            }else{
                tablero[i][j]="  |"
            }
        }
    }
    
    let piezas=["T","C","A","P","K","Q"]
    //Colocar piezas
    let numj=0
    let numi=0
    for( let cada_pieza of piezas){
        numj=Math.random()*(8-1)+1
        numi=Math.random()*(8-1)+1
        tablero[Math.round(numi)][Math.round(numj)]=" "+cada_pieza+"|"
    }
    //console.log(tablero)
    let tableroString=""
    for(let cadaFila of tablero){
        for(let cadaCasilla of cadaFila){
            tableroString+=cadaCasilla
        }
        tableroString+="\n"
    }
    console.log(tableroString)
    //Comprobación fichas
    for(let i=0;i<=8;i++){
        for(let j=0;j<=8;j++){
            if(tablero[i][j]==" "+"P"+"|"){//PEÓN
                console.log("Peón:")
                if(tablero[i-1][j-1]!="  |"){
                    console.log(tipoPieza(tablero[i-1][j-1]))
                }else if(tablero[i-1][j+1]!="  |"){
                    console.log(tipoPieza(tablero[i-1][j+1]))
                }else{
                    console.log("No puede comer ninguna pieza")
                }
            }else if(tablero[i][j]==" "+"T"+"|"){//TORRE
                console.log("Torre:")
                let encontrarT=false
                //horizontal
                for(let cadaCasilla of tablero[i]){
                    if(tablero[i].indexOf(cadaCasilla)==0||cadaCasilla==tablero[i][j]){
                        continue
                    }
                    else{
                        if(tipoPieza(cadaCasilla)!="No puede comer ninguna pieza"){
                            console.log(tipoPieza(cadaCasilla))
                            encontrarT=true
                        }
                    }
                }
                //vertical
                for(let x=1;x<8;x++){
                    if(tablero[x][j]==tablero[i][j]){
                        continue
                    }
                    if(tipoPieza(tablero[x][j])!="No puede comer ninguna pieza"){
                        console.log(tipoPieza(tablero[x][j]))
                        encontrarT=true
                    }
                }
                if(encontrarT==false){
                    console.log("No puede comer ninguna pieza")
                }
            }else if(tablero[i][j]==" "+"A"+"|"){
                console.log("Alfil:")
                
            }
        }
    }
    return(tablero)
}
tableroAjedrez()
function tipoPieza(casilla){
    if(casilla==" "+"T"+"|"){return "Se puede comer la torre"}
    else if(casilla==" "+"C"+"|"){return "Se puede comer el caballo"}
    else if(casilla==" "+"A"+"|"){return "Se puede comer el alfil"}
    else if(casilla==" "+"P"+"|"){return "Se puede comer el peón"}
    else if(casilla==" "+"K"+"|"){return "Se puede comer el rey"}
    else if(casilla==" "+"Q"+"|"){return "Se puede comer la reina"}
    else{return "No puede comer ninguna pieza"}
}
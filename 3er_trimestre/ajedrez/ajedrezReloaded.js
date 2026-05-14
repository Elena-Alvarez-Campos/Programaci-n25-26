/*
function tableroAjedrez() {
    tablero=[]
    for(let i=0;i<=8;i++){
        tablero[i]=[]
        for(let j=0;j<8;j++){
            tablero[i][j]="  ";
        }
    }
    let piezas=["T","C","A","P","K","Q"]
    //Colocar piezas
    let numj=0
    let numi=0
    for( let cada_pieza of piezas){
        //DESWPUÉS DE LA CORRECCIÓN CLASE
        let colocada=false
        while (!colocada){
            numj=Math.random()*(8-1)+1
            numi=Math.random()*(8-1)+1
            if(tablero[Math.round(numi)][Math.round(numj)]=="  "){
                tablero[Math.round(numi)][Math.round(numj)]=cada_pieza
                colocada=true
            }
        }
    }
    //console.log(tablero)
    //CORRECCIÓN DE CLASE
    //La primera línea es un string, no posiciones del array
    let salida=" 0 1 2 3 4 5 6 7 \n"
    
    for(i=0; i<8; i++){
        salida+=i+"|";
        for(j=0; j<8; j++){
        salida+=(tablero[i][j] || " "+"|")
        }
        salida+="\n";
        console.log(salida);
    }
    let tableroString=""
    for(let cadaFila of tablero){
        for(let cadaCasilla of cadaFila){
            tableroString+=cadaCasilla
        }
        tableroString+="\n"
    }
    console.log(tableroString)
    
    return(tablero)
}
tableroAjedrez()
*/

function tableroAjedrez(){
    let letras=["A","B","C","D","E","F","G","H"]
    let tablero=[];
    for(let i=0;i<=8;i++){
        tablero[i]=[]
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
        //DESWPUÉS DE LA CORRECCIÓN CLASE
        
        let colocada=false
        while (!colocada){
            numj=Math.random()*(8-1)+1
            numi=Math.random()*(8-1)+1
            if(tablero[Math.round(numi)][Math.round(numj)]=="  |"){
                tablero[Math.round(numi)][Math.round(numj)]=" "+cada_pieza+"|"
                colocada=true
            }
        }
        //Sin corrección (no ví si había una pieza colocada en ese lugar)
        /*
        numj=Math.random()*(8-1)+1
        numi=Math.random()*(8-1)+1
        
        tablero[Math.round(numi)][Math.round(numj)]=" "+cada_pieza+"|"
        */
    }
    //console.log(tablero)
    //CORRECCIÓN DE CLASE
    //La primera línea es un string, no posiciones del array
    // let salida=" 0 1 2 3 4 5 6 7 \n"
    /*
    for(i=0; i<8; i++){
        salida+=i+"|";
        for(j=0; j<8; j++){
        salida+=(tablero[i][j] || " "+"|")
        }
        salida+="\n";
        console.log(salida);
    }
    */
    let tableroString=""
    for(let cadaFila of tablero){
        for(let cadaCasilla of cadaFila){
            tableroString+=cadaCasilla
        }
        tableroString+="\n"
    }
    console.log(tableroString)
    
    return(tablero)
}
let tablero=tableroAjedrez()


function tipoPieza(casilla){
    if(casilla==" "+"T"+"|"){return "Se puede comer la torre"}
    else if(casilla==" "+"C"+"|"){return "Se puede comer el caballo"}
    else if(casilla==" "+"A"+"|"){return "Se puede comer el alfil"}
    else if(casilla==" "+"P"+"|"){return "Se puede comer el peón"}
    else if(casilla==" "+"K"+"|"){return "Se puede comer el rey"}
    else if(casilla==" "+"Q"+"|"){return "Se puede comer la reina"}
    else{return "No puede comer ninguna pieza"}
}

//CORRECCIÓN EN CLASE************************
//meter todo en un switch
//con variable límite: K,P,C
//suma x y suma y como variables

for(let x=0;x<=8;x++){
    for(let y=0;y<=8;y++){
        if(tablero[x][y]==" "+"T"+"|" ||tablero[x][y]==" "+"A"+"|" ||tablero[x][y]==" "+"Q"+"|" ||tablero[x][y]==" "+"K"+"|" ||tablero[x][y]==" "+"P"+"|" ||tablero[x][y]==" "+"C"+"|"){//exixte ficha
            let comidas=[]
            let ficha=''
            switch(tablero[x][y]){
                case " "+"T"+"|":
                    ficha='torre'
                    comidas=comeRecto(false,x,y)
                break;
                case " "+"A"+"|":
                    ficha='alfil'
                    comidas=comeDigonal(false,x,y)
                break;
                case " "+"Q"+"|":
                    ficha='reina'
                    comidas=comeRecto(false,x,y)
                    comidas=comidas.concat(comeDigonal(false,x,y))
                break;
                case " "+"K"+"|":
                    ficha='rey'
                    comidas=comeRecto(true,x,y)
                    comidas=comidas.concat(comeDigonal(true,x,y))
                break;
                case " "+"P"+"|":
                    //limite,x,y,suma x, suma y
                    ficha='peón'
                    comidas=(comePiezas(true,x,y,-1,1))
                    comidas=comidas.concat(comePiezas(true,x,y,-1,-1))
                    //con concat se puede unir los arrays (concatenarlos)
                break;
                case " "+"C"+"|":
                    ficha='caballo'
                    comidas=(comePiezas(true,x,y,3,1))
                    comidas=comidas.concat(comePiezas(true,x,y,3,-1))
                    comidas=comidas.concat(comePiezas(true,x,y,-3,1))
                    comidas=comidas.concat(comePiezas(true,x,y,-3,-1))

                    comidas=comidas.concat(comePiezas(true,x,y,1,3))
                    comidas=comidas.concat(comePiezas(true,x,y,-1,3))
                    comidas=comidas.concat(comePiezas(true,x,y,1,-3))
                    comidas=comidas.concat(comePiezas(true,x,y,-1,-3))
                break;
            }
            let txt='La ficha '+ficha
            if(comidas.length){
                txt+=' come a '+comidas
            }else{
                txt+=' no come a nadie'
            }
            console.log(txt)
        }
    }
}
/**
 * -horizontal der: suma_x=1, suma_y=0
 * -horizontal izq: suma_x=-1, suma_y=0
 * -vertical arriba: suma_x=0, suma_y=1
 * -vertical abajo: suma_x=0, suma_y=-1
 * -diagonal arriba izq: suma_x=-1, suma_y=1
 * -diagonal arriba der: suma_x=1, suma_y=1
 * -diagonal abajo izq: suma_x=-1, suma_y=-1
 * -diagonal abajo der: suma_x=1, suma_y=-1
 * 
 * @param {boolean} limite 
 * @param {number} x 
 * @param {number} y 
 * @param {0|1|-1} suma_x 
 * @param {0|1|-1} suma_y 
 * @return {string[]};//piezas que se come
 */

function comePiezas(limite,x,y,suma_x,suma_y){
    let comidas=[]
    x+=suma_x
    y+=suma_y
    while(x<tablero.length && x>=0 && y<tablero.length && y>=0){
        if(tipoPieza(tablero[x][y])!=false){
            comidas.push(tipoPieza(tablero[x][y]))
            break
        }
        if(limite==true){break}
        x+=suma_x
        y+=suma_y
    }
    return comidas
}
function tipoPieza(casilla){
    if(casilla==" "+"T"+"|"){return "torre"}
    else if(casilla==" "+"C"+"|"){return "caballo"}
    else if(casilla==" "+"A"+"|"){return "alfil"}
    else if(casilla==" "+"P"+"|"){return "peón"}
    else if(casilla==" "+"K"+"|"){return "rey"}
    else if(casilla==" "+"Q"+"|"){return "reina"}
    else{return false}
}
function comeDigonal(limite,x,y){
    let comidas=[]
    comidas=(comePiezas(limite,x,y,1,1))
    comidas=comidas.concat(comePiezas(limite,x,y,1,-1))
    comidas=comidas.concat(comePiezas(limite,x,y,-1,1))
    comidas=comidas.concat(comePiezas(limite,x,y,-1,-1))
    return comidas
}
function comeRecto(limite,x,y){
    let comidas=[]
    comidas=(comePiezas(limite,x,y,0,1))
    comidas=comidas.concat(comePiezas(limite,x,y,0,-1))
    comidas=comidas.concat(comePiezas(limite,x,y,-1,0))
    comidas=comidas.concat(comePiezas(limite,x,y,1,0))
    return comidas
}
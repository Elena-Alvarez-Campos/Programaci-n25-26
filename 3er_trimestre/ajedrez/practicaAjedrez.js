
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
/*
for(let x=0;x<8;x++){
    for(let y=0;y<8;y++){
        if(tablero[x][y]){//exixte ficha
            switch(tablero[x][y]){
                case 'T':
                brake;
                case 'A':
                brake;
                case 'Q':
                brake;
                case 'K':
                brake;
                case 'P':
                    //limite,x,y,suma x, suma y
                    comePiezas(true,x,y,-1,1)
                    comePiezas(true,x,y,1,1)
                brake;
                case 'C':
                brake;
            }
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
/*
function comePiezas(limite,x,y,suma_x,suma_y){
}

*/
function comePeon(requisito){
    for(let i=0;i<=8;i++){
        for(let j=0;j<=8;j++){
            if(tablero[i][j]==requisito){//PEÓN
                if(tablero[i-1][j-1]!="  |"){
                    console.log(tipoPieza(tablero[i-1][j-1]))
                }else if(tablero[i-1][j+1]!="  |"){
                    console.log(tipoPieza(tablero[i-1][j+1]))
                }else{
                    console.log("No puede comer ninguna pieza")
                }
            }
        }
    }
}
function comeTorre(requisito) {
    for(let i=0;i<=8;i++){
        for(let j=0;j<=8;j++){
            if(tablero[i][j]==requisito){//TORRE
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
            }
        }
    }
}
function comeAlfil(requisito) {
    for(let i=0;i<=8;i++){
        for(let j=0;j<=8;j++){
            if(tablero[i][j]==requisito){
                let encontrar=false
                //Parte de arriba v
                for(let x=1;i-x>0;x++){
                    if(tipoPieza(tablero[i-x][j-x])!="No puede comer ninguna pieza"){
                        console.log(tipoPieza(tablero[i-x][j-x]))
                        encontrar=true
                    }if(tipoPieza(tablero[i-x][j+x])!="No puede comer ninguna pieza"){
                        console.log(tipoPieza(tablero[i-x][j+x]))
                        encontrar=true
                    }
                }
                //Parte de abajo ^
                for(let x=1;i+x<=8;x++){
                    if(tipoPieza(tablero[i+x][j-x])!="No puede comer ninguna pieza"){
                        console.log(tipoPieza(tablero[i+x][j-x]))
                        encontrar=true
                    }if(tipoPieza(tablero[i+x][j+x])!="No puede comer ninguna pieza"){
                        console.log(tipoPieza(tablero[i+x][j+x]))
                        encontrar=true
                    }
                }
                if(encontrar==false){
                    console.log("No puede comer ninguna pieza")
                }
            }
        }
    }
}
function comeCaballo(requisito) {
    for(let i=0;i<=8;i++){
        for(let j=0;j<=8;j++){
            if(tablero[i][j]==requisito){//encuentra pieza
                let encontrado=false;
                try {//abajo der
                    if(tipoPieza(tablero[i+3][j+1])!="No puede comer ninguna pieza"){
                        console.log(tipoPieza(tablero[i+3][j+1]))
                        encontrado=true
                    }
                } catch (error){}
                try {//abajo iz
                    if(tipoPieza(tablero[i+3][j-1])!="No puede comer ninguna pieza"){
                        console.log(tipoPieza(tablero[i+3][j-1]))
                        encontrado=true
                    }
                } catch (error){}
                try {//arriba der
                    if(tipoPieza(tablero[i-3][j+1])!="No puede comer ninguna pieza"){
                        console.log(tipoPieza(tablero[i-3][j+1]))
                        encontrado=true
                    }
                } catch (error){}
                try{//arriba iz
                    if(tipoPieza(tablero[i-3][j-1])!="No puede comer ninguna pieza"){
                        console.log(tipoPieza(tablero[i-3][j-1]))
                        encontrado=true
                    }
                }catch(error){}
                try{//derecha ar
                    if(tipoPieza(tablero[i-1][j+3])!="No puede comer ninguna pieza"){
                        console.log(tipoPieza(tablero[i-1][j+3]))
                        encontrado=true
                    }
                }catch(error){}
                try{//derecha ab
                    if(tipoPieza(tablero[i+1][j+3])!="No puede comer ninguna pieza"){
                        console.log(tipoPieza(tablero[i+1][j+3]))
                        encontrado=true
                    }
                }catch(error){}
                try{//izquierda ar
                    if(tipoPieza(tablero[i-1][j-3])!="No puede comer ninguna pieza"){
                        console.log(tipoPieza(tablero[i-1][j-3]))
                        encontrado=true
                    }
                }catch(error){}
                try{//izquierda ab
                    if(tipoPieza(tablero[i+1][j-3])!="No puede comer ninguna pieza"){
                        console.log(tipoPieza(tablero[i+1][j-3]))
                        encontrado=true
                    }
                }catch(error){}
                if(encontrado==false){
                    console.log("No puede comer ninguna pieza")
                }
            }
        }
    }
}
function comeReina(requisito) {
    comeAlfil(requisito)
    comeTorre(requisito)
}
function comeRey(requisito) {
    for(let i=0;i<=8;i++){
        for(let j=0;j<=8;j++){
            if(tablero[i][j]==requisito){
                let encontrado=false;
                if(tablero[i-1][j-1]!="  |"){
                    encontrado=true
                    console.log(tipoPieza(tablero[i-1][j-1]))
                }if(tablero[i-1][j+1]!="  |"){
                    console.log(tipoPieza(tablero[i-1][j+1]))
                    encontrado=true
                }if(tablero[i+1][j-1]!="  |"){
                    console.log(tipoPieza(tablero[i+1][j-1]))
                    encontrado=true
                }if(tablero[i+1][j+1]!="  |"){
                    console.log(tipoPieza(tablero[i+1][j+1]))
                    encontrado=true
                }if(tablero[i-1][j]!="  |"){
                    console.log(tipoPieza(tablero[i-1][j]))
                    encontrado=true
                }if(tablero[i+1][j]!="  |"){
                    console.log(tipoPieza(tablero[i+1][j]))
                    encontrado=true
                }if(tablero[i][j+1]!="  |"){
                    console.log(tipoPieza(tablero[i][j+1]))
                    encontrado=true
                }if(tablero[i][j-1]!="  |"){
                    console.log(tipoPieza(tablero[i][j-1])) 
                    encontrado=true   
                }if(encontrado==false){
                    console.log("No puede comer ninguna pieza")
                }
            }
        }
    }
}
console.log("Torre:")
comeTorre(" "+"T"+"|")
console.log("Peón:")
comePeon(" "+"P"+"|")
console.log("Alfil:")
comeAlfil(" "+"A"+"|")
console.log("Reina:")
comeReina(" "+"Q"+"|")
console.log("Rey:")
comeRey(" "+"K"+"|")
console.log("Caballo")
comeCaballo(" "+"C"+"|")
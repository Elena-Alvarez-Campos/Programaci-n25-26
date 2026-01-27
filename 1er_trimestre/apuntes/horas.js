
for( let i=9;i<=21;i++){
    
    for( let x=0;x<60;x++){
        if(x==0||x==30){
            console.log(i,':',x)
        }
    }
}
console.log('alternativa')
for( let i=9;i<=21;i++){
    
    for( let x=0;x<60;x+=30){
        console.log (i+':'+((x<30) ? '0'+x : x))
    }
    
}
//while
console.log('while');

let hora=9;
let min=0;

while(hora<22){
    let min=0;
    while(min<60){
        console.log (hora +':'+((min<30) ? '0'+min : min))
        min+=30
    }
hora++
}

//do...while
console.log('do...while')

let h=9
do{
    let m=0
    do{
        console.log(h +':'+((m<30) ? '0'+m : m))
        m+=30
    }while(m<60)
        h++
}while(h<22)

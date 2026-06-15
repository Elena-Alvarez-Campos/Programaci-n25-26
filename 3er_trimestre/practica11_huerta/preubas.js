
let tick=0
let array=[10,5,6,8,4,3,9]
function recuento(){
    for(let cada_num of array){
        cada_num++
        console.log(cada_num)
    }
} 
let timerId = setInterval(() => recuento(), 2000);

setTimeout(() => { clearInterval(timerId); console.log(tick); }, 5000);



const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
})

function ask() {
    rl.question("Nombre: ",(nombre)=>{
        console.log=("Hola "+nombre)
    })
    rl.close
    
}
ask();
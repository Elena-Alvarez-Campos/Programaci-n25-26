const express=require('express');
const router=express.Router();

//leer json
const fs=require("fs");

const pelisString = fs.readFileSync("./pelis.json");
let listaPelis = JSON.parse(pelisString);//determina que esta variable es el json de las pelis
//console.log("Titulo peli 1: "+listaPelis[0].titulo);

//GET*******************************************
router.get('/',(req,res)=>{
    res.json(listaPelis);
});

//POST***************************************
router.post('/',(req,res)=>{
    const nuevoproducto={id:Date.now(),...req.body}
    listaPelis.push(nuevoproducto);
    res.json(listaPelis);
    fs.writeFileSync("./pelis.json", JSON.stringify(listaPelis));
});

//PUT**************************************
router.put('/:id',(req,res,next)=>{
    const id = parseInt(req.params.id);
    let peliEncontrada=false
    let posicion=0;
    for(let cada_peli of listaPelis){
        if(cada_peli.id==id){
            //cada_peli=req.body;
            peliEncontrada=true
            break;
        }
        posicion++
    }
    if(peliEncontrada==true){
        listaPelis[posicion]={id:id,...req.body};
    }
    console.log("Peli encontrada: "+peliEncontrada)
    res.json(listaPelis);
    fs.writeFileSync("./pelis.json", JSON.stringify(listaPelis));
});

//DELETE**************************************
router.delete('/:id',(req,res)=>{
    const id =parseInt(req.params.id);
    let posicion=0;
    peliEncontrada=false;
    for(let cada_peli of listaPelis){
        if(id==cada_peli.id){
            peliEncontrada=true;
            break
        }
        posicion++
    }
    if(peliEncontrada==true){
        listaPelis.splice(posicion,1);
        console.log("Peli eliminada")
    }
    else{
        console.log("Peli no encontrada")
    }
    res.json(listaPelis);
    fs.writeFileSync("./pelis.json", JSON.stringify(listaPelis));
});

//Exportar módulo
module.exports=router;
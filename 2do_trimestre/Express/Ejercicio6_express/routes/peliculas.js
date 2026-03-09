const express=require('express');
const router=express.Router();

//leer json
const fs=require("fs");

const pelisString = fs.readFileSync("./pelis.json");
let listaPelis = JSON.parse(pelisString);//determina que esta variable es el json de las pelis
//console.log("Titulo peli 1: "+listaPelis[0].titulo);

//GET*******************************************
router.get('/',(req,res)=>{
    try{
        res.json(listaPelis);//Devuelve la lista de pelis
    } catch(error){
        conaole.log(error)
        res.send("Se ha producido un error");
    }
});

//POST******************************************
router.post('/',(req,res)=>{
    const nuevoproducto={id:Date.now(),...req.body}//crea una peli nueva con ID
    listaPelis.push(nuevoproducto);//Se añade la peli nueva a la lista
    res.json(listaPelis);//Se manda la lista de pelis
    fs.writeFileSync("./pelis.json", JSON.stringify(listaPelis));//Se actualiza el JSON con la peli nueva
});

//PUT*******************************************
router.put('/:id',(req,res,next)=>{
    try{
    const id = parseInt(req.params.id);//Se parsea el id dado
    let peliEncontrada=false
    let posicion=0;
    for(let cada_peli of listaPelis){
        if(cada_peli.id==id){
            //Si se encuentra la película se marca que se encontró y se sale del bucle
            peliEncontrada=true
            break;
        }
        //Suma posiciones antes de pasar a la siguiente película
        posicion++
    }
    //Si se encontró la peli hará cambios y si no se muestra un mensaje de que no se encontró
    if(peliEncontrada==true){
        //El id va a seguir siendo el mismo, pero para el resto de datos van a ponerse los nuevos
        listaPelis[posicion]={id:id,...req.body};
        console.log("Cambios aplicados")
    }
    else{
        console.log("Peli no encontrada")
    }
    res.json(listaPelis);//Se imprime la lista de pelis
    fs.writeFileSync("./pelis.json", JSON.stringify(listaPelis));//Se actualizan los cambios al JSON
    } catch(error){
        conaole.log(error)
        res.send("Se ha producido un error");
    }
});

//DELETE****************************************
router.delete('/:id',(req,res)=>{
    try{
    const id =parseInt(req.params.id);
    let posicion=0;
    peliEncontrada=false;
    for(let cada_peli of listaPelis){
        if(id==cada_peli.id){
            peliEncontrada=true;
            break
        }
        posicion++
    }//Si se encuentra la peli, se va a su posición y se elimina
    if(peliEncontrada==true){
        listaPelis.splice(posicion,1);
        console.log("Peli eliminada")
    }
    else{
        console.log("Peli no encontrada")
    }
    res.json(listaPelis);
    fs.writeFileSync("./pelis.json", JSON.stringify(listaPelis));//Se actualiza el JSON 
    } catch(error){
        conaole.log(error)
        res.send("Se ha producido un error");
    }
});

//Exportar módulo
module.exports=router;
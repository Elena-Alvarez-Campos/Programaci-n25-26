const express=require('express');
const router=express.Router();

//leer json
const fs=require("fs");

const cartaString = fs.readFileSync("./carta.json");
let listaPlatos = JSON.parse(cartaString);//determina que esta variable es el json de la carta

//GET*****************************************************
router.get('/',(req,res)=>{
    res.json(listaPlatos);
});
//POST*****************************************************
router.post('/',(req,res)=>{
    const nuevoplato={id:Date.now(),...req.body}//crea un plato nuevo con ID
    listaPlatos.push(nuevoplato);//Se añade la nueva a la lista
    res.json(listaPlatos);//Se manda la lista de platos
    fs.writeFileSync("./carta.json", JSON.stringify(listaPlatos));//Se actualiza el JSON con el plato nuevo
});
//PUT*******************************************************
router.put('/:id',(req,res,next)=>{
    const id = parseInt(req.params.id);//Se parsea el id dado
    let platoEncontrado=false
    let posicion=0;
    for(let cada_plato of listaPlatos){
        if(cada_plato.id==id){
            //Si se encuentra el plato se marca que se encontró y se sale del bucle
            platoEncontrado=true
            break;
        }
        //Suma posiciones antes de pasar al siguiente plato
        posicion++
    }
    //Si se encontró el plato hará cambios y si no se muestra un mensaje de que no se encontró
    if(platoEncontrado==true){
        //El id va a seguir siendo el mismo, pero para el resto de datos van a ponerse los nuevos
        listaPlatos[posicion]={id:id,...req.body};
        console.log("Cambios aplicados")
    }
    else{
        console.log("Plato no encontrado")
    }
    res.json(listaPlatos);//Se imprime la lista de platos
    fs.writeFileSync("./plato.json", JSON.stringify(listaPlatos));//Se actualizan los cambios al JSON
});
//DELETE****************************************************
router.delete('/:id',(req,res,next)=>{
    const id = parseInt(req.params.id);//Se parsea el id dado
    let platoEncontrado=false
    let posicion=0;
    for(let cada_plato of listaPlatos){
        if(cada_plato.id==id){
            //Si se encuentra el plato se marca que se encontró y se sale del bucle
            platoEncontrado=true
            break;
        }
        //Suma posiciones antes de pasar al siguiente plato
        posicion++
    }
    //Si se encontró el plato hará cambios y si no se muestra un mensaje de que no se encontró
    if(platoEncontrado==true){
        //Se elimina el plato
        listaPlatos.splice(posicion,1)
        console.log("Plato eliminado")
    }
    else{
        console.log("Plato no encontrado")
    }
    res.json(listaPlatos);//Se imprime la lista de platos
    fs.writeFileSync("./plato.json", JSON.stringify(listaPlatos));//Se actualizan los cambios al JSON
});
//Exportar módulo
module.exports=router;
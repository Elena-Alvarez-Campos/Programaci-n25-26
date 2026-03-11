const express=require('express');
const router=express.Router();

//leer json
const listapoke =require('./pokemonLista.json');

const combates =[
    {
        "id": 1,
        "pokemon1": {
            "nombre": "Pikachu",
            "vida": 100
        },
        "pokemon2": {
            "nombre": "Charmander",
            "vida": 100
        },
        "turno": 1,
        "ganador": null
    }
];

router.get('/lista',(req,res)=>{
    
});


module.exports=router;
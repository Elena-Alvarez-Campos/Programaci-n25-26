
const express=require('express');
const router = express.Router();


let lista=[
            {nombre:'taza de StarWars',precio:300,id:1},
            {nombre:'FIFA 22 PS4',precio:1000,id:2},
            {nombre:'Camiseta superheroe',precio:100,id:3},
            {nombre:'Bincha de Piñon fijo',precio:200,id:4},
            {nombre:'Grande de Muzza',precio:120,id:5},
            {nombre:'Botella de Fernet por 1 litro',precio:220,id:6}
        ];
//PRODUCTOS
//Diferencia put y path:
/**
 * FUNCIONAN IGUAL
 * PATH: Modificar 1 dato 
 * PUT: MOdifica todos los datos (sobreescribiendo)
 */
router.get('/',(req,res)=>{
    res.json({
        status:"OK",
        pagina:"productos",
        metodo:"post",
        productos:lista
    });
});
router.post('/',(req,res)=>{
    const nuevoproducto={id:Date.now(),...req.body}
    lista.push(nuevoproducto);
    res.json({
        status:"OK",
        pagina:"productos",
        metodo:"post",
        nuevo: nuevoproducto
    });

});
// /productos/:Id
// /delete/:Id
/*
router.put('/:id',(req,res)=>{
    for(cada_objeto of lista){
        if(cada_objeto.id===req.params.id){
            cada_objeto.nombre=req.body.nombre;
            cada_objeto.precio=req.body.precio;
            break
        }
        
    }
    res.json({
        status:"OK",
        pagina:"productos",
        metodo:"put",
        productos:lista
    });
});

router.delete('/productos/:id',(req,res)=>{
    let contador=0;
    for(cada_objeto of lista){
        console.log(cada_objeto.id)
        if(cada_objeto.id==req.params.id){
            break
        }
        contador++;
    }
    lista.splice(contador,1)
    res.json({
        status:"OK",
        pagina:"productos",
        metodo:"delete",
        productos:lista
    });
});
*/

module.exports=router;

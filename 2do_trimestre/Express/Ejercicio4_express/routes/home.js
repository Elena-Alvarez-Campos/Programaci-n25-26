
const express=require('express');
const router = express.Router();

//peticiones

router.get('/',(req,res)=>{
    console.log("Parámetros del query: "+req.query);
    res.json({
        status:"OK",
        pagina:"home",
        metodo:"get"
    });
});
router.post('/',(req,res)=>{
    console.log("Parámetros del body: "+req.query);
    res.json({
        status:"OK",
        pagina:"home",
        metodo:"post"
    });
});
module.exports=router;

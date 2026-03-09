const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    console.log("Ejecutando GET");
    res.json({
        status:200,
        message: 'Este request/response está OK'
    });
});
let requestTime=function(req, res, next){
  const mensaje='Request a '+(req.baseUrl)+(Date.now()) ; 
  console.log(mensaje);
  next();
};
router.use(requestTime)
module.exports=router
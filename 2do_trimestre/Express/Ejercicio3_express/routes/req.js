
//Mantener el código ordenado

const express=require('express');
const app=express();
app.use(express.json());


const router = express.Router();

app.get('/req',(req, res)=>{
    console.log("Recibido request",req.query);
    res.json({status:"OK"});
});

module.exports=router;
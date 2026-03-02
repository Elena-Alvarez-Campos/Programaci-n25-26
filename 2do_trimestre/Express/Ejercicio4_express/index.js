
const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//ESPACIO PARA IMPOTAR MÓDULOS DE RUTAS
/*
const homeroutes=require ('./routes/home');
app.use('/',homeroutes);
const productosroutes=require ('./routes/productos');
app.use('/productos',productosroutes);
*/
//ESPACIO PARA IMPOTAR MÓDULOS DE RUTAS

//HOME
app.get('/',(req,res)=>{
    //console.log("Parámetros del query: "+req.query);
    res.json({
        status:"OK",
        pagina:"home",
        metodo:"get"
    });
});
app.post('/',(req,res)=>{
    //console.log("Parámetros del body: "+req.query);
    res.json({
        status:"OK",
        pagina:"home",
        metodo:"post"
    });
});
let lista=[
            {nombre:'taza de StarWars',precio:300,id:1},
            {nombre:'FIFA 22 PS4',precio:1000,id:2},
            {nombre:'Camiseta superheroe',precio:100,id:3},
            {nombre:'Bincha de Piñon fijo',precio:200,id:4},
            {nombre:'Grande de Muzza',precio:120,id:5},
            {nombre:'Botella de Fernet por 1 litro',precio:220,id:6}
        ];
//PRODUCTOS
app.get('/productos',(req,res)=>{
    res.json({
        status:"OK",
        pagina:"productos",
        metodo:"post",
        productos:lista
    });
});
app.post('/productos',(req,res)=>{
    let fecha= Date.now()
    let id=new Date(fecha);
    req.body.id=id;
    lista.push(req.body);
    res.json({
        status:"OK",
        pagina:"productos",
        metodo:"post",
        productos:lista
    });

});
// /productos/:Id
// /delete/:Id
app.put('/productos/:id',(req,res)=>{
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

app.delete('/productos/:id',(req,res)=>{
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

app.listen(3002,()=>{
    console.log("Escuchando desde el puerto 3002")
});
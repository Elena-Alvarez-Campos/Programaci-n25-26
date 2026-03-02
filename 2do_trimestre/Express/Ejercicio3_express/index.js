//importar módulo
const express=require("express");

//crear una instancia de express
const app=express();

//le decimos qu express va a usr json
app.use(express.json());

//urlencoded([options]) :Propiedad que permite recibir más de 1 elemento
//Le decimos que codifique las url, con el modo extendido para recibir query strings , lo que nos permite recibir objetos jerárquicos
app.use(express.urlencoded({extended:true}));

//importar modulos de rutas
const reqroutes=require ('./routes/req');

//montamos las rutas
app.use ('/req', reqroutes);


//req: requiere
//res: respuesta

app.get('/req',(req, res)=>{
    console.log("Recibido request",req.query);
    res.json({status:"OK"});
});

app.post('/order',(req,res)=>{
    console.log("Recibida orden",req.query);
    res.json({status:"OK"});
})

app.get('/map',(req,res)=>{
    console.log("Mapa enviado",req.query);
    res.json({message:"Mapa enviado"});
});

app.post('/login',(req,res)=>{
    //extraemos los datos que son enviados en la petición
    const{username}=req.body;

    //compruebo lo que he recibido
    console.log("Datos recibidos",req.body);

    if(username===null){
        //Devuelve el estatus
        res.status(401);
        res.json({message: "usuario incorrecto"});
    }else{
        res.status(200);
        res.json({message:"usuario correcto"});
    }

});

app.post('/POST/order',(req,res)=>{
    const {Id, unidades, total}=req.body;
    console.log("Pedido recibido",req.body);
    res.status(200);
    res.send({
        status: "ok",
        mensaje:"Pedido procesado",
    });
});
//EJERCICIO 3
let lista={
        descripcion:'Productos',
        items:[
            {nombre:'taza de StarWars',precio:300},
            {nombre:'FIFA 22 PS4',precio:1000},
            {nombre:'Camiseta superheroe',precio:100},
            {nombre:'Bincha de Piñon fijo',precio:200},
            {nombre:'Grande de Muzza',precio:120},
            {nombre:'Botella de Fernet por 1 litro',precio:220}
        ]
    };
//GET
//localhost:3000/api/products?precio=200
app.get('/api/products', (req, res)=>{
    listaItems=[];
    if(req.query!==Number){
        console.log("No se ha filtrado");
        for(let cada_objeto of lista.items){
            listaItems.push(cada_objeto);
        }
    }
    else{
        console.log("Se ha filtrado");
        for(let cada_objeto of lista.items){
            if(cada_objeto.precio<=req.query.precio){
                listaItems.push(cada_objeto);
            }
        }
    }
    res.json({
        descripcion:"productos",
        items:[listaItems]
    })
    
});

//POST
app.post('/api/products', (req, res)=>{
    if(req.body==null){
        console.log("No se ha añadido nada");
        res.json(lista);
    }
    else{
        lista.items.push(req.body)
        console.log("Se ha añadido producto nuevo");
        res.json(lista);
    }
})

//decirle ala instancia por que puerto tiene que recibir las
app.listen(3000,()=>{
    console.log("Escuchamos en el puerto 3000");
    
});
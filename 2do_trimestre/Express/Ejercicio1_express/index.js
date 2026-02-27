const express= require('express')

const app = express()
//EJERCICIO 1
/*
app.get('/', (req, res) => {
   
  res.send('Ejecutando código desde mi primer script!!!')
})


//npm
//thunder client
*/
//EJERCIO 2
//1.Ruta: Raíz del sitio, Método: get, Acción: Mostrar un mensaje de bienvenida.
app.get('/',(req, res)=>{
  res.send("Te damos la bienvenida")
})

//2.Ruta: Productos, Método: get, Acción: Mostrar un mensaje que diga: listado de productos
app.get('/productos',(req, res)=>{
  res.send("Listado de productos")
})

//3.Ruta: Productos, Método: post, Acción: Mostrar un mensaje que diga: crear un producto
app.post('/productos',(req, res)=>{
  res.send("Crear un producto")
})

//4. Ruta: Productos, Método: put, Acción: Mostrar un mensaje que diga: actualizar un producto
app.put('/productos',(req, res)=>{
  res.send("Actualizar un producto")
})

//5. Ruta: Productos, Método: delete, Acción: Mostrar un mensaje que diga: borrar un producto
app.delete('/productos',(req, res)=>{
  res.send("Borrar un producto")
})

//6. Ruta: Usuarios, Método: get, Acción: Mostrar un mensaje que diga: listado de usuarios
app.get('/usuarios',(req, res)=>{
  res.send("Listado de usuarios")
})

//7. Ruta: Usuarios, Método: post, Acción: Mostrar un mensaje que diga: crear un usuario
app.post('/usuarios',(req, res)=>{
  res.send("Crear un usuario")
})

//8. Ruta: Usuarios, Método: put, Acción: Mostrar un mensaje que diga: actualizar un usuario
app.put('/usuarios',(req, res)=>{
  res.send("Actualizar un usuario")
})

//9. Ruta: Usuarios, Método: delete, Acción: Mostrar un mensaje que diga: borrar un usuario
app.delete('/usuarios',(req, res,next)=>{
  res.send("Borrar un usuario")
  next()
})

//10. Crear un método que maneje todos los verbos de HTTP para la pagina
app.all('/', (req, res, next)=>{
  res.send("El método es:"+req.method)
})

app.listen(3001, () => {//Ubicado en el puerto 30001
  console.log('Ejecutando código en el puerto 3001')
})
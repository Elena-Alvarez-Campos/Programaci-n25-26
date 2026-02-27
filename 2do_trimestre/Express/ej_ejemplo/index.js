//IMporte el módulo express
//import express from 'express'
const express= require('express')

//Crear una instancia de express
const app = express()
/*
//cada punto de entrada de un GET queda "escuchando"
app.get('/', (req, res) => {
    //Esto sigunifica que cuando recibamos una petición GET en la raíz (la barrra '/')(se ouede3 poner otra ruta) vamos a responder "Hello World" 

  res.send('Hello World')//Respuesta qeu se envía si se está escuchando
})
*/

//app.all('/usuarios',(req, res, next)=>{
  //res.send(req.method)
  //Hacer que acepte todos los métodos
//})
/*
app.all('usuarios', (req, res, next)=>{
  console.log('estoy en usuarios')
  res.send(req.method)
  next()
})*/

//Midleware 1 (Elementos intermedios)
app.use((req, res, next)=>{
  console.log('Acabo de empezar a ejecutar')
  next()
})

//Midleware 2
app.use((req, res, next)=>{
  console.log('verificamos usuarios')
  //next();
})

//Ruta final que envia respuesta
app.use((req, res)=>{
  res.send('Hola mundo');
})

//Está ecuchando en el puerto 3000
//LE decimos a nuestro servidor en que puerto escuchar y se queda ahi esperando
app.listen(3000, () => {
  console.log('EL ejemplo escucha en el puerto 3000')
})//escucha en el puerto 3000
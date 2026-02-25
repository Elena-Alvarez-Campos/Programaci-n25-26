const express= require('express')

const app = express()

app.get('/', (req, res) => {
   
  res.send('Ejecutando código desde mi primer script!!!')
})

app.listen(3001, () => {//Ubicado en el puerto 30001
  console.log('Ejecutando código desde mi primer script por consola!!!')
})
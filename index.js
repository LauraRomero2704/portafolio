
/// RUTAS

const { response } = require('express');
const express = require('express');
const { request } = require('http');
const app = express()
const port = 3000
const path = require('path')

// Archivos Estaticos
app.use('/static', express.static(path.join(__dirname, 'public')));

// Vistas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) =>
{
  //res.send('Pagina Principal')
  console.log(__dirname)
  res.render('index')
})

app.get('/Educacion', (req, res) =>
{
  res.render('educacion'),
  { 
    titulo: "Seccion Educacion",
    descripcion: "Aqui encontrarás mi formación acádemica"
  }
})

app.get('/Laboral', (req, res) =>
{
  res.send('Pagina de Experiencia Laboral')
})


app.listen(port, () => 
{
  console.log(`Accede al servidor haciendo click aqui http:localhost:${port}`)
})

app.use((req, res, next) =>
{
    res.status(404).sendFile(__dirname+'/public/404.html')
})
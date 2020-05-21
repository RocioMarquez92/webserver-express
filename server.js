const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
// para subir a heroku
const port = process.env.PORT || 8080;
//middlebar callback que se va a ejcutar siempre
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales/');
//express hbs
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // res.send('Hola Mundo');

    res.render('home', {
        nombre: 'Rocio'
    });

});
app.get('/about', (req, res) => {
    // res.send('Hola Mundo');

    res.render('about');

});
// app.get('/data', (req, res) => {
//     res.send('Hola Data');
// });
app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto 8080');
});
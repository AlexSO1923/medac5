const express = require('express')
const cuerpo = require('body-parser');
const app = express()
const port = 9090

app.use(cuerpo());

app.get('/', (req, res) => {
    var html = ' <form action="/hola" method="post">' +
        '<label for="">Escribe tu nombre</label><br>' +
        '<input type="text" name="nombre"><br>' +
        '<button type="submit">Enviar</button>' +
        '</form>';
    res.send(html);
})

app.post('/hola', function(req, res) {
    var nombre = req.body.nombre;
    var html = '<h1> Tu nombre es: ' + nombre + '</h1>' + '.<br>' +
        '<a href="/">Volver a Index.</a>';
    res.send(html);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
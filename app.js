var app = require('./config/server');

var rotaHome = require('./app/routes/home');
rotaHome(app);
var rotaFormAddNoticias = require('./app/routes/form-add-noticias');
rotaFormAddNoticias(app);
var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);

app.listen(3000, function () {
    console.log('server ON');
});
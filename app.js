var app = require('./config/server')
app.get('/', function (req, res) {
    res.render('home/index');
});
app.get('/form-add-noticia', function (req, res) {
    res.render('admin/form_add_noticia');
});
app.get('/noticias', function (req, res) {
    res.render('noticias/noticias');
});
app.listen(3000, function () {
    console.log('server ON');
});
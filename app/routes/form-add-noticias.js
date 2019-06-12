module.exports = function (app) {
    app.get('/form-add-noticia', function (req, res) {
        res.render('admin/form_add_noticia');
    })
} 
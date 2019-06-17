module.exports.form_add_noticia = function (app, req, res) {
    res.render('admin/form_add_noticia', {validacao : {}, noticia : {}});
}

module.exports.noticia_salvar = function (app, req, res) {
    var noticia = req.body;

    req.assert('titulo','Título não pode estar em branco').notEmpty();
    req.assert('resumo','Resumo não pode estar em branco').notEmpty();
    req.assert('resumo','Resumo tem de estar entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor','Autor não pode estar em branco').notEmpty();
    req.assert('data_noticia','Data não pode estar em branco').notEmpty();
    req.assert('noticia','Notícia não pode estar em branco').notEmpty();

var erros = req.validationErrors();

if(erros){
res.render('admin/form_add_noticia', {validacao : erros, noticia : noticia});
return;
}

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result){
        res.redirect('/noticias');
    });
}
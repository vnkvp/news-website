module.exports = function (app) {

    app.get('/form-add-noticia', function (req, res) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '145066',
            database: 'news_website'
        });

        connection.query('select * from form_add_noticia', function (error, result){
            res.send(result);
        });
       // res.render('admin/form_add_noticia');
    })
}
module.exports = function(app){
    app.get('/noticias', function(req,res){

        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '145066',
            database: 'news_website'
        });

        connection.query("SELECT * FROM noticias", function(error, result){
            res.send(result);
        });

        //res.render('noticias/noticias');
    });
}
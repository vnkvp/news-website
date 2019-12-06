var mysql = require('mysql');

var connMySQL = function () {
    console.log('conexão com o db');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news_website'
    });
};

module.exports = function () {
    console.log('O auto load carregou o modulo de conexão com o DB');
    return connMySQL;
};

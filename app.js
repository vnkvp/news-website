var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
 res.render('section/home.ejs');
});

app.get('/agorism', function(req, res){
    res.render('section/agorism.ejs');
   });

app.get('/economy', function(req, res){
    res.render('section/economy.ejs');
   });

app.listen(3000, function(){
console.log('node express running');
});
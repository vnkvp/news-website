console.log('running');
var http = require('http');
http.createServer(function (req, res){
    var category = req.url;
    if(category == '/economy'){
        res.end('<html><body>economy</body></hmtl>');
    } else if (category == '/agorism'){
        res.end('<html><body>agorism</body></html>');
    } else {
        res.end('<html><body>vnkvpistan</body></html>');
    }

}).listen(3000);
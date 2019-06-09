console.log('running');
var http = require('http');

http.createServer(function (req, res){
res.end('<html><body>vnkvpistan</body></html>');
}).listen(3000);
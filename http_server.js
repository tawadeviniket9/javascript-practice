var http = require('http');
var port = 3000;

let server = http.createServer(function(req,res){
    res.write('Hello World!');
    res.end();
});
server.listen(port);
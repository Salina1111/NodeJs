var http = require('http');
var main = require('./index');


http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("The sum is:" +main.sum(4,2));
    res.end();
})
.listen(7000);

const http = require('http');

const hostname = '127.0.0.1';

var routes = {
    '/': function index (request, response) {
        response.writeHead(200);
        response.end('Hello, World!');
    },
    '/foo': function foo (request, response) {
        response.writeHead(200);
        response.end('You are now viewing "foo"');
    }
}

// http.createServer((request,response) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end("Hello World!");
// })
// .listen(port, hostname, ()=> {
//     console.log(`Server is running at http://${hostname}:${port}/`);
// })

http.createServer(function (request, response) {
    if (request.url in routes) {
    return routes[request.url](request, response);
    }
    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
    }).listen(process.env.PORT);
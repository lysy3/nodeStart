const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type' : 'text/plain'})
    res.end('Server dziala\n');
})


server.listen(3000, 'localhost', () => {
    console.log("Dziala");
})

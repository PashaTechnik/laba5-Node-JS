/*const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
 res.statusCode = 200
 res.setHeader('Content-Type', 'text/plain')
 res.end('Hi there!\n')
})
server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`)
})*/


const http = require("http");
const fs = require("fs");

const handleRequest = (request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html"
  });
  fs.readFile("./laba9.html", null, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.write("Whoops! File not found!");
    } else {
      response.write(data);
    }
    response.end();
  });
};

http.createServer(handleRequest).listen(3000);
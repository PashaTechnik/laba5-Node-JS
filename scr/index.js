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

const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
  
    const queue = url.parse(req.url, true);

    if (queue.pathname === '/'){
        fs.readFile("./index.html", (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else if (queue.pathname === '/about') {
        fs.readFile("./about.html", (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else if (queue.pathname === "/contact-me") {
        fs.readFile("./contact-me.html", (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else {
        fs.readFile("./404.html", (err, data) => {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
    
}).listen(8080)


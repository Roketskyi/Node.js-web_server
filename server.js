const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

        fs.readFile('index.html', 'utf-8', (err, data) => {
            if (err) {
                return console.error(err);
            }
    
            res.end(data);
        });
    } else if (req.url === "/about") {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

        fs.readFile('about.html', 'utf-8', (err, data) => {
            if (err) {
                return console.error(err);
            }
    
            res.end(data);
        })
    } else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});

        fs.readFile('error.html', 'utf-8', (err, data) => {
            if (err) {
                return console.error(err);
            }
    
            res.end(data);
        })
    }
});

server.listen(port, () => {
    console.log(`Веб-сервер був запущений на порту ${port}`);
});

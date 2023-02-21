const http = require('http');
const fs = require('fs');
const { url } = require('inspector');
  // const data = url('c:/html/Blueprint/news api/news-home/index.html')
const server = http.createServer((req, res) => {
  
const requestListener = function (req, res) {
    fs.readFile(__dirname + "../Button")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
};

  });

server.listen(5500, '127.0.0.2', () => {
  console.log('Server running at http://127.0.0.2:5500');
});

//terminal code : node "c:\html\Blueprint\live_server\script.js"
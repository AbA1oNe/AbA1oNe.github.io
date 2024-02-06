let http = require("http");
let fs = require("fs");

http.createServer(function(req,res) {
    let html = fs.readFileSync(`${__dirname}/index.html`);
    res.writeHead(200, {"contentType":"text/html"});
    res.end(html);
  }).listen(1324,"127.0.0.1");
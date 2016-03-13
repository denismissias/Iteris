var http = require('http'),
    fs = require('fs');

fs.readFile('./public/index.html', function (html) {
    http.createServer(function(req, res) {
        res.writeHeader(200, {"Content-Type": "text/html"});
        res.write(html);
        res.end();
    }).listen(8181);
});

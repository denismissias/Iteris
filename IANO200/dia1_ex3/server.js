var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response){

	var path = url.parse(request.url).pathname;

	if(path == "/") {
		fs.readFile('./public/index.html', function(erro, html){
			response.writeHeader(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin' : '*'});
			response.end(html);
		});
    } else if(path == "/obterArquivos") {
		fs.readdir(__dirname + '/public/files', function(erro, diretorio) {
			response.writeHeader(200, {'Content-Type': 'application/json'});
			response.end(JSON.stringify({ diretorio }));
		});
    } else {
		var filePath = './public/files' + decodeURIComponent(path);

		fs.readFile(filePath, function(error, content) {
			if (error) {
				response.writeHead(500);
				response.end();
			} else {
				response.writeHead(200, { 'Content-Type': 'application/text' });
				response.end(content, 'utf-8');
			}
		});
	}
});

server.listen(8181, function(){
  console.log('Executando na porta 8181');
});
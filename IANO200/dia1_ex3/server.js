var http = require('http');
var fs = require('fs');
var url = require('url');

var lerDiretorio = function() {
	fs.readdir(__dirname + '/public/files', function(erro, diretorio) {
		if (erro)
			return erro;
		diretorio.forEach(function(arquivo) {
			console.log(arquivo);
		});
	});
};
/*
var rotear = function(pathname){
	if(pathname && pathname != "/"){
		lerDiretorio();
	}
};
*/
// Iniciando Servidor do desafio
var server = http.createServer(function(request, response){

	var path = url.parse(request.url).pathname;
	
	if(path == "/obterArquivos"){
        lerDiretorio();
    } else {
		// Renderizando a pagina html
		fs.readFile('./public/index.html', function(err, html){
			response.writeHeader(200, {'Content-Type': 'text/html'});
			response.end(html);
		});
	}
});

server.listen(8181, function(){
  console.log('Executando na porta 8181');
});
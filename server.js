/*var http = require('http');
var port = 1337;
http.createServer(function(req,res){
	res.writeHead(200, {'Content-type':'text/plain'});
	res.end('Hello!');
}).listen(port,'127.0.0.1');
console.log("Webserver has started");*/

var http = require('http');
var fs = require('fs');

var port = 1337;
http.createServer(function(req,res){
	fs.readFile('index.html',function(err,data){
		res.writeHead(200, {'Content-type':'text/html'});
		res.end('Hello!');
	});
}).listen(port,'127.0.0.1');
console.log("Webserver has started");